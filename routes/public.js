'use strict'

module.exports = function(app) {
  var datajson = require('../controller/all')

  app.route('/')
    .get(datajson.index)

  app.route('/mahasiswa')
    .get(datajson.mahasiswa)

  app.route('/mahasiswa/:id')
    .get(datajson.mahasiswaByParamsId)

  app.route('/tambah')
    .post(datajson.tambahMahasiswa)

  app.route('/mahasiswa/:id')
    .put(datajson.editMahasiswa)
}