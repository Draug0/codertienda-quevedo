import './App.css';
import 'bulma/css/bulma.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='hero is-fullheight-with-navbar has-background-'> 
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;