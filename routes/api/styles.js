const express = require('express');
const router = express.Router();

const Styles = require('../../models/Styles');

// @Route GET /api/styles/
// @desc  Get all styles
// @access public
router.get('/', (req,res) => {
    if(Styles){
        Styles.find({})
            .then(styles => res.json(styles));
    }
})

// @Route GET /api/styles/:id
// @desc  Get one style
// @access public
router.get('/:id', (req,res) => {
    if(Styles){
        Styles.findOne({_id:req.params.id})
            .then(style => res.json(style));
    }
})

// @Route POST /api/styles/
// @desc  Post one style
// @access public
router.post('/', (req,res) => {
    if(req.body.name){
        const newStyle = new Styles({
            name: req.body.name,
            decade: req.body.decade
        })
        newStyle.save().then(style => res.json(style));
    }
})

// @Route PUT /api/styles/:id
// @desc  Modify one style
// @access public
router.put('/:id', (req,res) => {
    if(Styles){
        Styles.findOne({_id: req.params.id}, (err,data) => {
            if(err)
                res.send(err)
            data.name = req.body.name;
            data.decade = req.body.decade;
            data.save().then(style => res.json(style));
        })
    }
})

// @Route DELETE /api/styles/:id
// @desc  Delete one style
// @access public
router.delete('/:id', (req,res) => {
    if(Styles){
        Styles.remove({_id:req.params.id}, (data,err) => {
            if(err)
                res.send(err);
            else
                res.send('Style removed');
        })
    }
})

module.exports = router;