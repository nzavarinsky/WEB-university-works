$(".btnp").click(function(){
    var commcontent = $("#field").val();

  if(commcontent ==""){
alert("Fuck U DumbAss, Write Something In TextBox.");

  }
  else{
    
$(".comments").append("<div><h1>"+commcontent+"</h1></div>");
  
  $("#field").val('');
  
  }
}); 