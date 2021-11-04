const express = require('express');
const ListResources = express.Router();
const { ListController } = require('../controllers');

ListResources.get('/', ListController.getAllNotes);
ListResources.post('/', ListController.createNote);

module.exports = { ListResources };