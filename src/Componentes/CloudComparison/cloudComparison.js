import React from 'react';

const CloudComparison = () => {
  const services = [
    {
      category: 'Computação',
      aws: 'EC2, Lambda, ECS, EKS',
      gcp: 'Compute Engine, App Engine, Cloud Functions, Kubernetes Engine',
      azure: 'Virtual Machines, App Services, Functions, AKS'
    },
    {
      category: 'Armazenamento',
      aws: 'S3, EBS, Glacier',
      gcp: 'Cloud Storage, Persistent Disk, Filestore',
      azure: 'Blob Storage, Disk Storage, Files'
    },
    {
      category: 'Bancos de Dados',
      aws: 'RDS, DynamoDB, Redshift',
      gcp: 'Cloud SQL, Firestore, BigQuery',
      azure: 'Azure SQL Database, Cosmos DB, SQL Data Warehouse'
    },
    {
      category: 'Rede e CDN',
      aws: 'VPC, CloudFront',
      gcp: 'Virtual Private Cloud, Cloud CDN',
      azure: 'Virtual Network, Azure CDN'
    },
    {
      category: 'Inteligência Artificial e Machine Learning',
      aws: 'SageMaker, Rekognition',
      gcp: 'AI Platform, Vision AI, Natural Language API',
      azure: 'Azure Machine Learning, Cognitive Services, Bot Service'
    },
    {
      category: 'Ferramentas de Desenvolvimento',
      aws: 'CodeBuild, CodePipeline',
      gcp: 'Cloud Build, Cloud Source Repositories',
      azure: 'Azure DevOps, App Configuration'
    }
  ];

  return (
    <div id='Comparando' className="container mt-5">
      <h2 className="text-center mb-4">Comparação de Serviços de Cloud</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Categoria</th>
            <th>AWS</th>
            <th>Google Cloud</th>
            <th>Azure</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={index}>
              <td>{service.category}</td>
              <td>{service.aws}</td>
              <td>{service.gcp}</td>
              <td>{service.azure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CloudComparison;
