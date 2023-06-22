prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function modelLoaded() {
    console.log('Model Loaded!')
}

function gotResult(error, results) {
    if (error) {
        console.error(error);

    }
    console.log(results);
    var result = results[0].label;
    document.getElementById('label').innerHTML = 'Nome:' + result.replace('_','');

    document.getElementById('confidence').innerHTML = 'precisão:' + Math.round(results[0].confidence * 100) + '%';
    utterThis = new SpeechSynthesisUtterance(result.replace('_', ''));
    synth.speak(utterThis);
}