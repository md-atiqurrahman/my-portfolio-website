import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <main className='px-[20px] md:px-0 lg:px-0'>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contacts></Contacts>
        </main>
    );
};

export default Home;