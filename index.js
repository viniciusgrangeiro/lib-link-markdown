import fs from 'fs';
import chalk from 'chalk';

function trataErro(err){
    throw new Error(chalk.red(err.code, 'Não há arquivo no diretório'));
}

// async/await

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';

        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    
        console.log(chalk.green(texto));
    } catch (erro){
        trataErro(erro);
    }

}


// promisses com then()

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';

//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro(erro))
// }

pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos');