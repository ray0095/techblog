//Locations data
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Post extends Model {}

// create fields/columns for Location model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
    },
      createdAt:{
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;