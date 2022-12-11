const {Sequelize, DataTypes, Op} = require('sequelize');

const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres',
});

const Student = sequelize.define('student',{
    student_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4,20]
        }
    },
    favorite_class: {
        type: DataTypes.STRING(25), //길이설정
        defaultValue: 'Computer Science'
    },
    school_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subscribed_to_wittcode: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    freezeTableName: true,
    timestamps: false
});

Student.sync().then(() => {
    console.log("Model Synced successfully!")
    // Student.bulkCreate([
    //     {
    //         name: 'WittCode',
    //         school_year: 12
    //     },
    //     {
    //         name: 'Michael',
    //         school_year: 11,
    //         favorite_class: 'Basket Weaving',
    //         subscribed_to_wittcode: false
    //     },
    //     {
    //         name: 'Freddie',
    //         school_year: 10,
    //         favorite_class: 'Math',
    //         subscribed_to_wittcode: false
    //     },
    //     {
    //         name: 'Bruce',
    //         school_year: 9,
    //         favorite_class: 'History',
    //         subscribed_to_wittcode: false
    //     },
    //     {
    //         name: 'Spencer',
    //         school_year: 6,
    //         favorite_class: 'Music',
    //         subscribed_to_wittcode: false
    //     }
    // ], {validate: true});

    Student.bulkCreate([
        {
            name: 'W', // validate에 걸린다. 오류 발생.
            school_year: 12
        }
    ], {validate: true});
}).catch((err) => {
    console.log(err)
})