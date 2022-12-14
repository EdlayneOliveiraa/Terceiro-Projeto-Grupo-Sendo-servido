import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          width="500px"
          height="500px"
          className="d-block w-100"
          src="https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2019/11/Excelente-casa-de-luxo-frente-mar-em-Jacuipe-488x326.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1-488x326.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2020/09/Casa-de-alto-padrao-a-venda-Quinta-da-Lagoa-Itacimirim-2-488x326.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
