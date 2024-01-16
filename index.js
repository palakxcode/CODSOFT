const screen=document.getElementById("screen");
function typein(input){
    screen.value+=input;
}
function calculate(){
    try{
        screen.value=eval(screen.value);
    }
    catch{
        screen.value="Error";
    }
}
function CD(){
    screen.value="";
}