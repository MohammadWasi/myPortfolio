import React, {Fragment, useEffect, useState} from 'react';

import { useTrail, useTransition, animated } from 'react-spring'
import me from '../../assets/me.jpg';
import resume from '../../assets/resume.pdf';

const items = [<Box />]
const config = { mass: 5, tension: 2000, friction: 200 }

function About() {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main">
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
function Box () {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const download = async () => {
    setLoading(true);

   const start =  await new Promise((resolve) => {
      setTimeout(() => {
        console.log('first')
        setLoading(false);
        setSuccess(true);
        resolve();
    }, 3000);
    });
    const reset = await new Promise((resolve) => {
      
      setTimeout(() => {
        console.log('works');
        setSuccess(false);
        resolve();
    }, 3000);
    });
    const a = await start;
    const b = await reset;

    
  }


    const js = [':)','About />']
     return (
       <div className="container-about">
         <div className="img-profile">
         <figure>
           <img src={me} alt="profile" /></figure> </div>
       <div className='about'>
         <div className='title'>{js[1]}</div>
         <p>
         I'm ambitious and love new challenges
         and extremely motivated to constantly
         develop my skills and grow professionally.
         My skills in Javascript is continuously expanding.
         If I don't know something I always try to wrap my head around it quickly.
         </p> 
         {/* <p>
         <a href={resume} download='Wasi-resume'>Download Resume</a>
         </p>
         <div className="container-download" onClick={download}>
  <a className={"button" + ' ' +(loading ? 'loading' : '') + ' ' + (success ? 'success' : '')}><i className="fa"></i></a>
</div> */}
<button class="button"><a href={resume} download='Wasi-resume'>Download Resume</a>
</button>
         </div>
        </div>
     )
  }

export default About;