/* 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento. */

app.get('/exercicio2', (req, res) => {
    const sal = parseFloat(req.query.sal);
    let mensagem;

    if(sal <= 1000){
        let novoSal = sal + sal * 0.3

        res.json({mensagem: `Parabéns! você tem direito ao aumento. Seu novo salário é de: R$${novoSal.toFixed(2)}`})
    } else{
        res.json({mensagem: "Desculpe... Você não tem direito ao aumento salarial!"})
    }

})