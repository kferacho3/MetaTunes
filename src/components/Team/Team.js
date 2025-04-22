
import './Team.css'
import React from 'react'
//import vid1 from '../../gifs/tb1.gif';

import vid1 from '../../videos/tb1.mp4';
import { TeamContainer, VideoBg } from './TeamElements';
function Team() {




  return (
    <>
   <h1 class="h1">THE TEAM</h1>
   <TeamContainer id= 'team' className='video'>
      
   <VideoBg playsInline autoPlay loop muted src={vid1} type='video/mp4' />
    
    
  <div class="wrapper-grid">
    <div class="container">
      <div class='banner-img'></div>
      <button class='btn'>NFT 0350: Alina Baraz, Eletric (RARE) </button>
      <h1 class="name">META MARXIMUS</h1>
      <p class="description">Tunes Founder, Art Creator, Web Design and Dev, put simply,  Meta God.</p>
      
    </div>

    <div class="container">
      <div class='banner-img2'></div>
      <button class='btn'>NFT 1084: Logic, Lord Willin</button>
      <h1 class="name">META SHARK</h1>
      <p class="description">Full time crypto degen, web3 expert, software dev. Got contracts?</p>
      
    </div>

    <div class="container">
      <div class='banner-img3'></div>
      <button class='btn'>NFT 1522: Lupe Fiasco, Paris Tokyo (RARE)</button>
      <h1 class="name">META FADE</h1>
      <p class="description">Artistic and creative music head full of ambition.</p>
      
    </div>

    <div class="container">
      <div class='banner-img4'></div>
      <button class='btn'>NFT 1130: Future Super Trapper</button>
      <h1 class="name">META TRITON</h1>
      <p class="description">Neptune's #1 synth raver and dedicated Music Lover</p>
      
    </div>

   
    </div>
   
    </TeamContainer>
    </>
  )
}

export default Team;
