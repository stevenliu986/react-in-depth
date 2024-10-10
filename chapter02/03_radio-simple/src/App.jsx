import {useState} from 'react';
import RadioGroup from "./RadioGroup.jsx";

function App() {
    const [data, setData] = useState({
        meal: "",
        bread: "",
        side: "",
        beverage: "",
    });

    const onChange = (name) => (value) => setData({...data, [name]: value});
    return (
        <main>
            <h1>Breakfast order form</h1>
            <h2>Meal</h2>
            <RadioGroup name="meal" options={[
                "Small: $5.99",
                "Medium: $7.99",
                "Large: $9.99",
            ]} onChange={onChange("meal")}/>
        </main>
    )
}

export default App
