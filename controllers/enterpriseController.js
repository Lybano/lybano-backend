const EnterpriseModel = require("../models/enterpriseModel");

class EnterpriseController {
  constructor() {
    this.model = new EnterpriseModel();
  }

  async createEnterprise(enterprise) {
    try {
      console.log(enterprise);
      const result = await this.model.createEnterprise(enterprise);
      return result;
    } catch (error) {
      console.error("Erro ao manipular dados da empresa", error);
    }
  }
}

module.exports = EnterpriseController;
