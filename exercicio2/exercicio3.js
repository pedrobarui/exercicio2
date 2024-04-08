/* 3. Escrever uma api que lê o nome de um vendedor
, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. 
Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total. */
app.get('/exercicio3', (req, res) => {
    let nome = req.query.nome
    let salarioFixo = parseFloat(req.query.salarioFixo)
    let totalVendas = parseFloat(req.query.totalVendas)
    let percentual = parseFloat(req.query.percentual) / 100

    let novoSal = salarioFixo + (percentual * totalVendas)
    const resposta = {
        nome,
        novoSal
    }

    res.json(resposta)
})
