const {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');

const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres',
});

const Customer = sequelize.define('customer',{
    customerName: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

const Product = sequelize.define('product',{
    productName: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
})

const CustomerProduct = sequelize.define('customerproduct',{
    customerproductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})

//ManyToMany 관계 설정
Customer.belongsToMany(Product, {
        // through: 'customerproduct',
        through: CustomerProduct // define한 객체를 이용할 수 도 있다.
        // foreignKey: 'customer_id' // fk 칼럼을 custom 할 수 있다

    });
Product.belongsToMany(Customer, {
    // through: 'customerproduct',
    through: CustomerProduct // define한 객체를 이용할 수 도 있다.
    // foreignKey: 'product_id'
});

sequelize.sync({alter: true}).then(() => {

    //더미 insert
/*    Customer.bulkCreate([
        {
            customerName: 'WittCode'
        },
        {
            customerName: 'Mike'
        },
        {
            customerName: 'Greg'
        },
        {
            customerName: 'Spencer'
        }
    ])

    Product.bulkCreate([
        {
            productName: 'laptop'
        },
        {
            productName: 'headphones'
        },
        {
            productName: 'soccer ball'
        },
        {
            productName: 'pencil sharp'
        }
    ])*/

}).catch((err) => {
    console.log(err);
});


/**
 * 관계설정
 */
let customer, product;
// sequelize.sync({alter: true}).then(() => {
//
//     return Customer.findOne({
//         where : {
//             customerName:'WittCode'
//         }
//     });
//
// }).then((data) => {
//     customer = data;
//     return Product.findAll();
// }).then((data) => {
//     product = data;
//     customer.addProducts(product);
// }).catch((err) => {
//     console.log(err);
// });

// sequelize.sync({alter: true}).then(() => {
//
//     return Product.findOne({where : {
//         productName: 'laptop'
//     }});
//
// }).then((data) => {
//     product = data;
//     return Customer.findAll();
// }).then((data) => {
//     customer = data;
//     product.addCustomers(customer);
// }).catch((err) => {
//     console.log(err);
// });


/**
 * 관계테이블 customerproducts customerId 칼럼 WittCode의 key가 1인 관계가 모두 삭제된다
 */
sequelize.sync({alter: true}).then(() => {

    return Customer.destroy({
        where : {
            customerName: 'WittCode'
        }
    });

}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});