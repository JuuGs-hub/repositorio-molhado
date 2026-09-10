const express = require("express");

cont app = require("./src");

cont PORT = 3000;

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta ${PORT}');
});
