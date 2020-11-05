import './App.css';

const Header = () =>
<div>
  <header> 
    <img class="topimg" src="fotoandother\Bitmap.png" alt=""></img>
    <div class="Header">
      <div class="logo" >
          <img src="public\fotoandother\icons_Монтажная область 1 копия.png" alt=""></img>
      </div>
        <div class="Navigation" >
          <p class="p"> <a href="" class="p">Servies</a></p>
          <p class="p"> <a href="" class="p">Portfolio</a></p>
          <p class="p"> <a href="" class="p">About</a></p>
          <p class="p"><a href="" class="p">Contact</a></p>
          <p class="p"> <a href="" class="p1" >|</a></p>
          <p class="p"> <a href="" class="p1"> Discus Your Idea</a></p> 
      </div>
      <div class="menu">
            <div class="contact" > <a href="hello@digitfactor.com " class="p" >
                hello@digitfactor.com </a>
            </div>
            <a href="" class="menumenu">Menu</a>
            <div class="pal" > </div>
      </div>
    </div>
  </header>
    <div class="mainblock">
      <div class="splashscreen">
        <div class=" Welcome">
          <p><svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z"
               fill="#FFCA00" /></svg>
            Welcome to Digit Factor
          </p>
        </div>
            <div class="h1" >
           Creative Web Production from Ukraine
        </div>
        <div class="knopka">Discus Your Idea
            <span class="tochka"></span>
        </div>
        </div>
        <div class="arrow">
           <svg width="8" height="48" viewBox="0 0 8 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M7.87969 44.2206C8.0401 44.063 8.0401 43.8006 7.87969 43.6375C7.72469 43.4798 7.46671 43.4798 7.31208 43.6375L4.40466 46.5945L4.40466 0.408252C4.4043 0.180792 4.22654 0 4.00289 0C3.77924 0 3.5957 0.180792 3.5957 0.408252L3.5957 46.5945L0.693704 43.6375C0.533285 43.4798 0.274952 43.4798 0.120314 43.6375C-0.0401049 43.8006 -0.0401049 44.0634 0.120314 44.2206L3.71601 47.8776C3.87101 48.0408 4.12899 48.0408 4.28362 47.8776L7.87969 44.2206Z"
            fill="#7E7E7E" /></svg>
            Scroll down
        </div>
      <div class="chat" >
         <svg viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd"
            d="M29.3377 4.80738V11.9809C29.3377 14.636 27.1488 16.7883 24.4485 16.7883H12.015L6.38496 22.2345C6.18437 22.4285 5.91812 22.5314 5.64736 22.5314C5.51045 22.5314 5.37255 22.5052 5.24122 22.451C4.85052 22.29 4.5962 21.914 4.5962 21.4975V16.7789C2.03254 16.6299 0 14.5393 0 11.9809V4.80738C0 2.15234 2.18894 0 4.88912 0H24.4486C27.1487 0 29.3377 2.15234 29.3377 4.80738ZM31.4399 12.7387V12.3689C32.8857 12.5627 34.0001 13.7809 34 15.2555V19.6041C34 21.155 32.7679 22.4224 31.2137 22.5127V25.3732C31.2137 25.6257 31.0596 25.8536 30.8227 25.9513C30.7431 25.9839 30.6595 26 30.5764 26C30.4124 26 30.251 25.9375 30.1293 25.8199L26.7164 22.5184H19.1792C17.5424 22.5184 16.2154 21.2137 16.2154 19.6041V18.8428H25.2321C28.6551 18.8428 31.4399 16.1045 31.4399 12.7387Z"
            fill="#202020" />
         </svg>
      </div>
   </div>
</div>
const ServicesTitle= ()=>
<div class="services__title">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z"
              fill="#FFCA00" />
          </svg>Services
</div>
const Services = () => 
<div class="services-item" >
   <div class="services-item__thumb" >
     <img src="fotoandother\icons_Монтажная область 1.png" alt=""></img>
   </div>
   <div class="services-item__content">
      <div class="services-item__title" >
        Engineering Service
      </div>
      <div class="services-item__text">
        Software Development / Software Testing / Solutions Architecture / Business Analysis / Operations
        Support
      </div>
       <a href="" class="services-item__link" >Learn More 
         <svg  width="28" height="8"  viewBox="0 0 28 8" fill="none"xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M24.2206 7.87969C24.063 8.0401 23.8006 8.0401 23.6375 7.87969C23.4798 7.72469 23.4798 7.46671 23.6375 7.31208L26.5945 4.40466L0.408252 4.40466C0.180792 4.4043 0 4.22654 0 4.00289C0 3.77924 0.180792 3.5957 0.408252 3.5957L26.5945 3.5957L23.6375 0.693704C23.4798 0.533285 23.4798 0.274952 23.6375 0.120314C23.8006 -0.0401049 24.0634 -0.0401049 24.2206 0.120314L27.8776 3.71601C28.0408 3.87101 28.0408 4.12899 27.8776 4.28362L24.2206 7.87969Z"
                      fill="#202020" />
         </svg>
        </a>
        <svg class="svgservices"  width="334" height="1" viewBox="0 0 334 1" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.5H333" stroke="#F0F0F0" stroke-linecap="square" />
        </svg>
   </div>
</div>
const PortfolioTitle=()=>
<div class="portfolio_title">
    <div class="portfolio_title1" >
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z"
      fill="#FFCA00" />
     </svg>Portfolio</div>
      <div class="portfoloiotitletext" >
       Здесь будет какой-то текст который расскажет о услугах</div>
</div>
const Portfolio=()=>
<div class="portfolio-blocks">
        <div class="block-picture">
          <img src="fotoandother\Rectangle Copy 22.png" alt="" class="imgportfolio"></img>
          <div class="backgroundImg"> </div>
          <span class="landing-page">Landing
            Page</span>
          <span ><a class="project-name" href="">Project
            Name</a></span>
          <span class="picture-text">Создаем
            прибыльные интернет-магазины, маркетплейсы </span>
        </div>
        </div>
const ButtonPortfolio= ()=>
<div class="button-portfolio">
        All progect
 </div >
const ClientsTitle= ()=>
<div class="сlients__title">
        <div  class="сlients__title1">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0H8L0 16H4L12 0ZM20 0H16L8 16H12L20 0Z"
              fill="#FFCA00" />
          </svg>
          Clients</div>
        <div class="сlients__title2">
          Здесь будет какой-то текст который расскажет о услугах 
          </div>
      </div>
const Clients = () =>
<div class="сlients-item" >
  <div class="сlients-item__thumb"></div>
  <div class="сlients-item__content">
     <img src="fotoandother\icons_Монтажная область 1 копия.png" alt=""></img>
  </div>
</div>         

const Figures=()=>
<div class="figures-item">
<div class="figures-item__thumb">
  40+
</div>
<div class="figures-item__content">
  <div class="figures-item__title">
    Progect
  </div>
  <div class="figures-item__text">
    Создаем прибыльные интернет-магазины, маркетплейсы
  </div>

</div>
</div>
const Seo=()=>
<div class="seo-item">
<div class="seo-item__content">
  <div class="seo-item__title">
    Seo text
  </div>
  <div class="seo-item__text">
    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
    including versions of Lorem Ipsum.
  </div>
  <a href="" class="seo-item__link">
    Read more<svg  class="svgseo" width="9" height="5" viewBox="0 0 9 5" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M4.5019 3.31982L1.13488 0.135898C1.04239 0.0482287 0.918732 0 0.786878 0C0.654951 0 0.531366 0.0482287 0.438732 0.135898L0.143854 0.41489C0.0510732 0.502421 0 0.61943 0 0.744118C0 0.868807 0.0510732 0.985676 0.143854 1.07328L4.15259 4.86424C4.24551 4.95218 4.36968 5.00034 4.50168 5C4.63427 5.00034 4.75829 4.95225 4.85129 4.86424L8.85615 1.07681C8.94893 0.989205 9 0.872336 9 0.747578C9 0.62289 8.94893 0.50602 8.85615 0.41835L8.56127 0.139427C8.36934 -0.0420699 8.0569 -0.0420699 7.86505 0.139427L4.5019 3.31982Z"
        fill="#202020" />
    </svg>
</a>
</div>
</div>
const Main = () =>
 <main class="main"> 
 
   <ServicesTitle/>
 <div class="services-list" >
    <Services/>
    <Services/>
    <Services/>
    <Services/>
    <Services/>
    <Services/>
    <Services/>
    </div>
    <PortfolioTitle/>
    <div class="portfolio">
    <Portfolio/>
    <Portfolio/>
    <Portfolio/>
    </div>
    <ButtonPortfolio/>
    <div class="figures-list">
    <Figures/>
    <Figures/>
    <Figures/>
    <Figures/></div>
    <ClientsTitle/>
 <div class="сlientslis">
    <Clients/>
    <Clients/>
    <Clients/>
    <Clients/>
    </div>
    <Seo/>
    
</main>
const Footer =()=>
<div></div>
const App = () =>
<div className="App">
    <Header />
    <Main />
    <Footer />
</div>
export default App;

