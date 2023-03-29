const { connect } = require('http2')
const bdd = require('./mysqlconfig.js')

exports.getAll = function(table,callback){
    bdd.query("SELECT * FROM " + table , function(err, rows){
        callback(rows)
    })
}

exports.getOneId = function(table,id,callback){
    bdd.query(`SELECT * FROM ${table} WHERE id= ${id}`, function(err, rows){
        callback(...rows)
    })
}