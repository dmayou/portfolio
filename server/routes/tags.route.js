const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const query =
        `SELECT * FROM "tags" ORDER BY "id" ASC;`;
    pool.query(query)
        .then((results) => {
            res.send(results.rows);
        }).catch((err) => {
            console.error('GET err:', err);
            res.sendStatus(500);
        }
    );
});
router.post('/', (req, res) => {
    const query =
        `INSERT INTO "tags" ("name")
        VALUES ($1);`;
    pool.query(query, [req.body.name])
        .then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.error('POST err:', err);
            res.sendStatus(500);
        }
    );
});

module.exports = router;