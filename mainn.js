function verificarRespuestas(){
    var total = 5;
    var points = 0;

    var myForm = document.forms["quizForm"];
    var answers = ["a", "b", "d", "a", "b"];
    
    for(i = 1; 1 <= total; i++) {
        if (myForm ["p" + i].value === null || myForm ["p" + i].value === "") {
            alert("Por favor responde la pregunta " + i);
            return false;
        }else {
            if(myForm["p" + i].value === answers [i - 1]){
                points++;
            }
        }
    } 
    
    var score = document.getElementById ("score");
    score.innerHTML = '<h3>Obtuviste <span>'+ points +'</span> de <span>'+ total +' puntos</span></h3>';

    return false;
};