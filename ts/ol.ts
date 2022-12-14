import Feature from 'ol/Feature'
import { GIF } from 'gifloop'

import OSM from 'ol/source/OSM'
import Map from 'ol/Map'
import Point from 'ol/geom/Point'
import View from 'ol/View'
import { Icon, Style } from 'ol/style'
import { Stamen, Vector as VectorSource } from 'ol/source'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
const LONGCOL = [2.0022233, 44.2554001]

export function createMap(target: HTMLDivElement) {
  const iconFeature = new Feature({
    geometry: new Point(LONGCOL),
  })

  const vectorSource = new VectorSource({
    features: [iconFeature],
  })

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  })

  const rasterLayer = new TileLayer({
    source: new Stamen({
      layer: 'toner',
    }),
  })

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      vectorLayer,
    ],
    target,
    view: new View({
      projection: 'EPSG:4326',
      center: LONGCOL,
      minZoom: 14,
      maxZoom: 18,
      zoom: 17,
    }),
  })

  const canvas = document.createElement('canvas')
  canvas.width = 640
  canvas.height = 357
  canvas.setAttribute('style', `position:absolute; top:0;z-index:999;`)
  // document.body.appendChild(canvas)
  const ctx = canvas.getContext('2d')!
  const gifUrl = '/img/visiteurs.gif'
  const gif = new GIF({
    loopTime: 70,
    url: gifUrl,
  })
  iconFeature.setStyle(
    new Style({
      image: new Icon({
        img: canvas,
        offset: [-320, -179],
        imgSize: [640, 357],
        opacity: 0.8,
      }),
    }),
  )
  gif.on('frame', function (frame) {
    ctx.clearRect(0, 0, frame.dims.width, frame.dims.height)
    if (frame.imageBitMap) {
      ctx.drawImage(frame.imageBitMap, 0, 0)
    } else {
      ctx.putImageData(frame.imageData, frame.left, frame.top)
    }
    map.render()
  })
  // change mouse cursor when over icon
  map.on('pointermove', function (e) {
    const pixel = map.getEventPixel(e.originalEvent)
    const hit = map.hasFeatureAtPixel(pixel)
    // map.getTarget().style.cursor = hit ? 'pointer' : ''
  })
}
