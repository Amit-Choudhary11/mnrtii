function preload(){
  i= loadImage("water_bottle.jpg");
}

function setup() {
  canvas = createCanvas(390, 300);
  canvas.position(570,350);
  video = createCapture(VIDEO);
  video.size(390,300)
  video.hide();

  classifier=ml5.imageClassifier('MobileNet', modelLoaded);


}

function draw(){
  image(i,0,0,390,300);
  classifier.classify(i, gotResult);

}


function modelLoaded(){
  console.log("model loaded");
}

function gotResult(error, results){
  if (error){
    console.error(error);
  }else{
    console.log(results);
     document.getElementById("accuracy").innerHTML= results[0].confidence.toFixed(3);
     document.getElementById("object").innerHTML = results[0].label;
   
  }
}