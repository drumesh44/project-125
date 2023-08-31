function preloadO() {
    lipstik = loadImage("c:\Users\dell\Downloads\l1 (1).png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
}

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on(pose,getpose);

function draw() {
}

function take_snapshot() {
    save('myFilterImage.png')
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function getpose(results) {
    if(results.lenth>0) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nose x: "+noseX);
        console.log("nose y: "+nose.Y);
    }
}