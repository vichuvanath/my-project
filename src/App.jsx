import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
function App() {
  return (
  <div class = "min-h-screen flex font-sans">
    <div class = "w-1/2 bg-green-900 text-[#f7fa00] p-24">
    <h1 class = "text-4xl font-bold mb-12">Welcome to SIET LMS</h1>
    <p class = "leading-relaxed mb-4 text-base">
       The Sri Shakthi Institute of Engineering and Technology Learning Management
      System (SIET-LMS) is your dedicated online platform designed to elevate your
      programming skills and academic journey. SIET-LMS offers a comprehensive,
      user-friendly environment tailored to support your growth.
    </p>
    <h2 class="text-2xl font-semibold mb-6">SIET LMS provides</h2>
     <ul class="list-disc list-inside pl-6 space-y-3">
      <li>
        A vast collection of carefully curated coding challenges and problems
        spanning various difficulty levels.
      </li>
      <li>
        Real-time code compilation and execution to instantly test and validate
        your solutions.
      </li>
      <li>
        Detailed progress tracking and personalized feedback to help you identify
        strengths and areas for improvement.
      </li>
      <li>
        Resources and tools aligned with competitive programming and
        industry-relevant software development practices.
      </li>
    </ul>
    </div>
     <div class="w-1/2 bg-yellow-300 flex justify-center items-center">
    <div class="bg-green-50 rounded-2xl shadow-lg p-6 w-90">
      <div class="flex justify-center">
        <img src="http://110.172.151.102/LMS/favi.jpg" class="rounded-full h-20 w-20"></img>
      </div>
      <input
        type="text"
        placeholder="Username"
        class="w-full mb-4 px-4 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900 mt-7"
      />
      <input type="password" placeholder="password"
      class="w-full mb-4 px-4 py-2 border border-green-600 rounded-lg"></input>
      <div class="text-right mb-4 text-green-900 text-sm hover:underline">Forgot password?</div>
      <button class="w-full px-4 py-2 mb-4 bg-green-600 rounded-2xl text-amber-50 cursor-pointer">Submit</button>
    </div>
    </div>
    </div>

  )
}

export default App
