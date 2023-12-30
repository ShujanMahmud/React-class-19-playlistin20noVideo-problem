import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const states = []
let statesIndex = -1 
function useState(defaultValue){
    let index = ++statesIndex
    if(states[index]) return states[index]

    const setValue = (newValue)=>{
        states[index][0] = newValue;
        renderWithSumit()

    }
    const returnArray = [defaultValue ,setValue]
    states[index] = returnArray;
    return returnArray 
}

function App(){
    const [todo,setTodo] = useState('')
    const [warning,setWarning] = useState(null)
    const handleInput = (e) =>{
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js') ?"Youe Need Javascript Skill to complete The task . Do you Have it?" : null;

        setTodo(inputValue);
        setWarning(updatedWarning);

    };

return(
    <div>
        <p>{todo}</p>
        <p>
            <textarea name="todo" value={todo} onChange={handleInput}/>
        </p>
        <hr/>
        <h2>{warning || "GoodChoice"}</h2>
    </div>
)
}

function renderWithSumit(){
    statesIndex = -1
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
    )
}
renderWithSumit()