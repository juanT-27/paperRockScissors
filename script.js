let paper= document.querySelector(".paper-img");
let rock= document.querySelector(".rock-img");
let scissors= document.querySelector(".scissors-img");

let  one= "img/paper.png"
let two= "img/rock.png"
let Three= "img/scissors.png"
// the events listeners 
paper.addEventListener("click", ()=> { play("img/paper.png")})
rock.addEventListener("click", ()=> { play("img/rock.png")} )
scissors.addEventListener("click",()=> { play("img/scissors.png")})

// the container were they will be displayed:
let result= document.querySelector(".result")
let player= document.querySelector(".playerOutput");
let pcOutPut= document.querySelector(".pcOutput")
let fragment= document.createDocumentFragment();


//this function react to the eventlisteners.
function play (userSelection){

    let election= document.getElementById("player")
    election.setAttribute("src",userSelection )
    fragment.appendChild(election)
    player.appendChild(fragment)


    setTimeout(() => {
        let machine = Math.floor(Math.random()* 3)
        switch (machine) {
            case 0:
                machine= one;
                break;
            case 1:
                machine= two;
                break;
            case 2:
                machine = Three;
                break;
        }
      
        let output = document.getElementById("pc")
        output.setAttribute("src", machine)
        fragment.appendChild(output)
        pcOutPut.appendChild(fragment)
    }, 2000);
    

    

if (userSelection === "img/paper.png" && machine === "img/paper.png"  || userSelection === "img/rock.png" && machine === "img/rock.png" || userSelection=== "img/scissors.png"  && machine ===  "img/scissors.png"){
    let text= document.getElementById("result")
    text.innerHTML= "Tie"

}

    else  if (userSelection=== "img/paper.png"  && machine === "img/rock.png"|| userSelection=== "img/rock.png"  && machine===  "img/scissors.png" || userSelection==="img/scissors.png" && machine=== "img/paper.png"){
        let text= document.getElementById("result")
            text.innerHTML=" You Win"
    }
    else {
        let text= document.getElementById("result")
        text.innerHTML=" You lose"
    }} 

 

  