

function Initialize()
{
    var employee = new Employee('level1 manager');
    employee.Name = "Dave1";
    employee.GetInfo(); 
}


function DisplayChildren(callingElement) 
{
    // Determine the parent
    var parent = document.getElementById(callingElement.Id);

    // Query the db to retrieve children
    //
    // ...
    //
    var numChildren = 3;
    
    // Get access the current display list
    var childList = document.getElementById("childListID");
   
    // Interate through the current child items and add to display list
    for (var i=0; i < numChildren; i++) 
    {
        var node = document.createElement("li");
        node.addEventListener("click", UpdateParent.bind(this), false);        
        var childNode = document.createTextNode("Child " + i); 
        node.appendChild(childNode);              
        childList.appendChild(node);
    }
       
}

function UpdateParent(callingElement) 
{
    var parent = document.getElementById("parentID");
    
    parent.innerHTML = callingElement.currentTarget.innerHTML;
}


function MouseOver()
{
    var parent = document.getElementById("parentID");
    parent.text = "Dave with mouse over";
}

function MouseOut()
{
    var parent = document.getElementById("parentID");
    parent.text = "Dave with mouse out";
}