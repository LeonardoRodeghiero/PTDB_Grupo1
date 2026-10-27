const loginForm = document.getElementById("loginForm");

const matriculaInput = document.getElementById("matricula");
const senhaInput = document.getElementById("senha");

const forgotPassword = document.getElementById("forgotPassword");

const confirmReset = document.getElementById("confirmReset");
const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

const message = document.getElementById("message");

const mostrarSenha = document.getElementById("mostrarSenha");

// Modal escondida ao iniciar
confirmReset.style.display = "none";


// ==============================
// LOGIN
// ==============================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const matricula = matriculaInput.value.trim();
    const senha = senhaInput.value.trim();

    if (matricula === "" || senha === "") {

        message.textContent = "Preencha a matrícula e a senha.";
        message.style.color = "red";
        return;

    }

    // Login de teste
    if (matricula === "12345" && senha === "123456") {

        message.textContent = "Login realizado com sucesso!";
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "tela_inicial.html";
        }, 1000);

    } else {

        message.textContent = "Matrícula ou senha inválidas.";
        message.style.color = "red";

    }

});


// ==============================
// ESQUECEU A SENHA?
// ==============================

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    confirmReset.style.display = "flex";

    message.textContent = "";

});


// ==============================
// BOTÃO SIM
// ==============================

btnSim.addEventListener("click", function () {

    emailjs.send(
        "service_7znz75m",
        "template_65ea8qf",
        {
            email: "eduardosouto525@gmail.com",
            mensagem: "Foi solicitada uma redefinição de senha."
        }
    )
    .then(function () {

        message.textContent = "E-mail enviado com sucesso!";
        message.style.color = "green";

    })
    .catch(function (erro) {

        console.log("ERRO EMAILJS:", erro);

        message.textContent =
            "Erro: " + JSON.stringify(erro);

        message.style.color = "red";

    });

        confirmReset.style.display = "none";
});


// ==============================
// BOTÃO NÃO
// ==============================

btnNao.addEventListener("click", function () {

    confirmReset.style.display = "none";

    message.textContent = "";

});

mostrarSenha.addEventListener("click", () => {

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        mostrarSenha.textContent = "🙈";
    } else {
        senhaInput.type = "password";
        mostrarSenha.textContent = "👁";
    }

});