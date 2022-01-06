Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML='<img id="img1" src="'+data_url +'"/>';
});
}

console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kuDZS-j8H/', modeloaded);
function modeloaded(){
    console.log('modeloaded');
}