//Creating the close button and appending it to each item list
var myNodeList = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("SPAN");
  var removeButton = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(removeButton);
  myNodeList[i].appendChild(span);
}

//Clicking on the delete button to delete the element
var deleteThisElement = document.getElementsByClassName("close");
var i;
for (i = 0; i < deleteThisElement.length; i++) {
  deleteThisElement[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
    counterFunction();
  };
  counterFunction();
}

//Create a New book item when clicking Add button
function newElement() {
  var myLi = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var bookName = document.createTextNode(inputValue);
  myLi.appendChild(bookName);
  if (inputValue === "") {
    alert("Book Title Field can not be Empty");
  } else {
    document.getElementById("list_of_books").appendChild(myLi);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var removeButton = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(removeButton);
  myLi.appendChild(span);

  for (i = 0; i < deleteThisElement.length; i++) {
    deleteThisElement[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      counterFunction();
    };
  }
  counterFunction();
}

function counterFunction() {
  var allItems = document.getElementsByTagName("li");
  var count = allItems.length;
  document.getElementById("counterSpan").innerHTML = count;
}
