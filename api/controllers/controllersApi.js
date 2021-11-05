// PUT THIS HERE
const express = require('express');
const ListModel = require('../models/index');
const app = express();

const createNote = async (req, res) => {
    const newNote = new ListModel(req.body);
    const notes = await ListModel.find({ text: newNote.text }).exec();

    try{
        if(notes.some(note => note.text === newNote.text)){
            throw new Error(`You already have this note`);
        } else{
            await newNote.save();
            res.send(newNote);
        }
    } catch(error) {
        const { message } = error;
        res.status(500).send({ message });
    }
};

const getAllNotes = async (req, res) => {
    const notes = await ListModel.find({});

    try{
        res.send(notes);
    } catch(error) {
        res.status(500).send(error);
    }
};

const getNoteById = async (req, res) => {
    const { id } = req.params;

    try{
        const note =  await ListModel.findById(id);
        res.send(note);
    } catch (error){
        res.status(500).send(error);
    }
};

const updateNote = async (req, res) => {
    const { params: { id }, body } = req;
    try{
        // Validating empty string
        if(body.text === ""){
            throw new Error('Text is required');
        }else{
            const note = await ListModel.findByIdAndUpdate(id, body);
            res.send(body); // Showing updated text field
        }
    } catch(error) {
        const { message } = error;
        res.status(500).send(message);
    }
};

const deleteNote = async (req, res) => {
    const { id } = req.params;
    try{
        const note = await ListModel.findByIdAndRemove(id);
        const message = { message: `id: '${id}' successful deleted` };
        res.send(message); // Showing deleted document
    } catch (error){
        res.status(500).send(error);
    }
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
};