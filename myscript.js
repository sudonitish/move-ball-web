let b = document.querySelectorAll("button");
const item = document.getElementById("animate");
const box = document.getElementById("box");
let tp = 190;
let lf = 190;
let id = null;
b.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if (i == 0) {
            upleft();
            
        }
        else if (i == 1) {
            up();
        }
        else if (i == 2) {
            upright();
        }
        else if (i == 3) {
            left();
        }
        else if (i == 4) {
            center();
        }
        else if (i == 5) {
            right();
        }
        else if (i == 6) {
            downleft();
        }
        else if (i == 7) {
            down();
        }
        else if (i == 8) {
            downright();
        }
    });
});
function up() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
       if(tp==0){
           clearInterval(id);
       }
       else{
       tp--;
       }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}

function down() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
       if(tp==380){
           clearInterval(id);
       }
       else{
       tp++;
       }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}
function left() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
       if(lf==0){
           clearInterval(id);
       }
       else{
       lf--;
       }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}
function right() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
       if(lf==380){
           clearInterval(id);
       }
       else{
       lf++;
       }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}
function upleft() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
       if(lf==0||tp==0){
           clearInterval(id);
       }
       else{
       lf--;
       tp--;
       }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}

function upright() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if(lf==380||tp==0){
            clearInterval(id);
        }
        else{
        lf++;
        tp--;
        }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}
function downleft() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
       if(lf==0||tp==380){
           clearInterval(id);
       }
       else{
       lf--;
       tp++;
       }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}

function downright() {
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if(lf==380||tp==380){
            clearInterval(id);
        }
        else{
        lf++;
        tp++;
        }
        item.style.top = tp + "px";
        item.style.left = lf + "px";

    }
}
function center(){
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if(lf==190&&tp==190){
            clearInterval(id);
        }
        else{
            if(lf>190){
            lf--;
            }
            if(lf<190){
            lf++
            }
            if(tp>190){
                tp--;
            }
            if(tp<190){
                tp++;
            }
        }
        item.style.top = tp + "px";
        item.style.left = lf + "px";
    
}
}
    
