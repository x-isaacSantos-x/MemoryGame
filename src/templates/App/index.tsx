
import { Grid } from '../../components/Grid';
import { cards } from '../../data/cards';
import './styles.css'

function App() {

  const handleClick = (id: string) => {
    console.log(id);

  }
 

  return (
 
    <div className='App'>
      <Grid cards={cards} />
    </div>

  )
}

export default App
