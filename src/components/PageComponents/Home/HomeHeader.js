import React from 'react';
import homeStyles from './home.module.css';
import Container from 'react-bootstrap/Container';

import { PersonaLightShadow } from '../../../assets/images/index';
import CodestaffLogo from '../../../assets/images/codestaff-logo.jpg';

class HomeHeader extends React.Component {
  render() {
    return (
      <section id="top" className="one dark cover">
        {/*<div className="container">*/}
        <Container>
          <div className={homeStyles.Headerbg}>
            <header>
              <div>
                <img
                  src={PersonaLightShadow}
                  alt="Salem Aziel signature logo"
                  className={homeStyles.signature}
                />
              </div>
              <h3 className="alt" style={{ textShadow: '3px 3px 4px black' }}>
                <a href="https://twitter.com/realDonaldTrump/status/827483841589891073?">Professional Anarchist &#8482;</a> by day. <br />
                <br />
                Digital Consultant, Web Developer, <br />
                and System Administrator by night.
              </h3>
              <h4> HMU, lets talk.</h4>
              {/* <div style={{padding: '0 0 1rem'}}>
                          <img src={CodestaffLogo} alt='codestaff-logo' width={150} />
      </div>*/}
              {/*<icon className="fa fa-code" 
                        style={{
                            fontSize: "2rem",
                            padding: "0 0 1rem",
                            textShadow: '3px 3px 5px black',
                        }} />
                       <p style={{
                          letterSpacing: "0.3rem",
                          textShadow: '3px 3px 3px black',
                        }}>CodeStaff</p>*/}
            </header>
          </div>
          {/*</div>*/}
        </Container>
      </section>
    );
  }
}

export default HomeHeader;
