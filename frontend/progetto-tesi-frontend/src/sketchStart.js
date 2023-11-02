
import { percorso1 } from "./Percorsi/Percorso1/percorso1";
import { vertici1 } from "./Percorsi/Percorso1/vertici1";

import { percorso2 } from "./Percorsi/Percorso2/percorso2";
import { vertici2 } from "./Percorsi/Percorso2/vertici2";

import { percorso3 } from "./Percorsi/Percorso3/percorso3";
import { vertici3 } from "./Percorsi/Percorso3/vertici3";

function sketchStart(p) {
    let macchina1;
    let x1 = 126;
    let y1 = 138;
    let count1 = 0;
    let speed1;

    let macchina2;
    let x2 = 126;
    let y2 = 138;
    let count2 = 0;
    let speed2;

    let c;

    let bandiera;
    let giro1 = 1;
    let giro2 = 1;

    let erba;
    let start;
    let finish;
    let setFinish;

    let setVincitoreLivello;
    let setStart;

    let punti;
    let vertici;

    let nGiri;

    p.setup = function() {
        p.createCanvas(1000, window.innerHeight-70);
        p.rectMode(p.CENTER)
        p.noStroke();
        p.line(15, 25, 70, 90);
    }

    p.updateWithProps = props => {
        switch(props.percorso)
        {
            case "1":
                punti = percorso1;
                vertici = vertici1;
                break;
            case "2":
                punti = percorso2;
                vertici = vertici2;
                break;
            case "3":
                punti = percorso1;
                vertici = vertici3;
                break;
            default:
                break;
        }

        nGiri = props.nGiri;

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

        finish = props.finish;
        setFinish = props.setFinish;
    }

    p.preload = function(){
        macchina1 = p.loadImage('./assets/1.png');
        macchina2 = p.loadImage('./assets/2.png');
        bandiera = p.loadImage('./assets/bandiera.png');
        erba = p.loadImage('./assets/erba.jpg');
    }

    function setLineDash(list) {
        p.drawingContext.setLineDash(list);
      }

    p.draw = function() {

    

        p.angleMode(p.DEGREES);

        // p.background(27, 11, 84);

        erba.resize(1000,0);
        p.background(erba);
        
        // c = p.color(255, 255, 255);
        // p.fill(c);
        // p.textSize(20)
        // p.strokeWeight(1);
        // p.text(p.mouseX, 180, 40)
        // p.text(p.mouseY, 240, 40)

        
        c = p.color(255,255,255);
        p.fill(c);
        p.textSize(25)
        p.stroke(0,0,0);
        p.strokeWeight(10);
        if(giro1 > giro2)
            p.text("GIRO "+giro1+"/"+nGiri, 750, 50);
        else
            p.text("GIRO "+giro2+"/"+nGiri, 750, 50);


        c = p.color(115, 115, 115); //gray
        p.fill(c);


        p.stroke(115, 115, 115); //gray
        // p.stroke(255, 0, 0); 

        p.strokeWeight(75);

        bandiera.resize(0,90);
        p.image(bandiera, 90, 30);

        // logo.resize(140,0);
        // p.image(logo, 850, 15);
        
        vertici.map((el) => {
            p.point(el.x,el.y);
            })

        // p.point(126, 138); //v
        // p.point(183, 129); //v
        // p.point(243, 317); //v
        // p.point(508, 138); //v
        // p.point(598, 309); //v
        // p.point(829, 169); //v
        // p.point(915, 460); //v
        // p.point(736, 549); //v
        // p.point(464, 545); //v
        // p.point(152, 495); //v
        // p.point(63, 250); //v
        
        

        p.strokeWeight(75);
        p.noFill();
        p.beginShape();

        vertici.map((el,index) => {
            if(index === 0 || index === vertici.length-1)
            {
                p.curveVertex(el.x, el.y);
                p.curveVertex(el.x, el.y);
            }
            else
                p.curveVertex(el.x, el.y);
            })

        // p.curveVertex(126, 138);
        // p.curveVertex(126, 138);
        // p.curveVertex(183, 129);
        // p.curveVertex(243, 317);
        // p.curveVertex(508, 138);
        // p.curveVertex(598, 309);
        // p.curveVertex(829, 169);
        // p.curveVertex(915, 460);
        // p.curveVertex(736, 549);
        // p.curveVertex(464, 545);
        // p.curveVertex(152, 495); 
        // p.curveVertex(63, 250);
        // p.curveVertex(126, 138);
        // p.curveVertex(126, 138);
        p.endShape();


        c = p.color(255, 255, 255);
        p.stroke(c);
        p.strokeWeight(3);
        p.noFill();
        setLineDash([20, 20]); //longer stitches
        p.beginShape();
        vertici.map((el,index) => {
            if(index === 0 || index === vertici.length-1)
            {
                p.curveVertex(el.x, el.y);
                p.curveVertex(el.x, el.y);
            }
            else
                p.curveVertex(el.x, el.y);
            })

        // p.curveVertex(126, 138);
        // p.curveVertex(126, 138);
        // p.curveVertex(183, 129);
        // p.curveVertex(243, 317);
        // p.curveVertex(508, 138);
        // p.curveVertex(598, 309);
        // p.curveVertex(829, 169);
        // p.curveVertex(915, 460);
        // p.curveVertex(736, 549);
        // p.curveVertex(464, 545);
        // p.curveVertex(152, 495); 
        // p.curveVertex(63, 250);
        // p.curveVertex(126, 138);
        // p.curveVertex(126, 138);
        p.endShape();
        

        macchina1.resize(100,0);
        macchina2.resize(100,0);

        //p.image(macchina1, 7, 75);
        
        if(!finish)
        {
            if((Math.trunc(count1) > 50 && Math.trunc(count1) < 62) || (Math.trunc(count1) > 77 && Math.trunc(count1) < 176))
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

            
            if((Math.trunc(count2) > 50 && Math.trunc(count2) < 62)  || (Math.trunc(count2) > 77 && Math.trunc(count2) < 176))
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
        else if(giro1 <= nGiri-1)
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
        else if(giro2 <= nGiri-1)
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
    }
}

export default sketchStart;