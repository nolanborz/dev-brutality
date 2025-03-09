import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Public Sans App</h1>

      <div className="space-y-4">
        <p className="text-lg">This text should be using Public Sans font.</p>

        <div className="flex flex-col gap-2">
          <p className="font-light">This is Public Sans Light (300)</p>
          <p className="font-normal">This is Public Sans Regular (400)</p>
          <p className="font-medium">This is Public Sans Medium (500)</p>
          <p className="font-semibold">This is Public Sans SemiBold (600)</p>
          <p className="font-bold">This is Public Sans Bold (700)</p>
        </div>

        <Button>Shadcn Button with Public Sans</Button>
      </div>
    </div>
  );
}

export default App;
