import './App.css';
import {OptimizePage, FifthPage} from './components/Pages';
import SideBar from './components/SideMenu/SideBar';
import ListProduct from './components/List';
import CommonQuestions from './components/Questions';
import SupportGuide from './components/SupportGuides';
import RankingPeriferic from './components/Ranking'
import Opciones from './components/Opciones';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BestBuilds from './components/Best_Builds';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Container>
        <Col>
          <Row>
            <Header/>
          </Row>
          <Row>
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />} />
          <Route path="productos" element={<ListProduct />} />
          <Route path="preguntas" element={<CommonQuestions />} />
          <Route path="opciones" element={<Opciones />} />
          <Route path="support" element={<SupportGuide />} />
          <Route path="ranking" element={<RankingPeriferic />} />
          <Route path="optimized" element={<OptimizePage />} />
          <Route path="bestbuild" element = {<BestBuilds />}/>
          <Route path="5" element = {<FifthPage />}/>
          <Route path="*" element={<SideBar />}/>
        </Routes>
      </BrowserRouter>
          </Row>
        </Col>
        </Container> 
      
    </div>
  );
}

export default App;
