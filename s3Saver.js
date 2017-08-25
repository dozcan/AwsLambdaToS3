'use strict'

var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs =  require('fs');


function saveUpload(file)
{

var s3 = new AWS.S3();
console.log("uploding...");

fs.readFile(file,function(err,data)
{
    if(err) throw  err;
    console.log(data.toString());
    var param =  {Bucket:'firstdd',Key:'deneme.txt',Body:data};
    s3.upload (param,function(err,data) 
    {
        if (err) {
            console.log('ERROR MSG: ', err);
        } else {
            console.log('Successfully uploaded data');
        }
    });
});
}

module.exports = 
{
    saveUpload : saveUpload

};

