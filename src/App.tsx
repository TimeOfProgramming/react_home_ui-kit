import { useState } from "react";
import { TextareaAutoSize } from "./shared/components/TextareaAutoSize/ui";

function App() {
  const [value, setValue] = useState<{ value: string }>({
    value: "",
  });

  return (
    <div>
      <TextareaAutoSize
        onChange={setValue}
        value={value}
        maxRows={10}
        rows={4}
      />
    </div>
  );
}

export default App;
