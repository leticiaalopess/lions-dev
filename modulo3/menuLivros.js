const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let livros = []
exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:
    1. Cadastrar livros
    2. Listar livros cadastrados
    3. Editar livro já cadastrado
    4. Remover livro já cadastrado
    5. Sair
    `)
    rl.question('escolha uma das opcoes: ', (opcoes) => {
        switch(opcoes){
            case '1':
                cadastrarLivros()
                break
            case '2':
                listarLivros()
                break
            case '3':
                editarLivros()
                break
            case '4':
                removerLivros()
                break
            case '5':
                rl.close()
                break
            default:
                console.log('Opção invalida.')
                exibirMenu()
                break
        }

    })
}

function cadastrarLivros(){
    rl.question('Digite o nome do livro: ', (nome) => {
        rl.question('Qual é o autor: ', (autor) => {
            rl.question('Qual o ano de publicação: ', (ano) => {
                livros.push({ nome, autor, ano: parseFloat(ano) })
                console.log('Livro cadastrado com sucesso!')
                exibirMenu()
            })

        })

    })
}

function listarLivros(){
    if (livros.length == 0){
        console.log('Nenhum livro cadastrado')
    } else {
        console.log('lista de livros:')
        livros.forEach((livros, index) => {
            console.log(`${index + 1}. Nome: ${livros.nome},
            autor: ${livros.autor}, ano: ${livros.ano}`)
            })
            }
            exibirMenu()
    }

    function editarLivros() {
        if (livros.length == 0) {
        console.log('não a nenhum livro para editar!')
        } else {
        for (let i = 0; i < livros.length; i++)
            console.log(livros[i])
            rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
                if (numero > 0 && numero <= livros.length) {
                     rl.question('Digite o novo nome: ', (nome) => {
                        rl.question('Digite o novo autor: ', (autor) => {
                           rl.question('Digite a nova data de publicação: ', (ano) => {
                              livros[numero - 1] = {
                                 nome,
                                 autor,
                                 ano
                              }
                             console.log('editado com sucesso!')
                             exibirMenu()
                         })
                      })
                 })
           } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
              }
         })
        
        }
}

function removerLivros() {
    if (livros.length == 0) {
        console.log('Não há nada cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de livros')
        livros.forEach((livros, index) => {
            console.log(`${index + 1}. ${livros}`)
    })
    rl.question('Digite o número do livro que deseja remover: ', (numero) => {
        if (numero > 0 && numero <= livros.length) {
            livros.splice(numero - 1, 1)
            console.log('livro removido com sucesso!')
            exibirMenu()
       } else {
            console.log('Número inválido, tente novamente.')
             exibirMenu()
             }
         }
     )}
}

console.log('Obrigada por ter cadastrado seu livro, até a proxima!')
