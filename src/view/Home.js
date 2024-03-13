import React from 'react';
import Skip from '../components/Skip';
import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import AboutSkill from '../components/AboutSkill';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Skip />
      <Header/>
      <Main>
        <Intro />
        <AboutSkill/>
        <Projects />
      </Main>
      <Footer />
    </>
  );
};

export default Home;