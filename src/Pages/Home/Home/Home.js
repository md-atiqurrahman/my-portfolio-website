import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contacts></Contacts>
        </main>
    );
};

export default Home;