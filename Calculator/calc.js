var screen = document.getElementById('screen');
function btnClick(value){
    screen.value +=value;

}
function clearScreen(){
    screen.value="";

}
function findResult(){
    var result= eval(screen.value)
    screen.value= result;
}
function backSpace(){
    screen.value=screen.value.slice(0, -1);
}