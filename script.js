let m = 0
let timeh1=document.getElementById("time")
let time=0
let timer=setInterval(function(){
time=time+1
timeh1.innerHTML="time: "+time
},1000)
let imageNames = ["maxres2 0.jpeg",
   "1_rIkmavUeqyRySwlQdA9kKg 1.jpeg",
   "5ad4078bfe3b887521075e13874c4f9b_5bc5b3971f79b3650233530de2d08f92 2.webp",
   "9ff396e1e8c15d8a4bafd805cf9bfb4c 3.jpeg",
   "1682875710_papik-pro-p-ololo-smail-png-12 4.jpeg",
   "c09 5.webp",
   "download (1) 6.png",
   "download 7.jpeg",
   "download 8.png",
   "91408619_55df76d5-2245-41c1-8031-07a4da3f313f 9.jpeg",]
let gamearray = []
let phone = 0
let open = []
let go = 0
let h1 = document.getElementById("h1")
console.log(imageNames[9]);
let game = document.getElementById("game")
for (let i = 0; i < 10; i = i + 1) {
   gamearray.push(imageNames[i])
   gamearray.push(imageNames[i])
}
for (let i = 19; i > 0; i = i - 1) {
   let randomNumber = Math.floor(Math.random() * (i + 1))
   let meme = gamearray[i]
   gamearray[i] = gamearray[randomNumber]
   gamearray[randomNumber] = meme
}
console.log(gamearray);
for (let i = 0; i < 20; i = i + 1) {
   let card = document.createElement("img")
   card.src = "card.jpeg"
   game.appendChild(card)
   card.style.height = card.offsetWidth + "px"
   card.onclick = function () {
      card.style.pointerEvents="none"
      if (i == 19) {
         console.log("pepe");
      }
      if (i == 18) {
         console.log("pepe");
      }
      open.push(card)
      console.log(open);
      card.src = gamearray[i]
      // phone = phone + 1
      // if (phone == 5) {
      //    console.log(phone);

      // }

      if (open.length == 2) {
         console.log("you open 2 cards");

         if (open[0].src == open[1].src) {
            go = go + 1
            if (go == 10) {
               h1.innerHTML = " win"
               console.log("you open corect cards");
               clearInterval(timer)
            }
            open = []


         }
         else {
            console.log("in corect");
            setTimeout(function () {
               open[0].src = "card.jpeg"
               open[1].src = "card.jpeg"
               open = []
               for (let i = 0; i < 20; i = i + 1) {
                  if(cards[i].src.includes("card")){
                     cards[i].style.pointerEvents = "auto"   
                  }
               }
            }, 1000)
            let cards = document.getElementsByTagName("img")
            for (let i = 0; i < 20; i = i + 1) {
               cards[i].style.pointerEvents = "none"
            }
         }
      }

   }
}
// game.onclick=function(){
// m=m+1
//    console.log(m);
// }
