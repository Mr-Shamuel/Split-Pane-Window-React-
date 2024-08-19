import React, { useState } from "react";
import SplitPane from "split-pane-react"; // Default import
import { Pane } from "split-pane-react"; // Named import
import "split-pane-react/esm/themes/default.css";

function style(color) {
  return {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color,
  };
}

function App() {
  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  return (
    <div style={{ height: 500 }}>
      <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
        <Pane minSize={50} maxSize="70%">
          <div style={style("#ddd")}>pane1</div>
        </Pane>
        <div style={style("#ccc")}>pane2</div>
      </SplitPane>
    </div>
  );
}

export default App;
