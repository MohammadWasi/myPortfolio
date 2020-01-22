import React, {Fragment, useEffect} from 'react';
function Work () {
   const js = ['Work />']
     return (
       <>
         <div className="title">{js[0]}</div>
         <div className="work">
           <div class="card">
             <h3 className="work-title">Open Source Contributuion</h3>
             <p>
               Express Gateway:{" "}
               <a
                 href="https://github.com/ExpressGateway/express-gateway/pull/971"
                 target="_blank"
               >
                 PR Link{" "}
               </a>
             </p>
           </div>
           <div class="card">
             <h3 className="work-title"> Software Developer at Ezeiatech</h3>
             <p>
               Created new features, functionality and capabilities on the
               Websites using Angular and React.
             </p>
           </div>
         </div>
         <div className="work">
           <div class="card">
             <h3 className="work-title"> Software Developer at Ichamp</h3>
             <p>
               Worked in team developing a E-Education innovation Gamifed
               Practice mobile app using ionic 4 framework.
             </p>
           </div>
           <div class="card">
             <h3 className="work-title"> Software Developer at KitsForHomes</h3>
             <p>Worked in a team to built the product’s website.</p>
           </div>
         </div>
       </>
     );
  }

export default Work;