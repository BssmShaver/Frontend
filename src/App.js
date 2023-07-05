import "./App.css";
import Rechart from "./Recharts";
import Rechart2 from "./Recharts_two";
import Circle from "./components/circle";

function App() {
    return (
        <div>
            <div className="a">
                <Rechart />
                <Rechart2 />
            </div>
            <div className="b">
                <Circle title="온도" abc={11}/>
                <Circle title="습도" abc={12}/>
            </div>
        </div>
    );
}

export default App;