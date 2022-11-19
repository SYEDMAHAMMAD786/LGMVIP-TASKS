function taskInsertion(){

    if(document.getElementById("toDo").value.length == 0)
        alert("HELLO PLEASE ENTER A TASK !");

    else{
        var innerBox = document.createElement("div");
        innerBox.className = "divClass";
        document.getElementById("outerBox").appendChild(innerBox);

        // Display text and striking it on clicking the paragraph element
        var textDisplay = document.createElement("p");
        textDisplay.innerHTML = document.getElementById("toDo").value;
        textDisplay.className = "textInput";
        innerBox.appendChild(textDisplay);
        var lineThrough = document.getElementsByClassName("textInput");
        for(var i=0;i<lineThrough.length;i++){
            lineThrough[i].onclick = function(){
                var strikeCssBefore = this.parentElement;
                var strikeCss = strikeCssBefore.children[0];
                strikeCss.style.textDecoration = "line-through";
            }
        }

        // Deleting button
        var deleteTaskItems = document.createElement("button");
        deleteTaskItems.innerHTML = "X";
        deleteTaskItems.className = "deleteBtn";
        innerBox.appendChild(deleteTaskItems);
        var close = document.getElementsByClassName("deleteBtn");
        for(var i=0;i<close.length;i++){
            close[i].onclick = function(){
                var closeCss = this.parentElement;
                closeCss.style.display = "none";
            }
        }

        // Making the input element empty after applying all the above functionalities
        document.getElementById("toDo").value = "";
    }
    
}