const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];

let output ="";

    /*....to calculate based on button clicked....*/
const calculate = (btnvalue) => {
    if(btnvalue == "=" && output !== ""){
       output = eval(output.replace("%", "/100"));

    }else if(btnvalue == "AC"){
        output = "";

    }else if(btnvalue == "DEL"){
        output = output.toString().slice(0, -1);

    }else{
        /*... output is empty and button is specialChars then return...*/
        if(output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};

    /*....Add event listener to buttons, call calculate() on click...*/
buttons.forEach((button) => {

    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});