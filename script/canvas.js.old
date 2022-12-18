const canvas = document.querySelector("canvas");
const width = 98; // 98%
const height = 100; // 98%

inicialize();

function inicialize() {
    addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
}

function resizeCanvas() {
    const contents = document.getElementsByClassName("contentDiv");
    const container = document.querySelector(".cnvContent");
    let contentHeights = 0;
    for (let i = 0; i < contents.length; i++) {
        const element = contents[i];
        const computedStyle = window.getComputedStyle(element);
        contentHeights += element.clientHeight;
        contentHeights += parseInt(computedStyle.paddingTop, 10);
        contentHeights += parseInt(computedStyle.paddingBottom, 10);
        contentHeights += parseInt(computedStyle.marginTop, 10);
        contentHeights += parseInt(computedStyle.marginBottom, 10);
        contentHeights += parseInt(computedStyle.borderTopWidth, 10);
        contentHeights += parseInt(computedStyle.borderBottomWidth, 10);
    }
    canvas.width = container.clientWidth * (width/100);
    canvas.height = (window.innerHeight - contentHeights) * (height/100);
}