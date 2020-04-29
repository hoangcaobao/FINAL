let a=document.getElementsByClassName("phanloai")
let b=document.getElementsByClassName("dienchu")
for (let i=0; i<a.length;i++){
    a[i].addEventListener("mouseover",function (){
       
        b[i].style.fontFamily=" 'Bungee Shade', cursive";
        
    })
    a[i].addEventListener("mouseout",function(){
        b[i].style.fontFamily="'Pacifico', cursive";
    })
}