const db = require("../config/db");

class UserModel {
  constructor() {
    this.table = "Users";
  }

  async createUser(user) {
    const sql = `INSERT INTO ${this.table} (id, name, cargo, endereco, telefone, dt_contratacao, vinculo_empregaticio, valor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      user.id,
      user.name,
      user.cargo,
      user.endereco,
      user.telefone,
      user.dt_contratacao,
      user.vinculo_empregaticio,
      user.valor,
    ];
    try {
      const [result] = await db.query(sql, values);
      const users = this.findUser(user.id);
      return users;
    } catch (error) {
      console.error("Erro ao inserir usuário", error);
      throw error;
    }
  }

  async updateUser(user) {
    const sql = `UPDATE ${this.table} SET name = ?, cargo = ?, endereco = ?, telefone = ?, dt_contratacao = ?, vinculo_empregaticio = ?, valor = ? WHERE id = ?`;
    const values = [
      user.name,
      user.cargo,
      user.endereco,
      user.telefone,
      user.dt_contratacao,
      user.vinculo_empregaticio,
      user.valor,
      user.id,
    ];
    try {
      const [result] = await db.query(sql, values);
      return user;
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      throw error;
    }
  }

  async findUser(id) {
    const sql = `SELECT * FROM ${this.table} WHERE id = ?`;
    try {
      const [rows] = await db.query(sql, [id]);
      return rows;
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      throw error;
    }
  }

  async findUsers() {
    const sql = `SELECT * FROM ${this.table}`;
    try {
      const [rows] = await db.query(sql);
      return rows;
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
      throw error;
    }
  }

  async deleteUser(id) {
    const sql = `DELETE FROM ${this.table} WHERE id = ?`;
    try {
      const [result] = await db.query(sql, [id]);
      return result;
    } catch (error) {
      console.error("Erro ao deletar usuário", error);
      throw error;
    }
  }
}

module.exports = UserModel;
