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
        allowNull: true,
        validate: {
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
    validate: {
        usernamePassMatch() {
            if(this.username === this.password) {
                throw new Error('Password cannot be your username!');
            } else {
                console.log('Soccer');
            }
        }
    }
});

function myFunction(){
    console.log("RUNNING SQL STATEMENT");
}

User.sync({alter: true}).then((data) => {
    //update
    // return sequelize.query(`update public.user set age = 54 where username = 'Tom'`)

    //select
    // return sequelize.query(`select * from public.user`,{type: QueryTypes.SELECT});

    //update
    // return sequelize.query(`update public.user set age = 54 where username = 'Tom'`,
    //     {type: QueryTypes.UPDATE}
    // );

    // return sequelize.query(`SELECT * FROM public.user LIMIT 2`,
    //     {model: User, plain: true});

    //로깅을 커스텀 해보자.
    // return sequelize.query(`SELECT * FROM public.user LIMIT 2`,
    //     {logging: myFunction});

    //sql injection을 피하기 위해한 방법을 생각해보자.. 강의 일부 생략했음.route때문에
    //한건만 조회.
    // return sequelize.query(`SELECT * FROM public.user where username = :username`,{
    //     replacements: { username: 'mike'},
    //     plain: true
    // })

    //여러건 조회시 IN을 사용하자.
    // return sequelize.query(`SELECT * FROM public.user where username IN(:username)`,{
    //     replacements: { username: ['mike','Tom']}
    // })

    //LIKE 사용
    return sequelize.query(`SELECT * FROM public.user where username LIKE(:username)`,{
        replacements: { username: 'Wi%'}
    })

}).then((data) => {
    // [result, metadata] = data;
    // console.log('reulst',result);
    // console.log('metadata',metadata);


    console.log(data);
}).catch((err) => {
    console.log('Error',err);
});



