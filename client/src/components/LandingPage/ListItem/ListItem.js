import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import './ListItem.css';
import { AnimationWrapper } from 'react-hover-animation'
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    const { launchInfo } = props;
    const { flight_number } = launchInfo

    console.log(flight_number);
    return (
        <div className='listItem'>
            <AnimationWrapper>
                <Card>
                    <Card.Header >{launchInfo.mission_name}</Card.Header>
                    <Card.Body>
                        <Card.Title>{launchInfo.launch_year}</Card.Title>
                        <Image src={launchInfo?.links.mission_patch_small} fluid />
                        <Card.Text>
                            {launchInfo.launch_site.site_name_long}
                        </Card.Text>
                        <Link to={`/details/${flight_number}`}>
                            <Button variant="dark">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </AnimationWrapper>
        </div>
    );
}

export default ListItem;
