const form = document.getElementById("form");
const divPai = document.getElementById("pai");

const lista = document.createElement("ul");
divPai.appendChild(lista);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemTexto = form.elements["nome-item"].value;

  if (itemTexto) {
    const novoItem = criarItem(itemTexto);

    lista.appendChild(novoItem);

    form.reset();
  }
});

function criarItem(texto) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const span = document.createElement("span");
  span.textContent = texto;

  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("fa-solid", "fa-pen-to-square", "icones");
  botaoEditar.addEventListener("click", () => {
    const novoTexto = prompt("Digite o novo texto do item:", texto);
    if (novoTexto) {
      span.textContent = novoTexto;
    }
  });

  const botaoExcluir = document.createElement("button");
  botaoExcluir.classList.add("fa-solid", "fa-trash", "icones", "excluir");
  botaoExcluir.addEventListener("click", () => {
    lista.removeChild(novoItem);
  });

  novoItem.appendChild(span);
  novoItem.appendChild(botaoEditar);
  novoItem.appendChild(botaoExcluir);

  return novoItem;
}
