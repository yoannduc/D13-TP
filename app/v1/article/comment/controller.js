const { to } = require('await-to-js')
const R = require('ramda')

const db = require.main.require('./helpers/db.js')
const logger = require.main.require('./helpers/logger.js')
const { createSchema } = require.main.require('./app/v1/comment/schema.js')

const getAll = async (req, res) => {
  const { articleId } = req.params

  const [commentsErr, comments] = await to(
    db('comment')
      .select('comment.*')
      .select({author: 'appuser.username'})
      .innerJoin('appuser', 'appuser.id', 'comment.user_id')
      .where({ article_id: articleId }),
  )
  if (!R.isNil(commentsErr)) {
    logger.error(commentsErr)
    return res.status(500).json({ error: `${commentsErr}` })
  }

  return res.status(200).json(comments)
}

const createComment = async (req, res) => {
  const { articleId } = req.params

  // Validate input with Joi schema
  const { error: schemaErr, value: body } = createSchema.validate(req.body)
  if (!R.isNil(schemaErr)) {
    const error = `Error in input (err: ${schemaErr})`
    logger.error(error)
    return res.status(400).json({ error })
  }

  const [commentErr, comment] = await to(
    db('comment')
      .insert({ ...body, article_id: articleId, user_id: req.user.id })
      .returning('*'),
  )
  if (!R.isNil(commentErr)) {
    logger.error(commentErr)
    return res.status(500).json({ error: `${commentErr}` })
  }

  if (R.isEmpty(comment)) {
    const error = 'No row written'
    logger.error(error)
    return res.status(500).json({ error })
  }

  return res.status(200).json(comment[0])
}

module.exports = { getAll, createComment }
