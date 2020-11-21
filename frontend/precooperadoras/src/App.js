import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  return (
      <div className="page">
        <div className="page-main">
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
  );
}

export default App;
