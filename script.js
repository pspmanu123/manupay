function cancel(){
    window.location.href = "./failed.html";
}

function done(){
    window.location.href = "./processing.html";
}

function sad(){
    window.location.href = "https://i.pinimg.com/736x/a0/c6/20/a0c6206ea63e02d2c2ab3264acebd6f3.jpg";
}

function happy(){
    window.location.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1yPSauJ-G6uOTTPc3jFOTeyPtJHIZal7hg&s";
}

function cancelopen(){
    document.getElementById("cancel").style.display = "flex";
}

function cancelclose(){
    document.getElementById("cancel").style.display = "none";
}

function gcash(){
    document.getElementById("gc").style.border = "1px solid #AA8214";
    document.getElementById("sec").style.border = "1px solid #4d4d4d";
    document.getElementById("cs").style.border = "1px solid #4d4d4d";
    document.getElementById("gcash").style.display = "flex";
    document.getElementById("sb").style.display = "none";
    document.getElementById("cash").style.display = "none";
}

function sb(){
    document.getElementById("gc").style.border = "1px solid #4d4d4d";
    document.getElementById("sec").style.border = "1px solid #AA8214";
    document.getElementById("cs").style.border = "1px solid #4d4d4d";
    document.getElementById("gcash").style.display = "none";
    document.getElementById("sb").style.display = "flex";
    document.getElementById("cash").style.display = "none";
}

function cash(){
    document.getElementById("gc").style.border = "1px solid #4d4d4d";
    document.getElementById("sec").style.border = "1px solid #4d4d4d";
    document.getElementById("cs").style.border = "1px solid #AA8214";
    document.getElementById("gcash").style.display = "none";
    document.getElementById("sb").style.display = "none";
    document.getElementById("cash").style.display = "flex";
}

function copy1(){
    const data = "0000043674748";
    navigator.clipboard.writeText(data).then(function() { 
        console.log('Data copied to clipboard: ' + data); 
    }).catch(function(err) {
         console.error('Could not copy text: ', err); 
    });
    document.getElementById("copynum").style.display = "flex";
    setTimeout(function() { document.getElementById("copynum").style.display = "none"; }, 1500);
}

function copy2(){
    const data = "Manuel Raphael Macayan";
    navigator.clipboard.writeText(data).then(function() { 
        console.log('Data copied to clipboard: ' + data); 
    }).catch(function(err) {
         console.error('Could not copy text: ', err); 
    });
    document.getElementById("copynam").style.display = "flex";
    setTimeout(function() { document.getElementById("copynam").style.display = "none"; }, 1500);
}