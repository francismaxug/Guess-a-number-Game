
let number=Math.trunc(Math.random()*20)+1


const app=document.querySelector(".enter-btn")
let highScore=0


const num2=document.querySelector(".num2")
const manipulate=document.querySelector(".num1")
const manage=Number(manipulate.textContent)
let change=20
console.log(manage, typeof(manage))
console.log(manipulate.textContent, typeof(manipulate.textContent))

document.querySelector(".press-btn").addEventListener("click",function(){
  if(Number(app.value)===number){
    document.querySelector(".line-one").textContent=" 🏆 Correct Number"
    document.querySelector(".start").style.backgroundColor="green" 
    document.querySelector(".bttn-opt").textContent=number
    document.querySelector(".bttn-opt").style.width="150px"
    document.querySelector(".bttn-opt").style.heigth="130px"
    if(change>highScore){
      highScore=change
      num2.textContent=highScore
    }
    
  }
  else if (Number(app.value)!==number /*&& Number(app.value)>number*/){
    if(change>1){
      document.querySelector(".line-one").textContent= Number(app.value)>number ? " 📈Too High!" :" 📉Too Low!"
      change--
      manipulate.textContent=change
      document.querySelector(".start").style.backgroundColor="black" 

    }else{
      document.querySelector(".line-one").textContent=" ⚡You lost!"
      manipulate.textContent=0
    }
   

  }
  else if(app.value===""){
    document.querySelector(".line-one").textContent="⛔ No Guess!"
  }

  // else if (Number(app.value)!==number && Number(app.value)<number){
  //   if(change>1){
  //     document.querySelector(".line-one").textContent=" 📉Too Low!"
  //     change--
  //     manipulate.textContent=change
  //     document.querySelector(".start").style.backgroundColor="black"  
  //   }else{
  //     document.querySelector(".line-one").textContent=" ⚡You lost!"
  //     manipulate.textContent=0
  //   }
  
  // }
})

document.querySelector(".header-bttn").addEventListener("click", function(){
  number=Math.trunc(Math.random()*20)+1
  change=20
  app.value=""
  document.querySelector(".start").style.backgroundColor="black"
  manipulate.textContent=change
  document.querySelector(".line-one").textContent="Start Guessing..."
  document.querySelector(".bttn-opt").textContent="?"
  document.querySelector(".bttn-opt").style.width="100px"
  document.querySelector(".bttn-opt").style.heigth="90px"
})
