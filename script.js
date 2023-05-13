const form = document.getElementById("form-do-item");
const divPai = document.getElementById("lista-de-itens");

const listaDeTodos = document.createElement("ul");
divPai.appendChild(listaDeTodos);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemTexto = form.elements["nome-item"].value;

  const novoItem = criarItem(itemTexto);

  listaDeTodos.appendChild(novoItem);

  form.reset();
});

const criarItem = (texto) => {
  if (texto.trim()) {
    // <li class="item"> <span> texto </span> </li>
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const span = document.createElement("span");
    span.setAttribute("title", texto);
    span.textContent = texto;

    const [botaoEditar, botaoDeletar] = criarBotoesDeEditarEDeletar(
      span,
      texto,
      novoItem,
      listaDeTodos
    );

    const botoes = document.createElement("div");
    botoes.append(botaoEditar, botaoDeletar);

    novoItem.appendChild(span);

    novoItem.appendChild(botoes);

    return novoItem;
  } else {
    alert("Digite o texto do item a ser adicionado");
  }
};

const criarBotoesDeEditarEDeletar = (span, texto, item, lista) => {
  const botaoEditar = document.createElement("button");
  botaoEditar.classList.add("fa-solid", "fa-pen-to-square", "icones");
  botaoEditar.addEventListener("click", () => {
    editarItem(span, texto);
  });

  const botaoDeletar = document.createElement("button");
  botaoDeletar.classList.add("fa-solid", "fa-trash", "icones");
  botaoDeletar.addEventListener("click", () => {
    deletarItem(item, lista);
  });
  return [botaoEditar, botaoDeletar];
};

const editarItem = (item, textoAntigo) => {
  const novoTexto = prompt("Digite o novo texto do item:", textoAntigo);
  if (novoTexto.trim()) {
    item.textContent = novoTexto;
  }
};

const deletarItem = (item, lista) => {
  lista.removeChild(item);
};
