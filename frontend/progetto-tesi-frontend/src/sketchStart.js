function sketchStart(p) {

    let x = 50;
    let y = 50;

    let macchina1;
    let x1 = 50;
    let speed1;

    let macchina2;
    let x2 = 50;
    let speed2;

    let road1;

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
        macchina2 = p.loadImage('./assets/2.png');
        road1 = p.loadImage('./assets/road1.png');
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

        if(props.speed1)
            speed1 = props.speed1;
        else
            speed1 = 0.5;

        if(props.speed2)
            speed2 = props.speed2;
        else
            speed2 = 0.5;
    }

    p.draw = function() {

        
        













        p.angleMode(p.DEGREES);

        p.background(26,83,173);
        c = p.color(255, 255, 255);
        p.fill(c);


        p.stroke(255, 255, 255);

        p.strokeWeight(17);
        p.point(84, 91);
        p.point(68, 19);
        p.point(21, 17);
        p.point(32, 91);
        
        p.strokeWeight(1);
        p.noFill();
        p.beginShape();
        p.curveVertex(84, 91);
        p.curveVertex(84, 91);
        p.curveVertex(68, 19);
        p.curveVertex(21, 17);
        p.curveVertex(32, 91);
        p.curveVertex(32, 91);
        p.endShape();

        // p.strokeWeight(3);
        
        // p.beginShape(p.LINES);
        // p.vertex(10, 35);
        // p.vertex(90, 35);
        // p.vertex(10, 65);
        // p.vertex(90, 65);
        // p.vertex(35, 10);
        // p.vertex(35, 90);
        // p.vertex(65, 10);
        // p.vertex(65, 90);
        // p.endShape();

        //p.rect((window.innerWidth/3)*2/2, window.innerHeight/2, 400, 400, 50)

        // p.imageMode(p.CENTER);
        // road1.resize(850,0);
        // p.image(road1,(window.innerWidth/3)*2/2, window.innerHeight/2);

        // c = p.color(87, 98, 117);
        // p.fill(c);
        //p.rect(window.innerWidth/2, window.innerHeight-45, window.innerWidth, 150)

        
        // c = p.color(235,0,0);
        // p.fill(h);
        // p.ellipse(x, y, 70, 70);

        if(x1 !== (window.innerWidth/3)*2)
        {
            x1=x1+speed1;
        }
        if(x2 !== (window.innerWidth/3)*2)
        {
            x2=x2+speed2;
        }

        

        macchina1.resize(50,0);
        macchina2.resize(200,0);
        p.image(macchina1, 7, 75);
        p.image(macchina2, x2, window.innerHeight-80);

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