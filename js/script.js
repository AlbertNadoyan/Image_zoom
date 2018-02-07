
window.onload = function(){zoom(1)}
function zoom(zm) {
img=document.getElementById("pic")
wid=img.width
ht=img.height
img.style.width=(wid*zm)+"px"
img.style.height=(ht*zm)+"px"
    img.style.marginLeft = -(img.width/2) + "px";
    img.style.marginTop = -(img.height/2) + "px";
}
