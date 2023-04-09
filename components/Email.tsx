import React, { useState } from 'react';
import { WhatsappShareButton,EmailShareButton } from 'react-share';
import Image from "next/image"

function ShareByEmail({ meetingId, toEmail }:{meetingId:number,toEmail:string}) {
 const message = `Join my meeting: ${meetingId}`;

  return (
    <div className="flex space-x-4 ">
      <EmailShareButton
        url={message}
        subject="Join my meeting"
        body={`Hey! I wanted to invite you to my meeting. Here's the meeting ID:       
        ${meetingId}`}
        separator=" - "
        to={toEmail}
        title="Share via Email"
      >
        <div className="bg-red-500 hover:bg-red-600 text-white font-medium p-3
        rounded-full flex items-center space-x-2 transition-colors duration-300 ease-in-out">
          <Image src="/email.svg" width={20} height={20}/>
        </div>
       
      </EmailShareButton>
      <WhatsappShareButton
        url={message}
       
       
      >
         <div  title="Share on Whatsapp" className="bg-red-500 hover:bg-red-600 text-white font-medium p-3
        rounded-full flex items-center space-x-2 transition-colors duration-300 ease-in-out">
          <Image src="/whatsapp.svg" width={20} height={20} />
         </div>
      </WhatsappShareButton>
    </div>
  );
}

export default ShareByEmail;
