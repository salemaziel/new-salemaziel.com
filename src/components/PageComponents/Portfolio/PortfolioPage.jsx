import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Categories from './Categories'

import SectionTop from './sectionTop'

const PortfolioPage = () => (
    <>
    <SectionTop
    bg=""
    textColor=""
    size="md"
    bgImage=""
    bgImageOpacity=""
    title="Portolio"
    subtitle="The services I offer"
    size="1"
    >
    <Categories />

    </SectionTop>



</>
)

export default PortfolioPage