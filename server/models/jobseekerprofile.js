'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobSeekerProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobSeekerProfile.init({
    userId: DataTypes.INTEGER,
    professionalTitle: DataTypes.STRING,  
    industry: DataTypes.STRING,
    educationLevel: DataTypes.STRING,
    yearsOfExperience: DataTypes.STRING,
    skillLevel: DataTypes.STRING,
    summary: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'JobSeekerProfile',
  });
  return JobSeekerProfile;
};