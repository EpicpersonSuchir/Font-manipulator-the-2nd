function setup(){
    video = createCapture(VIDEO);
    video.size(600,600);
canvas = createCanvas(600,600);
canvas.position(600,125);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function gotPoses(results){
    if( results.length > 0){
        console.log(results);}}