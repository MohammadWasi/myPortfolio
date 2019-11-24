import React, {Fragment, useEffect, useState} from 'react';

import { useTrail, useTransition, animated } from 'react-spring'


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
    const js = [':)','About />']
     return (
       <div className='about'>
         <div className='title'>{js[1]}</div>
         <p>
         I'm ambitious and love new challenges
         and extremely motivated to constantly
         develop my skills and grow professionally.
         My skills in Javascript is continuously expanding.
         If I don't know something I always try to wrap my head around it quickly.
         </p> 
         {/* <p>I am confident in my ability to come up </p>
         <p>with interesting ideas and working </p>
         <p>with the team to manage large and complex design projects.</p> */}
         
        </div>
     )
  }

export default About;