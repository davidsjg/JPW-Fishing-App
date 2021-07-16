const Sequelize = require('sequelize')


const sequelize = new Sequelize('jpwf_db', 'root', 'Colorado23', {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Colorado23',
    database: 'quotes_db',
})


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
  });