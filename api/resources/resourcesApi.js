const express = require('express');
const ListResources = express.Router();
const ListController = require('../controllers/index');

ListResources.get('/', ListController.getAllNotes);
ListResources.get('/:id', ListController.getNoteById);
ListResources.post('/', ListController.createNote);
ListResources.put('/:id', ListController.updateNote);
ListResources.delete('/:id', ListController.deleteNote);

module.exports = ListResources;