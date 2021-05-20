window.onload = function(){
    
    var btnBack = document.getElementById("btnBack");
    
    btnBack.onclick = function(){
        location.href = "index.html"
    }
}

function openReport(compName) {
    var i;
    var x = document.getElementsByClassName("company");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(compName).style.display = "block";  
  }
