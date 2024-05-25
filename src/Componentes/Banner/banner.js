import React from 'react';
import nuvem from '../../images/nuvem.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div id="Sobre" className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis fs-2">A Revolução da Computação em Nuvem: Transforme Seu Negócio com AWS, Google Cloud e Azure</h1>
          <p className="lead">A computação em nuvem está transformando o mundo dos negócios, oferecendo flexibilidade, escalabilidade e inovação sem precedentes. Com a cloud, você pode acessar recursos poderosos sob demanda, reduzir custos operacionais e acelerar o desenvolvimento de novas soluções. Descubra como AWS, Google Cloud e Azure estão liderando essa revolução tecnológica e como você pode aproveitar essas oportunidades.</p>
        </div>
        <div className="col-lg-5 p-0 overflow-hidden shadow-lg">
          <img className="img-fluid rounded-lg-3" src={nuvem} alt="Computação em Nuvem" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
