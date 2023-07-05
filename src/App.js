import "./App.css";
import Banner from "./components/banner";
import Rechart from "./Recharts";
import Rechart2 from "./Recharts_two";
import Circle from "./components/circle";
import Circle_two from "./components/circle_two";
import { useState } from "react";
import axios from "axios";

function App() {
    const [data, setdata] = useState();
    axios.get("http://10.150.150.63/summer/index.php")
        .then(function(response) {
            setdata(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    return (
        <div>
            <div className="a">
                <Banner />
                <div className="a">
                    <Rechart />
                    <Rechart2 />
                </div>
            </div>
            <div className="a">
                <Circle_two title="온도" abc={12}/>
                <Circle title="습도" abc={11}/>
            </div>
        </div>
    );
}

export default App;