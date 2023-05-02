import './App.css';
import Product from './components/Product.js';
import montre from '../src/Imgs/montre.jpg';
import pull from '../src/Imgs/pull.avif';
import sac from '../src/Imgs/sac.avif';

function App(){
  return (
    <div className="App">
   < div className='cards'>
    <Product title='Montre' picture={montre} />
    <Product title='Pull' picture={pull} />
    <Product title='Sac' picture={sac} />
</div>
   
    </div>
  );
}

export default App;
