import './App.css';

const App = () => {
  return (
    <div>
    <Header />
    <div className = 'App'>
      <div>Up Side</div>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JSX</li>
        <li>REACT</li>
      </ul>
      <div>
        <a>Next</a>
      </div>
    </div>
    </div>
    
  );
}

const Header = () => {
  return (<div>
    <a href='#s'>Home</a>-
    <a href='#s'>News Feed</a>-
    <a href='#s'>Message</a>
  </div>

  );
}

export default App;
