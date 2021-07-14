const fs = require('fs')

const gStories = require('../data/instagram.json')

module.exports={
    query
}

function query(){
    return Promise.resolve(gStories)
}