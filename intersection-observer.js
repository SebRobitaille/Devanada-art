const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

// Header

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add("is-visible")
    observer.unobserve(entry.target)
  })
}, options)

const hero = document.getElementById("hero")

observer.observe(hero)
