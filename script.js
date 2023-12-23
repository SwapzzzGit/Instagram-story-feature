var data = [{dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1560365163-3e8d64e762ef?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1554727242-741c14fa561c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",img:"https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]

var clutter = "";
var grow = 0;

data.forEach(function(elem,index){
     clutter += `<div class="story">
     <img id=${index} src="${elem.dp}" alt=""/>
 </div>`
})
document.querySelector("#storiyan").innerHTML =clutter

document.querySelector("#storiyan").addEventListener("click",function(dets){
    document.querySelector("#full-scr").style.display = "block"
    document.querySelector("#full-scr").style.backgroundImage = `url(${data[dets.target.id].img})`

    setTimeout(function(){
        document.querySelector("#full-scr").style.display = "none"
    },3000)

    if(grow<100){
        setInterval(function(){
            document.querySelector("#growth").style.width = `${grow}%`
            grow++;
        },30)
    }else{
        grow=0;
    }
})

