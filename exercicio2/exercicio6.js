/* 6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7 */
    app.get('/exercicio6', (req, res) => {
        let altura = parseFloat(req.query.altura)
        let sexo = req.query.sexo
        let pesoIdeal
    
        switch(sexo){
            case "masculino":
                pesoIdeal = 72.7 * altura - 58;
                break;
            case "feminino":
                pesoIdeal = 62.1 * altura - 44,7;
                break;
        }
    
        res.json({resposta: `Peso ideal: ${pesoIdeal.toFixed(2)} Kg.`})
    })