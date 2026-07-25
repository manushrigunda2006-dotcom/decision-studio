import { useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [selectedDecision, setSelectedDecision] = useState<any>(null);

  return (
    <MainLayout selectedDecision={selectedDecision}>
      <Dashboard
        setSelectedDecision={setSelectedDecision}
      />
    </MainLayout>
  );
}

export default App;