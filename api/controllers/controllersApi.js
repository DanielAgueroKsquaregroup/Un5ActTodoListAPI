// PUT THIS HERE
const express = require('express');
const ListModel = require('../models/index');
const app = express();

const createNote = async (req, res) => {
    const note = new ListModel(req.body);

    try{
        await note.save();
        res.send(note);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getAllNotes = async (req, res) => {
    const notes = await ListModel.find({});

    try{
        res.send(notes);
    } catch(error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createNote,
    getAllNotes
};