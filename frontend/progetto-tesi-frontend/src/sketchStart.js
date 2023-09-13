function sketchStart(p) {

    let x = 50;
    let y = 50;
    let macchina1;

    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.rectMode(p.CENTER)
        p.noStroke();
        //p5.line(15, 25, 70, 90);
    }

    p.preload = function(){
        macchina1 = p.loadImage("./assets/1.png");
    }

    p.draw = function() {
        p.background(26,83,173);
        let c = p.color(255, 255, 255);
        p.fill(c);
        p.rect(window.innerWidth/2, window.innerHeight/2, 400, 400, 50)
        c = p.color(87, 98, 117);
        p.fill(c);
        p.rect(window.innerWidth/2, window.innerHeight-45, window.innerWidth, 150)

        //let ctx = p.getContext("2d");

        // let gradient = p.createLinearGradient(window.innerWidth/2-200, window.innerHeight/2-200, window.innerWidth/2+200, window.innerHeight/2+200)
        // gradient.addColorStop(0, "blue")
        // gradient.addColorStop(1, "red")

        // p.fillStyle = gradient;
        
        c = p.color(235,0,0);
        p.fill(c);
        p.ellipse(x, y, 70, 70);
        if(x !== window.innerWidth)
          x=x+5;
        //let gradient = p.createLinearGradient()

        macchina1.resize(250,0);
        p.image(macchina1, x, window.innerHeight-130);
    }
}

export default sketchStart;