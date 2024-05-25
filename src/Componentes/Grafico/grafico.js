import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CloudServiceUsage = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Limpar gráfico anterior antes de criar um novo
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['AWS', 'Azure', 'Google Cloud'],
        datasets: [
          {
            label: 'Serviços Mais Utilizados ( Dados fictícios)',
            data: [80, 70, 90], // Dados fictícios para exemplo
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Limpar o gráfico quando o componente for desmontado
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default CloudServiceUsage;
