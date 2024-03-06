import { ChakraProvider, Stack } from "@chakra-ui/react";
import { HorizontalBarChart } from "./components/HorizontalBarCharts";
import { DonutChart } from "./components/DonutChart";

function App() {
  return (
    <ChakraProvider>
      <Stack direction="row" spacing={4} p={4}>
        <HorizontalBarChart />
        <DonutChart />
      </Stack>
    </ChakraProvider>
  );
}

export default App;
