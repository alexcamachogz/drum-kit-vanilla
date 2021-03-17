function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`)
  const key = document.querySelector(`.key[data-key="${e.key}"]`)

  // Audio functionality
  if (!audio) return // stop the function from running all together
  audio.currentTime = 0 // rewind to start
  audio.play()

  // Key animation
  key.classList.toggle('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return // Skip it if it's not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
