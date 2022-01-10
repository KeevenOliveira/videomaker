import CarouselStrap from 'react-bootstrap/Carousel';
// import Image from '../../public/editing.jpg';
import Image from 'next/image'
export default function Carousel() {
  return (
    <CarouselStrap style={{ width: '100%' }}>
      <CarouselStrap.Item>
        <img
          style={{ width: "100%" }} src="/editing.png" alt="movie" />
        <CarouselStrap.Caption
        // as={teste}
        >
          <h3>First slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </CarouselStrap.Caption>
      </CarouselStrap.Item>
      <CarouselStrap.Item>
        <img style={{ width: '100%' }} src="/images/movie.jpeg" />
        <CarouselStrap.Caption>
          <h3>Second slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </CarouselStrap.Caption>
      </CarouselStrap.Item>
      <CarouselStrap.Item>
        <img style={{ width: '100%' }} src="/images/living.jpeg" />
        <CarouselStrap.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </CarouselStrap.Caption>
      </CarouselStrap.Item>
    </CarouselStrap>
  );
}