'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class iam_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  iam_user.init({
    role: DataTypes.INTEGER,
    permissions: DataTypes.JSONB,
    contact_number: DataTypes.STRING,
    email: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    company: DataTypes.STRING,
    name: DataTypes.STRING,
    sourcing_channel_id: DataTypes.INTEGER,
    arn_number: DataTypes.STRING,
    gst_number: DataTypes.STRING,
    pan_number: DataTypes.STRING,
    referred_by: DataTypes.STRING,
    bank_account_number: DataTypes.STRING,
    bank_ifsc_code: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    bank_branch: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'iam_user',
  });
  return iam_user;
};