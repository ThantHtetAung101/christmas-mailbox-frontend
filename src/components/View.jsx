import React, { useEffect, useState } from 'react'
import Background from './Background'
import axios from 'axios'
import { motion } from 'framer-motion'

const View = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/messages').then(res => {
      setMessages(res.data)
    })
  }, [])

  const openBox = {
    hover: {
      height: '300px',
      minHeight: '300px',
      transition: {
        delay: 0.3,
        type: 'tween',
        ease: 'easeInOut'
      }
    },
  }
  const moveQuestion = {
    hover: {
      position: "absolute",
      top: '10%',
      transition: {
        delay: 0.3,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  }
  const showAnswer = {
    hover: {
      opacity: 1,
      transition: {
        delay: 0.3,
        type: 'tween',
        ease: 'easeInOut'
      }
    }
  }

  return (
    <>
      <Background />
      <div className='grid grid-cols-5 gap-5 px-3 py-5 overflow-hidden'>
        {messages.map((message) => (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} key={message.id}
            whileHover="hover" variants={openBox}
            className='w-[300px] h-[100px] min-h-[100px] glass rounded-xl flex flex-col justify-center items-center text-center px-3 cursor-pointer'>
            <motion.span initial={{ position: "absolute", top: '0%' }} animate={{ position: "absolute", top: "25%" }} variants={moveQuestion} className="text-lg text-white special-font">
              {message.question}
            </motion.span>
            <motion.span initial={{ opacity: 0 }} variants={showAnswer} className="text-white special-font answer">
              {message.answer ? message.answer : 'Still waiting for answer...'}
            </motion.span>
          </motion.div>
        ))}

      </div>
    </>
  )
}

export default View