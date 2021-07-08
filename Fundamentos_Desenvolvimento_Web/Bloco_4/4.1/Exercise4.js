let status="reprovada";
switch (status){
  case "aprovada":
    console.log("Pessoa Candidata Aprovada!");
    break
  case "lista":
    console.log("Pesoa Candidata na Lista de Espera.");
    break;
  case "reprovada":
    console.log("Pessoa Candidata Reprovada.");
    break;
  default:
    console.log("Não se aplica.");
    break;  
}