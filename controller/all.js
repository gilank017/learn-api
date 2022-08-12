'use strict'

var response = require('../services/res')
var client = require('../services/postgresdb')

exports.index = function(req, res) {
  response.ok("APLIKASI REST BERJALAN", res)
}

// show data
exports.mahasiswa = function(req, res) {
  client.query('SELECT * FROM mahasiswa', function(error, result, fields){
    if (error) {
      console.log(error)
    } else {
      response.ok(result.rows, res)
    }
  })
}

// show data by params id
exports.mahasiswaByParamsId = function(req, res) {
  let id = req.params.id
  client.query(`SELECT * FROM mahasiswa WHERE id_mahasiswa = ${id}`,
      function(error, result, fields) {
        if (error) {
          console.log(error)
        } else {
          response.ok(result.rows, res)
        }
      })
}

