import useRequest from "./hooks/useRequest";
import axios from "axios";

function App() {
    const [toDos, loading, error] = useRequest(fetchTodoes);
    // const [value, setValue] = useState('');
    //
    // const debounsedSearch = useDebounce(search, 500);
    // function search (query)  {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
    //         .then(response => response.json())
    //         .then(json => {
    //           console.log(json);
    //         })
    //   }
    // const onChange = (e) => {
    //   setValue(e.target.value);
    //   debounsedSearch(e.target.value);
    // }
    function fetchTodoes ()  {
        return  axios.get(`https://jsonplaceholder.typicode.com/todos`);
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>Error: {error}</h1>
    }

  return (
    <div className="App">
        {/*<List/>*/}
        {/*<input type={"text"} value={value} onChange={onChange}/>*/}
        {toDos && toDos.map(todo =>
            <div style={{padding: 30, border: '2px solid black'}} key={todo.id}>
                {todo.id} {todo.title}
            </div>
        )}

    </div>
  );
}

export default App;
