import Card from "./components/Card";
import { CARD_INFORMATION } from "./data";



function App() {
  return (<>
    <header>
      <h1>My Cards</h1>
      <p>This is all the information of our registered participants and their shared profiles. </p>
    </header>
    <div className="card-container">
      {CARD_INFORMATION.map((item) =>(
        <Card key={item.id}
          name={item.name}
          hobby={item.hobby}
          gender={item.gender}
          image={item.image}
        />))}
    </div>
  </>);
}

export default App;
