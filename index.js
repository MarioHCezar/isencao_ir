const form = document.querySelector("form");
const valor = document.querySelector("#valor");
const cep = document.querySelector("#cep");
const endereco = document.querySelector("#endereco");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");
const documento = document.querySelector("#documento");
const botao = document.querySelector(".botao");
const pf = document.querySelector("#checkCPF");
const pj = document.querySelector("#checkCNPJ");
const select = document.querySelector("select");
const matricula = document.querySelector("#matricula");

const nome_dec = document.querySelector(".nome");
const endereco_dec = document.querySelector(".endereco");
const documento_dec = document.querySelector(".documento");
const processo_dec = document.querySelector(".processo");
const vara_dec = document.querySelector(".vara");
const secao_dec = document.querySelector(".secao");
const valor_dec = document.querySelector(".valor");
const extenso_dec = document.querySelector(".extenso");
const local_dec = document.querySelector(".local");
const data_dec = document.querySelector(".data");
const matricula_dec = document.querySelector(".matricula_dec");

botao.classList.add("botao__disabled");

function checkInputs(inputs) {
  let filled = true;
  inputs.forEach(function (input) {
    if (input.value === "") {
      filled = false;
    }
  });
  return filled;
}

let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (checkInputs(inputs)) {
      botao.disabled = false;
      botao.classList.remove("botao__disabled");
    } else {
      botao.disabled = true;

      botao.classList.add("botao__disabled");
    }
  });
});

botao.addEventListener("click", (e) => {
  e.preventDefault();
  nome_dec.innerText = form.nome.value;
  endereco_dec.innerText = `${form.endereco.value}, ${form.numero.value}, ${form.bairro.value}, ${form.cidade.value}/${form.uf.value}`;
  documento_dec.innerText = form.documento.value;
  processo_dec.innerText = form.processo.value;
  vara_dec.innerText = form.vara.value;
  secao_dec.innerText = `${form.secao.value}, `;
  valor_dec.innerText = form.valor.value;
  let extenso = form.valor.value;
  extenso_dec.innerText = extenso.extenso(",");
  if (select.options[select.selectedIndex].value === "cpf") {
    pf.checked = true;
    pj.checked = false;
  } else {
    pj.checked = true;

    pf.checked = false;
  }

  local_dec.innerText = `${form.local.value}, `;
  let data = new Date(form.data.value);
  data_dec.innerText = `${data.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
    year: "numeric",
  })}.`;
  matricula_dec.innerText = matricula.value;
  window.print();
});

document.addEventListener("keydown", (event) => {
  // Verifica se Ctrl+P (ou Cmd+P no macOS) foi pressionado
  if ((event.ctrlKey || event.metaKey) && event.key === "p") {
    event.preventDefault(); // Impede a abertura da janela de impressão
  }
});
