import logo from "./logo.svg";
import "./App.css";
import Rechart from "./Recharts";
import Rechart2 from "./Recharts_two";

function App() {
    return (
        <div style={{ width: 1000, height: 800 }}>
            <Rechart />
            <Rechart2 />
        </div>
    );
}

export default App;