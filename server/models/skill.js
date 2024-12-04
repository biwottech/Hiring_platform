"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsToMany(models.JobSeeker, { through: models.JobSeekerSkill, foreignKey: 'skillId' });
    }
  }
  Skill.init(
    {
      name: DataTypes.INTEGER,
      description: DataTypes.STRING,
      status:DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Skill",
    }
  );
  return Skill;
};
