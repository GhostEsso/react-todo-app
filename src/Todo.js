import './Todo.css';
import Header from './Components/Header';
import Logic from './Components/TodosLogic';


function App() {
    return (
        <div className='Todo-container'>
            <Header />
            <Logic />
        </div>
    )
}

export default App;
