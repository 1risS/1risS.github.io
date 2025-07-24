var hydra = new Hydra({
  canvas: document.getElementById('myCanvas'),
  detectAudio: false,
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: 1
})

const mX = document.addEventListener('mousemove', event => {
  const mouseX = event.clientX
})

const mY = document.addEventListener('mousemove', event => {
  const mouseY = event.clientY
})

s0.initImage('sprites/retrato_01.png')

src(o0)
  .scale([0.9, 1.001].smooth())
  .rotate(0.05, 0.05)
  .modulate(src(o0).scale(1.1), 0.2)
  .modulateScale(voronoi(30, 0.1, [0, 2, 10].smooth()))
  .blend(src(o0), 0.99)
  .layer(
    src(s0)
      .scale(2, window.innerHeight / window.innerWidth)
      .contrast([1, 10].smooth().fast(0.1))
      .luma([0.2, 0.7].smooth())
      .scrollX([-0.5, 0.5].smooth().fast(0.1))
      .rotate(
        [Math.PI / 2, Math.PI, Math.PI / -2, Math.PI].smooth(0.125).fast(0.06)
      )
  )
  .layer(
    shape(60, 0.001, 0.5)
      .mult(solid(1, 0.1, 0.1))
      .scale(
        [0.01, 0.01, 0.01, 0.01, 8].smooth().fast(0.5),
        window.innerHeight / window.innerWidth
      )
      .luma(0.3)
  )
  .blend(src(o0), [0, 0.99].smooth().fast(0.1))
  .add(
    shape(2, 0.00001)
      .mult(solid(0, 1, 0))
      .modulate(osc(10, 0.07, 0.1))
      .scrollY(-0.05)
  )
  .out()
