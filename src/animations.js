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
    'irisS'.repeat(50) +
    'いりす'.repeat(40) +
    'イリス'.repeat(30) +
    '0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

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
        '0 0 2px rgba(173, 255, 47, 1), 0 0 4px rgba(173, 255, 47, 0.8), 0 0 6px rgba(173, 255, 47, 0.6)'
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
      textShadow: ''
      //   textShadow:
      //     '0 0 20px rgba(173, 255, 47, 0.8), 0 0 40px rgba(173, 255, 47, 0.6), 0 0 60px rgba(173, 255, 47, 0.4)'
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

  // About title scramble animation (same as nombre)
  function initializeAboutTitleAnimation () {
    const aboutTitleElement = document.querySelector('.about-title')
    if (!aboutTitleElement) return

    const originalAboutText = aboutTitleElement.textContent || 'irisS'
    aboutTitleElement.dataset.text = originalAboutText

    let isAboutAnimating = false
    let currentAboutAnimation = null

    // Scramble in animation for about title
    function aboutScrambleIn (element, targetText, duration = 1) {
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

    // Scramble out animation for about title
    function aboutScrambleOut (element, duration = 0.3) {
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

    // Mouse enter animation for about title
    function handleAboutMouseEnter () {
      if (isAboutAnimating) return
      isAboutAnimating = true

      // Kill any existing animations
      if (currentAboutAnimation) currentAboutAnimation.kill()

      // Scale, glow and blur effect
      gsap.to(aboutTitleElement, {
        scale: 1.1,
        duration: 0.3,
        ease: 'mouseEase',
        filter: 'blur(2px)',
        textShadow:
          '0 0 2px rgba(173, 255, 47, 1), 0 0 4px rgba(173, 255, 47, 0.8), 0 0 6px rgba(173, 255, 47, 0.6)'
      })

      // Scramble effect
      aboutScrambleOut(aboutTitleElement, 0.4)

      setTimeout(() => {
        aboutScrambleIn(aboutTitleElement, originalAboutText, 0.6)
        setTimeout(() => {
          isAboutAnimating = false
        }, 600)
      }, 200)
    }

    // Mouse leave animation for about title
    function handleAboutMouseLeave () {
      gsap.to(aboutTitleElement, {
        scale: 1,
        duration: 0.4,
        ease: 'mouseEase',
        filter: 'blur(0px)',
        textShadow: ''
      })
    }

    // Add event listeners
    aboutTitleElement.addEventListener('mouseenter', handleAboutMouseEnter)
    aboutTitleElement.addEventListener('mouseleave', handleAboutMouseLeave)

    // Scroll-triggered animation
    gsap.to(aboutTitleElement, {
      scrollTrigger: {
        trigger: '.about-title',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
      },
      onStart: () => {
        // Scramble in when entering viewport
        aboutScrambleIn(aboutTitleElement, originalAboutText, 0.8)
      }
    })

    // Initial setup
    gsap.set('.about-title', {
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center',
      cursor: 'pointer'
    })

    // Initialize the text with scramble
    setTimeout(() => {
      aboutScrambleIn(aboutTitleElement, originalAboutText, 0.8)
    }, 800)
  }

  // Works title scramble animation
  function initializeWorksTitleAnimation () {
    const worksTitleElement = document.querySelector('.works-title')
    if (!worksTitleElement) return

    const originalWorksText = worksTitleElement.textContent || 'Works'
    worksTitleElement.dataset.text = originalWorksText

    let isWorksAnimating = false
    let currentWorksAnimation = null

    // Scramble in animation for works title
    function worksScrambleIn (element, targetText, duration = 1) {
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

    // Scramble out animation for works title
    function worksScrambleOut (element, duration = 0.3) {
      const currentText = element.textContent
      const textLength = currentText.length

      for (let i = textLength - 1; i >= 0; i--) {
        gsap.to(
          {},
          {
            duration: duration,
            delay: (textLength - 1 - i) * 0.05,
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

    // Mouse enter animation for works title
    function handleWorksMouseEnter () {
      if (isWorksAnimating) return
      isWorksAnimating = true

      // Kill any existing animations
      if (currentWorksAnimation) currentWorksAnimation.kill()

      // Scale and glow effect
      gsap.to(worksTitleElement, {
        scale: 1.1,
        duration: 0.3,
        ease: 'mouseEase',
        textShadow:
          '0 0 30px rgba(173, 255, 47, 1), 0 0 60px rgba(173, 255, 47, 0.8), 0 0 90px rgba(173, 255, 47, 0.6)'
      })

      // Scramble effect
      worksScrambleOut(worksTitleElement, 0.4)

      setTimeout(() => {
        worksScrambleIn(worksTitleElement, originalWorksText, 0.6)
        setTimeout(() => {
          isWorksAnimating = false
        }, 600)
      }, 200)
    }

    // Mouse leave animation for works title
    function handleWorksMouseLeave () {
      gsap.to(worksTitleElement, {
        scale: 1,
        duration: 0.4,
        ease: 'mouseEase',
        textShadow: ''
      })
    }

    // Add event listeners
    worksTitleElement.addEventListener('mouseenter', handleWorksMouseEnter)
    worksTitleElement.addEventListener('mouseleave', handleWorksMouseLeave)

    // Scroll-triggered scramble animation
    ScrollTrigger.create({
      trigger: '.works-title',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      onEnter: () => {
        // Scramble in when entering viewport
        worksScrambleIn(worksTitleElement, originalWorksText, 0.8)
      },
      onLeave: () => {
        // Reset to original text when leaving viewport
        setTimeout(() => {
          worksTitleElement.textContent = originalWorksText
        }, 100)
      },
      onEnterBack: () => {
        // Scramble in again when scrolling back up
        worksScrambleIn(worksTitleElement, originalWorksText, 0.8)
      },
      onLeaveBack: () => {
        // Reset to original text when leaving viewport going up
        setTimeout(() => {
          worksTitleElement.textContent = originalWorksText
        }, 100)
      }
    })

    // Initial setup
    gsap.set('.works-title', {
      opacity: 1,
      scale: 1,
      transformOrigin: 'center center'
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

  // Initialize works title animation
  setTimeout(() => {
    initializeWorksTitleAnimation()
  }, 200)

  // Photo retrato dynamic blur effect
  function initializePhotoBlurEffect () {
    const photoElement = document.querySelector('.foto-retrato')
    const heroContainer = document.querySelector('.hero-container')

    if (!photoElement || !heroContainer) return

    // Set initial blur
    gsap.set(photoElement, {
      filter: 'blur(8px)',
      transition: 'filter 0.3s ease'
    })

    // Track mouse movement within hero container
    heroContainer.addEventListener('mousemove', e => {
      const rect = photoElement.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from mouse to center of image
      const mouseX = e.clientX
      const mouseY = e.clientY
      const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
      )

      // Calculate blur based on distance (max distance roughly half viewport)
      const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 2
      const normalizedDistance = Math.min(distance / maxDistance, 1)

      // Blur from 0px (when hovering) to 8px (when far)
      const blurAmount = normalizedDistance * 8

      gsap.to(photoElement, {
        filter: `blur(${blurAmount}px)`,
        duration: 0.1,
        ease: 'power2.out'
      })
    })

    // Handle mouse leave - return to full blur
    heroContainer.addEventListener('mouseleave', () => {
      gsap.to(photoElement, {
        filter: 'blur(8px)',
        duration: 0.5,
        ease: 'power2.out'
      })
    })

    // Handle direct hover on image - ensure completely clear
    photoElement.addEventListener('mouseenter', () => {
      gsap.to(photoElement, {
        filter: 'blur(0px)',
        duration: 0.1,
        ease: 'power2.out'
      })
    })
  }

  // Initialize photo blur effect
  setTimeout(() => {
    initializePhotoBlurEffect()
  }, 300)
})
