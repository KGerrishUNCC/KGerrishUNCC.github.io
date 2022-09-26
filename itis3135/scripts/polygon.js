function alertUser()
{
    var num = prompt("The Keen Gorilla would like your choice of number between 1-11 to find the corresponding polygon");
    validateNum(num);
}
function validateNum(_num)
{
    if(isNaN(_num)){
        alert("Sorry! Invalid number entry. Please type between 1-11!");
        alertUser();
    }
    else
    {
        number = Math.trunc(_num);
        if(number > 11 || number < 1)
        {
            alert("Sorry! Invalid number entry. Please type between 1-11!");
            alertUser();
        }
        else
        {
            getShape(number);
        }
    }
}
function getShape(sides)
{
    var polygonList = new Array(
        "Monogon", 
        "Bigon", 
        "Triangle", 
        "Quadrilateral", 
        "Pentagon", 
        "Hexagon", 
        "Heptagon", 
        "Octagon",
        "Nonagon",
        "Decagon",
        "Undecagon"  
    );
    var message = "A polygon with " + sides + " sides is called a " + polygonList[sides - 1] + ".";

    document.getElementById("polyName").innerHTML = message;
}