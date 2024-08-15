import React, {useEffect , useState} from 'react';
import './index.css';

function App(){
  const [API, setNutri] = useState([]);

  useEffect(()=>{
    let url ='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then((r)=> r.json())
    .then((json) => setNutri(json))
  },[]);

  return(
    <div class='header'>
      <header>
        <strong>React api</strong>
      </header>

      {API.map((item)=>{
        return(
          <article class='article' key={item.id}>
            <strong>{item.name}</strong>
            
            
            <button class='button'>Acessar</button>
          </article>

        );

      })}
    </div>
  );
}
export default App
;