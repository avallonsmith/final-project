require('dotenv/config');
const db = require('./db');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
}

app.use(express.static(publicPath));

app.use(express.json());

app.get('/api/memes', (req, res, next) => {
  const sql = `
    select * from memes
    order by "memeId" desc;
  `;

  db.query(sql)
    .then(result => {
      const memes = result.rows;

      res.json(memes);
    })
    .catch(err => next(err));
});

app.post('/api/memes', (req, res, next) => {
  const { title, imgUrl } = req.body;

  if (!title) {
    throw new ClientError(400, 'Title is required');
  }
  if (!imgUrl) {
    throw new ClientError(400, 'Image URL is required');
  }

  const sql = `
    insert into "memes"
      ("title", "photoUrl")
      values
        ($1, $2)
    returning *;
  `;
  const params = [title, imgUrl];

  db.query(sql, params)
    .then(result => {
      const [meme] = result.rows;
      res.status(201).json(meme);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
