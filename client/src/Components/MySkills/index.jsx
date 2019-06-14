import React ,{Component} from 'react';
import UnderConstruction from '../UnderConstruction';
import Slider from './Slider';
import './style.css'
export default function MySkills() {
    return(
        <>
        <h1>skills</h1>
        <section className="skills__header">
            <h1 className="skills__word-my-goal">My Goal</h1>
            <h2 className="skills__text-goal">
            Want good (fair and meaningful) work or want to offer good work? Join
          us and find/show opportunities to connect and work together.
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