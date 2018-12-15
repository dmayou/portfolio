const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const query = 
        `SELECT "projects".*, "tags"."name" AS "tag_name" FROM "projects" 
        JOIN "tags" ON "tags"."id" = "projects"."tag_id"
        ORDER BY "date_completed" DESC;`;
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