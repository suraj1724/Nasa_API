console.log("suraj");

function accessNasa(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(function(recover){
        return recover.json();
    }).then(function(information){
        for(var info of information.photos){
            let id1=document.getElementById("h5");
            let id2=document.getElementById("h6");
            let photo=document.getElementById("pic");
            
          photo.src=info.img_src;
            id1.innerHTML=info.id;
            id2.innerHTML=info.camera.name;
            
           
        }
    })
    
}