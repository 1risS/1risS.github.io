// Kinetic Typography Animation inspired by the CodePen example
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)

  // Custom easing functions
  gsap.registerPlugin(CustomEase)
  CustomEase.create('customEase', '0.86, 0, 0.07, 1')
  CustomEase.create('mouseEase', '0.25, 0.1, 0.25, 1')

  const nombreElement = document.querySelector('.nombre')
  const originalText = nombreElement.dataset.text

  // Characters for scramble effect
  const scrambleChars =
    'irisS'.repeat(500) +
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

  let isAnimating = false
  let currentAnimation = null

  // Initial setup
  gsap.set('.nombre', {
    opacity: 1,
    scale: 1,
    transformOrigin: 'center center'
  })

  // Initial entrance animation with scramble
  function initializeText () {
    scrambleIn(nombreElement, originalText, 0.8)
  }

  // Scramble in animation
  function scrambleIn (element, targetText, duration = 1) {
    const textLength = targetText.length
    let currentText = ''

    // Fill with random characters initially
    for (let i = 0; i < textLength; i++) {
      currentText +=
        scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
    }

    element.textContent = currentText

    // Gradually reveal the correct letters
    for (let i = 0; i < textLength; i++) {
      gsap.to(
        {},
        {
          duration: duration,
          delay: i * 0.1,
          ease: 'power2.out',
          onUpdate: function () {
            let progress = this.progress()
            let newText = ''

            for (let j = 0; j < textLength; j++) {
              if (j <= i && progress > 0.5) {
                newText += targetText[j]
              } else {
                newText +=
                  scrambleChars[
                    Math.floor(Math.random() * scrambleChars.length)
                  ]
              }
            }
            element.textContent = newText
          },
          onComplete: function () {
            if (i === textLength - 1) {
              element.textContent = targetText
            }
          }
        }
      )
    }
  }

  // Scramble out animation
  function scrambleOut (element, duration = 0.3) {
    const currentText = element.textContent
    const textLength = currentText.length

    for (let i = textLength - 1; i >= 0; i--) {
      gsap.to(
        {},
        {
          duration: duration,
          delay: (textLength - 1 - i) * 0.5,
          ease: 'power2.in',
          onUpdate: function () {
            let newText = ''

            for (let j = 0; j < textLength; j++) {
              if (j >= i) {
                newText +=
                  scrambleChars[
                    Math.floor(Math.random() * scrambleChars.length)
                  ]
              } else {
                newText += currentText[j]
              }
            }
            element.textContent = newText
          }
        }
      )
    }
  }

  // Mouse enter animation
  function handleMouseEnter () {
    if (isAnimating) return
    isAnimating = true

    // Kill any existing animations
    if (currentAnimation) currentAnimation.kill()

    // Scale, glow and blur effect
    gsap.to(nombreElement, {
      scale: 1.1,
      duration: 0.3,
      ease: 'mouseEase',
      filter: 'blur(2px)',
      textShadow:
        '0 0 30px rgba(173, 255, 47, 1), 0 0 60px rgba(173, 255, 47, 0.8), 0 0 90px rgba(173, 255, 47, 0.6)'
    })

    // Scramble effect
    scrambleOut(nombreElement, 0.4)

    setTimeout(() => {
      scrambleIn(nombreElement, originalText, 0.6)
      setTimeout(() => {
        isAnimating = false
      }, 600)
    }, 200)
  }

  // Mouse leave animation
  function handleMouseLeave () {
    gsap.to(nombreElement, {
      scale: 1,
      duration: 0.4,
      ease: 'mouseEase',
      filter: 'blur(0px)',
      textShadow:
        '0 0 20px rgba(173, 255, 47, 0.8), 0 0 40px rgba(173, 255, 47, 0.6), 0 0 60px rgba(173, 255, 47, 0.4)'
    })
  }

  // Add event listeners
  if (nombreElement) {
    nombreElement.addEventListener('mouseenter', handleMouseEnter)
    nombreElement.addEventListener('mouseleave', handleMouseLeave)

    // Initialize the text
    setTimeout(() => {
      initializeText()
    }, 500)
  }

  // Scroll-triggered animation
  gsap.to('.nombre', {
    scrollTrigger: {
      trigger: '.about-container',
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1
    },
    y: -100,
    opacity: 0.3,
    scale: 0.8,
    ease: 'power2.out'
  })

  // About text reveal animation
  function initializeAboutTextAnimation () {
    const aboutText = document.querySelector('.about-text')
    if (!aboutText) return

    // Split text into words and wrap each in a span with overflow hidden
    const text = aboutText.innerHTML
    const words = text.split(' ')

    // Create wrapped words with line detection
    aboutText.innerHTML = words
      .map(word => {
        // Handle <br> tags separately
        if (word.includes('<br>') || word.includes('<br/>')) {
          return word // Keep break tags as is
        }
        return `<span class="word-wrapper"><span class="word">${word}</span></span>`
      })
      .join(' ')

    // Get all word elements
    const wordElements = aboutText.querySelectorAll('.word')

    // Set initial state - words start below their containers
    gsap.set(wordElements, {
      yPercent: 100,
      opacity: 0
    })

    // Animate words in on scroll
    gsap.to(wordElements, {
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      },
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.02,
      ease: 'expo.out'
    })
  }

  // About title random character animation
  function initializeAboutTitleAnimation () {
    const aboutTitle = document.querySelector('.about-title')
    if (!aboutTitle) return

    // Split text into individual characters
    const text = aboutTitle.textContent
    const chars = text.split('')

    // Create wrapped characters
    aboutTitle.innerHTML = chars
      .map(char => {
        // Handle spaces
        if (char === ' ') {
          return '<span class="char">&nbsp;</span>'
        }
        return `<span class="char">${char}</span>`
      })
      .join('')

    // Get all character elements
    const charElements = aboutTitle.querySelectorAll('.char')

    // Set initial state - characters start invisible
    gsap.set(charElements, {
      opacity: 0
    })

    // Animate characters in with random stagger on scroll
    gsap.to(charElements, {
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      duration: 2,
      stagger: {
        from: 'random',
        each: 0.1
      },
      ease: 'power2.out'
    })
  }

  // Initialize about title animation
  setTimeout(() => {
    initializeAboutTitleAnimation()
  }, 150)

  // Initialize about text animation
  setTimeout(() => {
    initializeAboutTextAnimation()
  }, 100)
})
