import React from 'react'
import Section1 from './components/layout/section1'
import Sectino2 from './components/layout/Sectino2'
import Section3 from './components/layout/Section3'
import Section4 from './components/layout/Section4'
import Section5 from './components/layout/Section5'
import Section6 from './components/layout/Section6'
import Section7 from './components/layout/Section7'


export default function page() {
  return (
    <main className='text-center p-5'>

      <Section1/>
      <Sectino2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </main>
  )
}
