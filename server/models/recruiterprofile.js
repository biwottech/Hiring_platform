"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RecruiterProfile extends Model {
    static associate(models) {
      // Define associations here
      RecruiterProfile.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      }); 
      RecruiterProfile.belongsTo(models.Company, {
        foreignKey: "company_id", 
        onDelete: "SET NULL",
      });
    }
  }

  RecruiterProfile.init(
    {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      first_name:DataTypes.STRING,
      last_name:DataTypes.STRING,
      company_name: DataTypes.STRING,
      country: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      years_of_experience: DataTypes.INTEGER,
      specialization: DataTypes.TEXT,
      successful_placements: DataTypes.INTEGER,
      platform_tenure: DataTypes.STRING,
      response_rate: DataTypes.DECIMAL(5, 2),
      about: DataTypes.TEXT,
      profile_image_url: DataTypes.TEXT,
      is_verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "RecruiterProfile",
      tableName: "RecruiterProfiles",
      underscored: true,
    }
  );
  return RecruiterProfile;
};
