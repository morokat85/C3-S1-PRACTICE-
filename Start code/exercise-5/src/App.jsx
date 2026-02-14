import Card from "./components/Card";
import { CARD_INFORMATION } from "./data";



function App() {
  return (<>
    <header>
      <h1>My Cards</h1>
      <p>This all the information of </p>
    </header>
    <div>
      {CARD_INFORMATION.map((item) =>(
        <Card key={item.id}
          name={item.name}
          hobby={item.hobby}
          image={item.image}
        />))}
    </div>
  </>);
}

export default App;
