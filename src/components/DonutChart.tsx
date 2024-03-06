import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card, CardBody } from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const chamadosVindoDoBack = {
  labels: ["Abertos", "Fechados", "Pausados"],
  qtdChamados: [190, 87, 26],
};

const data = {
  labels: chamadosVindoDoBack.labels,
  datasets: [
    {
      data: chamadosVindoDoBack.qtdChamados,
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function DonutChart() {
  return (
    <Card display="flex" w="30%" shadow="xl">
      <CardBody>
        <Doughnut
          data={data}
          options={{
            plugins: {
              title: {
                text: "Chamados no mês por situação",
                display: true,
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </CardBody>
    </Card>
  );
}
