import React from 'react';

const Security = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Comparação de Segurança e Conformidade em Serviços de Nuvem</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">AWS</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Certificações de segurança, como ISO 27001 e SOC 2</li>
                <li className="list-group-item">Firewalls e controles de acesso robustos</li>
                <li className="list-group-item">Auditorias de segurança e conformidade regulares</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Azure</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Conformidade com padrões globais, como GDPR e HIPAA</li>
                <li className="list-group-item">Ferramentas avançadas de criptografia e monitoramento</li>
                <li className="list-group-item">Segurança multicamada em infraestrutura e aplicativos</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Google Cloud</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Controles de segurança centralizados e gerenciamento de identidade</li>
                <li className="list-group-item">Proteção contra ameaças avançadas e ataques DDoS</li>
                <li className="list-group-item">Ferramentas de conformidade automática e relatórios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
