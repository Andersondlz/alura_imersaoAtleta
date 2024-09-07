function pesquisar(){
    let section = document.getElementById("resultados_pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";

    if (!campoPesquisa){
        section.innerHTML = "<p>Nenhum Atleta encontrado</p>"
        return
    }

    for (let dado of dados){
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // includes procura uma palavra dentro da String a ser analisada
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta"> ${dado.descricao}} 
                </p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `
        } else {
            resultados = "<p>Nenhum Atleta encontrado</p>"
        }
        // includes procura uma palavra dentro da String a ser analisada
    }
    section.innerHTML = resultados
}





