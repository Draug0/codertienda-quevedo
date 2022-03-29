import './App.css';
import 'bulma/css/bulma.min.css'
import {useState} from 'react' 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  const [id, setId] = useState(1)

  return (
    <div className="App">
      <NavBar />
      <section className='hero is-fullheight-with-navbar'> 
        <div className="hero-body is-flex-direction-column">
          <ItemListContainer setId={setId}/>
          <ItemDetailContainer id={id} />
        </div>
      </section>
    </div>
  );
}

export default App;