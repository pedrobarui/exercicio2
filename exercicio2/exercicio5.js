/* 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30% */
    app.get('/exercicio5', (req, res) => {
        const salario = parseFloat(req.query.salario);
        let novoSal
        if(salario <= 2000){
            novoSal = salario + salario * 0.5
    
        } else{
            novoSal = salario + salario * 0.3
        }
    
        res.json({resposta: `Reajuste do salário: R$${novoSal.toFixed(2)}` })
    })