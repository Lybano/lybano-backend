const db = require("../config/db");

class EnterpriseModel {
  constructor() {
    this.table = "Enterprise";
  }

  async createEnterprise(enterprise) {
    const sql = `INSERT INTO ${this.table} (cnpj, razao_social, nome_fantasia, cnae, endereco, telefone, email) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      parseInt(enterprise.data.cnpj, 10),
      enterprise.data.razao_social,
      enterprise.data.nome_fantasia,
      `${enterprise.data.cnae_fiscal} - ${enterprise.data.cnae_fiscal_descricao}`,
      `${enterprise.data.logradouro} ${enterprise.data.numero}, ${enterprise.data.complemento}, ${enterprise.data.bairro}, ${enterprise.data.municipio}-${enterprise.data.uf}`,
      enterprise.data.ddd_telefone_1,
      enterprise.data.email,
    ];
    try {
      const [result] = await db.query(sql, values);
      const enterprises = await this.findEnterprise(enterprise.data.cnpj);
      return enterprises;
    } catch (error) {
      console.error("Erro ao salvar empresa", error);
      throw error;
    }
  }

  async findEnterprise(cnpj) {
    const sql = `SELECT * FROM ${this.table} WHERE cnpj = ?`;
    try {
      const [rows] = await db.query(sql, [cnpj]);
      return rows;
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      throw error;
    }
  }
}

module.exports = EnterpriseModel;
