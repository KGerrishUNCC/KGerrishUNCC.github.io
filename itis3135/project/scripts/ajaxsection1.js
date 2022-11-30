//These ajax load requests are used to load txt files into seperate divs
$(document).ready(function(){
  $("#button1").click(function(){
    $("#div1").load("scripts/ajaxfiles/networksection1.txt");
  });
  $("#button2").click(function(){
    $("#div2").load("scripts/ajaxfiles/networksection2.txt");
  });
  $("#button3").click(function(){
    $("#div3").load("scripts/ajaxfiles/networksection3.txt");
  });
   $("#button4").click(function(){
    $("#div4").load("scripts/ajaxfiles/networksection4.txt");
  });
   $("#button4").click(function(){
    $("#div4").load("scripts/ajaxfiles/networksection4.txt");
  });
   $("#button5").click(function(){
    $("#div5").load("scripts/ajaxfiles/networksection5.txt");
  });
   $("#button6").click(function(){
    $("#div6").load("scripts/ajaxfiles/networksection6.txt");
  });
});

