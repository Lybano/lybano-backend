const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 3000;

// Configuração do CORS
app.use(cors());

// Middleware para processar JSON
app.use(express.json());

// Rotas
app.use("/", userRoutes);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
