import { GIF } from 'gifloop'

export function createGif(canvas: HTMLCanvasElement) {
  canvas.width = 640
  canvas.height = 357
  canvas.setAttribute('style', `position:absolute; top:0;z-index:999;`)
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  const gifUrl = '/img/visiteurs.gif'
  const gif = new GIF({
    loopTime: 70,
    url: gifUrl,
  })
  gif.on('frame', function (frame) {
    ctx!.clearRect(0, 0, frame.dims.width, frame.dims.height)
    if (frame.imageBitMap) {
      ctx.drawImage(frame.imageBitMap, 0, 0)
    } else {
      ctx.putImageData(frame.imageData, frame.left, frame.top)
    }
    // ctx!.drawImage(
    //   frame.imageBitMap,
    //   frame.dims.x,
    //   frame.dims.y,
    //   frame.dims.width,
    //   frame.dims.height,
    // )
  })
}
