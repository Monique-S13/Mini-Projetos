const linkC = document.getElementById("cadastro");

const formC = document.getElementById("form_cadastro");
const formL = document.getElementById("form_logar");

const slide = document.getElementById("slide");

// EVENTO DE CLIQUE FORMULÁRIO DE LOGIN
linkC.addEventListener('click', () => {
    formL.classList.toggle("sumir");
    formC.classList.toggle("sumir");

    slide.classList.toggle("mover");
});

// EVENTO DE CLIQUE FORMULÁRIO DE CADASTRO
const btnC = document.getElementById("btn_cadastrar");

btnC.addEventListener('click', () => {
    formC.classList.toggle("sumir");
    formL.classList.toggle("sumir");

    slide.classList.toggle("mover");
});

// EVENTO DE CLIQUE DO BOTÃO ESQUECEU A SENHA
const btnE = document.getElementById("esqueceu_senha");

btnE.addEventListener('click', () => {
    let avisoE = alert("Funcionalidade em desenvolvimento!");

    avisoE.style.backgroundColor = "#b8a176";
});



// const btnL = document.getElementById("btn_entrar");