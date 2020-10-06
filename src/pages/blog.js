import React from 'react';

import Layout from '../components/Layout';
//import Shoptop from '../assets/images/sdcoast.jpg'

import BlogPage from '../components/PageComponents/Blog/BlogPage'


const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Blog = () => (
    <Layout>
        

            <BlogPage />


    </Layout>
)

export default Blog