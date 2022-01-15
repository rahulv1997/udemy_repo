const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Karthik Reddy',
    position: 'CEO',
    photo:
      'https://media-exp1.licdn.com/dms/image/C5103AQGdcsyvl-DJlg/profile-displayphoto-shrink_100_100/0/1516695689254?e=2159024400&v=beta&t=IvdnCtyvXW2sWhaX9cLfQGCW8ZV2HCJ5ZnJHwaVn9iA',
    text:
      "The chief executive officer (CEO) is the top position in an organization and is responsible for implementing existing plans and policies, ensuring the successful management of the business and setting future strategy. The CEO is ultimately responsible for the success or failure of the organization.",
  },
  {
    name: 'Akshith',
    position: 'CTO',
    photo: 'https://media-exp1.licdn.com/dms/image/C5603AQHDRj1Yh56BMQ/profile-displayphoto-shrink_100_100/0/1606128102842?e=2159024400&v=beta&t=ciOhODV6sDc9-KWmDgEwba3Y9Rzek7B5PeSVbi5HfHs',
    text:
      'The Chief Technology Officer (CTO) is the individual within an organization who oversees the current technology and creates relevant policy. ... In addition to fixing IT-related issues, a CTO is responsible for developing, implementing, managing and evaluating the companys technological resources.',
  },

]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)