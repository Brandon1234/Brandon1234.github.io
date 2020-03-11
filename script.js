window.onload = function(){
    
    var btnWork = document.getElementById("btnWorkTerm");
    var btnBack = document.getElementById("btnBack");
    var btnResume = document.getElementById("btnResume");
    
    btnWork.onclick = function(){
        location.href = "reportPage.html";
    }
    
    btnResume.onclick = function(){
        location.href = "resume.html";
    }
    
    btnBack.onclick = function(){
        location.href = "mainPortal.html";
    }
}