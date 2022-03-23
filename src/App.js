import './App.css';
import 'bulma/css/bulma.min.css'
import NavBar from './components/organisms/NavBar';
import ItemListContainer from './components/organisms/ItemListContainer';



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