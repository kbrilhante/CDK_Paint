const ctx = canvas.getContext("2d");

const seletorCor = document.getElementById("colorOptions");
const btncor = document.getElementById("btnColor");
const txtLinha = document.getElementById("txtLine");

let selecaoCor;
let hue;
let cor;
let linha;

let pX, pY, upX, upY;
let eventoMouse;

inicializar();

function inicializar() {
    canvas.addEventListener("mousedown", novoEventoMouse);
    canvas.addEventListener("mouseleave", novoEventoMouse);
    canvas.addEventListener("mouseup", novoEventoMouse);
    canvas.addEventListener("mousemove", desenhaMouse);
    canvas.addEventListener("touchstart", touchStart);
    canvas.addEventListener("touchmove", desenhaTouch);
    seletorCor.addEventListener("change", mudaCor);

    selecaoCor = seletorCor.value;
    hue = 0;
    linha = 4;
    txtLinha.value = linha;
}

function novoEventoMouse(e) {
    eventoMouse = e.type;
    // console.log(eventoMouse);
}

function touchStart(e) {
    pX = e.touches[0].clientX - (canvas.offsetLeft + canvas.clientLeft);
    pY = e.touches[0].clientY - (canvas.offsetTop + canvas.clientTop);
}

function desenhaMouse(e) {
    // console.log(e);

    upX = pX;
    upY = pY;

    pX = e.offsetX;
    pY = e.offsetY;

    if (eventoMouse === "mousedown") {
        desenha();
    }
}

function desenhaTouch(e) {
    // console.log(e);

    const offsetX = e.touches[0].clientX - (canvas.offsetLeft + canvas.clientLeft);
    const offsetY = e.touches[0].clientY - (canvas.offsetTop + canvas.clientTop);

    upX = pX;
    upY = pY;

    pX = offsetX;
    pY = offsetY;

    desenha();
}

function desenha() {
    linha = txtLinha.value;
    ctx.beginPath();
    ctx.lineWidth = linha;
    ctx.strokeStyle = defineCor();
    ctx.moveTo(upX, upY);
    ctx.lineTo(pX, pY);
    ctx.stroke();
}

function mudaCor() {
    selecaoCor = seletorCor.value;
    if (selecaoCor === "color") {
        btncor.value = ctx.strokeStyle;
        btncor.style.display = "inline-block";
    } else {
        btncor.style.display = "none";
    }
}

function defineCor() {
    switch (selecaoCor) {
        case 'rainbow':
            cor = "hsl(" + hue + ", 100%, 50%)";
            hue++
            if(hue >= 360) {
                hue = 0;
            }
            // console.log(cor);
            break;
        case 'random':
            cor = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
            // console.log(cor);
            break;
        default:
            cor = btncor.value;
    }
    return cor;
}

function limpaTela() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}