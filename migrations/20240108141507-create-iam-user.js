'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('iam_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      permissions: {
        allowNull: true,
        type: Sequelize.JSONB
      },
      contact_number: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      company: {
        allowNull: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      sourcing_channel_id: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      arn_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gst_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pan_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      referred_by: {
        allowNull: true,
        type: Sequelize.STRING
      },
      bank_account_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      bank_ifsc_code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      bank_name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      bank_branch: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('iam_users');
  }
};