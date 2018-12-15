const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const query =
        `SELECT * FROM "tags" ORDER BY "id" ASC;`;
    pool.query(query)
        .then((results) => {
            console.log('GET results:', results.rows);
            res.send(results.rows);
        }).catch((err) => {
            console.log('GET err:', err);
            res.sendStatus(500);
        });
});

module.exports = router;