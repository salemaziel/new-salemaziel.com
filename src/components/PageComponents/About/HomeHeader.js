import React from 'react'
import homeStyles from './home.module.css'

import { PersonaLightShadow } from '../../../assets/images/index'
import CodestaffLogo from '../../../assets/images/codestaff-logo.jpg'
  
class HomeHeader extends React.Component {
    render() {
      return (
        <section id="top" className="one dark cover">
        <div className="container">
        <div className={homeStyles.Headerbg}>
                <header>
                    
                        <h2 className="alt">
                          <img src={PersonaLightShadow} alt="Salem Aziel signature logo" width={300} />
                           {/* Salem Aziel{/*<span className="rainbow">__________</span>* /}
                            <br /> */}
                        </h2>
                        <h3 className="alt" style={{textShadow: '3px 3px 4px black',}}>
                          Professional Anarchist &#8482; by day. <br />
                          <br />
                            Web Coach, 
                             Website Developer, <br />
                             and System Administrator by night.<br />
                             HMU, lets talk.
                        </h3>    
                       {/* <div style={{padding: '0 0 1rem'}}>
                          <img src={CodestaffLogo} alt='codestaff-logo' width={150} />
      </div>*/}
                       <icon className="fa fa-code" 
                        style={{
                            fontSize: "2rem",
                            padding: "0 0 1rem",
                            textShadow: '3px 3px 5px black',
                        }} />
                       <p style={{
                          letterSpacing: "0.3rem",
                          textShadow: '3px 3px 3px black',
                        }}>CodeStaff</p>
                        
                </header>
           
        </div>
        </div>
        </section>
      )
    }
}

export default HomeHeader