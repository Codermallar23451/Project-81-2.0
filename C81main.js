canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

color="blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,100,0,2* Math.PI);
ctx.stroke();

color="black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(210,200,100,0,2* Math.PI);
ctx.stroke();

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(220,200,100,0,2* Math.PI);
ctx.stroke();

color="yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(205,210,100,0,2* Math.PI);
ctx.stroke();

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(215,210,100,0,2* Math.PI);
ctx.stroke();