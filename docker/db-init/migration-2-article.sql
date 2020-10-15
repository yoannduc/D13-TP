CREATE TABLE IF NOT EXISTS article (
    id SERIAL NOT NULL,
    user_id INT4 NOT NULL,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL  DEFAULT NOW(),
    CONSTRAINT article_pkey PRIMARY KEY (id),
	CONSTRAINT article_appuser_id_fkey FOREIGN KEY (user_id) REFERENCES appuser(id)
);
