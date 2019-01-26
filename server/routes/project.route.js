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
            res.send(results.rows);
        }).catch((err) => {
            console.error('GET err:', err);
            res.sendStatus(500);
        });
});
router.post('/', (req, res) => {
    const query =
        `INSERT INTO "projects" 
        ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(query, [
            req.body.name,
            req.body.description,
            req.body.thumbnail,
            req.body.website,
            req.body.github,
            req.body.date_completed,
            // because of table joins, use number for tag_id only if tag selected, null otherwise
            req.body.tag_id ? Number(req.body.tag_id) : null
        ])
        .then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.error('POST err:', err);
            res.sendStatus(500);
        }
    );
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query =
        `DELETE FROM "projects"
        WHERE "projects"."id"=$1;`;
    pool.query(query, [id])
        .then((results) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.error('DELETE err:', err);
            res.sendStatus(500);
        }
    );
});

module.exports = router;