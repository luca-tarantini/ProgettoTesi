
import { percorso1 } from "./Percorsi/percorso1";

function sketchStart(p) {

    let x = 50;
    let y = 50;

    let macchina1;
    let x1 = 126;
    let y1 = 138;
    let count1 = 0;
    let speed1=1;

    let macchina2;
    let x2 = 126;
    let y2 = 138;
    let count2 = 0;
    let speed2 =1;

    let road1;

    let car1Obj;
    let road;

    let c;
    let h = p.color(0,0,0);

    let bandiera;
    let giro1 = 1;
    let giro2 = 1;

    let start;
    let finish = false;

    let setVincitoreLivello;

    const punti = percorso1;

    p.setup = function() {
        p.createCanvas(1000, window.innerHeight);
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
        bandiera = p.loadImage('./assets/bandiera.png');
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
            speed1 = 0;

        if(props.speed2)
            speed2 = props.speed2;
        else
            speed2 = 0;

        start = props.start;

        setVincitoreLivello = props.setVincitoreLivello;
    }

    p.draw = function() {

    

        p.angleMode(p.DEGREES);

        p.background(26,83,173);

        // c = p.color(255, 255, 255);
        // p.fill(c);
        // p.textSize(20)
        // p.strokeWeight(1);
        // p.text(p.mouseX, 200, 50)
        // p.text(p.mouseY, 260, 50)

        if(start)
        {
            c = p.color(255, 255, 255);
            p.fill(c);
            p.textSize(20)
            p.strokeWeight(1);
            if(giro1 > giro2)
                p.text("GIRO "+giro1+"/3", 750, 50);
            else
                p.text("GIRO "+giro2+"/3", 750, 50);
        }


        c = p.color(255, 255, 255);
        p.fill(c);


        p.stroke(255, 255, 255);

        p.strokeWeight(20);

        bandiera.resize(0,75);
        p.image(bandiera, 100, 63);
        
        p.point(126, 138); //v
        // p.point(156, 126); 
        // p.point(184, 115);
        // p.point(209, 105);
        // p.point(232, 97);
        // p.point(257, 89);
        // p.point(282, 81);
        // p.point(309, 76);
        p.point(338, 74); //v
        p.point(508, 138); //v
        p.point(673, 128); //v
        p.point(874, 205); //v

        p.point(824, 350); //v
        p.point(561, 276); //v
        p.point(170, 296); //v
        p.point(63, 179); //v
        
        

        p.strokeWeight(20);
        p.noFill();
        p.beginShape();
        p.curveVertex(126, 138);
        p.curveVertex(126, 138);
        p.curveVertex(338, 74);
        p.curveVertex(508, 138);
        p.curveVertex(673, 128);
        p.curveVertex(874, 205);
        p.curveVertex(824, 350);
        p.curveVertex(561, 276);
        p.curveVertex(170, 296);
        p.curveVertex(63, 179);
        p.curveVertex(126, 138);
        p.curveVertex(126, 138);
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

        
        

        

        macchina1.resize(150,0);
        macchina2.resize(150,0);
        //p.image(macchina1, 7, 75);
        if(start && !finish)
        {
            p.image(macchina1, x1-75, y1-43);
            p.image(macchina2, x2-75, y2-33);
        }

        count1 = count1 + speed1;
        count2 = count2 + speed2;

        if(count1 < punti.length)
        {
            x1 = punti[Math.trunc(count1)].x;
            y1 = punti[Math.trunc(count1)].y;
        }
        else if(giro1 <= 2)
        {
            giro1++;
            count1 = 0;
        }
        else
        {
            c = p.color(255, 255, 255);
            p.fill(c);
            p.textSize(20)
            p.strokeWeight(1);
            p.text("WIN GIOCATORE 1", 500, 50);
            finish = true;
            p.noLoop();
            setVincitoreLivello("1");
        }

        if(count2 < punti.length)
        {
            x2 = punti[Math.trunc(count2)].x;
            y2 = punti[Math.trunc(count2)].y;
        }
        else if(giro2 <= 2)
        {
            giro2++;
            count2 = 0;
        }
        else
        {
            c = p.color(255, 255, 255);
            p.fill(c);
            p.textSize(20)
            p.strokeWeight(1);
            p.text("WIN GIOCATORE 2", 500, 50);
            finish = true;
            p.noLoop();
            setVincitoreLivello("2");
        }

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