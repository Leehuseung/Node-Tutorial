const {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');

const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres',
});

/**
 * One to One
 */
const Country = sequelize.define('country',{
    countryName: {
        type : DataTypes.STRING,
        unique : true
    }
}, {
    timestamps : false
});

const Capital = sequelize.define('capital',{
    capitalName: {
        type : DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
});

//OneToOne 관계 설정
// Country.hasOne(Capital);
// Country.hasOne(Capital, {onDelete: 'CASCADE'});
// Capital.belongsTo(Country, {onDelete: 'CASCADE'});
Country.hasOne(Capital, {onUpdate: 'CASCADE'});
//수도에서 국가를 설정한다면(setCountry사용) OneToMany관계가 된다.
Capital.belongsTo(Country, {onUpdate: 'CASCADE'});

//fk 이름을 바꾸고 싶을 때.(커스터마이징)  countryId -> soccer로 변경된다.
// Country.hasOne(Capital,{ foreignKey: 'soccer' });


let country, capital;

/**
 * 데이터 관계설정 및 insert
 */
// sequelize.sync({alter : true}).then(() => {
//
//     //기초 Insert
//     // Country.bulkCreate([
//     //     {
//     //         countryName: 'Spain'
//     //     },
//     //     {
//     //         countryName: 'France'
//     //     },
//     //     {
//     //         countryName: 'Germany'
//     //     },
//     //     {
//     //         countryName: 'England'
//     //     }
//     // ]);
//     //
//     // Capital.bulkCreate([
//     //     {
//     //         capitalName: 'London'
//     //     },
//     //     {
//     //         capitalName: 'Madrid'
//     //     },
//     //     {
//     //         capitalName: 'Paris'
//     //     },
//     //     {
//     //         capitalName: 'Berlin'
//     //     }
//     // ]);
//
//
//     return Capital.findOne({where : {
//         capitalName : 'Madrid'
//     }});
//
// }).then((data) => {
//     capital = data;
//     return Country.findOne({where : { countryName: 'Spain'}});
// }).then((data) => {
//     country = data;
//     //FK 설정
//     country.setCapital(capital);
// }).catch((err) => {
//     console.log(err);
// })


/**
 * 관계설정한 데이터를 select
 */
// sequelize.sync({alter : true}).then(() => {
//     return Country.findOne({where : {
//             countryName : 'Spain'
//         }});
// }).then((data) => {
//     country = data;
//     return country.getCapital();
// }).then((data) => {
//     console.log(data.toJSON());
// })
//     .catch((err) => {
//     console.log(err);
// })

/**
 * one to one 관계를 바로 생성함.
 */
// sequelize.sync({alter : true}).then(() => {
//     return Country.create({
//         countryName: 'USA'
//     });
// }).then((data) => {
//     country = data;
//     return country.createCapital({
//         capitalName: 'Washington, D.C.'
//     });
// }).then((data) => {
//     console.log(data.toJSON());
// })
// .catch((err) => {
//     console.log(err);
// })

/**
 * 위에서는 국가에서 set수도 를 했다면, 수도에서 set국가를 함.
 * 그냥 실행하면 오류 발생함.
 * Capital.belongsTo(Country) 관계를 설정해줘야한다.
 */
// sequelize.sync({alter : true}).then(() => {
//     return Country.findOne({
//         where : {
//             countryName : 'France'
//         }
//     })
// }).then((data) => {
//     country = data;
//     return Capital.findOne({where : {capitalName : 'Paris'}});
// }).then((data) => {
//     capital = data;
//     return capital.setCountry(country);
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


/**
 * 다음같은 CASCADE 설정이 있을 때 국가를 destroy 하면 fk 관계의 수도도 지워진다.
 * Country.hasOne(Capital, {onDelete: 'CASCADE'});
 * Capital.belongsTo(Country, {onDelete: 'CASCADE'});
 */
// sequelize.sync({alter : true}).then(() => {
//     return Country.destroy({where: {countryName: 'Spain'}});
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


/**
 * France는 Paris가 OneToOne관계였지만 London으로 변경된다.
 */
// sequelize.sync({alter : true}).then(() => {
//     return Country.findOne({where: { countryName: 'France' }})
// }).then((data) => {
//     country = data;
//     return Capital.findOne({where: { capitalName: 'London'}})
// }).then((data) => {
//     capital = data;
//     return country.setCapital(capital);
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

//수도에서 국가를 set해서 Paris를 설정하면 Paris와 London이 둘다 countryId가 동일함.이렇게하면 one-to-one 관계가 아니다.
sequelize.sync({alter : true}).then(() => {
    return Country.findOne({where: { countryName: 'France' }})
}).then((data) => {
    country = data;
    return Capital.findOne({where: { capitalName: 'Paris'}})
}).then((data) => {
    capital = data;
    return capital.setCountry(country);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

