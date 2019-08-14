import * as React from "react";
import styled from "styled-components";
import "./index.css";
import { colors } from "../../theme";
  // import { Parallax } from "react-scroll-parallax";
import SpecsBanner from "../HomePage/components/Banners/SpecsBanner";
import { StatsBar1 } from "../HomePage/components/constants";
// import Slider from "react-slick";

 import FullImage1 from "../../resources/header_image.png";

 import FullImage2 from "../../resources/smallerLivePhotos/buzz-andersen-145254-unsplash.jpg";
// import FullImage3 from "../../resources/smallerLivePhotos/placeholder_images/render_unum3.png";
//  import FullImage4 from "../../resources/smallerLivePhotos/parallax-3.png";
 import ourDesign from '../../resources/homepage_sections/our_design.jpg'

//  import immnse_power from '../../resources/homepage_sections/our_design.jpg'
 
 import Header from "./components/Header";
import Descriptions from "./components/Descriptions";
import birdHorizontal from '../../resources/homepage_sections/bird_horizontal1.png'
// import Team from "./components/Team";
// import Featured from "./components/Featured";
// import ContactForm from "./components/Contact";
// import Countdown from "./components/Countdown";
// import NavBar from "./components/NavBar";
import HamburgerMenu from "../../components/HamburgerMenu";
// import PurchasePopUp from "./components/PurchasePopUp";
import Footer from "./components/Footer1";
import CasexLogo from "../../resources/casex_logo.png";

// import { MaterialsBar } from "./components/constants";
// import HomePageInfographic from "./components/HomePageInfographic";

 import KickstarterBannerSrc from "../../resources/KickstarterComingSoon.png";
// import BusinessBanner from "./components/Banners/BusinessBanner";
// import VideoHeader from "./VideoHeader";
import Video from './Video'

export const FullImageHeight: string = "100vh";

export const FullWidthContainer = styled.div`
  width: 100vw;
  height: auto;
`;

export const ContentContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 50px; */
  overflow: hidden;
`;
const Logo = styled.img`
  height: 100px;
  width:60px
`;
export const FullWidthImage = styled.img`
width: 100%;
height: auto;
z-index: -1;
margin-top: -8vw;
`;

export const DevelopmentPlaceholder = styled.div`
  background: ${colors.background_dark};
  color: ${colors.background_light};
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
`;

export const KickstarterBanner = styled.img`
  padding-top: 20px;
  background: ${colors.background_light};
  width: 100vw;
`;

// const PageTitle = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   font-size: 70px;
//   background: ${colors.background_dark};
//   color: ${colors.background_light};
//   width: 100%;
//   height: 150px;
// `;

interface Props {
  history: {
    push: (route: string) => void;
  };
}

interface State {
  scrollPosition: number;
 
  showHamburger: boolean;
  showPurchaseWindow: boolean;
}



class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scrollPosition: 0,
  
      showHamburger: false,
      showPurchaseWindow: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.hamburgerClose = this.hamburgerClose.bind(this);
    // this.displayPurchasingWindow = this.displayPurchasingWindow.bind(this);
    this.hidePurchasingWindow = this.hidePurchasingWindow.bind(this);
  }
  // private containerRef = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    // window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
    // this.setState({ navbarFromTop: distanceFromTop("navbar") });
  }

  private handleScroll() {
    this.setState({ scrollPosition: window.scrollY });
  }

  private handleHamburgerClick() {
    this.setState({ showHamburger: true });
  }

  private hamburgerClose() {
    this.setState({ showHamburger: false });
  }

  // private displayPurchasingWindow() {
  //   this.setState({ showPurchaseWindow: true });
  // }
  private hidePurchasingWindow() {
    this.setState({ showPurchaseWindow: false });
  }
  

   public render() {
  
    return (
       <div style={{backgroundColor:"#eff0f2"}}>
       <FullWidthContainer id="App">
        <Header
          change={this.state.scrollPosition > 0}
          homePage={true}
          showHamburger={this.handleHamburgerClick}
          history={this.props.history}
        /> 
       
        <ContentContainer>
  {/* <VideoHeader/> */}
  {/* <FullWidthImage src={FullImage1} /> */}
  <img src={FullImage1} width="100%" />
           {/* <Parallax
            className="full-width-parallax"
            offsetYMax={"30%"}
            offsetYMin={"-30%"}
            slowerScrollRate={true}
            // styleInner={{ height: "100vh" }}
            tag="div"
          >
            <FullWidthImage src={FullImage1} />
          </Parallax>  */}

          {/* <PageTitle>CASE X</PageTitle> */}
          {/* <NavBar scrollPosition={this.state.scrollPosition} /> */}
          {/* <Countdown /> */}
          {/* <DevelopmentPlaceholder>
            Coming soon to Kickstarter
             <button onClick={this.displayPurchasingWindow}>
              PURCHASE SHIT
            </button> 
          </DevelopmentPlaceholder> */}
           <KickstarterBanner src={KickstarterBannerSrc} /> 
         <div style={{backgroundColor:colors.background_light,width:"100%"}}>
         
         <div style={{width:"50%",fontFamily:"Times New Roman, Times, serif",textAlign:"center",margin:"auto"}}>
         This is Case X <br/>
         The first unified solution of integrating an SSD with a harshell case for your macbook pro.

         </div>
              <div style={{width:"10%",margin:"auto"}}>
           
            <div style={{marginTop:50,marginLeft:20}}><Logo src={CasexLogo} /></div>
            </div>
         </div>
         

           <Descriptions /> 
         
          
          {/* <Parallax
            className="parallax-2 full-width-parallax"
            offsetYMax={"25%"}
            offsetYMin={"-10%"}
            slowerScrollRate={true}
            tag="div"
          >
           
              <div>dadsdasdsad</div>
          </Parallax>  */}
            
          {/* <FullWidthImage src={FullImage2} /> */}
            <div style={{padding:50,width:"100%",height:500,paddingTop:0}}>
                <img width="100%" src={FullImage2} alt="not found" />
            </div> 

          {/* <Parallax

             className="full-width-parallax"
            offsetYMax={"25%"}
            offsetYMin={"-10%"}
            slowerScrollRate={true}
            tag="div"
          >
              <div style={{backgroundColor:"#eff0f2"}}>
                  <div style={{margin:"0px 50px 0px 50px"}}> 
                     <img src={FullImage2} alt="not found" />
                  </div>
              </div>
          </Parallax> */}
          
          <div style={{backgroundColor:"#eff0f2",width:"100%"}}>
               <div  style={{paddingTop:200,textAlign:"center",marginBottom:100}}>
                 <h1 style={{textTransform:'uppercase',fontWeight:"bold"}}>our design. buffed and polished.</h1>
               CaseX grew into what it is today.
                With an ultra-thin polycarbonatev<br/> shell and an interior reinforced with aerospace aluminium, <br/>
                CaseX is magnanimous in strength and capacity.
               </div>
              <div style={{margin:"auto",width:"70%"}}>
                <img style={{padding:0,margin:0}} src={ourDesign} alt="not found" />
                </div>
                <div style={{height:200}}/>
          </div>

          {/* <HomePageInfographic id="our-design" infographicKey="our design" />
          <HomePageInfographic infographicKey="interpolated innovation" />
          <HomePageInfographic infographicKey="immense power" />
          <MaterialsBanner BannerItems={MaterialsBar} primaryColor={"Gold"} />
          <HomePageInfographic id="for-engineers" infographicKey="engineers" />
          <HomePageInfographic infographicKey="entrepreneurs" />
          <HomePageInfographic infographicKey="artists" /> */}
          
          {/* <BusinessBanner />
          <Team /> */}

          {/* <Featured /> */}
           {/* <Parallax
            disabled={this.state.scrollPosition < 1200}
            className="parallax-3 full-width-parallax"
            offsetYMax={"0"}
            offsetYMin={"-100%"}
            slowerScrollRate={true}
            tag="div"
          >
            <FullWidthImage src={FullImage4} />
          </Parallax>  */}
          <div className="row"
                style={{backgroundColor:"#eff0f2",width:"100%",padding:50}}
          >
              <div className="column"
                  
              >
                  <img style={{width:400}} src={birdHorizontal} alt="not found" />
              </div>
              <div className="column" style={{marginTop:80,marginLeft:-300,textAlign:"center"}}>
                  <h1 style={{textTransform:"uppercase"}}>INTERPOLATED INNOVATION</h1>
                  All the technology in the world is brought to a precipice. Pre-formatted to the universal FAT32, CaseX offers the the ability to either store data or to boot into a different operating system. The forefronts of innovation reside side by side, on an accessible platform.
              </div>
          </div>

     
            <div className="immense">
                <h1>IMMENSE POWER.<br/> PHYSICAL AND DIGITAL.</h1>
                <div>
                We want you to have the Case X experience you desire. That’s<br/>
                why we offer customisability, meaning the design and aesthetic<br/>
                you envisage becomes our reality. Choose from either 512GB OR<br/>
                1TB solid state storage in our range of Case X colours. If you’re<br/>
                seeking that special touch, we offer a logo plated with 24ct gold.<br/>
                For you, by us.
                </div>
            </div>
         
           <div style={{
             backgroundColor:"#eff0f2",
                     width:"100%",
                   
                     marginTop:50,
                     marginBottom:50}}
            >
                <SpecsBanner
                      BannerItems={StatsBar1}
                      primaryColor={colors.background_light}
                  />
           </div>
              {/* <Multi /> */}
      
           {/* <Multimedia /> */}
          {/* <ContactForm /> */}

          <div className="outer-container">
              <div className="inner-container">
              
                 <div style={{margin:"auto",width:"60%"}}>
                    
                    <div className="video-overlay">
                        <h2 style={{fontWeight:"bold"}}>JOIN THE COMMUNITY</h2>
                        <span style={{fontSize:18}}>Join for updates on Case X, special offers and new products.<br/></span>
                       <div style={{marginTop:50,height:40}}>
                          <input style={{height:"100%",width:300,borderStyle:"solid",borderColor:"black",borderWidth:1,padding:20}} placeholder="enter your email address here" />
                          <button style={{height:"100%", border: "none",marginLeft:8,backgroundColor:"#ff6666"}}>
                            <span style={{fontWeight:"bold",color:"white"}}>SUBSCRIBE</span>
                          </button>
                       </div>
                    </div>
                 </div>
                  <Video />
              </div>
          </div>
        
          
        </ContentContainer>
        <Footer />

        <HamburgerMenu
          show={this.state.showHamburger}
          theme={"light"}
          homePage={true}
          history={this.props.history}
          close={this.hamburgerClose}
        />
        {/* <PurchasePopUp
          visible={this.state.showPurchaseWindow}
          close={this.hidePurchasingWindow}
          history={this.props.history}
        /> */}
       </FullWidthContainer>
      </div>
    );
  }
}

export default App;
