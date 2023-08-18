import Head from "next/head";
import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";

function Index() {
  return (
    <div className="app">
      <Head>
        <title>Nijat Garayev</title>
      </Head>
      <>
        <Navbar />
        <SocialIcons />
        <Email />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    </div>
  );
}

export default Index;
