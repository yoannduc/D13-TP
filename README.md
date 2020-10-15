# TP

Création d'une api de blog administrée avec des articles et des commentaires sur ces articles.

Tous les articles sont visibles sans avoir besoin de se connecter, idem pour les commentaires.

Afin de publier un article ou un commentaire, il faut être connecté.

Les commentaires ne sont pas modifiables.

Afin de modifier un article, il faut être l'auteur de l'article.

Afin de supprimer un article ou un commentaire, il faut être administrateur.

**Pas besoin de gérer la liste des users dans cette API, on partira d'une liste en dur dans la db d'au moins 2 users, un admin et un non admin (sauf si vous avez le temps, auquel cas, seul les administrateurs peuvent gérer les users)**

## Rendu

Le rendu se fera avant 17h30 soit par ZIP (bien penser à enlever les node_modules), soit par lien vers un github à l'adresse y.duc@it-students.fr.

Attention, si vous utilisez un github, seul les commits avant l'heure limite seront pris en compte.

## Tips

Vous pouvez repartir du repo d'api de la [TODO app](https://github.com/yoannduc/todo-server).

Afin de contrôler le flux, utiliser des middlewares successifs.

## Ressources

[https://github.com/yoannduc/todo-server](https://github.com/yoannduc/todo-server)

[https://www.passportjs.org/docs/username-password/](https://www.passportjs.org/docs/username-password/)

[https://www.passportjs.org/packages/passport-local/](https://www.passportjs.org/packages/passport-local/)

[https://jwt.io/](https://jwt.io/)

[https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

[https://auth0.com/learn/json-web-tokens/](https://auth0.com/learn/json-web-tokens/)

[https://stackoverflow.com/a/47516387/13942482](https://stackoverflow.com/a/47516387/13942482)

[https://expressjs.com/en/guide/using-middleware.html](https://expressjs.com/en/guide/using-middleware.html)
