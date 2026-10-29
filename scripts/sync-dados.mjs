//imports para o funcionamento das configurações
import fs from "node:fs";
import path from "node:path";

//pega a base atraves do process e do arquivo .env
const base = process.env.BASE_DADOS;
if(!fs.existsSync(base)) {
    console.log("Ocorreu um erro ao buscar a base de dados fornecida. Verifique o arquivo .env para mais informações do possível erro");
    process.exit(1);
}

