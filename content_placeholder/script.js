const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const names = document.getElementById("name");
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2000)

function getData() {
  header.innerHTML =
    "<img src='https://images.unsplash.com/photo-1560195307-95127677e806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' alt='laptop-img'/>"
  title.innerHTML = "Post Graduate"
  excerpt.innerHTML = "Master of Computer Science from A V College of arts, science & commerce"
  profile_img.innerHTML ="<img src='https://pbs.twimg.com/media/DMFBuaEVQAAedcR.jpg' alt='photo' />"
  names.innerHTML = "V RAHUL"
  date.innerHTML = "Jan 12, 2022"

  animated_bgs.forEach((bg) => bg.classList.remove("aimated-bg"))
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}