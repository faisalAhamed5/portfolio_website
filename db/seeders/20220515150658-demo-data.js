"use strict";
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: uuid(),
          firstName: "Faisal Ahamed",
          lastName: "Rahad",
          username: "Faisal Ahamed",
          email: "faisalahamedrahad97@gmail.com",
          password: await bcrypt.hash("secret", 8),
          phone: 1319639009,
          address: "Jamghora, Ashulia, Savar, Dhaka.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuid(),
          firstName: "Faisal Ahamed",
          lastName: "Rahad",
          username: "stupid",
          email: "faisalahamedrahad@gmail.com",
          password: await bcrypt.hash("secret", 8),
          phone: 1319639009,
          address: "Jamghora, Ashulia, Savar, Dhaka.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
