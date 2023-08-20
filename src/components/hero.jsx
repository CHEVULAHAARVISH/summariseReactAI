import React from 'react'
import {logo} from "../assets"

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='w-full justify-between items-center flex mb-10 pt-3'>
        <img className="w-28 object-contain" src={logo} alt="sums logo"/>
        <button 
        className='black_btn'
        onClick={()=>window.open("https://github.com/CHEVULAHAARVISH/")}
        type='button'>
          GITHUB
        </button>
      </nav>
      <h1 className='head_text'>
        Summarise Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        A web app to summarize articles using OpenAI's GPT-4 model 
        that transforms lengthy articles into
        clear summaries
      </h2>
    </header >
  )
}

export default Hero