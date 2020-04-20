// Help Popup
// Get the modal
var modal = document.getElementById("myModal");
modal.style.display = "block";

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Dynamic Help
function changeHelp() {
    console.log(currentState);
    switch(currentState) {
        case 0:
            document.getElementById('helper').innerHTML = "Insert Coin"
            break;
        case 1:
            document.getElementById('helper').innerHTML = "Select Cup/Cone or<br>Insert More Coin (Coin:1)"
            break;
        case 2:
            document.getElementById('helper').innerHTML = "Select Cup/Cone or<br>Insert More Coin (Coin:2)"
            break;
        case 3:
            document.getElementById('helper').innerHTML = "Select Cup/Cone (Coin:3)"
            break;
        case 4:
            document.getElementById('helper').innerHTML = "Select Flavor (Left:1)"
            break;
        case 5:
            document.getElementById('helper').innerHTML = "Select Flavor (Left:2)"
            break;
        case 6:
            document.getElementById('helper').innerHTML = "Select Flavor (Left:3)"
            break;
        case 7:
            document.getElementById('helper').innerHTML = "Select Free Topping or<br>Take Your Icecream"
            break;
        case 8:
            document.getElementById('helper').innerHTML = "Take Your Icecream or<br>Insert Coin For More Topping"
            break;
        case 9:
            document.getElementById('helper').innerHTML = "Select Extra Topping"
            break;
        case 10:
            document.getElementById('helper').innerHTML = "Take Your Icecream"
            break;
    }
}