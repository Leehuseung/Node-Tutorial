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
            //custom validation 함수를 만들 수 있다.
            // isOldEnough(value){
            //     if(value < 21) {
            //         throw new Error("Too young!");
            //     }
            // }

            //숫자만 입력하게 할경우 isNumeric은 미리 정의된 옵션인듯.
            // isNumeric: {
            //     msg: "You must enter a number for age!"
            // }
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
    //
    email: {
        type: DataTypes.STRING,
        unique: true, // 유니크 옵션
        allowNull: true,
        validate: {
            // isEmail: true //default 는 false 이다. email filed가 email 형식이 아닐경우 오류

            // isIn : ['me@soccer.org', 'm2@soccer.com'] //해당 데이터가 아닐경우 오류 발생한다.
            //isIn 다른 방법. msg로 오류 메세지를 custom 할 수 있다.
            // isIn : {
            //     args: ['me@soccer.org', 'm2@soccer.com'],
            //     msg: 'The provided email must be one of the following..'
            // }

            //null 검증을 직접 만들어 본다.
            myEmailValidator(value) {
                if(value === null) {
                    throw new Error('Please enter an email!!');
                }
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false,
    //model 검증
    validate: {
        //this로 field에 접근할 수 있다.
        usernamePassMatch() {
            if(this.username === this.password) {
                throw new Error('Password cannot be your username!');
            } else {
                console.log('Soccer');
            }
        }
    }
});


User.sync({alter: true}).then((data) => {
    // return User.create({
    //     username: '1111',
    //     password: 'mypassword',
    //     email: 'tom'  //email validate 실행시 오류 발생함. email 형식에 맞지않기 때문에..
    // })

    //build시 validate
    // const user = User.build({
        // email : 'tom'
    // });
    // return user.validate();

    // return User.create({
    //     username : 'mike',
    //     age : 14
    // })

    return User.create({
        username : 'mike',
        password: 'mike',
        age : 31,
        email: null
    })
}).then((data) => {
    // console.log(data.toJSON());
    console.log(data);
}).catch((err) => {
    console.log('Error',err);
});



