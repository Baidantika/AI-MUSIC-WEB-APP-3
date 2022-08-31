song_1="";
song_2="";
leftWrist_X=0;
leftWrist_Y=0;
rightWrist_X=0;
rightWrist_Y=0;
function setup(){
    canvas=createCanvas(500,500);
canvas.position(500,200);

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Model is initialized!');
}
function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,500,500);
}
//function songname{
    //song.play();
//}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist_X=results[0].pose.leftWrist.x;
        leftWrist_Y=results[0].pose.leftWrist.y;
        console.log("leftWrist_X = "+leftWrist_X+"leftWrist_Y= "+leftWrist_Y);
        rightWrist_X=results[0].pose.rightWrist.x;
        rightWrist_Y=results[0].pose.rightWrist.y;
        console.log("rightWrist_X="+rightWrist_X+"rightWrist_Y="+rightWrist_Y);
    }
}