export default function smoothScroll(evt) {
  evt.preventDefault()

  const id = evt.target.hash.substring(1)
  const el = document.getElementById(id)
  const offset = -84.8
  const y = el.getBoundingClientRect().top + window.pageYOffset + offset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}
