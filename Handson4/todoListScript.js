function task(){
    var input = $("#input1").val(); //getting new task as input 
    
    var oldtext = $("#result").html(); //fetching if already tasks are present
    
    if(input === null || input === ""){
        window.alert("Enter task details!"); //if input is not valid throwing alert
    }
    else{
        
        newtext = oldtext + "<br>" +input; //making new text
        $("#result").html(newtext); //displaying new text
    }
}