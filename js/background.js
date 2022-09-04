const bgImgs = [
  "bg-001.jpg",
  "bg-002.jpg",
  "bg-003.jpg",
  "bg-004.jpg",
  "bg-005.jpg",
  "bg-006.jpg",
  "bg-007.jpg",
]

const chosenImage = bgImgs[Math.floor(Math.random() * bgImgs.length)]
const $bg = document.createElement('img')
$bg.src = `img/${chosenImage}`
$bg.classList.add('bg')
document.body.appendChild($bg)

$bg.src = `img/${chosenImage}`