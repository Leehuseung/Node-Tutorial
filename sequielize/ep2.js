const { Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        //freezeTable 등 옵션 전역으로 적용
        // freezeTableName: true
    }
});


// 규칙 적용
// sequelize.sync({force:true});
// sequelize.sync({alter:true});


//모든 테이블 드랍
//sequelize.drop();
// 정규식도 가능하다.
//sequelize.drop({match: /_test$/});


const User = sequelize.define('userdd', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // PK 사용
        autoIncrement: true초
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false //널 허용 여부
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER, //데이터타입 설정
        defaultValue: 21, //기본값 설정
    },
    WittCodeRocks: {
        type: DataTypes.BOOLEAN
    }
},{
    freezeTableName: true,  //복수형 네이밍 규칙 사용 안함.
    timestamps: false //

});


//테이블 삭제
// User.drop().then((data) => {
// }).catch((err) => {
// });


console.log(sequelize.models.userdd); //userdd


//테이블 생성
User.sync().then((data) => {
    console.log('Table and model synced successfully');
}).catch((err) => {
    console.log('Error syncing the table and model');
});


