var video;
var gSlider; 

// Partie exécutée une seule fois (initialisation)
function setup() {
    createCanvas(640, 480); 
    video = createCapture(VIDEO);
    video.size(120, 80);
    video.hide(); 
    gSlider = createSlider(50, 1000, 50);
    gSlider.position(20, 20);

}

// Partie qui tourne en boucle
function draw() {
    background(0); 
    video.loadPixels();
    for (let i=0; i<120*80; i++){
        video.pixels[0+4*i] = 0;
        video.pixels[1+4*i] = 0;
    }
    video.updatePixels(); 
    image(video, 0, 0, 120, 80 );
}




//
//for (let i=0; i<5000; i++){
//    video.pixels[1+4*i] = 0;
//}
//
//
//i = 0  => video.pixels[1+4*0] = 0;
//i = 1  => video.pixels[1+4*1] = 0;
//i = 2  => video.pixels[1+4*2] = 0;
//i = 3  => video.pixels[1+4*3] = 0;
//.
//.
//.
//i = 4999 => video.pixels[1+4*4999] = 0;
//
//


















