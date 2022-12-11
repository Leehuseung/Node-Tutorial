const {Sequelize, DataTypes, Op} = require('sequelize');

const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = sequelize.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
    },
    WittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    freezeTableName: true,
    timestamps: false
});


User.sync({alter: true}).then((data) => {

    // return User.findAll({raw:true});

    // return User.findAll({
    //     where: {age:21},
    //     raw: true
    // });

    //pk이용한 검색
    // return User.findByPk(40);

    //한개 가져오기 첫번째 데이터를 가져온다.
    // return User.findOne({ where: {
    //     age: {
    //         [Op.or] : {
    //             [Op.lt] : 25,
    //             [Op.eq] : null
    //         }
    //     }
    // }});

    //없으면 생성할 수 있다.
    // return User.findOrCreate(
    //     {
    //         where: {
    //             username: 'Tomn',
    //         },
    //         defaults: {
    //             age: 76
    //         }
    //     });

    //
    return User.findAndCountAll({
        where: {
            username: 'Mike'
        },
        raw: true
    })

}).then((data) => {
    // console.log(data);
    // console.log(data.toJSON());

    //findOrCreate 사용시 create됐는지 여부
    // const [result, created] = data;
    // console.log(created);

    //findAndCountALl 사용시
    const { count, rows } = data;
    console.log(count);
}).catch((err) => {
    console.log(err);
});



