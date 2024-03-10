let data; // Declare movies as a global variable

let next = document.getElementById("next");
let display = document.getElementById("display");
let sub = document.getElementById("sub");
let total = 4;
let count = 0,
  score = 0;
async function logMovies() {
  const response = await fetch("data.json");
  data = await response.json();
  console.log(data);
}
next.addEventListener("click",()=>{
  console.log("donee")
})
document.addEventListener("DOMContentLoaded", () => {
  logMovies();
  fetch("data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      display.innerHTML = `<h4>${data.quiz[0].question}</h4>
<ul>
    <li><input type="radio" name="ques">${data.quiz[0].options[0]}</li>
    <li><input type="radio" name="ques">${data.quiz[0].options[1]}</li>
    <li><input type="radio" name="ques">${data.quiz[0].options[2]}</li>
    <li><input type="radio" name="ques">${data.quiz[0].options[3]}</li>
</ul>
<h2>Correct</h2>
<button class="" id="next" type="button">Next</button>
`;

    });
});
next.addEventListener("click", () => {
  if (count >= 4) {
    count = 4;
  } else {
    count += 1;
  }
  console.log("done")
  sub.style.display = "inline-block";
  display.innerHTML = `<h4>${data.quiz[count].question}</h4>
<ul>
    <li><input type="radio" name="ques">${data.quiz[count].options[0]}</li>
    <li><input type="radio" name="ques">${data.quiz[count].options[1]}</li>
    <li><input type="radio" name="ques">${data.quiz[count].options[2]}</li>
    <li><input type="radio" name="ques">${data.quiz[count].options[3]}</li>
</ul>
<h2>Correct</h2>
<button class="" id="next" type="button">Next</button>

`;
});

// sub.addEventListener("click", () => {
//   var radio = document.querySelector('input[name="ques"]:checked');
//   const h1Element = document.createElement("h4");
//   h1Element.textContent = "New Heading";
// sub.style.display="none"

//   if (radio == null) {
//     alert("Please Select The Correct Option");
//     return;
//   }
//   const closestLi = radio.closest("li").innerText;

//   if (closestLi === data.quiz[count].correct_answer) {
//     score+=data.quiz[count].score
//     console.log(score)
//     next.remove()
//     //display.insertAdjacentElement("afterend", h1Element);
    
//   } else {
//   }
// });

// prev.addEventListener("click",()=>{
//   if(count<=0){
//     count=0
//   }
//   else{
//     count-=1
//   }
//   display.innerHTML = `<h1>${data.quiz[count].question}</h1>
// <ul>
//     <li><input type="radio" name="ques">${data.quiz[count].options[0]}</li>
//     <li><input type="radio" name="ques">${data.quiz[count].options[1]}</li>
//     <li><input type="radio" name="ques">${data.quiz[count].options[2]}</li>
//     <li><input type="radio" name="ques">${data.quiz[count].options[3]}</li>
// </ul>`;
// })
