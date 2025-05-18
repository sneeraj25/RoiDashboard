import React, { useState } from 'react';
import { Toaster, toast } from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

const CopyClipboard = () => {
const [text, setText] = useState("Copy this text!");

const handleCopy = () => {
navigator.clipboard.writeText(text)
.then(() => {
toast.success("Text copied to clipboard! ✅");
})
.catch(() => {
toast.error("Failed to copy text! ❌");
});
};

return (
<>
    
        <Toaster />
        <div className='container-fluid px-2 mb-4'>
            <div className='row g-3 copyClipboard'>
                
                <div className="copyBox">
                <h6 className='mb-2'>Referral Link</h6>
                        <input className='col-lg-11 col-10 ' type="text" value={text} onChange={(e)=> setText(e.target.value)} disabled />
                <button className='col-lg-1 col-2' onClick={handleCopy}>
                    <FaRegCopy />
                </button>
                </div>
                
            </div>
        </div>

 

</>
)
}

export default CopyClipboard