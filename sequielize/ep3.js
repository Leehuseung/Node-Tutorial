const {Sequelize, DataTypes} = require('sequelize');
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
        //username 칼럼을 insert할 때 validate를 할 수 있다.  ==> bulk에서는 그냥 작동하지 않는다. bulkCreateWhrdp validate:true 옵션 추가 필요함.
        validate: {
            len: [4,6] //username 4~6으로 제한한다.
        }
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


//테이블 생성 및 insert
User.sync({alter: true}).then((data) => {
    //working with our updated table.
    // const user = User.build(
    //     { username: 'WittCode', password: '123', age : 25, WittCodeRocks: true }
    // );
    // user.username = 'soccer';
    // return user.save();

    //바로 리턴하는 방법
    return User.create({
        username: 'WittCode',
        password: 'subscribe',
        age: 25,
        WittCodeRocks: false
    });
}).then((data) => {
    // username 변경 후 데이터 업데이트
    // console.log("User added to database!");
    // data.username = 'pizza';
    return data.save();

    // 데이터 삭제
    // data.username = 'pizza';
    // return data.destroy();

    //원래 데이터 다시가져오는 reload, pizaa로 바꿨지만 WittCode로 됨.
    // data.username = 'pizza';
    // data.age = 45;
    // return data.reload();

    //특정 필드만 업데이트한다.
    // data.username = 'pizza';
    // data.age = 45;
    // return data.save({fields: ['age']}); //age만 업데이트함.

    //age의값이 -2가 된다.
    // data.decrement({age : 2});

    //age의값이 +2가 된다.
    // data.increment({age : 2});

}).then((data) => {
    // console.log(data.toJSON());
}).catch((err) => {
    console.log(err);
});


User.sync({alter: true}).then((data) => {
    //array를 이용한 bulk insert도 가능하다.
    return User.bulkCreate([
        {
            username : 'Tom',
            age : 45,
            password: 'pizzasoccer'
        },
        {
            username: 'Mike',
            age:31,
            password: '12345'
        },
        {
            username: 'Freddie'
        }],
{
            // validate: true // 해당 옵션을 넣어줘야 validate가 작동한다.
        }
    )
}).then((data) => {
    data.forEach(e => {
        console.log(e.toJSON());
    });
}).catch((err)=>{
    console.log(err);
});



