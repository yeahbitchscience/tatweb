import '../App.css';
import {
  useEffect
} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Teamp from "./teamp";
import Faq from "./faq";
import {FaDiscord,FaTwitter} from 'react-icons/fa';

import {
  Fade
} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import dan from"../assets/team/dan.jpg";
import fen from"../assets/team/fen.jpg";
import fi from"../assets/team/fi.jpg";
import king from"../assets/team/king.jpg";
import lys from"../assets/team/lys.jpg";
import sol from"../assets/team/sol.jpg";
import top from"../assets/team/top.jpg";

function Content() {

  useEffect(() => {
    AOS.init({});
  }, [])

  const fadeImages = [{
    url: s1

  },
    {
      url: s2

    },
    {
      url: s3

    },
    {
      url: s4
    }];


  return (
    <div className="contentm">
    <div className="welcome">
    <h1 className="welcomet"> Welcome To The Tribe </h1>
    </div>
    <p className="dist">
    A Community-First PFP Project on Solana, Backed by Strong and Ownable Branding, Hilarious Storytelling, Innovative Long Term Utility and a Passionate Community of Psychedelic-Friendly Degans.
    </p>
    <div className="slide-container">
        <Fade duration={2000}
        arrows={false}
        >
         {fadeImages.map((fadeImage, index)=> (
          <div className="each-fade" key={index}>
              <div className="testr" style={ { 'backgroundImage': `url(${fadeImage.url})` }}>
          </div>
          </div>
        ))}
        </Fade>
    </div>
      <div className="tmaind">
      <div className="tnum">
      <div className="tdis">
      <h1 className="num">
      150K+
      </h1>
      <p className="ds">
      Followers On Twitter
      </p>
      </div>
      <div className="tdis">
      <h1 className="num">
      140K+
      </h1>
      <p className="ds">
      Psychedelic-Friendly Degens On Discord
        </p>
      </div>
      <div className="tdis">
      <h1 className="num">
      8888
      </h1>
      <p className="ds">
      Apes will Ascend
        </p>
      </div>
      </div>
   </div>
    <div className="shead">
    Read Our Story
    </div>
    <div className="storym">
    <Scrollbars style={{ width: "70vw", height: "30vh", color:"rgba(255,255,255,0.607)" }} className="sb">
    <p className = 'story'>
    Let's get one thing straight, right away: This is NOT a cult. It's a tribe, understood? Perfect.

At some point in our inconsequential existence, we were just your ordinary apes: kickin it in trees, eating bananas and shit (just to be clear, no, I don't mean we were eating shit). Everything changed when a bunch of spunions came to our island blaring strange sounds and strands of fire in the sky for something called Fire Festival 2.

These strange beings seemed to be entranced, hypnotized by sonic beats. We observed from a distance and noticed the mood started to change. When their food and water went dry and their performers stopped showing up, these pompous savages began to devolve.

The debauchery reached a fever pitch when one we could assume to be their chief, Ja Ruler, started screaming at everybody and demanding some dude suck dick for water. Idk, shit got pretty weird. Eventually, the scene turned into complete and utter chaos, leading all of them to frantically leave the island. The event turned out to be a disaster for them, at least.
  After everyone fled, we started scavenging the wasteland those trust fund babies left behind. It was mostly deflated mattresses and baloney sandwiches with a scared spunion hiding in the crevices. We looked through their refugee tents until one of the alphas, Chorles, found a mysterious piece of luggage. He inspected it to ensure the safety of the rest of the apes before taking it back to his dwelling.
  Months had passed with very little sighting of Chorles, when he popped up out of nowhere, announcing that he needed some volunteers for what he called the "clinical trials". The initial group of volunteers would become Chorles' disciples. At first, us apes were wary, but Chorles' disciples seemed to be in a tranquil state after every session.

One day, out of curiosity, we filed into his hut one-by-one and were presented with mysterious teas, fungi and these weird, tiny pieces of paper that we had to eat. Chorles said these were the keys to the universe and if we follow his lead, we would all find eternal bliss. So we dropped in, us apes started a journey that would expand our consciousness.

Fast forward to now, we're like some fucking super apes. Our cognitive abilities increased exponentially, eventually leading us to become self aware. These mystical sessions completely transformed our way of life.

Since the clinical trials, we now have a weekly ceremony, hosted by Chorles, where we take controlled doses of these psychoactive substances. He says this is required to find the promised land and has started working on his new venture, the Valhalla Laboratory, to get us there faster.

Honestly, life is good here in the tribe...Chorles takes care of us and has shown us the way. We never have to worry about anything with his supreme guidance. I mean sure, occasionally someone acts out and has to be punished, but Chorles loves us and assures it's for our own good. We don't question it because, well, he's always right. He's been right about everything,

 Shit, sorry I'm rambling, but you should join us. Join the tribe, it's definitely not a cult.
    </p>
    </Scrollbars>
    </div>
    <div className='mmn'>
    Meet The Disciples
    </div>
    <div className="mainpd">
    <div className="mainpd1">
    <a href = "https://twitter.com/defigemhunt/" >
    <Teamp name = "LYSERGIC" dis ="Co-Founder" pfp = {lys}/>
    </a>
    <a href = "https://twitter.com/JPEGASUS69/" >
    <Teamp name = "DANNY DEVITOKEN" dis ="Co-Founder" pfp = {dan}/>
    </a>
    <a href = "https://twitter.com/KulbikC/" >
    <Teamp name = "KING KULBIK" dis ="Community Manager" pfp = {king}/>
    </a>
    
<a href = "https://twitter.com/fenrusgmi/" >
    <Teamp name = "FENRUS" dis ="Marketing Lead" pfp = {fen}/>
    </a>
    </div>
    <div className="mainpd1">
    <a href = "https://www.instagram.com/fighouse_/" >
    <Teamp name = "DANIEL TIMOTHY" dis ="Artist" pfp = {fi}/>
    </a>
    <a href = "https://twitter.com/FlippaNft/" >
    <Teamp name = "TOP10BRISKETRECIPES" dis ="Developer" pfp = {top}/>
    </a>
    <a href = "https://twitter.com/CryptoniteApe" >
    <Teamp name = "SOL MATE" dis ="Developer" pfp = {sol}/>
    </a>
    </div>
    </div>
    <div className = "faqh">
    FAQ
    </div>
    <Faq/>
    <h1 className = "join"> JOIN THE TRIBE </h1>
    <div className = "icond">
    <a href = "https://discord.gg/trippinapetribe" target="_blank" >
    <FaDiscord className='icont'/>
    </a>
    <a href = "https://twitter.com/TrippinApeNFT" target="_blank">
    <FaTwitter className='icont'/>
    </a>
    </div>
    <div className="last">
    <h2 className = "create"> Created with ❤️ by </h2><a href = "https://twitter.com/yeahbichscience" ><h1 className="mname"> Sanskar Raj </h1> </a>
     </div>
     </div>
  );
}

export default Content;