import React from 'react';
import { Carousel } from 'react-bootstrap';

import './style.css';

import Cards from '../Cards';
import mySkills from '../../utils/mySkills.js';

export default class ControlledCarousel extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const newData = [{ id: 0, skills: [] }];
    mySkills.forEach((skill, index) => {
      newData[newData.length - 1].skills.push(skill);
      if ((index + 1) % 4 === 0) {
        newData.push({ id: (index + 1) / 4, skills: [] });
      }
    });
    this.setState({ data: newData });
  }

  render() {
    const { data } = this.state;

    return (
      <Carousel
        controls
        indicators
        nextIcon={<i className="slider__control fas fa-angle-double-right" />}
        prevIcon={<i className="slider__control fas fa-angle-double-left" />}
      >
        {data.map(({ id, skills }) => (
          <Carousel.Item key={id}>
            <Cards data={skills} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
