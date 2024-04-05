
{/* <a href="https://ibb.co/myyCStq"><img src="https://i.ibb.co/FYYbnJw/tap.png" alt="tap" border="0"></a> */}

var touchtips=document.querySelector('.tips')
var url = 'https://i.ibb.co/FYYbnJw/tap.png';
var refernce=document.querySelector('.designs-grid-container')
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();
var cursor= document.querySelector('.mouse-cursor')

img.src = url;
img.onload = function () {
//   var width = Math.min(500, img.width);
//   var height = img.height * (width / img.width);
var width=refernce.clientWidth;
var height=refernce.clientHeight;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(img, 0, 0, width, height);
};

var isPress = false;
var old = null;


canvas.addEventListener('touchstart',function (e){
    isPress = true;
    old = {x: e.offsetX*3, y: e.offsetY*3};
})

// canvas.addEventListener('touchmove',function (e){
//     if (isPress) {
//         var x = e.offsetX;
//         var y = e.offsetY;
//         ctx.globalCompositeOperation = 'destination-out';
    
//         ctx.beginPath();
//         ctx.arc(100, y, 50, 100, 100 * Math.PI);
//         ctx.fill();
    
//         ctx.lineWidth = 20;
//         ctx.beginPath();
//         ctx.moveTo(old.x, old.y);
//         ctx.lineTo(x, y);
//         ctx.stroke(50);
    
//         old = {x: x, y: y};
    
//       }
// })

// canvas.addEventListener('touchend', function (e){
//     isPress = false;
//   });

canvas.addEventListener('mouseenter',()=>{
    cursor.classList.add("mouse-cursor-brush");
})

canvas.addEventListener('mousedown', function (e){
  isPress = true;
  old = {x: e.offsetX, y: e.offsetY};
  touchtips.style.opacity=0
});
canvas.addEventListener('mousemove', function (e){
  if (isPress) {
    var x = e.offsetX;
    var y = e.offsetY;
    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
    ctx.fill();

    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(old.x, old.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    old = {x: x, y: y};

  }
});
canvas.addEventListener('mouseleave', function (e){
  isPress = false;
  cursor.classList.remove("mouse-cursor-brush");

});
   