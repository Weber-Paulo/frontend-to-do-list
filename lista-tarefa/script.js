const inputTarefa = document.getElementById("tarefa-nova")

function adicionarTarefa(){
    const item = document.createElement("li")

    item.textContent = "Ola"

    const lista = document.querySelector("#lista")    
    lista.appendChild(item)

}

adicionarTarefa()