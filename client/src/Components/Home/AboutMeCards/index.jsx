import React from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './style.css';

class AboutMeCards extends React.Component {
  state = {
    myInfo: null,
    statusLabel: '',
    statusDiv: '',
  };

  componentDidMount() {
    const { myInfo, status,hover } = this.props;
    // console.log(11111,status)
    console.log(222,hover)
    const borderColor = {
      completed: 'green',
      finished: 'red',
      active: 'blue',
    };
    this.setState(() => {
      return {
        myInfo,
        statusLabel: `offer-card__status--${status}`,
        statusDiv: `offer-card__border--${borderColor[status]}`,
      };
    });
  }


  render() {
    const { myInfo,statusLabel, statusDiv } = this.state;
    console.log('statusdiv',statusDiv)
    const { hover, history } = this.props;
    return (
      <>
        {myInfo ? (
          <Card
            key={myInfo.id}
            onClick={() => history.push(`/app/offers/${myInfo.id}`)}
          >
            {hover ? (
              <span className={`offer-card__border ${statusDiv}`}> </span>
            ) : null}
            <Card.Header className="offer-card__header">
              <div>
              <span className="offer-card__title">{myInfo.title}</span>

                <br />
              </div>
              {hover ? (
                <span className={`offer-card__status ${statusLabel}`}>
                  {' '}
                  {myInfo.status}
                </span>
              ) : null}

            </Card.Header>
            <Card.Body>
              <Card.Text className="offer-card__description">
                {myInfo.description.substring(0, 300)}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : (
          <>
            <Spinner animation="border" variant="info" />
          </>
        )}
      </>
    );
  }
}

export default withRouter(AboutMeCards);


 

