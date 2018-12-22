const express = require('express');
const router = express.Router();

const Instruments = require('../../models/Instruments');

// @Route GET /api/instruments
// @desc  Get all instruments
// @access public
router.get('/', (req, res) => {
    if(Instruments){
        Instruments.find({})
            .then(instruments => res.json(instruments));
    }
})

// @Route GET /api/instruments/:id
// @desc  Get one instrument
// @access public
router.get('/:id', (req,res) => {
    if(Instruments){
        Instruments.findOne({_id: req.params.id})
            .then(instrument => res.json(instrument));
    }
})

// @Route POST /api/instruments
// @desc  POST one instrument
// @access public
router.post('/', (req,res) => {
    if(req.body.name){
        const newInstrument = new Instruments({
            name: req.body.name
        })
        newInstrument.save().then(instrument => res.json(instrument));
    }
})

// @Route PUT /api/instruments/:id
// @desc  Modify one instrument
// @access public
router.put('/:id', (req,res) => {
    Instruments.findOne({_id: req.params.id}, (err,data) => {
        if(err)
            res.send(err);
        data.name = req.body.name;
        data.save().then(instrument => res.json(instrument));
    })
})

// @Route DELETE /api/instruments/:id
// @desc  Delete one instrument
// @access public
router.delete('/:id', (req,res) => {
    Instruments.remove({_id:req.params.id}, (data,err) => {
        if(err)
            res.send(err);
        else
            res.send('Item removed');
    })
})

module.exports = router;