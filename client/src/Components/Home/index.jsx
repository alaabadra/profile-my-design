import React ,{Component} from 'react';
import { Container } from 'react-bootstrap';

import UnderConstruction from '../UnderConstruction';
import AboutMeCards from './AboutMeCards';
import aboutMeFile from './../utils/aboutMeFile.js'
export default class  Home extends Component{

    state={
    myInfo:[]
    }
    componentDidMount() {
        this.setState({ myInfo: aboutMeFile });
      }
    render(){
       const {myInfo} = this.state; 
     return(

        <>

        <h1>home</h1>
        <Container className="page__container">
          <div className="my-applications__title">
            <span>About Me</span>
          </div>
          {myInfo
            ? myInfo.map(item => {
              console.log(item);
              
                
                return (
                    <AboutMeCards
                      hover
                      myInfo={item}
                      key={item.id}
                      status={item.status}
                    />
                  );
              })
            : null}
        </Container>

        <UnderConstruction/>
        </>
    )   
    }
    
}