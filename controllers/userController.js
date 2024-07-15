const UserModel = require("../models/userModel");

class UserController {
  constructor() {
    this.model = new UserModel();
  }

  async createUser(user) {
    try {
      const result = await this.model.createUser(user);
      return result;
    } catch (error) {
      console.error("Erro ao criar user", error);
    }
  }

  async updateUser(user) {
    try {
      const result = await this.model.updateUser(user);
      return result;
    } catch (error) {
      console.error("Erro ao atualizar user", error);
    }
  }

  async findUser(id) {
    try {
      const result = await this.model.findUser(id);
      return result;
    } catch (error) {
      console.error("Erro ao buscar user", error);
    }
  }

  async findUsers() {
    try {
      const result = await this.model.findUsers();
      return result;
    } catch (error) {
      console.error("Erro ao buscar users", error);
    }
  }

  async deleteUser(id) {
    try {
      const result = await this.model.deleteUser(id);
      return result;
    } catch (error) {
      console.error("Erro ao deletar user", error);
    }
  }
}

module.exports = UserController;
