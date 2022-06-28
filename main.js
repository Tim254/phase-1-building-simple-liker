// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//document.addEventListener('DOMContentLoaded', ()=>{

 const modal= document.getElementById('modal');
 const hearts = document.querySelectorAll(".like-glyph");
 //add class hidden to modal div
 modal.className = "hidden";
  
  
  const likePost = (event) =>{

    const heart = event.target
    heart.innerText = EMPTY_HEART
    mimicServerCall()
    //if server call is successful, change heart to full heart
      .then( responce => {
        (heart.innerText === EMPTY_HEART)? 
        (heart.innerText = FULL_HEART, heart.classList.add("activated-heart"))
        :(heart.innerText = EMPTY_HEART, heart.classList.remove("activated-heart")) 
     
      })
      //if server call fails, display error message
      .catch(error => {
        modal.classList.remove("hidden");
        modal.querySelector("#modal-message").textContent = error;
        setTimeout( () => {
          modal.classList.add("hidden")
        }, 3000)
      }) 
    
  }
  //call event for each love icons
  hearts.forEach( heart => {
    heart.addEventListener("click", likePost)
  })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}