// Gallery

const galleryItems = document.querySelectorAll(".gallery-item")

const removeActiveClass = () => {
  galleryItems.forEach((item) => {
    item.classList.remove("active")
  })
}

const galleryItemsArray = Array.from(galleryItems)
const getActiveGalleryItem = () => {
  for (let i = 0; i < galleryItemsArray.length; i++) {
    if (galleryItemsArray[i].classList.contains("active")) {
      return i
    }
  }
}
let galleryIndex = getActiveGalleryItem()
console.log(galleryIndex)

const playNext = () => {
  removeActiveClass()
  if (galleryIndex === galleryItemsArray.length - 1) {
    galleryItemsArray[0].classList.add("active")
  } else {
    galleryItemsArray[galleryIndex + 1].classList.add("active")
  }
  galleryIndex = getActiveGalleryItem()
}

const gallerySlideshow = setInterval(playNext, 5000)

const stopSlideshow = () => {
  clearInterval(gallerySlideshow)
}

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveClass()
    item.classList.add("active")
    stopSlideshow()
  })
})

// Submit form btn

const submitBtn = document.getElementById("submit-btn")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const message = document.getElementById("message").value

  const data = {
    name,
    email,
    phone,
    message,
  }

  fetch("https://formspree.io/f/xlekrvlq", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log
      alert("Thank you for your message, we will get back to you soon!")
    })
    .catch((error) => {
      console.log(error)
    })
})

// Services Section

const serviceTitles = document.querySelectorAll(".services-title")
const serviceArray = Array.from(serviceTitles)
const serviceItems = document.querySelectorAll(".services-item")

const getActiveServiceItem = () => {
  for (let i = 0; i < serviceArray.length; i++) {
    if (serviceArray[i].classList.contains("active")) {
      return i
    }
  }
}
let serviceIndex = getActiveServiceItem()

const clearActiveService = () => {
  serviceTitles.forEach((title) => {
    title.classList.remove("active")
  })
  serviceItems.forEach((item) => {
    item.classList.remove("active")
  })
}

serviceTitles.forEach((title) => {
  title.addEventListener("click", () => {
    clearActiveService()
    title.classList.add("active")
    serviceIndex = getActiveServiceItem()
    serviceItems[serviceIndex].classList.add("active")
    updateBackground()
  })
})

// services background
const displayContainer = document.querySelector(".display-container")
const backgroundURLs = [
  `services-1.jpg`,
  `services-2.jpg`,
  `services-3.jpg`,
  `services-4.jpg`,
  `services-5.jpg`,
]

const updateBackground = () => {
  displayContainer.style.backgroundImage = `url(${backgroundURLs[serviceIndex]})`
}
