import './App.css';

import Home from "./home";
import News from './components/News';
import Timer from './components/Timer/Timer';

function App() {


const data = [
  {header: 'Najnowsze wiadomości', intro: 'złapano zbiega'}, 
  {header: 'Odnaleziony poszukiwany starzec', intro: 'Pan zbigniew już w domu z bliskimi'},  
  {header: 'Nowe logo miasta', intro: 'Poznań zmienia swoje logo'}, 
]





  return (
    <div className="App">

      <Timer/>
      <Home/>
      {data.map((elem, index) => (
          <News key={`news-${index}`} header={elem.header} intro={elem.intro.length > 25 ? elem.intro.substring(0, 25) + "..." : elem.intro}/>
      ))}
      
    </div>
  );
}

export default App;
