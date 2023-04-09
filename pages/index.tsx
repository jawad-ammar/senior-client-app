import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ShareByEmail from "../components/Email"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     
      {/* The button to open modal */}
<label htmlFor="my-modal-6" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="flex items-center justify-between w-full mb-3">
      <h3 className="font-bold text-lg">Share Modal</h3>
      <label htmlFor="my-modal-6" className="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</label>
     
    </div>
{/*     <hr/> */}
     <p className="divider">Share meeting id via social media</p>
{/*     <p className="py-4 font-medium">Share meeting id via social media</p> */}
     <ShareByEmail meetingId={222} toEmail="tomyself6@gmail.com"  />
    <p className="divider">Share meeting id via Email</p>
{/*     <p className="py-4 font-medium">Share meeting id via Email</p> */}
  <div className="flex items-center justify-between w-full space-x-3">
    <input type="text" placeholder="Type here" className="input flex-1 input-bordered" />
    <button className="btn btn-outline ">Send</button>
  </div>
    <p className="divider">or</p>
{/*     <button className="btn btn-outline btn-info btn-wide">Copy Id</button> */}
    <button className="btn btn-block">Copy ID</button>
  </div>
</div>
    </div>
  )
}

export default Home
