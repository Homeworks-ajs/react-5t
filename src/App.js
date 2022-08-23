import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div class="container">
      <Card src={"https://img3.akspic.ru/previews/8/3/3/8/6/168338/168338-nyujork-ulice_nyu_jorka-ulica-manhetten-zdanie-500x.jpg"}>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate perspiciatis reiciendis unde, obcaecati porro quae, aspernatur dolorum eum eveniet ex vitae culpa dolores dignissimos exercitationem praesentium. In, corporis esse.</p>
      </Card>
    </div>
  );
}

export default App;
