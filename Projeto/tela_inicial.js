const videos = [

    {
        titulo: "Introdução à Programação",
        categoria: "Tecnologia",
        arquivo: ""
    },

    {
        titulo: "Matemática Básica",
        categoria: "Educação",
        arquivo: ""
    }

];

const listaVideos =
document.getElementById("listaVideos");

const uploadForm =
document.getElementById("uploadForm");

const uploadMessage =
document.getElementById("uploadMessage");

const pesquisa =
document.getElementById("pesquisa");

const filtroCategoria =
document.getElementById("filtroCategoria");

const btnUpload =
document.getElementById("btnUpload");

const btnInicio =
document.getElementById("btnInicio");

const btnVideos =
document.getElementById("btnVideos");

const btnSair =
document.getElementById("btnSair");

const uploadSection =
document.getElementById("uploadSection");

const btnLogin =
document.getElementById("btnLogin");

function carregarVideos(){

    listaVideos.innerHTML = "";

    const textoPesquisa =
    pesquisa.value.toLowerCase();

    const categoriaSelecionada =
    filtroCategoria.value;

    const videosFiltrados =
    videos.filter(video => {

        const tituloMatch =
        video.titulo.toLowerCase()
        .includes(textoPesquisa);

        const categoriaMatch =
        categoriaSelecionada === ""
        ||
        video.categoria === categoriaSelecionada;

        return tituloMatch &&
        categoriaMatch;
    });

    videosFiltrados.forEach(video => {

        const card =
        document.createElement("div");

        card.classList.add("video-card");

        card.innerHTML = `

            <h3>${video.titulo}</h3>

            <p>
                Categoria:
                ${video.categoria}
            </p>

        `;

        if(video.arquivo !== ""){

            const player =
            document.createElement("video");

            player.controls = true;

            player.src =
            video.arquivo;

            card.appendChild(player);

        }else{

            const texto =
            document.createElement("p");

            texto.textContent =
            "Vídeo aguardando upload.";

            card.appendChild(texto);
        }

        listaVideos.appendChild(card);

    });

}
btnLogin.addEventListener(
    "click",
    () => {

        window.location.href =
        "tela_login.html";

    }
);

pesquisa.addEventListener(
    "input",
    carregarVideos
);

filtroCategoria.addEventListener(
    "change",
    carregarVideos
);

btnUpload.addEventListener(
    "click",
    () => {

        uploadSection.scrollIntoView({
            behavior:"smooth"
        });

    }
);

btnInicio.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }
);



btnVideos.addEventListener(
    "click",
    () => {

        document
        .querySelector(".videos-section")
        .scrollIntoView({
            behavior:"smooth"
        });

    }
);

btnSair.addEventListener(
    "click",
    () => {

        window.location.href =
        "tela_login.html";

    }
);


uploadForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const titulo =
        document.getElementById("titulo").value;

        const categoria =
        document.getElementById("categoria").value;

        const video =
        document.getElementById("video")
        .files[0];

        const videoUrl =
        URL.createObjectURL(video);

        videos.push({

            titulo:titulo,

            categoria:categoria,

            arquivo:videoUrl

        });

        carregarVideos();

        uploadMessage.textContent =
        "Vídeo enviado com sucesso!";

        uploadForm.reset();

    }
);

carregarVideos();