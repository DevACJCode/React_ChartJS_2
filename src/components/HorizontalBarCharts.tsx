import { Card, CardBody } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const chamadosVindoDoBack = {
//   labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
//   qtdChamadosPorMes: [
//     {
//       abertos: 150,
//       fechados: 90,
//     },
//     {
//       abertos: 569,
//       fechados: 250,
//     },
//     {
//       abertos: 187,
//       fechados: 126,
//     },
//     {
//       abertos: 50,
//       fechados: 160,
//     },
//     {
//       abertos: 785,
//       fechados: 263,
//     },
//     {
//       abertos: 70,
//       fechados: 23,
//     },
//   ],
// };

// const data = {
//   labels: chamadosVindoDoBack.labels,
//   datasets: [
//     {
//       label: "Abertos",
//       data: chamadosVindoDoBack.qtdChamadosPorMes.map(
//         (chamados) => chamados.abertos
//       ),
//       backgroundColor: ["rgba(54, 162, 235, 0.2)"],
//     },
//     {
//       label: "Fechados",
//       data: chamadosVindoDoBack.qtdChamadosPorMes.map(
//         (chamados) => chamados.fechados
//       ),
//       backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//     },
//   ],
// };

export function HorizontalBarChart() {
  return (
    <Card height="400px" display="flex" w="100%" shadow="xl">
      <CardBody height="300px">
        BAR
        {/* <Bar
          data={data}
          options={{
            plugins: {
              title: {
                text: "Relação de chamados abertos/fechados por mês",
                display: true,
              },
            },
            maintainAspectRatio: false,
          }}
        /> */}
      </CardBody>
    </Card>
  );
}
