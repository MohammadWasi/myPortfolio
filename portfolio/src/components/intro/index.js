
 import React, { useState } from 'react';
import { Intro }  from './intro'
import "../../styles.css";
import { render } from 'react-dom'
import { useTrail, useTransition, animated } from 'react-spring'



const items = [<IntroBox />, 'I am a Software Engineer who likes to build Web Apps.']
const config = { mass: 5, tension: 2000, friction: 200 }

function Box() {
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
function IntroBox () {
   return (
    <div className="intro-name">
    Hi, My Name is <NameBox/>
    </div> 
   )
}
function NameBox () {
  return (
    <strong className="purple">Mohammad Wasi</strong>
  )
}
function DesigBox () {
  return (
    <div className="intro-desig">i am a Full Stack Sofware Engineer</div>
  )
}


class MyComponent extends React.Component { 
  handleScroll = e => {
    let element = e.target;
    console.log(e)
    console.log(element.scrollHeight - element.scrollTop === element.clientHeight)
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      return <NameBox />;
    }
  }
  render() {
    return (
      <div className="content-container" onScroll={this.handleScroll}>

<canvas class=
"background"
></canvas>
        <Box />
      </div>
    )
  }
}

const Landing = () => {
  

  

  return (
    <div className="intro subtitle">
                
          {/* <DesigBox /> */}
          {/* <Box /> */}
          <MyComponent />
      </div>
       
  );
};

export default Landing;
