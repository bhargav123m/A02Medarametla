function myFunc() {
    var i = document.getElementById("inr").value;
    if (isNaN(i)) { alert("please enter the number"); }
   
var res= i/65;
document.getElementById("usd").value = res;

}
function myFunc1() {
    var i = document.getElementById("inr1").value;
    if (isNaN(i)) { alert("please enter the number"); }
   
var res= i/85;
document.getElementById("eu").value = res;
}