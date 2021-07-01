import React from 'react'
import image from "../5XpPyw.jpg"
const Home = () => {
    return (
        <main>
            <img src={image} alt="Haroon" className="absolute object-cover w-full h-full" />
           
           <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <h1 className="text-4xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name ">Hey! I'm Haroon.</h1>
            </section></main>
    )
}

export default Home
