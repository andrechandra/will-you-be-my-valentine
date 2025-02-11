'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const noResponses = [
  'No.',
  'Are you sure?',
  'Really???',
  'Pretty Pleasee!',
  'PLEASEEEEEEE BEEE!',
  'But but but... :(',
  "I'm gonna dieee",
  "I'm deadd",
  ':((((('
]

export default function ValentineProposal() {
  const [showRSVP, setShowRSVP] = useState(false)
  const [noCount, setNoCount] = useState(0)

  const handleNoClick = () => {
    setNoCount((prevCount) => (prevCount + 1) % noResponses.length)
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex flex-col items-center justify-center p-4">
      <div className="w-full mx-auto">
        <AnimatePresence mode="wait">
          {!showRSVP ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <MochaGif />
              <AnimatedText
                text="Hellooo Beeeee,"
                className="text-2xl sm:text-3xl font-poppins text-red-600 mb-4"
              />
              <AnimatedText
                text="Will you be my Valentine?"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 mb-8"
              />

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 text-white font-bold py-3 px-6 rounded-md text-xl shadow-2xl"
                  onClick={() => setShowRSVP(true)}
                >
                  Yes, I&apos;d love to! 💖
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-red-500 text-white font-bold py-3 px-6 rounded-md text-xl shadow-lg"
                  onClick={handleNoClick}
                >
                  {noResponses[noCount]}
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="rsvp"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <MilkMochaGif />
              <RSVPInvitation />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function MochaGif() {
  return (
    <div className="flex justify-center items-center mb-8">
      <Image src="/brown-bear.gif" width={200} height={200} alt="Mocha" />
    </div>
  )
}

function MilkMochaGif() {
  return (
    <div className="flex justify-center items-center">
      <Image src="/love-bear.gif" width={200} height={200} alt="MilkMocha" />
    </div>
  )
}

function AnimatedText({
  text,
  className
}: {
  text: string
  className: string
}) {
  const words = text.split(' ')

  return (
    <motion.h2 className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  )
}

function RSVPInvitation() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-1 w-full max-w-md mx-auto text-center">
      <div className="border-4 border-pink-300 rounded-lg p-4 sm:p-6 relative">
        <h2 className="text-2xl sm:text-3xl font-serif text-red-600 mb-4">
          You&apos;re Invited!
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Makan malam yukkkkk
        </p>
        <div className="space-y-2">
          <p className="text-base sm:text-lg text-gray-600">
            <span className="font-semibold">Date:</span> February 15, 2025
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            <span className="font-semibold">Time:</span> 8:00 PM
          </p>
          <p className="text-base sm:text-lg text-gray-600">
            <span className="font-semibold">Location:</span> dimana yaaaa
          </p>
        </div>
        <motion.div
          className="mt-6 text-pink-600 text-base sm:text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          see youuu! hehe
        </motion.div>
      </div>
    </div>
  )
}
