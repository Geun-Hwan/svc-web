import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import RouterFactory from "./RouterFactory";
import { queryClient } from "./libs/queryClent";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterFactory />
    </QueryClientProvider>
  );
}

export default App;
