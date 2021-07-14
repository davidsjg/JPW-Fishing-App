const Sequlize = require('sequlize')

const sequlize = require('../config/connection.js')

const Lake = sequlize.define('lake', {
    id: Sequlize.INTEGER,
    lake: Sequelize.STRING,
    acres: Sequlize.INTEGER,
    yearStocked: Sequlize.INTEGER,
    cutNum: Sequlize.INTEGER,
    cutLength: Sequlize.INTEGER,
    cutRange: Sequlize.STRING,
    brookNum: Sequlize.INTEGER,
    brookLength: Sequlize.INTEGER,
    brookRange: Sequlize.STRING,
    distance: Sequlize.INTEGER,
    elevGain: Sequlize.INTEGER,
})