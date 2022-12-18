const canvas = document.querySelector("canvas"); // gets canvas from html

initialize();

function initialize() {
    addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

function resizeCanvas() {
    const viewport = getViewport();
    const body = document.querySelector('body');
    const container = document.querySelector(".canvas-container");
    const bodyContentList = document.querySelectorAll(".canvas-body-content");

    let availableWidth = viewport.width;
    availableWidth -= getYMeasurements(body)
    availableWidth -= getXMeasurements(container);
    availableWidth -= getXMeasurements(canvas);
    // console.log('available width', availableWidth);
    
    canvas.width = availableWidth - 10;
    
    let availableHeight = viewport.height;
    availableHeight -= getYMeasurements(body);
    availableHeight -= getYPaddings(body);
    availableHeight -= getYMeasurements(container);
    availableHeight -= getYPaddings(container);
    availableHeight -= getYMeasurements(canvas);
    availableHeight -= getYPaddings(canvas);
    for (let i = 0; i < bodyContentList.length; i++) {
        const bodyContent = bodyContentList[i];
        const cs = getComputedStyle(bodyContent);
        availableHeight -= parseInt(cs.height);
        availableHeight -= getYMeasurements(bodyContent);
        // console.log('available height', availableHeight);
    }
    canvas.height = availableHeight - 10;
}

function getXMeasurements(element) {
    let xMeasurements = 0;
    const computedStyle = getComputedStyle(element);
    xMeasurements += parseInt(computedStyle.marginLeft);
    xMeasurements += parseInt(computedStyle.marginRight);
    xMeasurements += parseInt(computedStyle.borderLeftWidth);
    xMeasurements += parseInt(computedStyle.borderRightWidth);
    xMeasurements += parseInt(computedStyle.paddingLeft);
    xMeasurements += parseInt(computedStyle.paddingRight);
    return xMeasurements;
}

function getYMeasurements(element) {
    let yMeasurements = 0;   
    const computedStyle = getComputedStyle(element);
    yMeasurements += parseInt(computedStyle.marginTop);
    yMeasurements += parseInt(computedStyle.marginBottom);
    yMeasurements += parseInt(computedStyle.borderTopWidth);
    yMeasurements += parseInt(computedStyle.borderBottomWidth);
    return yMeasurements;
}

function getYPaddings(element) {
    let yMeasurements = 0;   
    const computedStyle = getComputedStyle(element);
    yMeasurements += parseInt(computedStyle.paddingTop);
    yMeasurements += parseInt(computedStyle.paddingBottom);
    return yMeasurements;
}

function getViewport() {
    let vp = {};

    if (typeof window.innerWidth != 'undefined') {
        vp.width = window.innerWidth;
        vp.height = window.innerHeight;
    } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        vp.width = document.documentElement.clientWidth;
        vp.height = document.documentElement.clientHeight;
    } else {
        vp.width = document.querySelector('body').clientWidth;
        vp.height = document.querySelector('body').clientHeight;
    }

    console.log(vp);
    return vp;
}