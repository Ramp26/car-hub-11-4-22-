import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousell() {
  return (
    <div>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pcmag.com/imagery/articles/01zG5GZURkOhvshOfu9EnC2-3..v1569491178.jpg"
      alt="First slide"
      width="100%"
      height="550px"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X5/6450/1645419251434/front-left-side-47.jpg"
      alt="Second slide"
      width="100%"
      height="550px"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/08/1566387567_Slide4_1005x520_0.jpg"
      alt="Third slide"
      width="100%"
      height="550px"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.hindustantimes.com/auto/auto-images/Tata/Harrier/1589876617866_Harrier8"
      alt="Third slide"
      width="100%"
      height="550px"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default Carousell