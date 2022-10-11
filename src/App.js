import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Header />
        </Row>
        <Row>
          <BrowserRouter>
            <Routes>
              <Route path="/" />
              <Route path="" />
              <Route path="" />
              <Route path="*" />
            </Routes>
          </BrowserRouter>

        </Row>
      </Container>
    </div>
  );
}

export default App;
