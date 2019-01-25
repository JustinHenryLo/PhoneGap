function update_output(input) {
    document.getElementById("input").innerHTML += input;
  }
  
function get_sum(){
    var num = document.getElementById("input").innerHTML
    num = num.split("+");
    var total_sum = 0
    num.forEach(function(entry) {
        total_sum += parseInt(entry)
    });
    document.getElementById("output").innerHTML = total_sum
    //document.getElementById("output").innerHTML = document.getElementById("input").innerHTML;
}
function clear_in_out(){
    document.getElementById("input").innerHTML = ""
    document.getElementById("output").innerHTML = ""
    }
    
var clicked = false
function click_equal(){
    if(clicked){
        clear_in_out()
        clicked = false
    }
    else{
        get_sum()
        clicked = true
    }
}