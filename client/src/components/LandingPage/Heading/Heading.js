import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Heading.css';

const Heading = () => {
    return (
        <div className='heading'>
            <Jumbotron fluid>
                <Container>
                    <h1>Launches</h1>
                    <p>
                        Launch payload orbits are updated hourly
    </p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Heading;
