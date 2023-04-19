
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title='welcome to react';
  const like=50;
  const link="http://www.google.com";
  var person=['adesh','dk'];
  return (
    
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
