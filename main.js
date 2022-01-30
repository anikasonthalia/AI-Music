song = "";
music = "";

function preload()
{
    song = loadSound("bensound-creativeminds.mp3");
    music = loadSound("bensound-memories.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500)
}