import fs from 'fs';
import chalk from 'chalk';

function trataErro(err){
    throw new Error(chalk.red(err.code, 'Não há arquivo no diretório'));
}

function pegaArquivo(pathFile) {
    const encoding = 'utf-8';

    fs.readFile(pathFile, encoding, (err, text) =>{
        if(err){
            trataErro(err);
        }
        console.log(chalk.green(text))
    })
}

pegaArquivo('./arquivos/texto.md');