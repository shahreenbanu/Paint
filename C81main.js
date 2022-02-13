var mouse_event = "empty";
var  lastmouse_x , lastmouse_y;
var color = "blue";
var width = 1 ;
var canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
/*ctx.beginPath();
 ctx.arc(100, 90, 40, 0, 2*Math.PI);
ctx.stroke(); */
canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

   /* mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log(mouse_x, mouse_y);
    circle(mouse_x, mouse_y);*/
   mouse_event = "mousedown"; 
}
canvas.addEventListener("mouseup", my_mouseup);



function my_mouseup(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);



function my_mouseleave(e){
    mouse_event = "mouseleave";
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
   
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown" ) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
       /* ctx.moveTo(lastmouse_x , lastmouse_y);   
        ctx.lineTo(mouse_x , mouse_y);*/
        ctx.arc(mouse_x , mouse_y, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
    lastmouse_x = mouse_x;
    lastmouse_y = mouse_y;
}
function circle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();  
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log("hello");
}




