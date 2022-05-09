import '../App.css';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import {FaDiscord,FaTwitter} from 'react-icons/fa';
import Content from "./content";
 

function Landing() {
  return (
    <div className="main">
    <div className="landing">
    <div className="headtextdiv">
    
    <h1 className="jt --debug">
  <span className="jt__row">
    <span className="jt__text">Trippin' Ape Tribe</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">Trippin' Ape Tribe</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">Trippin' Ape Tribe</span>
  </span>
  <span className="jt__row jt__row--sibling" aria-hidden="true">
    <span className="jt__text">Trippin' Ape Tribe</span>
  </span>
</h1>
    </div>
    <div className="mdis" >
    
    <GlitchClip >
       <h1>Definitely Not a Cult.</h1>
     </GlitchClip>
    </div>
    <div className='icons' >
    <a href = "https://discord.gg/trippinapetribe" target="_blank" >
    <FaDiscord className='icon'/>
    </a>
    <a href = "https://twitter.com/TrippinApeNFT" target="_blank">
    <FaTwitter className='icon'/>
    </a>
    </div>
    </div>
    <Content/>
    </div>
  );
}

export default Landing;
