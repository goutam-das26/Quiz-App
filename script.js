let count = 0,
  score = 0;
let btn = document.getElementById("next");
let data;
let qu = document.getElementById("qu");
let main = document.getElementById("main");
let display = document.getElementById("display");

let listshow = document.querySelector(".listshow"); // Add the correct class selector here
let an = document.getElementById("an");
let head = document.getElementById("header");

async function logdata() {
  const response = await fetch("data.json");
  data = await response.json();
  loaddata();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(count);

  logdata();
});

function loaddata() {
  let next = document.getElementById("next");
  qu.textContent = data.quiz[count].question;
  an.style.visibility = "hidden";

  let bt = document.createElement("button");
  bt.innerText = "Submit";
  bt.id = "sub";
  bt.type = "button";
  bt.style.backgroundColor = "#FFC107";
  bt.style.color="black"
  next.remove();
  an.parentNode.insertBefore(bt, an.nextSibling);

  listshow.innerHTML = `<li><input type="radio" name="ques">${data.quiz[count].options[0]}</li>
    <li><input type="radio" name="ques">${data.quiz[count].options[1]}</li>
    <li><input type="radio" name="ques">${data.quiz[count].options[2]}</li>
    <li><input type="radio" name="ques">${data.quiz[count].options[3]}</li>`;
}
document.addEventListener("click", (event) => {
  if (event.target.id === "sub") {
    var radio = document.querySelector('input[name="ques"]:checked');
    var opp = document.querySelectorAll('input[name="ques"]');
    if (radio == null) {
      alert("Please Select The Correct Option");
      return;
    }
    const closestLi = radio.closest("li").innerText;
    if (closestLi === data.quiz[count].correct_answer) {
      score += data.quiz[count].score;
      console.log(score);
      an.innerText = "Correct";
      an.style.visibility = "visible";
      an.style.backgroundColor = "#D4EDDA";
      an.style.color = "#245724";
    } else {
      an.innerText = "Incorrect";
      an.style.visibility = "visible";
      an.style.backgroundColor = "#F8D7DA";
      an.style.color = "#9B4329";
    }
    opp.forEach(function (radio) {
      radio.disabled = true; // Disable each radio button
    });
    sub.remove();
    let next = document.createElement("button");
    next.id = "next";
    next.type = "button";
    next.innerText = "Next";
    next.style.backgroundColor = "#28A745";
    an.parentNode.insertBefore(next, an.nextSibling);
  }
});
document.addEventListener("click", (event) => {
  if (event.target.id === "next") {
    count++;
    if (count === data.quiz.length) {
      display.classList.replace(display.className, "displayaf");

      last();
    } else {
      loaddata();
      
    }
  }
});

function last() {
  
  listshow.innerHTML = " ";
  var newHeading = document.createElement("h2");
  newHeading.textContent = "Answer Key";
  newHeading.style.backgroundColor = "#F4F4F4";
  let btnn = document.createElement("button");
  btnn.id = "btnn";
  btnn.type = "button";
  btnn.innerText = "Restart";
  btnn.style.backgroundColor = "#17A2B8";

  // Get the reference to the "display" div

  an.remove();
  qu.remove();
  next.remove();
  display.appendChild(btnn);
  head.innerText = `Score: ${score}`;
  // Insert the new h2 element before the "display" div
  display.parentNode.insertBefore(newHeading, display);
  data.quiz.forEach(function (question) {
    // Update the question property by removing question marks
    let li = document.createElement("li");
    li.id="lii"
    question.question = question.question.replace(/\?/g, " - ");
    li.innerHTML = `${question.question} <span>${question.correct_answer}</span>`;
    listshow.appendChild(li);
  });

  
  
}
document.addEventListener("click", (e) => {
  if (e.target.id === "btnn") {
    count = 0;
    location.reload();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const radioButton = e.target.querySelector('input[type="radio"]');
    if (radioButton) {
      radioButton.checked = true;
    }
  }
});

