import Button from "@mui/material/Button";
import React from 'react';
import Marquee from "react-fast-marquee";

const MarqueeBox = () => {
return (
<>
  <div className='news mb-2 d-flex align-items-center'>
    <div className='newsBtn'>
      <Button className="btn">News</Button>
    </div>
    <Marquee speed={50} gradient={false}>
      <h6 className='mb-0'>This is a smooth marquee effect in React! 🎉</h6>
    </Marquee>
  </div>

</>
)
}

export default MarqueeBox;