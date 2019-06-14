import React ,{Component} from 'react';
import UnderConstruction from '../UnderConstruction';
import Slider from './Slider';
import './style.css'
export default function MySkills() {
    return(
        <>

        <section className="skills__header">
            <h1 className="skills__word-my-goal">My Goal</h1>
            <h2 className="skills__text-goal">
            My dream is to have the experience to work remotely(freelancer), especially in the field of web development, design and work with international companies in projects, and I serve clients in forign countries with the best image expected and to benefit from my sites and to come back to work with me again.
            And working on sites Upwork , linkedIn
            </h2>

        </section>
        <section className="skills__my-skills">
            <h2 className="skills__word-my-skills">MySkills</h2>
            <Slider />
        </section>
        <UnderConstruction/>
        </>
    )
}