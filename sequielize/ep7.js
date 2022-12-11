const {Sequelize, DataTypes, Op} = require('sequelize');
const bcrypt = require('bcrypt');
const zlib = require('zlib');

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
        //Getter를 만들어보자 --> 쿼리 결과중 username이 대문자로 변경됨.
        get() {
            const rawValue = this.getDataValue('username');
            return rawValue.toUpperCase();
        }
    },
    password: {
        type: DataTypes.STRING,
        set(value) {
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(value,salt);
            this.setDataValue('password', hash);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 21,
    },
    WittCodeRocks: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    description: {
        type: DataTypes.STRING,
        //저장할때 base64로 인코딩해서 저장한다.
        set(value){
            const compressed = zlib.deflateSync(value).toString('base64');
            this.setDataValue('description',compressed);
        },
        //실제 User Field에서는 디코딩된 상태로 가져온다.
        get() {
            const value = this.getDataValue('description');
            const uncompressed = zlib.inflateSync(Buffer.from(value, 'base64'));
            return uncompressed.toString();
        },
    },
    //가상 칼럼을 만든다. 데이터를 들고있음.
    aboutUser: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.username} ${this.description}`;
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});


User.sync({alter: true}).then((data) => {
    // return User.findOne();

    // return User.create({
    //     username : 'Wire',
    //     password : 'soccerpizza',
    //     description: 'This is my description it could be really long.'
    // })

    return User.findOne({
        where: {username:'Wire'}
    });
}).then((data) => {
    // console.log(data.username);
    // console.log(data.password);
    console.log(data.description);
    // console.log(data);
}).catch((err) => {
    console.log(err);
});



