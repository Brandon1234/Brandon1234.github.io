window.onload = function(){
    
    var btnWork = document.getElementById("btnWorkTerm");
    var btnBack = document.getElementById("btnBack");
    
    btnWork.onclick = function(){
        location.href = "reportPage.html";
    }
    
    btnBack.onclick = function(){
        location.href = "mainPortal.html"
    }
}