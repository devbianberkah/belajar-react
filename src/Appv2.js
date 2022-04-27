import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo';
import Body from './components/Body';
import Description from './components/Description';
import Jokes from './components/Jokes';
import JokesData from './components/JokesData';
import Card from './compv2/Card';
import ItemData from './compv2/ItemData';

const item1 = "Released 2013";
const item2 = "Created By Jordan Walke"

 
function App() {
  const itemData = ItemData.map((item)=>{
     return <Card 
                key={item.id}
                item={item}
             />
  })  
  return (
    <div className="App">
      <div className='App-test'>
        <div className='test-header'>
          My Journal App
        </div>
        <div className='test-body'>
          {itemData}
        </div>
      </div>
    </div>
  );
}

export default App;
