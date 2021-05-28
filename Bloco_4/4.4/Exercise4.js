// A function that prints info about a person.
function personPrint(){
  let person = {
    name: 'Allan',
    birthCity: 'São Gonçalo',
    birthYear: 1995
  }
  person.birthYear = 2030;
  for(let key in person){
    console.log(person[key]);
  }
}
// A function that prints patient info and a function that solves a rectangle area.
function infoAboutInfo(){
  let patient = {
    patientId : 50,
    patientId : "50",
    isEnrolled : true,
    patientInfo : {
    firstName : 'Ana',
    lastName : 'Santos',
    },
    patientEmail : 'ana@emailcom'
  };
  for (key in patient){
    console.log(typeof(patient[key]));
  }
}

function rectangleArea(a,b){
  return "Area é: "+a*b+" Perímetro é: "+(a+b)
}

//A function that read a grade and returns the student status.
function studentStatus(nota){
  if(nota>= 80){
    console.log("Parabéns, você foi aprovada(o)!");
  }else if(nota>= 60 && nota<80){
    console.log("Você está na nossa lista de espera");
  }else{
    console.log("Você foi reprovada(o)");
  }
} 

// A function that receives status and returns a log about that status.

function personStatus(status){
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
}

// Creates an object literal that stores five kinds of functions of operations.
function nestedOperations(a,b){
  let operation = {
    addition :function addition(a,b){
      return a+b;
    },
    subtraction : function  subtraction(a,b){
      return a-b;
    },
    multiplication : function  multiplication(a,b){
      return a*b;
    },
    division : function  division(a,b){
      return a/b;
    }, 
    mod : function mod(a,b){
      return a%b;
    }
  }
  for (key in operation){
    let xablau = operation[key]
    console.log(key,xablau(a,b))
  }
}

// 