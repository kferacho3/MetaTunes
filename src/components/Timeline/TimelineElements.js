
import { ReactComponent as ArtIcon } from "./art.svg";
import { ReactComponent as NetIcon } from "./network.svg";
import { ReactComponent as PlaqueIcon } from "./plaque.svg";
import { ReactComponent as RewardIcon } from "./reward.svg";
import { ReactComponent as SocialIcon } from "./social.svg";
import { ReactComponent as PeopleIcon } from "./people.svg";
import { ReactComponent as GoldIcon } from "./gold.svg";
import styled from 'styled-components';
  let peopleIconStyles = { background: "#E6E6FA" };
  let rewardIconStyles = { background: "#DDA0DD" };
  let socialIconStyles = {background: "#EE82EE"};
  let plaqueIconStyles = {background: "#BA55D3"};
  let networkIconStyles = { background: "#f9c84f" };
  let artIconStyles = {background: "#FFD700"};
  let goldIconStyles = {background: "#FFDF00"};
  export const RoadMapContainer = styled.div`
    
    overflow-x: hidden;
    margin-top: 75px;

  

    @media screen and (max-width: 480px) {
        overflow-x: hidden;
    }
`;

let timelineElements = [
    {
      
      id: 1,
      per: "20%",
      title: "Phase 1",
      location: "Establish the Vision",
      description:"- Develop and experiment on the artwork's and algorithm  ",
      description2: "- Finish first draft of website",
      description3: "- Establish social medias and discord community",
      //buttonText: "",
      style: peopleIconStyles,
      date: "20%",
      icon: PeopleIcon,
      col: "#E6E6FA"
    },
    {
      id: 2,
      per: "40%",
      title: "Phase 2",
      location: " Growing the Community",
      description: "- Introduce community rewards and whitelist system",
      description2: "- Begin daily content on social media platform and guerilla marketing campaign",
      description3: "- Contests for getting whitelisted, winning free NFTs, and winning ETH in community and social medias",
      //buttonText: "",
      style: rewardIconStyles,
      date: "40%",
      icon: RewardIcon,
      col: "#DDA0DD"
    },
    {
      id: 3,
      per: "60%",
      title: "Phase 3",
      location: "Securing the Sellout",
      description:"- Big influencer marketing push - tweets, promo videos, shoutouts and more ",
      description2: "- Verify WL members",
      description3: "- Stealth Launch for Whitelist Members",
      description4: "- Second marketing push for public launch",
      description5: "- Public launch",
      //buttonText: "",
      style: socialIconStyles,
      date: "60%",
      icon: SocialIcon,
      col: "#EE82EE"
    },
    {
      id: 4,
      per: "80%",
      title: "Phase 4",
      location: "Release the plaques!",
      description:"- Endorse second push for growing comminty",
      description2: "- Showcase plaques and different types",
      description3: " -Reward members who accumulated highest amount of points with a plaque to match their NFT",
      description4: " -Bigger rewards for longer holders within our community! (Bronze, Silver, Gold, and more!)",
      style: plaqueIconStyles,
      date: "80%",
      icon: PlaqueIcon,
      col: "#BA55D3"
    },
    {
      id: 5,
      per: "100%",
      title: "Phase 5",
      location: "DAO",
      description: "- Synesthesia DAO - all holders will be entered into the first fully decentralized record label",
      description2: "- Begin collaborations with Musicians and Artists to create custom one of one pieces",
      description3: "- All holders and fans will receive royalties from any release from the label and will have the opportunity to produce music under the label",
      style: networkIconStyles,
      date: "100%",
      icon: NetIcon,
      col: "#f9c84f"
    },
    {
      id: 6,
      per: "110%",
      title: "Phase 5.1",
      location: "AI generated artwork inspired by music 👀",
      description:"- Our second collection, a deeper dive into the abyss",
      description2: "- More details to be revealed 👀",
      description3: "",
      description4: "",
      description5: "",
      style: artIconStyles,
      date: "110%",
      icon: ArtIcon,
      col: "#FFD700"
    },
    
    {
      id: 7,
      per: "???",
      title: "PHASE  ???",
      location: "Meta-Data 🎼 Meta-Tunes 🎶",
      description:"- We plan to add more value to eahc of our NFT's by adding a free Tune · Capsule!",
      description2: "- Tune · Capsules Will be revolutionary and increase the value for all holders and non-holders of every NFT!",
      description3: "- This will be done by encoding every respective song's meta data within the blockchain, thus forever preserving the music!",
      description4: "If Apple Music, YouTube, and Spotify fail, Meta · Tunes won't!",
      description5: "",
      style: goldIconStyles,
      date: "???",
      icon: GoldIcon,
      col: "#FFDF00"
    },
    
  ];
  

  export default timelineElements;