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
    //전체 유저 리턴
    // return User.findAll();

    //특정 칼럼만 리턴
    // return User.findAll({attributes: ['username', 'password']});

    //user의 데이터 키를 변경해서 alias처럼 가져올 수 있다.
    // return User.findAll({attributes: [['username','myName'], ['password','pwd']]});

    //SUM 함수 사용 howOld 키값
    // return User.findAll({attributes: [[sequelize.fn('SUM',sequelize.col('age')), 'howOld']]});

    //AVG 함수 사용 howAvg 키값
    // return User.findAll({attributes: [[sequelize.fn('AVG',sequelize.col('age')), 'howAvg']]});

    // 특정 칼럼만 제외하고 싶을 때
    // return User.findAll({attributes: {exclude: ['password']}});

    // where절
    // return User.findAll({where: { age: 45}});

    //username만 가져옴.
    // return User.findAll({attributes: ['username'], where: { age: 45}});

    //where절 두가지
    // return User.findAll({where: { age: 25, username: 'soccer'}});

    //limite 사용 2개만 리턴
    // return User.findAll({limit: 2});

    //order
    // return User.findAll({order: [['age','DESC']]});

    //group
    // return User.findAll({
    //     attributes: ['username',
    //         [sequelize.fn('SUM', sequelize.col('age')), 'sum_age']
    //     ],
    //     group: 'username'
    // });

    //OR
    // return User.findAll({where : {
    //     [Op.or]: {username: 'soccer', age: 45} //or
        // [Op.and]: {username: 'soccer', age: 45} //and
    // }});

    //비교
    // return User.findAll({where:{
    //     age: {
    //         // [Op.gt]: 25    //25보다 큰 수
    //         [Op.or]:{  //or를 사용할 수도 있다.
    //             [Op.lt]: 45,
    //             [Op.eq]: null
    //         }
    //     }
    // }});

    //함수 사용 길이 6
    // return User.findAll({where:
    //     sequelize.where(sequelize.fn('char_length', sequelize.col('username')),6)
    // });

    //업데이트
    // return User.update({username: 'pizza'},{
    //     where: {age: 25}
    // })

    //업데이트2
    // return User.update({username: 'Yets!'},{
    //     where: {age: {
    //         [Op.gt] : 1
    //     }}
    // })

    //삭제
    // return User.destroy({where: {
    //         username: 'Yets!'
    //     }});

    //모든 데이터 삭제
    // return User.destroy({ truncate: true} );

    //max age
    // return User.max('age');

    //sum
    // return User.sum('age', {
    //     where : {
    //         age : 21
    //     }
    // });

}).then((data) => {
    // data.forEach(e => {
    //     console.log(e.toJSON());
    // });
    console.log(data);
}).catch((err) => {
    console.log(err);
});



