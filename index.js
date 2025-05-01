/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })
 
const findBtn = document.getElementById('find-btn')
const activityName = document.getElementById('activity-name')
const btn = document.getElementById('btn')
const clappinHand = document.getElementById('clapping-hand')
const main = document.body

findBtn.addEventListener('click', function() {
  btn.style.display = 'block'
})

btn.addEventListener("click", function() {
  fetch('https://apis.scrimba.com/bored/api/activity').
    then(respons => respons.json()).
    then(data => {
      console.log(data)
      activityName.textContent = `🤖 ${data.activity} 🤖`
      }
    )
    btn.style.display = 'none'
    // main.style.background = "#4776E6"
    // main.style.background = "-webkit-linear-gradient(to top, #8E54E9, #4776E6)"
    // main.style.background = "linear-gradient(to right, #8E54E9, #4776E6)"
    document.body.classList.add('fun')
})