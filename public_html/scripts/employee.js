function Employee (type) 
{
    this.Type = type;
    this.Name = "";
    
    this.GetInfo = GetInfo;
    this.GetManager = GetManager;
    this.GetEmployees = GetEmployees;
}
function GetInfo() 
{
    return "Employee: " + this.Name;
}
function GetManager() 
{
}
function GetEmployees() 
{
    
}

