const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//thought i'd get fancy and make a banner...
function drawRibbon(x, y, width, height) {
    // create gradient
    const gradient = ctx.createLinearGradient(x, y, x + width, y);
    gradient.addColorStop(0, '#F593CC');
    gradient.addColorStop(1, '#F542AA');

    // Draw the ribbon shape
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width - 20, y);
    ctx.lineTo(x + width, y + height / 2);
    ctx.lineTo(x + width - 20, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + 20, y + height / 2);
    ctx.closePath();

    ctx.fillStyle = gradient;
    ctx.fill();
}
// calculate ribbon positioning
const ribbonWidth = canvas.width * 0.9;
const ribbonHeight = 80;
const ribbonX = (canvas.width - ribbonWidth) / 2;
const ribbonY = 20;


// i want five hearts.
// here's a helper function to draw the hearts at a specific position
// drawing accurate hearts are hard!
// it's not perfect but it's as close as I can get.
function drawHeart(x, y, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 40, y - 40, x - 40, y - 10, x, y + 30);
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 40, y - 40, x + 40, y - 10, x, y + 30);
    ctx.lineTo(x, y + 50);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// i picked these colors using the adobe colorwheel "analogous" setting
const colors = ['#9B2BF5', '#E25FF5', '#F5B1DB', '#F55FBD', '#F5323F'];

//spacing & centering
const heartWidth = 80;
const heartSpacing = 30;
const totalWidth = heartWidth * 5 + heartSpacing * 4;
const startX = (canvas.width - totalWidth);
const startY = canvas.height / 2 + 20;

//animation vars:
const heartScales = [1, 1, 1, 1, 1];
const maxScale = 1.3;
const minScale = 0.8;
const scaleSpeed = 0.02;

function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    drawRibbon(ribbonX, ribbonY, ribbonWidth, ribbonHeight);

    //draw L O V E across the ribbon banner
    const loveText = "L O V E";
    let lovefontSize = 72;
    ctx.font = `${lovefontSize}px Arial White`;
    let lovetextWidth = ctx.measureText(loveText).width;
    //calc correct font size
    while (lovetextWidth > ribbonWidth * 0.7 && lovefontSize > 10) {
        lovefontSize -= 2;
        ctx.font = `${lovefontSize}px Arial Black`;
        lovetextWidth = ctx.measureText(loveText).width;
    }
    // center on ribbon
    const lovetextX = ribbonX + (ribbonWidth - lovetextWidth) / 2;
    const lovetextY = ribbonY + ribbonHeight / 2 + lovefontSize / 3;
    ctx.fillStyle = 'white';
    ctx.fillText(loveText, lovetextX, lovetextY);

    for (let i = 0; i < 5; i++) {
        //sinewave pulse
        heartScales[i] += scaleSpeed * Math.sin(Date.now() * 0.002 + i * Math.PI / 2);
        heartScales[i] = Math.max(minScale, Math.min(maxScale, heartScales[i]));

        ctx.save();
        ctx.translate(startX + i * (heartWidth + heartSpacing) + heartWidth / 2, startY + heartWidth / 2);
        ctx.scale(heartScales[i], heartScales[i]);
        ctx.translate(-(startX + i * (heartWidth + heartSpacing) + heartWidth / 2), -(startY + heartWidth / 2));

        drawHeart(startX + i * (heartWidth + heartSpacing), startY, colors[i]);
        ctx.restore();
    }
    // red --> pink text gradient
    const textGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    textGradient.addColorStop(0, 'red');
    textGradient.addColorStop(1, 'pink');

    // i want the text to fit in the canvas
    let fontSize = 48;
    ctx.font = `${fontSize}px cursive`;
    let textWidth = ctx.measureText("Happy Valentine's Day!").width;

    while (textWidth > canvas.width * 0.9 && fontSize > 10) {
        fontSize -= 2;
        ctx.font = `${fontSize}px Arial`;
        textWidth = ctx.measureText("Happy Valentine's Day!").width;
    }

    // i want the text to sit at the bottom of the canvas
    ctx.fillStyle = textGradient;
    const textX = (canvas.width - textWidth) / 2;
    const textY = canvas.height - 20;
    ctx.fillText("Happy Valentine's Day!", textX, textY);

    requestAnimationFrame(animateHearts);
}



animateHearts(); 