const {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');

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
        allowNull: false,
        validate: {len: [4,6]},
    },
    password: {
        type: DataTypes.STRING,
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
        validate: {
            isNumeric: true
        }
    },
    WittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    description: {
        type: DataTypes.STRING
    },
    aboutUser: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.username} ${this.description}`;
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    }
}, {
    freezeTableName: true,
    validate: {
        usernamePassMatch() {
            if(this.username === this.password) {
                throw new Error('Password cannot be your username!');
            } else {
                console.log('Soccer');
            }
        }
    },
    paranoid: true, //deleteAt 을 사용할지 여부.. soft / hard를 생각해보면됨..
    deletedAt: 'timeDestroyed' //delete 시 기록될 칼럼
});


User.sync({alter: true}).then((data) => {
    //삭제시 실제 데이터 삭제가 아닌 deletedAt이 삭제된다.
    // return User.destroy({
    //     where : {
    //         user_id: 2
    //     },
        // force: true //force옵션 사용시 deleteAt이아닌 데이터를 직접 삭제한다.
    // })

    //resotre시 기록됐던 deletedAt의 시간이 null로 변경됨.
    // return User.restore({
    //     where: {
    //         user_id: 2
    //     }
    // })

    //query사용시 deleteAt과 상관없이 조회된다.
    // return sequelize.query(`select * from public.user limit 3`);

    //findAll 사용시에는 deletedAt가 선택되지 않는다.
    // return User.findAll();

    //paranoid 옵션을 끌경우에는 deletedAt과 상관없이 모두 조회됨.
    return User.findAll({paranoid: false});

}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Error',err);
});



