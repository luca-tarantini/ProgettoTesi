function sketchStart(p) {

    let x = 50;
    let y = 50;
    let macchina1;
    let car1Obj;
    let road;

    let c;
    let h = p.color(0,0,0);

    p.setup = function() {
        p.createCanvas((window.innerWidth/3)*2, window.innerHeight);
        p.rectMode(p.CENTER)
        p.noStroke();
        //p.debugMode();
        p.line(15, 25, 70, 90);
    }

    p.preload = function(){
        macchina1 = p.loadImage('./assets/1.png');
        road = p.loadModel('./assets/road.obj', true);
        car1Obj = p.loadModel('./assets/Car1.obj', true);
        
    }

    p.updateWithProps = props => {
        if(props.color)
            {
                console.log(props.color);
                h = p.color(0,props.color,0);
            }
        else
            c = p.color(235,0,0);
    }

    p.draw = function() {
        p.angleMode(p.DEGREES);

        p.background(26,83,173);
        c = p.color(255, 255, 255);
        p.fill(c);
        p.rect((window.innerWidth/3)*2/2, window.innerHeight/2, 400, 400, 50)
        c = p.color(87, 98, 117);
        p.fill(c);
        p.rect(window.innerWidth/2, window.innerHeight-45, window.innerWidth, 150)

        
        c = p.color(235,0,0);
        p.fill(h);
        p.ellipse(x, y, 70, 70);

        if(x !== (window.innerWidth/3)*2)
            x=x+0.5;
        

        macchina1.resize(200,0);
        p.image(macchina1, x, window.innerHeight-130);

        // p.camera(1000, -50, 500)
        
        
        // p.push()
        // p.rotateX(90)
        // p.rotateZ(45);
        // p.directionalLight(255,255,255,0,0,1)
        // p.ambientLight(100)
        // p.normalMaterial()
        // // p.emissiveMaterial(130, 230, 0);
        // //p.stroke("green")
        // p.translate(500, -x)
        // p.model(car1Obj);
        // p.pop()

        
        
        // p.push()
        // p.camera(300, -50, 100)
        // // let c = p.color(0,0,0);
        // // p.fill(c)
        // p.model(road);  
        // p.pop()

        



        
    }
}

export default sketchStart;