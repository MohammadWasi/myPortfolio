import React, {Fragment, useEffect} from 'react';
function About () {
    const js = ['{','() {']
     return (
       <div className='about'>
         <div className="code-wrp">
         <div data-line-nr="01" className="code-l">
           <div className="methods">class</div>
            <span className="propname">Mohammad Wasi</span> {js[0]}
              </div>
        <div data-line-nr="02" className="code-l">
                  <div className="dot">··</div>
                  <div className="comment">// I'm ambitious and love new challenges :)</div>
                  </div>
                  <div data-line-nr="03" className="code-l">
                      <div className="dot">··</div>
                      <div className="comment">// My vast variety of skills is continuously expanding.</div>
                  </div> 

                  <div data-line-nr="04" class="code-l">
                      <div class="dot">··</div>
                      <div class="methods">constructor</div>{js[1]}</div>

                      <div data-line-nr="05" class="code-l">
                          <div class="dot">····</div>
                          <span class="scope">this</span>.<span class="prop2">name</span> 
                          <span class="scope">=</span> <span class="string">'Jan Baszczok'</span>
                          </div>

                          <div data-line-nr="06" class="code-l">
                              <div class="dot">····</div>
                              <span class="scope">this</span>.<span class="prop2">dayOfBirthTimestamp</span> 
                              <span class="scope">=</span> 
                          <span class="number">602745592</span></div>
                          <div data-line-nr="07" class="code-l"><div class="dot">····</div>
                          <span class="scope">this</span>.<span class="prop2">email</span> 
                          <span class="scope">=</span> 
                          <span class="string">'baszczok@yasio.pl'</span></div>
                      
                    
         </div>
       </div>
     )
  }

export default About;