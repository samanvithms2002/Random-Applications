const moonPath= "M76,0c.535-2.122-34.471,38-34.471,76S75.469,151.92,76,152A76,76,0,0,1,76,0Z";
const sunPath="M76,0A76,76,0,1,1,0,76,76,76,0,0,1,76,0Z";
const darkMode=document.querySelector("#darkMode");

let toggle= false;

darkMode.addEventListener("click", () =>{
    const timeline= anime.timeline({
        duration :750,
        easing : "easeOutExpo"
    });
    timeline.add({
        targets : ".sun",
        d:[
        {
            value:toggle ? sunPath: moonPath
           
        
        }
        ]
    })
    .add({
        targets:"#darkMode",
        rotate:320
    }
    )
    .add({
        targets : "section",
        backgroundColor: toggle ? 'rgb(255,255,255)':'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)': 'rgb(255,255,255)' 
    })
    if(!toggle){
        toggle=true;
    }
    else{
        toggle=false;
    }
});
