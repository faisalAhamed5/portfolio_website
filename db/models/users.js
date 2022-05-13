"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   dept_db.hasMany(models.user_db, {
      //     foreignKey: "dept_id",
      //     onDelete: "RESTRICT",
      //     onUpdate: "CASCADE",
      //   });
    }
  }
  users.init(
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phone1: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      phone2: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
