import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";

function App() {
  const webgiViewerRef = useRef()
  const contentRef = useRef()
  const handleLearnMore = () =>{
    const element = document.querySelector(".sound-section");
    window.scrollTo({
        top: element?.getBoundingClientRect().top,
        left:0,
        behavior: 'smooth'
    })
}
  const handlePreview = () =>{
    webgiViewerRef.current.triggerPreview()
  }

  return (
    <div className="App">
      <div id="content" ref={contentRef}>
        <Navbar/>
        <Jumbotron handleLearnMore={handleLearnMore} />
        <SoundSection/>
        <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
