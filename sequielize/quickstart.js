const { Sequelize, DataTypes} = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection().then();


const User = sequelize.define('employees', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

/**
 * 테이블 생성
 * sync({ force: true }) and sync({ alter: true })
 * 옵션에대해서 고려해보자.
 */
User.sync().then();










