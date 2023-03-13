Webcam.set({
    height:320,
    width:350,
    image_format:"jpeg",
    jpeg_quality:100
})
    
Webcam.attach("#camera")

function takePhoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='myimage' src='"+data_uri+"'/>"
    })
}

console.log("ml5 version is =",ml5.version)

prediction1=""
prediction2=""

function speak(){
    var synth=window.speechSynthesis
    speak_data1="The first prediction is"+prediction1
    speak_data2="The second prediction is"+prediction2
    utterThis=new SpeechSynthesisUtterance(speak_data1+speak_data2)
    synth.speak(utterThis)
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dH79q1Oqh/model.json",modelLoaded)

function modelLoaded(){
    console.log("Model is loaded")
}