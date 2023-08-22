img1="";
status="";
Objects=[];

function preload(){
    img1=loadImage("english-dunya-school-students-classroom.jpg")
}

function setup(){

    c1=createCanvas(640,420);
    c1.center()
    mymodel=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="Finding Objects 🔎🔍"
}

function modelLoaded(){
console.log("APKA MODEL LOAD HO CHUKA HAI")
status=true
mymodel.detect(img1,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error)
    }

    else{
        console.log(results)
        Objects=results
    }
}

function draw(){
image (img1,0,0,640,420)

if(status!=""){
    for(i=0;i<Objects.length;i++){
        document.getElementById("status").innerHTML="Objects detected"
p=floor(Objects[i].confidence*100) 
stroke("pink") 
text(Objects[i].label+" "+p+" %",Objects[i].x,Objects[i].y)
noFill()
stroke("black")
rect (Objects[i].x-50,Objects[i].y,Objects[i].width,Objects[i].height)
    }
}
}