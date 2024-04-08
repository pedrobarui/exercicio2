/* 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:
    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação. */

app.post('/calcular-salario', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;

    const valorHora = salarioMinimo / 5;

    let salarioMes = horasTrabalhadas * valorHora;

    const acrescimoDependentes = dependentes * 32;
    salarioMes += acrescimoDependentes;

    const valorHoraExtra = valorHora * 1.5;
    const salarioHorasExtras = horasExtras * valorHoraExtra;

    const salarioBruto = salarioMes + salarioHorasExtras;

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.json({ salarioReceber });
});