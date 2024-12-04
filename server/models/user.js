"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    async validatePassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      role: {
        type: DataTypes.ENUM("job_seeker", "recruiter", "admin"),
        allowNull: false,
      },
      resetPasswordToken: { type: DataTypes.STRING, allowNull: true },
      resetPasswordExpire: { type: DataTypes.DATE, allowNull: true },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
          }
        },
      },
    }
  );

  return User;
};
