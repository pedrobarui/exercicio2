/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
 */

    app.post('/exercicio7', (req, res) => {
        let listaProdutos = []
    
        req.body.forEach(produto => {
            listaProdutos.push(produto)
        });
    
        let maiorPrecoLido = 0
        listaProdutos.forEach(produto => {
            if (produto.preco > maiorPrecoLido){
                maiorPrecoLido = produto.preco
            }
        })
    
        let soma = 0
        console.log("soma ", soma)
        listaProdutos.forEach(produto => {
            console.log("produto preco ", produto.preco)
            soma = soma + produto.preco
            console.log("soma ", soma)
        })
    
        let media = soma / listaProdutos.length
    
        res.json({
            maiorPrecoLido: maiorPrecoLido,
            media: media.toFixed(2)
        })
    })