//This is closure

function x(){
    var g = 200;
function y() {
    var c = 30;
    function b(){
        console.log(c, g);//this returns the function along with the 'refrence' to the variable not the value number
    }
    c = 100;
    b();//This come along with it's lexical scope
}
y();
// n();//ans gives us 100
}
x();