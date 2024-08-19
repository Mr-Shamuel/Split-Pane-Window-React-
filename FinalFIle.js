import { useState } from "react";
import SplitPane from "split-pane-react"; // Default import
import { Pane } from "split-pane-react"; // Named import
import "split-pane-react/esm/themes/default.css";

export default function App() {
  const [sizes, setSizes] = useState([25, 75]); // Adjusted for percentage-based sizing
  const [isExpanded, setIsExpanded] = useState(false);

  const handleColSize = () => {
    setIsExpanded(!isExpanded);
    setSizes(isExpanded ? [25, 75] : [0, 100]); // Adjust sizes based on expansion
  };

  function style(color) {
    return {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
    };
  }

  return (
    <div className="container">
      <button onClick={handleColSize}>{isExpanded ? ">" : "<"}</button>

      <div style={{ height: "500px" }}>
        <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
          {!isExpanded && (
            <Pane minSize={50} maxSize="50%">
              <div style={style("#ddd")}>
                <h6>This is the left side</h6>
              </div>
            </Pane>
          )}
          <Pane minSize={50}>
            <div style={style("#eee")}>
              <h6>This is the right side</h6>
            </div>
          </Pane>
        </SplitPane>
      </div>
    </div>
  );
}
