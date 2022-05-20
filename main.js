x = 0;
y = 0;

screen_width = 0;
screen_height = 0;

draw_apple = "";

apple = "";
speak_data = "";
to_number = 0;

function preload() {
    apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecongnition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "I dont have forever so can u say somthing so i don't die of bordom..."
    recognition.start();
}

recognition.onResult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "You woke me up so now please PLEASE dont waste my time." + content;
    to_number = Number(content);
    if (Number.isInteger(to_number)) {
        document.getElementById("status").innerHTML = "Stared Drawing the Apple"
        draw_apple = "set";
    }
}

function setup() {
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;

    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0, 150);
}

function draw() {
    if (draw_apple == "set") {

        for (var i = 1; i <= to_number; i++) {

            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            image(apple, x, y, 50, 50, )
        }
        document.getElementById("status").innerHTML = to_number + "Apples Drawn";
        speak_data = to_number + "Apples Drawn";
        speak();
        draw_apple = "";
    }

    function speak() {

        var synth = window.speechSynthesis;

        var utterThis = new SpeechSynthesisUtterance(speak_data);

        synth.speak(utterThis);

        speak_data = "";


    }

}