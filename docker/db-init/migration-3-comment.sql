CREATE TABLE IF NOT EXISTS comment (
    id SERIAL NOT NULL,
    user_id INT4 NOT NULL,
    article_id INT4 NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL  DEFAULT NOW(),
    CONSTRAINT comment_pkey PRIMARY KEY (id),
    CONSTRAINT comment_appuser_id_fkey FOREIGN KEY (user_id) REFERENCES appuser(id),
	CONSTRAINT comment_article_id_fkey FOREIGN KEY (article_id) REFERENCES article(id)
);
