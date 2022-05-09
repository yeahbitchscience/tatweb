import '../App.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


function Faq() {
  return (
    <div className="faqm">
    <Accordion allowZeroExpanded = {true}>
            <AccordionItem >     <AccordionItemHeading >
              <AccordionItemButton className="fq"
              >
                      What is Trippin' Ape Tribe?  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="fqc">
                        Trippin' Ape Tribe is a community-first PFP project on Solana, backed by strong and ownable branding, hilarious storytelling, innovative long-term utility, and a passionate community of psychedelic-friendly degens. Our lore tells the story of how we all came to follow our mysterious, charismatic leader, Chorles, but don't worry... it's definitely not a cult.
    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton  className="fq" >
                        Where's the roadmap?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="fqc">
                        Our roadmap is unconventional, in terms of what's included AND how it will be shared. Do keep in mind that Chorles's most perceptive and devout followers may be able to piece together future utilities and alpha about the project before straightforward announcements make things official.
    </p>
                </AccordionItemPanel>
            </AccordionItem>
<AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="fq" >
                        Is the team doxxed?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="fqc">
                        Our core team is already doxxed to many major players in the space, including the Hydra Launchpad team, Big Brain, Doc Hollywood, and more. We will privately dox to any KYC authority the community agrees will instill confidence.
    </p>
                </AccordionItemPanel>
            </AccordionItem>
<AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="fq" >
                        What are your goals for the project?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="fqc" >
                        Our tactical vision continues to evolve as our community and extended team grow, but our fundamental mission has always remained-to build the most tight-knit and empowered community on Solana. With our collective experience in brand building, event planning, and growth, we are confident in our ability to create something extraordinary, not only for our holders, but to bring the broader Solana ecosystem together.
    </p>
                </AccordionItemPanel>
            </AccordionItem>
<AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton  className="fq" >
                        Supply, Price and Mint Date?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="fqc">
                        8888 Apes will Ascend. Mint Price and Date To Be Announced.
    </p>
                </AccordionItemPanel>
            </AccordionItem>
<AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="fq" >
                        What marketplaces will you be listed on?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="fqc" >
                        Magic Eden. Possibly others if the community feels strongly.
    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </div>
  );
}

export default Faq;