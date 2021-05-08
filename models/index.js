//Create the relationships tying all the models together

const User = require('./User');
const Post = require('./Posts');
const Comment = require('./Comments');

//Establishing User/Post relationships 
Post.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Post, {
  foreignKey: 'user_id'
})

//Establishing User/Comment relationship 
Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Comment, {
  foreignKey: 'user_id'
})


//Establishing Post/Comment relationship 
Post.hasMany(Comment, {
  foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
})

module.exports = { User, Post, Comment };