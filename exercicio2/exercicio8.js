/* 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10% */
    app.get('/exercicio8', (req, res) => {
        let sal = parseFloat(req.query.sal)
        let codigo = parseInt(req.query.codigo)
        let novoSal
    })
        switch(codigo){
            case 101:
                novoSal = sal + sal * 0.05
                break
            case 102:
                novoSal = sal + sal * 0.075
                break
            case 103:
                novoSal = sal + sal * 0.1
                break
            default:
                novoSal = sal + sal * 0.15
    }
    
        let diferenca = `Diferença: ${novoSal - sal}`
        let antigoSalario = `Antigo salário: ${sal.toFixed(2)}`
        let novoSalario = `Novo salário: ${novoSal.toFixed(2)}`
    
        res.json({
            antigoSalario,
            novoSalario,
            diferenca
        })