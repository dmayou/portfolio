const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const query = 
        `SELECT "projects".*, "tags"."name" AS "tag_name" FROM "projects" 
        LEFT JOIN "tags" ON "tags"."id" = "projects"."tag_id"
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
router.post('/', (req, res) => {
    const query =
        `INSERT INTO "projects" 
        ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    console.log('req.body:', req.body);
    pool.query(query, [
            req.body.name,
            req.body.description,
            req.body.thumbnail,
            req.body.website,
            req.body.github,
            req.body.date_completed,
            req.body.tag_id ? Number(req.body.tag_id) : null // only use number is tag was selected
        ])
        .then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('POST err:', err);
            res.sendStatus(500);
        });
});

module.exports = router;