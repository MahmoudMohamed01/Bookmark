let nav = document.querySelector('.list-nav');
let logo = document.querySelector('header .logo');
let overlay = document.querySelector('.overlay');
let soctialIcons = document.querySelector(' .list-nav .social-icons');
let closeBtn = document.querySelector('header .menu img');
document.querySelector(".menu").addEventListener("click", () => {
  logo.classList.toggle("invert");
  nav.classList.toggle("active");
  if(closeBtn.getAttribute("src") == "./images/icon-hamburger.svg") {
    overlay.style.display = "block";
    soctialIcons.style.display = "block";
    closeBtn.setAttribute("src", "./images/icon-close.svg");
  } else {
    overlay.style.display = "none";
    soctialIcons.style.display = "none";
    closeBtn.setAttribute("src", "./images/icon-hamburger.svg");
  }

})

let features = [
  {
    id: "1",
    image: "./images/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    button: "More Info",
  },
  {
    id: "2",
    image: "./images/illustration-features-tab-2.svg",
    title: "Intelligent search",
    content: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    button: "More Info",
  },
  {
    id: "3",
    image: "./images/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    content: " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    button: "More Info",
  }
]
let featureName = document.querySelectorAll(".category-features .feature");
let featureImage = document.querySelector(".feature-displayed img");
let featureHeading = document.querySelector(".feature-displayed .main-text h2");
let featureP = document.querySelector(".feature-displayed .main-text p");
let featureB = document.querySelector(".feature-displayed .main-text button");
let deafult = 1;
featureName.forEach((e) => {
  e.addEventListener("click", () => {
    featureName.forEach((e) => {
      if(e.classList.contains("focused")) {
        e.classList.remove("focused");
      }
    })
    e.classList.add("focused");
    deafult = e.id;
    showFeature();
  })
});

function showFeature() {
  for(i = 0; i < features.length; i++) {
    if(features[ i ].id == deafult) {
      featureImage.setAttribute("src", features[ i ].image);
      featureHeading.innerHTML = features[ i ].title;
      featureP.innerHTML = features[ i ].content;
      featureB.innerHTML = features[ i ].button;
    }
  }
}
showFeature();

let qusetion = document.querySelectorAll(".questions .content .question");
qusetion.forEach((e) => {
  e.addEventListener("click", () => {
    if(e.children[ 2 ].style.display == "block") {
      e.children[ 2 ].style.display = "none";
      e.children[ 1 ].classList.add("fa-angle-down");
      e.children[ 1 ].classList.remove("fa-angle-up");
      e.children[ 1 ].style.color = "hsl(231, 69%, 60%)";
    } else {
      e.children[ 1 ].classList.remove("fa-angle-down");
      e.children[ 1 ].classList.add("fa-angle-up");
      e.children[ 2 ].style.display = "block";
      e.children[ 1 ].style.color = "hsl(0, 94%, 66%)";
    }
  })
})


let form = document.querySelector(".contact .content form");
let input = document.querySelector(".contact .content form input");
let error = document.querySelector(".contact .content form span");
let reqexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(reqexp.test(input.value)) {
    input.style.border = "none"
    error.classList.remove("error");
    error.innerHTML = "";

  } else {
    input.style.border = "4px solid hsl(0, 94%, 66%)"
    error.classList.add("error");
    error.innerHTML = "Whoops, make sure its an email";
  }
})