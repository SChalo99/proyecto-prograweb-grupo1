import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card';


const his21 ={
    backgroundColor: "white",  
};
const txt21={
    color: "#343f4b",
    marginTop: "2%",
    marginLeft: "5%",
};
const img ={
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    margin: "0%",
    width:"400px",
     height:"220px"

};

const cardtxt ={
    color: "black",
    textAlign: "justify",
    fontSize: "10px",
    marginTop: "15px",
};
const cardlogo ={
    margin: "auto",
    width: "50px",
    height: "50px",
    borderRadius: "30px",
};
const h1card ={
    color: "black",
    textAlign: "left",
    marginLeft: "0%",
    fontSize: "20px",
};
const cuad2 ={
    height: "8px",
    width: "80px",
    backgroundColor: "#c25be9",
};

const qll ={
    color: "red",
    marginLeft: "10px",
    height: "30px",
    with: "30px",
};
const qrl ={
    color: "red",
    marginTop: "30px",
    height: "30px",
    with: "30px",
};
const qlr ={
    color: "#c25be9",
    marginLeft: "10px",
    height: "30px",
    with: "30px",
};
const qrr ={
    color: "#c25be9",
    marginTop: "30px",
    height: "30px",
    with: "30px",
};
const cuad1 ={
    height: "8px",
    width: "80px",
    backgroundColor: "red",
};
const His21=()=>{
    return(
        <div style={his21}>
            <h1 style={txt21}>Influencers</h1>
            <Row>
            <Col>
                    <Card
                    video = {<iframe style={img} src="https://www.youtube.com/embed/4vpPJb392Vg" title="MrTop5's NEW Insane Fortnite SUPERCOMPUTER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>}
                    text = {<p style={cardtxt}>You basically pick which game you play, which permormance you want, and It'll suggest a rig for you. They make thing much much simpler and again for only $75bucks? Okay!</p>}
                    canal = {<a href="https://www.youtube.com/c/MoreMrTop5"><img src="https://yt3.ggpht.com/a-/AAuE7mC_MaeBUMb8IP8ZoH2laCleafU7yFSx7ERr5g=s900-mo-c-c0xffffffff-rj-k-no" style={cardlogo} alt='' /></a>}
                    descrition = {<p style={cardtxt}>Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!</p>}
                    ncanal = {<h1 style={h1card}>MR TOP 5.</h1>}
                    comilla1 = {<svg className="open-quotation accent" style={qll} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.0957 12.8812C23.4711 12.3044 24.0479 10.6627 23.4267 9.33167L21.2527 4.76168C20.6315 3.47543 19.1229 2.89819 17.7919 3.47543C14.0205 5.07271 10.7816 7.15804 8.20823 9.68706C5.05804 12.6593 2.92834 16.0757 1.77475 19.8471C0.621163 23.6632 0 28.8539 0 35.4649V49.0861C0 50.5503 1.19796 51.7482 2.66213 51.7482H20.0991C21.5632 51.7482 22.7612 50.5503 22.7612 49.0861V31.6492C22.7612 30.1846 21.5632 28.987 20.0991 28.987H11.7577C11.8465 24.5054 12.9113 20.9119 14.8635 18.205C16.4608 16.0318 18.8567 14.257 22.0957 12.8812Z" fill="currentColor"></path>
                        <path d="M53.4185 12.8811C54.7939 12.3043 55.3703 10.6627 54.7495 9.33164L52.5755 4.80647C51.9543 3.51977 50.4458 2.94298 49.1147 3.51977C45.3877 5.11705 42.1927 7.20238 39.5754 9.68703C36.4248 12.7041 34.2512 16.1205 33.0971 19.8919C31.9435 23.6184 31.3672 28.81 31.3672 35.4653V49.0865C31.3672 50.5507 32.5651 51.7487 34.0293 51.7487H51.4662C52.9304 51.7487 54.1284 50.5507 54.1284 49.0865V31.6496C54.1284 30.185 52.9304 28.9875 51.4662 28.9875H43.0805C43.1693 24.5058 44.2346 20.9123 46.1864 18.2054C47.7836 16.0318 50.1796 14.257 53.4185 12.8811Z" fill="currentColor"></path>
                        </svg> }
                    comilla2 = {
                        <svg className="close-quotation accent" style={qrl} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.9043 12.8812C31.5289 12.3044 30.9521 10.6627 31.5733 9.33167L33.7473 4.76168C34.3685 3.47543 35.8771 2.89819 37.2081 3.47543C40.9795 5.07271 44.2184 7.15804 46.7918 9.68706C49.942 12.6593 52.0717 16.0757 53.2252 19.8471C54.3788 23.6632 55 28.8539 55 35.4649V49.0861C55 50.5503 53.802 51.7482 52.3379 51.7482H34.9009C33.4368 51.7482 32.2388 50.5503 32.2388 49.0861V31.6492C32.2388 30.1846 33.4368 28.987 34.9009 28.987H43.2423C43.1535 24.5054 42.0887 20.9119 40.1365 18.205C38.5392 16.0318 36.1433 14.257 32.9043 12.8812Z" fill="currentColor"></path>
                        <path d="M1.58152 12.8811C0.206091 12.3043 -0.370258 10.6627 0.25046 9.33164L2.42453 4.80647C3.04569 3.51977 4.55424 2.94298 5.8853 3.51977C9.61228 5.11705 12.8073 7.20238 15.4246 9.68703C18.5752 12.7041 20.7488 16.1205 21.9029 19.8919C23.0565 23.6184 23.6328 28.81 23.6328 35.4653V49.0865C23.6328 50.5507 22.4349 51.7487 20.9707 51.7487H3.53375C2.06958 51.7487 0.871624 50.5507 0.871624 49.0865V31.6496C0.871624 30.185 2.06958 28.9875 3.53375 28.9875H11.9195C11.8307 24.5058 10.7654 20.9123 8.81364 18.2054C7.21636 16.0318 4.82045 14.257 1.58152 12.8811Z" fill="currentColor"></path>
                        </svg>   
                        }
                    cuadrado = {<div style={cuad1}></div>}
                    />
            </Col>
            <Col>
                    <Card
                    video = {<iframe style={img} src="https://www.youtube.com/embed/UhO7MLntkDE" title="This Gaming PC has a Dirty Secret - Build Redux" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
                    text = {<p style={cardtxt}>You basically pick which game you play, which permormance you want, and It'll suggest a rig for you. They make thing much much simpler and again for only $75bucks? Okay!</p>}
                    canal = {<a href="https://www.youtube.com/c/ShortCircuit"><img src="https://yt3.ggpht.com/ytc/AMLnZu_-v2bzQCks3k_MHJNya5J_TSVpMevRw2-axtLX=s900-c-k-c0x00ffffff-no-rj" style={cardlogo} alt='' /></a>}
                    descrition = {<p style={cardtxt}>Thank you for the awesome review</p>}
                    ncanal = {<h1 style={h1card}>SHORT CIRCUIT.</h1>}
                    comilla1 = { <svg className="open-quotation accent" style={qlr} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0957 12.8812C23.4711 12.3044 24.0479 10.6627 23.4267 9.33167L21.2527 4.76168C20.6315 3.47543 19.1229 2.89819 17.7919 3.47543C14.0205 5.07271 10.7816 7.15804 8.20823 9.68706C5.05804 12.6593 2.92834 16.0757 1.77475 19.8471C0.621163 23.6632 0 28.8539 0 35.4649V49.0861C0 50.5503 1.19796 51.7482 2.66213 51.7482H20.0991C21.5632 51.7482 22.7612 50.5503 22.7612 49.0861V31.6492C22.7612 30.1846 21.5632 28.987 20.0991 28.987H11.7577C11.8465 24.5054 12.9113 20.9119 14.8635 18.205C16.4608 16.0318 18.8567 14.257 22.0957 12.8812Z" fill="currentColor"></path>
                                <path d="M53.4185 12.8811C54.7939 12.3043 55.3703 10.6627 54.7495 9.33164L52.5755 4.80647C51.9543 3.51977 50.4458 2.94298 49.1147 3.51977C45.3877 5.11705 42.1927 7.20238 39.5754 9.68703C36.4248 12.7041 34.2512 16.1205 33.0971 19.8919C31.9435 23.6184 31.3672 28.81 31.3672 35.4653V49.0865C31.3672 50.5507 32.5651 51.7487 34.0293 51.7487H51.4662C52.9304 51.7487 54.1284 50.5507 54.1284 49.0865V31.6496C54.1284 30.185 52.9304 28.9875 51.4662 28.9875H43.0805C43.1693 24.5058 44.2346 20.9123 46.1864 18.2054C47.7836 16.0318 50.1796 14.257 53.4185 12.8811Z" fill="currentColor"></path>
                                </svg>   }
                    comilla2 = {<svg className="close-quotation accent" style={qrr} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.9043 12.8812C31.5289 12.3044 30.9521 10.6627 31.5733 9.33167L33.7473 4.76168C34.3685 3.47543 35.8771 2.89819 37.2081 3.47543C40.9795 5.07271 44.2184 7.15804 46.7918 9.68706C49.942 12.6593 52.0717 16.0757 53.2252 19.8471C54.3788 23.6632 55 28.8539 55 35.4649V49.0861C55 50.5503 53.802 51.7482 52.3379 51.7482H34.9009C33.4368 51.7482 32.2388 50.5503 32.2388 49.0861V31.6492C32.2388 30.1846 33.4368 28.987 34.9009 28.987H43.2423C43.1535 24.5054 42.0887 20.9119 40.1365 18.205C38.5392 16.0318 36.1433 14.257 32.9043 12.8812Z" fill="currentColor"></path>
                                <path d="M1.58152 12.8811C0.206091 12.3043 -0.370258 10.6627 0.25046 9.33164L2.42453 4.80647C3.04569 3.51977 4.55424 2.94298 5.8853 3.51977C9.61228 5.11705 12.8073 7.20238 15.4246 9.68703C18.5752 12.7041 20.7488 16.1205 21.9029 19.8919C23.0565 23.6184 23.6328 28.81 23.6328 35.4653V49.0865C23.6328 50.5507 22.4349 51.7487 20.9707 51.7487H3.53375C2.06958 51.7487 0.871624 50.5507 0.871624 49.0865V31.6496C0.871624 30.185 2.06958 28.9875 3.53375 28.9875H11.9195C11.8307 24.5058 10.7654 20.9123 8.81364 18.2054C7.21636 16.0318 4.82045 14.257 1.58152 12.8811Z" fill="currentColor"></path>
                                </svg>}
                    cuadrado = {<div style={cuad2}></div>}
                    />
            </Col>
            </Row>
        </div>
    )
}
export default His21