music = "";
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
    music = loadSound("bensound-memories.mp3");
    song = loadSound("bensound-creativeminds.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500)
    fill("#FEDE00");
    stroke("#FEDE00");

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        song.pause();
        if(scoreLeftWrist = 0.2)
        {
            music.play();
            document.getElementById('name').innerText = 'Memories';
        }
    }else if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        music.pause();
        if(scoreRightWrist = 0.2)
        {
            song.play();
            document.getElementById('name').innerText = 'Creative Minds';
        }
    }
}

function modelLoaded() {

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[9].score;
        scoreLeftWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
    }
}
