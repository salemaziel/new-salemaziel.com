import React from 'react'
import pic2 from '../../../assets/images/pic02.jpg';
import pic3 from '../../../assets/images/pic03.jpg';
import pic4 from '../../../assets/images/pic04.jpg';
import pic5 from '../../../assets/images/pic05.jpg';
import pic6 from '../../../assets/images/pic06.jpg';
import pic7 from '../../../assets/images/pic07.jpg';
import pic8 from '../../../assets/images/pic08.jpg';

import { FTPACAB, UCSB, AlwaysSunny, Hackerman, Lawsdontexist, Revolutionary, WordpressLogo, Terminal2, Linuxlogo, HTML5logo, GatsbyReactLogos, Webservices, UsedToSmoke, CodestaffLogo, Profilepic } from '../../../assets/images/index'
import Row from 'react-bootstrap/Row'
import InstagramEmbed from 'react-instagram-embed';


import Col from 'react-bootstrap/Col'

const SectionOne = () => (

      <section id="about" className="three">
      <div className="container">
        <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
          <Col>
            <header>
              <h2>About Me</h2>
            </header>
          </Col>
        </Row>

        <a href="#" className="image featured">
          <img src={Profilepic} alt="" style={{width:'50%', margin: 'auto'}}/>
        </a>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <hr />
        <br />
        <div className="MoreAbout">
          <InstagramEmbed
            url="https://www.instagram.com/p/244wrIhZ-5/"
            maxWidth={320}
            hideCaption={true}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            /*style={{margin:'auto'}}*/
          />
          <div style={{margin: '5px 2rem 8rem'}}>
              <h4 style={{color: 'gray!important', fontSize: '1.5rem'}}>More About Me</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>

)

export default SectionOne