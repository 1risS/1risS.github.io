// Initialize Hydra immediately when page loads
document.addEventListener('DOMContentLoaded', () => {
  var hydra = new Hydra({
    canvas: document.getElementById('myCanvas'),
    detectAudio: false,
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: 1
  })

  // Stage 1: Immediate simple animation to avoid black screen
  function startSimpleAnimation () {
    s0.initImage('sprites/retrato_01.png')

    shape(2, 0.00001)
      .scale(0.2)
      .mult(solid(0, 1, 0))
      .modulate(osc(10, 0.07, 0.1))
      .scrollY(-0.05)
      .out()

    console.log('hydra 1')
  }

  // Stage 2: Complex animation with image feedback
  function startComplexAnimation () {
    shape(2, 0.00001)
      .scale(0.2)
      .mult(solid(0, 1, 0))
      .modulate(osc(10, 0.07, 0.1))
      .scrollY(-0.05)
      .out()

    src(o0)
      .scale([0.9, 1.001].smooth())
      .rotate(0.05, 0.05)
      .modulate(src(o0).scale(1.1), 0.2)
      .modulateScale(voronoi(0.25, 0.3, [2, 10, 20, 10, 5].smooth()))
      .blend(src(o0), 0.99)
      .layer(
        shape(60, 0.001, 0.5)
          .mult(solid(1, 0.1, 0.1))
          .scale(
            [0.01, 0.01, 0.01, 0.01, 20].smooth().fast(0.5),
            window.innerHeight / window.innerWidth
          )
          .luma(0.3)
      )
      .blend(src(o0), [0, 0.5].smooth().fast(0.1))
      .add(
        shape(2, 0.00001)
          .scale(0.2)
          .mult(solid(0, 1, 0))
          .modulate(osc(10, 0.07, 0.1))
          .scrollY(-0.05)
      )
      .out()

    console.log('hydra 2')
  }

  // Start with simple animation immediately
  startSimpleAnimation()

  // Fade in the canvas once Hydra is initialized
  const canvas = document.getElementById('myCanvas')
  if (canvas) {
    canvas.style.opacity = '0'
    canvas.style.transition = 'opacity 1s ease-in'

    // Quick fade in after Hydra starts rendering
    setTimeout(() => {
      canvas.style.opacity = '1'
    }, 100)

    // Transition to complex animation after a short delay
    setTimeout(() => {
      startComplexAnimation()
    }, 2000) // 2 seconds delay to let the simple animation show
  }
})
