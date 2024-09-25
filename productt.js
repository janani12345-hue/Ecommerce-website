var collectionimage=document.querySelector(".Collection-image")
var collectionlist=collectionimage.querySelectorAll("div")
var inputbox=document.getElementById("input-box")
console.log(inputbox)
inputbox.addEventListener("keyup", function() {
    var enteredvalue = inputbox.value.toLowerCase(); 

    for (let count = 0; count < collectionlist.length; count++) {
        var productname = collectionlist[count].querySelector("h2").textContent.toLowerCase(); // Get the product name

        if (productname.indexOf(enteredvalue) < 0) {
            collectionlist[count].style.display = "none"; // Hide if the product name does not match the search
        } else {
            collectionlist[count].style.display = "block"; // Show if the product name matches the search
        }
    }
});
