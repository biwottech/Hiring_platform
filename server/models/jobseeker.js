"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobSeeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JobSeeker.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
      JobSeeker.belongsToMany(models.Skill, {
        through: models.JobSeekerSkill,
        foreignKey: "jobSeekerId",
      });
      JobSeeker.hasMany(models.Recommendation, {
        foreignKey: "jobSeekerId",
        onDelete: "CASCADE",
      });
      JobSeeker.hasOne(models.VisibilitySetting, {
        foreignKey: "jobSeekerId",
        onDelete: "CASCADE",
      });
    }
  }

  // industry educationLevel yearsOfExperience skillLevel
  JobSeeker.init(
    {
      userId: DataTypes.INTEGER, 
      fullName: DataTypes.STRING,
      phone: DataTypes.STRING,
      professionalTitle: DataTypes.STRING,
      address: DataTypes.TEXT,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      industry: DataTypes.STRING,
      educationLevel: DataTypes.STRING,
      yearsOfExperience: DataTypes.STRING,
      skillLevel: DataTypes.STRING,
      about: DataTypes.TEXT,
      profilePictureUrl: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
      backgroundColor: DataTypes.STRING,
      layoutStyle: DataTypes.STRING,
      profileVisible: DataTypes.BOOLEAN,
      activeStatus: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "JobSeeker",
    }
  );
  return JobSeeker;
};
