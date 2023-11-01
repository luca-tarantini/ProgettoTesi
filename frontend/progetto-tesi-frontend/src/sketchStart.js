
import { percorso1 } from "./Percorsi/Percorso1/percorso1";

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

    let erba;
    let start;
    let finish;
    let setFinish;

    let setVincitoreLivello;
    let setStart;

    let punti = percorso1;
    let vertici;

    let giocatore1;
    let giocatore2;

    p.setup = function() {
        p.createCanvas(1000, window.innerHeight-70);
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
        erba = p.loadImage('./assets/erba.jpg');
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

        setStart = props.setStart;

        giocatore1 = props.giocatore1;

        giocatore2 = props.giocatore2;

        finish = props.finish;
        setFinish = props.setFinish;
    }

    function setLineDash(list) {
        p.drawingContext.setLineDash(list);
      }

    p.draw = function() {

    

        p.angleMode(p.DEGREES);

        // p.background(27, 11, 84);

        erba.resize(1000,0);
        p.background(erba);
        
        c = p.color(255, 255, 255);
        p.fill(c);
        p.textSize(20)
        p.strokeWeight(1);
        p.text(p.mouseX, 180, 40)
        p.text(p.mouseY, 240, 40)

        
        c = p.color(255,255,255);
        p.fill(c);
        p.textSize(25)
        p.stroke(0,0,0);
        p.strokeWeight(10);
        if(giro1 > giro2)
            p.text("GIRO "+giro1+"/3", 750, 50);
        else
            p.text("GIRO "+giro2+"/3", 750, 50);


        c = p.color(110, 110, 110);
        p.fill(c);


        p.stroke(115, 115, 115);

        p.strokeWeight(75);

        bandiera.resize(0,90);
        p.image(bandiera, 90, 30);

        // logo.resize(140,0);
        // p.image(logo, 850, 15);
        
        p.point(126, 138); //v
        p.point(338, 74); //v
        p.point(508, 138); //v
        p.point(673, 128); //v
        p.point(874, 205); //v
        p.point(824, 350); //v -- inizio cambiamento
        p.point(915, 460); //v
        p.point(736, 549); //v
        p.point(464, 445); //v
        p.point(152, 495); //v
        p.point(63, 179); //v
        
        

        p.strokeWeight(75);
        p.noFill();
        p.beginShape();
        p.curveVertex(126, 138);
        p.curveVertex(126, 138);
        p.curveVertex(338, 74);
        p.curveVertex(508, 138);
        p.curveVertex(673, 128);
        p.curveVertex(874, 205);
        p.curveVertex(824, 350);
        p.curveVertex(915, 460);
        p.curveVertex(736, 549);
        p.curveVertex(464, 445);
        p.curveVertex(152, 495); 
        p.curveVertex(63, 179);
        p.curveVertex(126, 138);
        p.curveVertex(126, 138);
        p.endShape();


        c = p.color(255, 255, 255);
        p.stroke(c);
        p.strokeWeight(5);
        p.noFill();
        setLineDash([30, 30]); //longer stitches
        p.beginShape();
        p.curveVertex(126, 138);
        p.curveVertex(126, 138);
        p.curveVertex(338, 74);
        p.curveVertex(508, 138);
        p.curveVertex(673, 128);
        p.curveVertex(874, 205);
        p.curveVertex(824, 350);
        p.curveVertex(915, 460);
        p.curveVertex(736, 549);
        p.curveVertex(464, 445);
        p.curveVertex(152, 495); 
        p.curveVertex(63, 179);
        p.curveVertex(126, 138);
        p.curveVertex(126, 138);
        p.endShape();

        


        

        // punti.map((el,index) => {
        //     if(index % 5 === 0)
        //     {
        //         c = p.color(255, 255, 255);
        //         p.stroke(c);
        //         p.strokeWeight(3);
        //         p.line(el.x, el.y, punti[index+2].x, punti[index+2].y);
        //     }
        //     })

        
        
        

        

        macchina1.resize(100,0);
        macchina2.resize(100,0);

        //p.image(macchina1, 7, 75);
        
        if(!finish)
        {
            if(Math.trunc(count1) > 50 && Math.trunc(count1) < 152)
            {
                
                p.push();
                // Scale -1, 1 means reverse the x axis, keep y the same.
                p.scale(-1, 1);
                
                // Because the x-axis is reversed, we need to draw at different x position.
                p.image(macchina1, -x1-50, y1-40);
                
                p.pop();

            }
            else
                p.image(macchina1, x1-50, y1-40);

            
            if(Math.trunc(count2) > 50 && Math.trunc(count2) < 152)
            {
                
                p.push();
                // Scale -1, 1 means reverse the x axis, keep y the same.
                p.scale(-1, 1);
                
                // Because the x-axis is reversed, we need to draw at different x position.
                p.image(macchina2, -x2-50, y2-20);
                
                p.pop();
            }
            else
                p.image(macchina2, x2-50, y2-20);
             
        }

        if(start)
        {
            count1 = count1 + speed1;
            count2 = count2 + speed2;
        }

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
            setFinish(true);
            p.noLoop();
            setVincitoreLivello("1");
            setStart(false);
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
            setFinish(true);
            p.noLoop();
            setVincitoreLivello("2");
            setStart(false);
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