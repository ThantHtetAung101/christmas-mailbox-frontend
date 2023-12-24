import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Background from '../components/Background'

const Send = () => {
    const variants = {
        thinking: { opacity: 1, y: 0 },
        sent: { opacity: 0, y: "-200%" }
    }

    const [isSent, setIsSent] = useState(false)
    const [showThanks, setShowThanks] = useState(false)
    const sendMessage = () => {
        const sendButton = document.getElementById('send-button')
        const message = document.getElementById('message')
        console.log(message.value);
        axios.post('http://localhost:8080/send-message', {
            question: message.value,
        }).then(res => {
            sendButton.innerHTML = `
            <div class="flex items-center justify-center gap-3">
            <div
            class="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span>
          </div>
          <span class="special-font">Sending...</span></div>`
            sendButton.setAttribute('disabled', 'true')
            setIsSent(true)
            setTimeout(() => {
                setShowThanks(true)
            }, 1000);
        })
    }
    return (
        <>
            <Background />
            {
                !showThanks ?
                    <div className='flex items-center justify-center h-screen'>
                        <motion.div initial={{ opacity: 0 }} animate={isSent ? 'sent' : 'thinking'} variants={variants} transition={{ delay: 0.5, ease: 'easeOut' }} className='text-center'>
                            <span className="text-2xl text-white special-font">Ask Me One Thing!</span>
                            <div className="rounded-2xl overflow-hidden mt-5 relative">
                                <textarea name="message" id="message" cols="50" rows="10" maxLength='60' placeholder='I want to know about your.....'
                                    className='focus:outline-0 rounded-2xl px-3 py-3 z-10 special-font text-xl glass text-white resize-none'>
                                </textarea>
                                <button onClick={sendMessage} id='send-button' className="absolute bottom-5 right-5 mt-3 bg-white w-[150px] h-[50px] special-font font-bold rounded-xl text-black hover:scale-110 transition">
                                    Send To Me
                                </button>
                            </div>
                        </motion.div>

                    </div>
                    :
                    <div className="flex items-center justify-center h-screen">
                        <motion.div animate={{ opacity: 1 }} className='flex flex-col justify-center gap-3'>
                            <span className="text-4xl text-white special-font">Thanks for sending!</span>
                            <Link to='/view' className='flex justify-center'>
                                <button className="mt-3 bg-white w-[200px] h-[50px] special-font font-bold rounded-xl text-black hover:scale-110 transition">
                                    View Message Board
                                </button>
                            </Link>
                        </motion.div>
                    </div>
            }
        </>
    )
}

export default Send