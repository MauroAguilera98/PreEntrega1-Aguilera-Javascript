

const registeredUser = "mauro";
const registeredPassword = "1234";


for ( i = 0; i < 3; i++ ) {
    let userName = (prompt("Ingrese su nombre: "));
    let userPassword = (prompt("Ingrese su contraseña:"));
    if(userName === registeredUser && userPassword === registeredPassword){
        alert("Buen día " + registeredUser + ", puede hacer el examen");
        break;
    } else {
        alert("Contraseña o usuario incorrectos, reintentar.");
    }
}
function verifyAnswers(){
    let total = 5;
    let points = 0;
    let myForm = document.forms["quizForm"];
    let answers = ["a", "b", "d", "a", "b"];
    
    for(let i = 1; 1 < total; i++) {
        if (myForm["p" + i].value === null || myForm["p" + i].value === "") {
            alert("Por favor responde la pregunta " + i);
            return false;
        }else{
            if(myForm["p" + i].value === answers[i - 1]){
                points++;
                alert("Obtuviste"+ points +" de "+ total +" puntos");
            }
        }
    }
}











