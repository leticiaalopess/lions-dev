const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let funcionarios = []
exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:
    1. Cadrastrar funcionairo
    2. Listar todos os funcionários
    3. Exibir funcionario com maior salario
    4. Editar funcionario
    5. Remover funcionario
    6. Sair
    `)
    rl.question('Escolha uma opção: ', (opcao) =>  {
        switch(opcao){
            case '1':
                cadastrarFuncionario()
                break
            case '2':
                listarFuncionarios()
                break
            case '3':
                exibirMaiorSalario()
                break
            case '4':
                editarFuncionario()
                break
            case '5':
                removerFuncionario()
            case '6':
                rl.close()
                break
            default:
                console.log('Opção invalida, tenta novamente')
                exibirMenu()
                break
        }
    })
}

function cadastrarFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) => {
                funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
                console.log('Funcionário cadastrado com sucesso!')
                    exibirMenu()
                 })
            })
        })
    }

    function listarFuncionarios(){
        if (funcionarios == 0){
            console.log('Não há nenhum funcionario cadastrado')
            exibirMenu()
        } else{
            for (let i = 0; i < funcionarios.length; i++)
            console.log(funcionarios[i])
        } 
        exibirMenu()
    }

    function exibirMaiorSalario(){
        let maiorSalario = 0
        for (let i = 0; i < funcionarios.length; i++){
            if (salario[i] > maiorSalario){
                maiorSalario = salario[i]
            }   
        }
        console.log('O maior salario é:' + maiorSalario)
        exibirMenu()
    }

    function editarFuncionario(){
        if (funcionarios.length == 0){
            console.log('Não há funcionarios cadastrados')
        } else {
            for (let i = 0; i < funcionarios.length; i++)
            console.log(funcionarios[i])  
            rl.question('Digite o numero do elemento que deseja editar: ', (numero) => {
                if (numero > 0 && numero <= funcionarios.length) {
                    rl.question('Digite o novo nome: ', (nome) => {
                       rl.question('Digite o novo cargo: ', (cargo) => {
                          rl.question('Digite o novo salario: ', (salario) => {
                             funcionarios[numero - 1] = {
                                nome,
                                cargo,
                                salario
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

function removerFuncionario() {
    if (funcionarios.length == 0) {
        console.log('Não há nada cadastrado.')
        exibirMenu()
    } else {
        console.log('Lista de funcionarios')
        funcionarios.forEach((funcionairos, index) => {
            console.log(`${index + 1}. ${funcionarios}`)
    })
    rl.question('Digite o número do funcionario que deseja remover: ', (numero) => {
        if (numero > 0 && numero <= funcionarios.length) {
            funcionarios.splice(numero - 1, 1)
            console.log('livro removido com sucesso!')
            exibirMenu()
       } else {
            console.log('Número inválido, tente novamente.')
             exibirMenu()
             }
         }
     )}
}