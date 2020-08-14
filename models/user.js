'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                // custom error message
                msg: 'Please provide a value for "title"',
            }
        },
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                // custom error message
                msg: 'Please provide a value for "Author"',
            }
        },
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                // custom error message
                msg: 'Please provide a value for "genre"',
            }
        },
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                // custom error message
                msg: 'Please provide a value for "year"',
            }
        },
    },
  }, { sequelize });

  return User;
};