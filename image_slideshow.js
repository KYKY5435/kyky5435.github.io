import("/basis.js")
//image Carousel

const Images_Links= {
  "https://kyky5435.github.io/": ["1",
  "2"]
}

function nextImage(go_prev, current_image) {
  //go_prev = false: +1 else -1
  let link = getLink()
  let images = Images_Links[link]
  let index = images.indexOf(current_image)
  
  if (!go_prev) {
    index = ( index + 1 ) % image.legnth
  } else {
    index = ( index - 1 ) % image.legnth
  }

  return images[newIndex]
}

function image_carousel_main() {
  
}
