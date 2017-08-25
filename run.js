'use strict'

var save = require('./s3Saver');

function saveGlobal()
{
    save.saveUpload('./file/deneme.txt');

};

module.exports = 
{
    saveGlobal : saveGlobal

};