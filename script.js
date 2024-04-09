window.onload = function (){
    reset();
}

function continueGame(button){
    let sign = document.getElementById("sign");

    button.className=`${document.getElementById("sign").innerText}`;
    button.removeAttribute("onclick");
    button.innerText = `${document.getElementById("sign").innerText}`;


    let signsClassLength = document.getElementsByClassName("X").length + document.getElementsByClassName("O").length;

    if(signsClassLength > 4 && isThereAWinner() == true){
        return;
    }

    if(sign.innerText == "X"){
        sign.innerText = "O"; 
    }else{
        sign.innerText = "X"; 
    }

}

function isThereAWinner(){
    let buttons = document.getElementsByTagName("button");
    let sign = document.getElementById("sign").innerText;
    let paragraphNode = document.getElementById("paragraph");
    
    let buttonsWithClassX = document.getElementsByClassName("X");
    let buttonsWithClassO = document.getElementsByClassName("O");
    
    if((buttons[0].className == buttons[1].className && buttons[1].className == buttons[2].className) ||
       (buttons[0].className == buttons[3].className && buttons[3].className == buttons[6].className) ||
       (buttons[1].className == buttons[4].className && buttons[4].className == buttons[7].className) ||
       (buttons[2].className == buttons[5].className && buttons[5].className == buttons[8].className) ||
       (buttons[3].className == buttons[4].className && buttons[4].className == buttons[5].className) ||
       (buttons[6].className == buttons[7].className && buttons[7].className == buttons[8].className) ||
       (buttons[0].className == buttons[4].className && buttons[4].className == buttons[8].className) ||
       (buttons[2].className == buttons[4].className && buttons[4].className == buttons[6].className)
    ){
        disableButtons();
        
        paragraphNode.innerText = `Player ${sign} is the winner!`;
        paragraphNode.style.fontWeight = "bold";

        return true;
    }

    if(buttonsWithClassX.length == 5 && buttonsWithClassO.length == 4){
        disableButtons();
        
        paragraphNode.innerText = `We have a draw!`;
        paragraphNode.style.fontWeight = "bold";

        return true;
    }
}

function disableButtons(){
    let buttons = document.getElementsByTagName("button");

    for(let i = 0; i < buttons.length-1; i++){
        buttons[i].disabled = true;
    }
}


function reset(){
    let buttons = document.getElementsByTagName("button");
    let paragraphNode = document.getElementById("paragraph");

    for(let i = 0; i < buttons.length-1; i++){
        buttons[i].setAttribute("onclick","continueGame(this);");
        buttons[i].innerText = "";
        buttons[i].setAttribute("class",`${i}`);
        buttons[i].disabled = false;
    }
    
    paragraphNode.innerHTML =`Player <label id="sign">X</label> turn`;
    paragraphNode.removeAttribute("style");
}

