const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
]

const arrow_left = document.getElementsByClassName('arrow_left')
const arrow_right = document.getElementsByClassName('arrow_right')

const dots = document.getElementsByClassName('dots')[0]
const bannerImg = document.getElementsByClassName('banner-img')[0]
const bannerText = document.getElementById('bannerText')

let carouselIndex = 0

for (let i = 0; i < slides.length; i++) {
  const newdot = document.createElement('div')
  newdot.classList.add('dot')
  dots.appendChild(newdot)
}

function carouselSwitch(selectedDot) {
  for (const dot of dots.children) {
    for (let i = 0; i < dot.classList.length; i++) {
      const dotClass = dot.classList[i]

      if (dotClass === 'dot_selected') {
        dot.classList.remove('dot_selected')
      }
    }
  }

  selectedDot.classList.add('dot_selected')

  bannerImg.attributes.src.value = `./assets/images/slideshow/${slides[carouselIndex].image}`

  bannerText.innerHTML = slides[carouselIndex].tagLine
}

carouselSwitch(dots.children[carouselIndex])

arrow_left[0].addEventListener('click', () => {
  if (carouselIndex === 0) {
    carouselIndex = slides.length - 1
  } else {
    carouselIndex = carouselIndex - 1
  }
  
  carouselSwitch(dots.children[carouselIndex])
})

arrow_right[0].addEventListener('click', () => {
  if (carouselIndex === slides.length - 1) {
    carouselIndex = 0
  } else {
    carouselIndex = carouselIndex + 1
  }

  carouselSwitch(dots.children[carouselIndex])
})
