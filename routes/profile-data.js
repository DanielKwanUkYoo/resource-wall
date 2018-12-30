"use strict";

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    const referer = req.headers.referer.split('/');
    console.log(req.headers);
    knex
      .select("*")
      .from("collection_details")
      .join('resources', 'collection_details.resource_id', 'resources.id')
      .join('users', 'collection_details.id', 'users.id')
      .join('collections', 'collection_details.collection_id', 'collections.id')
      .where('users.username', referer[3])
      .then((results) => {
        res.json(results);
      });

    // knex("likes")
    //   .where('resource_id', referer[3])
    //   .count('resource_id')
    //   .then((results) => {
    //     res.json(results);
    //   });
  });

  return router;

}


