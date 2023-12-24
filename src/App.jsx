import React from 'react'
import './App.css'
import tree from './assets/images/tree.png'
import question from './assets/images/question.jpg'
import message from './assets/images/message.avif'
import board from './assets/images/board.avif'
import { Link } from 'react-router-dom'
import Background from './components/Background'

const App = () => {
  return (
    <>
      <Background />
      <div className="flex">
        <div className="flex flex-col text-white w-[600px] gap-10 ms-[5rem] mt-[5rem]">
          <span className="handwriting text-6xl">KNOW MORE</span>
          <span className="handwriting text-6xl self-end">ABOUT ME</span>
          <span className='text-xl tracking-[.4rem] special-font mt-5'>Get to know one thing about me.<br />
            Ask me one thing you want to know! <br />
            I will answer truthfully!
          </span>
          <div className="flex gap-5">
            <div className='h-[150px] w-[140px] glass rounded-2xl flex flex-col justify-center items-center'>
              <img src={question} alt="question" className='w-[100px] rounded-2xl' />
              <span className='mt-2 special-font'>1. Ask Question</span>
            </div>
            <div className='h-[150px] w-[140px] glass rounded-2xl flex flex-col justify-center items-center'>
              <img src={message} alt="send-message" className='w-[100px] rounded-2xl' />
              <span className='mt-2 special-font'>2. Send To Me</span>
            </div>
            <div className='h-[150px] w-[140px] glass rounded-2xl flex flex-col justify-center items-center'>
              <img src={board} alt="board" className='w-[100px] rounded-2xl' />
              <span className='mt-2 special-font'>3. See My Answer</span>
            </div>
          </div>
          <div className="flex gap-5">
            <Link to='/send'>
              <button className="mt-3 bg-white w-[150px] h-[50px] special-font font-bold rounded-xl text-black hover:scale-110 transition">
                Make My Day
              </button>
            </Link>
            <Link to='/view'>
              <button className="mt-3 bg-white w-[150px] h-[50px] special-font font-bold rounded-xl text-black hover:scale-110 transition">
                View Messages
              </button>
            </Link>
          </div>
        </div>
        <img src={tree} alt="tree" className='scale-[1.3] bottom-0 fixed right-0' />
      </div>
    </>
  )
}

export default App