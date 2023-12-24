import React, { useEffect, useState } from 'react'
import Background from './Background'
import { motion } from 'framer-motion'
import axios from 'axios'

const Answer = () => {
    const [message, setMessage] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8080/unanswered-question').then(res => {
            setMessage(res.data)
        })
    }, [])
    const sentAnswer = () => {
        const sendButton = document.getElementById('send-button')
        const answer = document.getElementById('answer')
        const messageId = document.getElementById('message-id').value
        axios.post(`http://localhost:8080/answer/${messageId}`, {
            answer: answer.value
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
            location.reload()
        })
    }
    return (
        <>
            <Background />
            {
                message ? <div className='flex items-center justify-center h-screen'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, ease: 'easeOut' }} className='text-center'>
                    <span className="text-2xl text-white special-font">{message.question}</span>
                    <div className="rounded-2xl overflow-hidden mt-5 relative">
                        <input type="hidden" id='message-id' name='message_id' value={message.id} />
                        <textarea name="answer" id="answer" cols="50" rows="10" maxLength='60' placeholder='My answer is.....'
                            className='focus:outline-0 rounded-2xl px-3 py-3 z-10 special-font text-xl glass text-white resize-none'>
                        </textarea>
                        <button onClick={sentAnswer} id='send-button' className="absolute bottom-5 right-5 mt-3 bg-white w-[150px] h-[50px] special-font font-bold rounded-xl text-black hover:scale-110 transition">
                            Answer
                        </button>
                    </div>
                </motion.div>

            </div> :
            <div className="flex items-center justify-center h-screen">
                <span className="text-2xl text-white special-font">All Questions have been answered!</span>
            </div>
            }
            
        </>
    )
}

export default Answer