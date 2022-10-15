import './App.css';
import {OptimizePage, FifthPage, ThridPage, SeventhPage, NineteenthPage} from './components/Pages';
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
import logo from './components/layout/Logo/logo-2.png';


function App() {
  const main = {
    height: "100%",
    width: "100%",
};
const img ={
    marginTop: "20px",
    marginLeft: "5%",
};
const div1 = { 
    backgroundColor: "#343f4b",
    margin: "0%",
    height: "auto",
    width:"auto",
    overflow: "hidden",
};
const div2 = { 
    textAlign: "left",
    alignItems: "left",

};

  return (
    <div className="App" style={main}>
      <div style={div1}>
            <Row>
                <Col xs lg="4">
                    <div style={div2}>
                    <a href="Home"><img style={img} src={logo} width="40" height="40" className="logo" alt="" /></a>
                    </div>
                </Col>
                <Col xs lg="8"><Header/></Col>
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
          <Route path="3" element = {<ThridPage />}/>
          <Route path="7" element = {<SeventhPage />}/>
          <Route path="19" element = {<NineteenthPage />}/>
          <Route path="*" element={<SideBar />}/>
        </Routes>
      </BrowserRouter>
          </Row>
            </div>
          
    </div>
  );
}

export default App;
