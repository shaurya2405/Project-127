believer_song = "";
unstoppable_song = "";

function preload()
{
    believer_song = loadSound("music.mp3");
    unstoppable_song = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 530);
}

