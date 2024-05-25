import React from 'react';

const Venda = () => {
  return (
    <div id='Contrate' className="container mt-5">
      <h2 className="text-center mb-4">Gostou de algum serviço cloud? Contrate agora</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <a href="https://aws.amazon.com/pt/" className="btn btn-primary btn-lg btn-block" target="_blank" rel="noopener noreferrer">AWS</a>
        </div>
        <div className="col-md-4 mb-3">
          <a href="https://azure.microsoft.com/pt-br/" className="btn btn-primary btn-lg btn-block" target="_blank" rel="noopener noreferrer">Azure</a>
        </div>
        <div className="col-md-4 mb-3">
          <a href="https://cloud.google.com/" className="btn btn-primary btn-lg btn-block" target="_blank" rel="noopener noreferrer">Google Cloud</a>
        </div>
      </div>
    </div>
  );
};

export default Venda;
