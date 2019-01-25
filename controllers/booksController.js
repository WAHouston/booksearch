const db = require("../models")
const axios = require("axios")
module.exports = {
    findAll: function(req, res) {
        db.Book
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    search: function(req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&key=${process.env.API_KEY}`)
          .then(info => {
              res.json(info.data.items)
          })
          .catch(err => {
              console.log(err)
          })
    }
}