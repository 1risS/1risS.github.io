// Works showcase component
class WorksShowcase {
  constructor () {
    this.works = [
      {
        id: 'mamba-2024',
        title: 'Escuchar Sonidos Visuales - MAMBA 2024',
        description:
          'A multimedia installation exploring the synesthetic relationship between sound and visual patterns, presented at the Museum of Modern Art of Buenos Aires.',
        folder: 'mamba-2024',
        assets: [
          'ESCUCHAR SONIDOS VISUALES_17.JPG',
          'ESCUCHAR SONIDOS VISUALES_22.JPG',
          'ESCUCHAR SONIDOS VISUALES_24.JPG',
          'ESCUCHAR SONIDOS VISUALES_25.JPG',
          'ESCUCHAR SONIDOS VISUALES_27.JPG',
          'ESCUCHAR SONIDOS VISUALES_29.JPG',
          'ESCUCHAR SONIDOS VISUALES_61.JPG',
          'ESCUCHAR SONIDOS VISUALES_101.JPG',
          'ESCUCHAR SONIDOS VISUALES_102.JPG',
          'ESCUCHAR SONIDOS VISUALES_106.JPG',
          'ESCUCHAR SONIDOS VISUALES_107.JPG',
          'ESCUCHAR SONIDOS VISUALES_125.JPG',
          'ESCUCHAR SONIDOS VISUALES_132.JPG',
          'ESCUCHAR SONIDOS VISUALES_136.JPG',
          'ESCUCHAR SONIDOS VISUALES_138.JPG',
          'ESCUCHAR SONIDOS VISUALES_142.JPG',
          'ESCUCHAR SONIDOS VISUALES_143.JPG',
          'ESCUCHAR SONIDOS VISUALES_145.JPG',
          'ESCUCHAR SONIDOS VISUALES_147.JPG',
          'ESCUCHAR SONIDOS VISUALES_149.JPG',
          'ESCUCHAR SONIDOS VISUALES_153.JPG',
          'ESCUCHAR SONIDOS VISUALES_154.JPG',
          'ESCUCHAR SONIDOS VISUALES_159.JPG',
          'ESCUCHAR SONIDOS VISUALES_165.JPG',
          'ESCUCHAR SONIDOS VISUALES_167.JPG',
          'ESCUCHAR SONIDOS VISUALES_169.JPG',
          'ESCUCHAR SONIDOS VISUALES_170.JPG',
          'ESCUCHAR SONIDOS VISUALES_171.JPG',
          'ESCUCHAR SONIDOS VISUALES_175.JPG',
          'ESCUCHAR SONIDOS VISUALES_188.JPG',
          'ESCUCHAR SONIDOS VISUALES_189.JPG',
          'ESCUCHAR SONIDOS VISUALES_190.JPG',
          'ESCUCHAR SONIDOS VISUALES_239.JPG'
        ]
      },
      {
        id: 'cck-2024',
        title: 'Vectores Inmanentes - CCK 2024',
        description:
          'An immersive audiovisual experience presented at the Cultural Center Kirchner, featuring multichannel sound design and live-coded visuals that respond to audience interaction.',
        folder: 'cck-2024',
        assets: [
          '17-05-2024 sala inmersiva-Vectores inmanentes-fotos-fede-kaplun-2.JPG',
          '17_05_2024_sala_inmersiva_Vectores_inmanentes_fotos_fede_kaplun (3).JPG',
          '2024-05-18-cck-sala-inmersiva-vectores-inmanentes-foto-manuel-pose-varela-01.jpg',
          '2024-05-18-cck-sala-inmersiva-vectores-inmanentes-foto-manuel-pose-varela-04.jpg',
          '2024-05-18-cck-sala-inmersiva-vectores-inmanentes-foto-manuel-pose-varela-05.jpg',
          '2024-05-18-cck-sala-inmersiva-vectores-inmanentes-foto-manuel-pose-varela-10.jpg',
          '2024-05-18-cck-sala-inmersiva-vectores-inmanentes-foto-manuel-pose-varela-11.jpg',
          '2024-05-18-cck-sala-inmersiva-vectores-inmanentes-foto-manuel-pose-varela-17.jpg',
          '2024_05_18_cck_sala_inmersiva_vectores_inmanentes_foto_manuel_pose (2).jpg',
          '2024_05_18_cck_sala_inmersiva_vectores_inmanentes_foto_manuel_pose 1 (1).png',
          '2024_05_25_cck_auditorio_511_charla_con_artistas_vectores_inmanentes (2).jpg',
          '2024_05_25_cck_auditorio_511_charla_con_artistas_vectores_inmanentes (3).jpg',
          'VECTORES INMANENTES 24-05-2024_1.JPG',
          'VECTORES INMANENTES 24-05-2024_121 (1).jpg',
          'VECTORES INMANENTES 24-05-2024_137.JPG',
          'VECTORES INMANENTES 24-05-2024_141.JPG',
          'VECTORES INMANENTES 24-05-2024_181.JPG',
          'VECTORES INMANENTES 24-05-2024_183.JPG',
          'VECTORES INMANENTES 24-05-2024_57.JPG'
        ]
      },
      {
        id: 'inorganico',
        title: 'inOrgánico',
        description:
          'A series of audiovisual explorations that blur the boundaries between organic and digital realms, featuring live-coded generative visuals and experimental sound design.',
        folder: 'inOrganico',
        assets: [
          'DSC_0001.MOV',
          'IMG_2678 (1).MOV',
          'IMG_2684 (1).MOV',
          'IMG_2686 (1).MOV',
          'IMG_2689 (1).MOV',
          'IMG_2692 (1).MOV',
          'IMG_2695 (1).MOV',
          'IMG_2696 (1) (1).MOV',
          'IMG_2697 (1) (1).MOV',
          'Copy of 001-Mutek-16 a 17 hs Convocatoria-IMG_3699-100922.jpg',
          'Copy of 002-Mutek-16 a 17 hs Convocatoria-IMG_3710-100922 (1).jpg',
          'Copy of 003-Mutek-16 a 17 hs Convocatoria-IMG_3719-100922 (1).jpg',
          'Copy of 005-Mutek-16 a 17 hs Convocatoria-IMG_3737-100922 (1).jpg',
          'Copy of 006-Mutek-16 a 17 hs Convocatoria-IMG_3769-100922.jpg',
          'DSC_0005.JPG',
          'DSC_0006.JPG',
          'DSC_0008.JPG',
          'DSC_0010.JPG',
          'IMG_2691 (1).png',
          'Adobe Express - inorganico_00.mp4',
          'Adobe Express - inorganico_01.mp4',
          'Adobe Express - inorganico_02.mp4',
          'Adobe Express - inorganico_03.mp4',
          'Adobe Express - inorganico_04.mp4'
        ]
      }
    ]

    this.carousels = new Map()
    this.init()
  }

  init () {
    this.render()
    this.setupScrollAnimations()
  }

  render () {
    const container = document.getElementById('work-showcase')
    if (!container) return

    container.innerHTML = this.works
      .map(
        (work, index) => `
      <div class="work-item" data-work-index="${index}">
        <div class="work-header">
          <h3 class="work-title">${work.title}</h3>
          <p class="work-description">${work.description}</p>
        </div>
        <div class="work-carousel" id="carousel-${work.id}">
          <div class="carousel-container">
            <div class="carousel-track" id="track-${work.id}">
              ${work.assets
                .map(
                  (asset, assetIndex) => `
                <div class="carousel-slide">
                  ${
                    this.isVideo(asset)
                      ? `<video src="sprites/${work.folder}/${asset}" loop preload="metadata" data-work-id="${work.id}" data-slide-index="${assetIndex}"></video>
                         <div class="video-controls" data-work-id="${work.id}" data-slide-index="${assetIndex}">
                           <button class="video-control-btn play-pause" data-action="play-pause">
                             <span class="play-icon">▶</span>
                             <span class="pause-icon" style="display: none;">⏸</span>
                           </button>
                           <button class="video-control-btn stop" data-action="stop">
                             <span class="stop-icon">⏹</span>
                           </button>
                           <div class="volume-control">
                             <button class="video-control-btn volume-toggle" data-action="volume-toggle">
                               <span class="volume-icon">🔊</span>
                               <span class="mute-icon" style="display: none;">🔇</span>
                             </button>
                             <input type="range" class="volume-slider" min="0" max="1" step="0.1" value="0.7">
                           </div>
                         </div>`
                      : `<img src="sprites/${work.folder}/${asset}" alt="${
                          work.title
                        } - Image ${assetIndex + 1}" loading="lazy">`
                  }
                </div>
              `
                )
                .join('')}
            </div>
            
            <button class="carousel-controls prev" data-work-id="${
              work.id
            }" data-action="prev">
              <span class="carousel-arrow">‹</span>
            </button>
            
            <button class="carousel-controls next" data-work-id="${
              work.id
            }" data-action="next">
              <span class="carousel-arrow">›</span>
            </button>
            
            <div class="carousel-counter" id="counter-${work.id}">
              1 / ${work.assets.length}
            </div>
            
            <div class="carousel-indicators" id="indicators-${work.id}">
              ${work.assets
                .map(
                  (_, assetIndex) => `
                <div class="carousel-indicator ${
                  assetIndex === 0 ? 'active' : ''
                }" 
                     data-work-id="${work.id}" data-slide="${assetIndex}"></div>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join('')

    // Initialize carousel states
    this.works.forEach(work => {
      this.carousels.set(work.id, {
        currentSlide: 0,
        totalSlides: work.assets.length
      })
    })

    // Add event listeners
    this.setupEventListeners()

    // Initialize video volumes
    this.initializeVideoVolumes()

    // Setup work title animations
    this.setupWorkTitleAnimations()
  }

  setupEventListeners () {
    // Handle carousel control buttons
    document.addEventListener('click', e => {
      if (e.target.closest('.carousel-controls')) {
        const button = e.target.closest('.carousel-controls')
        const workId = button.dataset.workId
        const action = button.dataset.action

        if (action === 'prev') {
          this.prevSlide(workId)
        } else if (action === 'next') {
          this.nextSlide(workId)
        }
      }

      // Handle indicator clicks
      if (e.target.classList.contains('carousel-indicator')) {
        const workId = e.target.dataset.workId
        const slideIndex = parseInt(e.target.dataset.slide)
        this.goToSlide(workId, slideIndex)
      }

      // Handle video control buttons
      if (e.target.closest('.video-control-btn')) {
        const button = e.target.closest('.video-control-btn')
        const action = button.dataset.action
        const videoControls = button.closest('.video-controls')
        const workId = videoControls.dataset.workId
        const slideIndex = videoControls.dataset.slideIndex
        const video = document.querySelector(
          `video[data-work-id="${workId}"][data-slide-index="${slideIndex}"]`
        )

        if (video) {
          this.handleVideoControl(video, action, button)
        }
      }
    })

    // Handle volume slider changes
    document.addEventListener('input', e => {
      if (e.target.classList.contains('volume-slider')) {
        const videoControls = e.target.closest('.video-controls')
        const workId = videoControls.dataset.workId
        const slideIndex = videoControls.dataset.slideIndex
        const video = document.querySelector(
          `video[data-work-id="${workId}"][data-slide-index="${slideIndex}"]`
        )

        if (video) {
          video.volume = parseFloat(e.target.value)
          // Update volume icon based on volume level
          const volumeToggle = videoControls.querySelector('.volume-toggle')
          const volumeIcon = volumeToggle.querySelector('.volume-icon')
          const muteIcon = volumeToggle.querySelector('.mute-icon')

          if (video.volume === 0) {
            volumeIcon.style.display = 'none'
            muteIcon.style.display = 'inline'
          } else {
            volumeIcon.style.display = 'inline'
            muteIcon.style.display = 'none'
          }
        }
      }
    })
  }

  handleVideoControl (video, action, button) {
    switch (action) {
      case 'play-pause':
        if (video.paused) {
          // Pause all other videos first
          this.pauseAllVideos()
          video.play()
          button.querySelector('.play-icon').style.display = 'none'
          button.querySelector('.pause-icon').style.display = 'inline'
        } else {
          video.pause()
          button.querySelector('.play-icon').style.display = 'inline'
          button.querySelector('.pause-icon').style.display = 'none'
        }
        break

      case 'stop':
        video.pause()
        video.currentTime = 0
        const playPauseBtn = button.parentElement.querySelector('.play-pause')
        playPauseBtn.querySelector('.play-icon').style.display = 'inline'
        playPauseBtn.querySelector('.pause-icon').style.display = 'none'
        break

      case 'volume-toggle':
        const volumeIcon = button.querySelector('.volume-icon')
        const muteIcon = button.querySelector('.mute-icon')
        const volumeSlider =
          button.parentElement.querySelector('.volume-slider')

        if (video.muted || video.volume === 0) {
          video.muted = false
          video.volume = volumeSlider.value > 0 ? volumeSlider.value : 0.7
          volumeSlider.value = video.volume
          volumeIcon.style.display = 'inline'
          muteIcon.style.display = 'none'
        } else {
          video.muted = true
          volumeIcon.style.display = 'none'
          muteIcon.style.display = 'inline'
        }
        break
    }
  }

  // Work title random character animation
  setupWorkTitleAnimations () {
    const workTitles = document.querySelectorAll('.work-title')

    workTitles.forEach((title, titleIndex) => {
      // Split text into individual characters
      const text = title.textContent
      const chars = text.split('')

      // Create wrapped characters
      title.innerHTML = chars
        .map(char => {
          // Handle spaces
          if (char === ' ') {
            return '<span class="char">&nbsp;</span>'
          }
          return `<span class="char">${char}</span>`
        })
        .join('')

      // Get all character elements for this title
      const charElements = title.querySelectorAll('.char')

      // Set initial state - characters start invisible
      gsap.set(charElements, {
        opacity: 0
      })

      // Animate characters in with random stagger on scroll
      gsap.to(charElements, {
        scrollTrigger: {
          trigger: title,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        duration: 2,
        stagger: {
          from: 'random',
          each: 0.08
        },
        ease: 'power2.out'
      })
    })
  }

  isVideo (filename) {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi']
    return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext))
  }

  nextSlide (workId) {
    const carousel = this.carousels.get(workId)
    if (!carousel) return

    // Pause all videos before switching slides
    this.pauseAllVideos()

    carousel.currentSlide = (carousel.currentSlide + 1) % carousel.totalSlides
    this.updateCarousel(workId)
  }

  prevSlide (workId) {
    const carousel = this.carousels.get(workId)
    if (!carousel) return

    // Pause all videos before switching slides
    this.pauseAllVideos()

    carousel.currentSlide =
      carousel.currentSlide === 0
        ? carousel.totalSlides - 1
        : carousel.currentSlide - 1
    this.updateCarousel(workId)
  }

  goToSlide (workId, slideIndex) {
    const carousel = this.carousels.get(workId)
    if (!carousel) return

    // Pause all videos before switching slides
    this.pauseAllVideos()

    carousel.currentSlide = slideIndex
    this.updateCarousel(workId)
  }

  updateCarousel (workId) {
    const carousel = this.carousels.get(workId)
    const track = document.getElementById(`track-${workId}`)
    const counter = document.getElementById(`counter-${workId}`)
    const indicators = document.getElementById(`indicators-${workId}`)

    if (track) {
      const translateX = -carousel.currentSlide * 100
      track.style.transform = `translateX(${translateX}%)`
    }

    if (counter) {
      counter.textContent = `${carousel.currentSlide + 1} / ${
        carousel.totalSlides
      }`
    }

    if (indicators) {
      const indicatorElements = indicators.querySelectorAll(
        '.carousel-indicator'
      )
      indicatorElements.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === carousel.currentSlide)
      })
    }
  }

  setupScrollAnimations () {
    if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
      // Animate work items on scroll
      gsap.utils.toArray('.work-item').forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 100
          },
          {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power2.out'
          }
        )
      })

      // Animate works title
      gsap.fromTo(
        '.works-title',
        {
          opacity: 0,
          y: 50
        },
        {
          scrollTrigger: {
            trigger: '.works-title',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }
      )
    }
  }

  pauseAllVideos () {
    const allVideos = document.querySelectorAll('.carousel-slide video')
    const allPlayPauseBtns = document.querySelectorAll('.play-pause')

    allVideos.forEach(video => {
      if (!video.paused) {
        video.pause()
      }
    })

    allPlayPauseBtns.forEach(btn => {
      btn.querySelector('.play-icon').style.display = 'inline'
      btn.querySelector('.pause-icon').style.display = 'none'
    })
  }

  initializeVideoVolumes () {
    // Set initial volume for all videos
    const allVideos = document.querySelectorAll('.carousel-slide video')
    allVideos.forEach(video => {
      video.volume = 0.7 // Set to 70% volume
      video.muted = false // Ensure not muted
    })
  }
}

// Initialize the works showcase
let worksShowcase
document.addEventListener('DOMContentLoaded', function () {
  // Wait for GSAP to be available
  setTimeout(() => {
    worksShowcase = new WorksShowcase()
  }, 200)
})
