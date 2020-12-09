const mongoose = require('mongoose');

const Pet = mongoose.model('Pet')

module.exports = {
    index (req,res) {
        Pet.find()
            .then(pets => res.json({pets}))
            .catch(err => res.json(err))
    },
    create(req,res) {
        Pet.create(req.body)
            .then(pet => res.json({pet}))
            .catch(e => {
                const errors = [];
                for (key in e.errors) {
                    errors.push(e.errors[key].message)
                }
                res.json({ errors });
            })
    },
    delete(req,res) {
        Pet.findByIdAndDelete(req.params.id)
            .then(() => res.json({status: "success"}))
            .catch(e => res.json({errors: e}))
    },
    getOne(req,res) {
        Pet.findById(req.params.id) 
            .then(pet => res.json({pet}))
            .catch(err => res.json(err))
    },
    update(req, res) {
        Pet.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
            })
            .then(pet => res.json({ pet }))
            .catch(e => {
                const errors = [];
                for (key in e.errors) {
                errors.push(e.errors[key].message);
                }
                res.json({ errors });
            });
        }

}