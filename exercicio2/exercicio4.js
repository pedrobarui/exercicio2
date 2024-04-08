/* 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou 
para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h,
 e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h. */
app.get('/exercicio4', (req, res) => {
    let nome = req.query.nome 
    let distancia = req.query.distancia
    let tempo = req.query.tempo

    let velMedia = distancia / tempo

    res.json({resposta : `A velocidade média do ${nome} foi de ${velMedia} Km/h.`})
})
