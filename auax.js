
function myFunction() {
    var inputsTodos = document.getElementById("inputsTodos");
    var inputsChave = document.getElementById("inputsChave");
    var inputsFiltro = document.getElementById("inputsFiltro");
    var todos = document.getElementById("todos");
    var chave = document.getElementById("chave");
    var filtro = document.getElementById("filtro");

    if(chave.checked != true){
        if(filtro.checked != true){
            if (todos.checked == true){
                inputsTodos.style.display = "block";
            }else {
                inputsTodos.style.display = "none";
            }
        }else{
            inputsTodos.style.display = "none";
        }    
    }else{
        inputsTodos.style.display = "none";
    }

    if(todos.checked != true){
        if(filtro.checked != true){
            if (chave.checked == true){ 
                inputsChave.style.display = "block";
            }else {
                inputsChave.style.display = "none";
            }
        }else{
            inputsChave.style.display = "none";
        }    
    }else{
        inputsChave.style.display = "none";
    }

    if(chave.checked != true){
        if(todos.checked != true){
            if (filtro.checked == true){ 
                inputsFiltro.style.display = "block";
            }else {
                inputsFiltro.style.display = "none";
            }
        }else{
            inputsFiltro.style.display = "none";
        }    
    }else{
        inputsFiltro.style.display = "none";
    }

    
}
