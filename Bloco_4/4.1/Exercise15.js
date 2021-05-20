let salarioBruto = 2500, salBase, salLiq, aliquotaINSS, aliquotaIR, parcela;
if(salarioBruto >= 5189.82){
  aliquotaINSS = 570.88;
  console.log('Alíquota máxima do INSS de R$ 570,88');
}else if(salarioBruto < 5189.82 && salarioBruto >= 2594.93){
  aliquotaINSS = salarioBruto*11/100;
  console.log('Alíquota do INSS é de 11%');
}else if(salarioBruto < 2594.93 && salarioBruto >= 1556.95){
  aliquotaINSS = salarioBruto * 9 / 100;
  console.log('Alíquota do INSS é de 9%');
}else {
  aliquotaINSS = salarioBruto * 8 / 100;
  console.log('Alíquota do INSS é de 11%');
}
salBase = salarioBruto - aliquotaINSS;
  if(salBase >= 4664.68){
    aliquotaIR = salBase*27.5/100;
    parcela = 869.36;
    console.log('Alíquota do IR é de 27,5% e parcela de R$ 869,36 a deduzir do imposto.')
  }else if(salBase < 4664.68 && salBase >= 3751.06){
    aliquotaIR = salBase * 22.5 / 100;
    parcela = 636.13;
    console.log('Alíquota do IR é de 22,5% e parcela de R$ 636,13 a deduzir do imposto.')
  }else if(salBase < 3751.06 && salBase >= 2826.66){
    aliquotaIR = salBase * 15 / 100;
    parcela = 354.80;
    console.log('Alíquota do IR é de 15% e parcela de R$ 354,80 a deduzir do imposto.')
  }else if(salBase < 2826.66 && salBase >= 1903.99){
    aliquotaIR = salBase * 7.5 / 100;
    parcela = 142.80;
    console.log('Alíquota do IR é de 7,5% e parcela de R$ 142,80 a deduzir do imposto.')
  }else {
      aliquotaIR = parcela = 0;
      console.log('Até R$ 1.903,98: isento de imposto de renda')
  }
  salLiq = salBase - (aliquotaIR-parcela);
  console.log('Seu salário final é: R$'+salLiq);