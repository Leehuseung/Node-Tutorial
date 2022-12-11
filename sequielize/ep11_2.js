const {Sequelize, DataTypes, Op, QueryTypes} = require('sequelize');

const sequelize = new Sequelize('test', 'test', 'test!', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = sequelize.define('user',{
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});

const Post = sequelize.define('post',{
    message: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

/**
 * OneToMany
 */
//관계 설정 사용자는 Post를 여러개 갖을 수 있다.
User.hasMany(Post);
// User.hasMany(Post, { onDelete: 'CASCADE' });
Post.belongsTo(User);
// Post.belongsTo(User, { onDelete: 'CASCADE' });


/**
 * 기초 data Insert
 */
sequelize.sync({alter: true}).then(() => {

    // User.bulkCreate([
    //     {
    //         username: 'WittCode',
    //         password: 'subscribe'
    //     },
    //     {
    //         username: 'Mike1234',
    //         password: 'dude78'
    //     },
    //     {
    //         username: 'FredGuy7',
    //         password: 'pizzaIsGood'
    //     }
    // ]);
    //
    // Post.bulkCreate([
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     },
    //     {
    //         message: 'This was an amazing post that I made online!'
    //     }
    //
    // ])
}).catch((err) => {
    console.log(err);
});


let user, posts;
/**
 * Posts에 UserId key 업데이트
 */
// sequelize.sync({alter: true}).then(() => {
//     return User.findOne({where: {username : 'WittCode'}})
// }).then((data) => {
//     user = data;
//     return Post.findAll();
// }).then((data) => {
//     posts = data;
//     return user.addPosts(posts);
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });


/**
 * User에서 posts를 count하는 utility method
 */
// sequelize.sync({alter: true}).then(() => {
//     return User.findOne({where: {username : 'WittCode'}})
// }).then((data) => {
//     user = data;
//     return user.countPosts();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });


/**
 * remove Post
 *
 * post가 delete 되는 것이 아니라 fk 칼럼을 null로 업데이트한다.
 */
// sequelize.sync({alter: true}).then(() => {
//     return User.findOne({where: {username : 'WittCode'}})
// }).then((data) => {
//     user = data;
//     return Post.findOne();
// }).then((data) => {
//     posts = data;
//     return user.removePost(posts);
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });


/**
 * CASCADE옵션을 true 변경후 User.destory 사용시 관련된 Posts 데이터가 모두 Delete 된다.
 */
// sequelize.sync({alter: true}).then(() => {
//     return User.destroy({where: { username: 'WittCode'}});
// }).then((data) => {
//
// }).catch((err) => {
//     console.log(err);
// });


/**
 * many 관계에서 set 유틸리티 method를 통해 user를 설정함.
 */
// sequelize.sync({alter: true}).then(() => {
//     return User.findOne();
// }).then((data) => {
//     user = data;
//     return Post.findOne();
// }).then((data) => {
//     posts = data;
//     posts.setUser(user);
// }).catch((err) => {
//     console.log(err);
// });


