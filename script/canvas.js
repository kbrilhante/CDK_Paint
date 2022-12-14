const canvas = document.querySelector("canvas");
const width = 98; // 98%
const height = 96; // 98%

inicialize();

function inicialize() {
    addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
}

function resizeCanvas() {
    const content = document.getElementsByClassName("contentDiv");
    const container = document.querySelector(".cnvContent");
    let contentHeights = 0;
    for (let i = 0; i < content.length; i++) {
        contentHeights += content[i].clientHeight;
    }
    canvas.width = container.clientWidth * (width/100);
    canvas.height = (window.innerHeight - contentHeights) * (height/100);;
}