// import logo from './logo.svg';
import './App.css';

const MainMenu = () =>
    <div></div>

const Header = () =>
<header> 
    <MainMenu /> 
</header>
const serviceslist ={
  display: "flex",
  flexWrap: "wrap",
  flexFlow: "row nowrap",
  justifyContent: "center"
 
}
const servicesitem  = {
  display: "flex",
 
  margin:" 0 7px 30px",
  height:"150px",
  width:"470px",
  // border:"2px solid red",
 
 
}
const servicesitemthumb = {
  marginRight: "17px",
    flexShrink: "0",
    order: "-1",
    width: "130px",
    height: "130px",
    float:"left",
}
const servicescontent ={
  // display:"flex",
//  justifyContent:" flex-start",
//  flexDirection: "column"

 
}
const servicesitemtitle ={
  fontWeight: "500",
  fontSize: "22px",
  lineHeight: "26px",
  marginBottom: "20px",
  display:"flex",
}

const servicesitemtext = {border:"2px solid black",

  fontSize: "14px",
  lineHeight: "20px",
color: "#7E7E7E",
marginBottom: "20px",
display:"flex",float:"left",

}
const servicesitemlink ={
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#202020",
  float:"left",
  
    textDecoration: "none"
}
const svg ={
 
 marginTop:"20px",
};
const Services = () => 


<div class="services-list" style={serviceslist}>


<div class="services-item" style={servicesitem }>

<div class="services-item__thumb" style={servicesitemthumb} >
              <img src="fotoandother\icons_Монтажная область 1.png" alt=""></img>
            </div>
            <div class="services-item__content" style={servicescontent}>
              <div class="services-item__title" style={servicesitemtitle}>
              Engineering Service
              </div>
              <div class="services-item__text"style={servicesitemtext}>
              Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations
                Support

              </div>
              <a href="" class="services-item__link" style={servicesitemlink}>
                Learn More      <svg  width="28" height="8"  viewBox="0 0 28 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z"
                    fill="#202020" />
                </svg>

              </a>
              <svg class="svgservices" style={svg} width="334" height="1" viewBox="0 0 334 1" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5H333" stroke="#F0F0F0" stroke-linecap="square" />
              </svg>
            </div></div>
            <div class="services-item" style={servicesitem }>

<div class="services-item__thumb" style={servicesitemthumb} >
               <img src="fotoandother\icons_Монтажная область 1 копия.png" alt=""></img>
            </div>
            <div class="services-item__content" style={servicescontent}>
              <div class="services-item__title" style={servicesitemtitle}>
              Engineering Service
              </div>
              <div class="services-item__text"style={servicesitemtext}>
                Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations
                Support

              </div>
              <a href="" class="services-item__link" style={servicesitemlink}>
                Learn More      <svg  width="28" height="8"  viewBox="0 0 28 8" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z"
                    fill="#202020" />
                </svg>

              </a>
              <svg class="svgservices" style={svg} width="334" height="1" viewBox="0 0 334 1" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.5H333" stroke="#F0F0F0" stroke-linecap="square" />
              </svg>
            </div></div>
    
</div>
// const Figures = () => 
// ;

const Main = () =>
<main> 
    <Services/>
    <Services/>
    <Services/>
    <Services/>
</main>
const сlientslist= {
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center"
}
const сlientsitem = {
  display: "flex",
  alignItems: "center",
  margin: "0 7px 30px",
  // maxWidth: "calc(25% - 14px)",
  backgroundColor: "#F5F7F7",
  width: "230px",
  height:"150px",
 
  justifyContent: 'center',

}
const clientsstitle ={
  marginBottom:" 15px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexFlow: "row nowrap",
}
// const Clientstitle = () =>

const Clients = () =>
<div class="clients-list"  >
<div class="сlients-item" style={сlientsitem}>

          <div class="сlients-item__thumb">
          
          </div>
          <div class="сlients-item__content">
          <img src="fotoandother\icons_Монтажная область 1 копия.png" alt=""></img>
          </div>
        </div>
        </div>
const Footer = () =>
<footer>
 
<span style={сlientslist}>

<Clients/>
<Clients/><Clients/><Clients/></span>

</footer>

const App = () =>
<div className="App">
    <Header />
    <Main />
    <Footer />
</div>


export default App;

