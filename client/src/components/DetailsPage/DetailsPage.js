import React, { useEffect, useState } from 'react';
import { API_URL } from '../Config';
import { Table, Image, Button } from 'react-bootstrap';
import './DetailsPage.css';

const DetailsPage = (props) => {
    const { history } = props;
    
    const [Launch, setLaunch] = useState();
    const { launchId } = props.match.params;

    const handleFetch = () => {
        fetch(`${API_URL}/${launchId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setLaunch(result);
                },
                (error) => {
                    setLaunch(error);
                }
            )
    }

    useEffect(() => {
        handleFetch();
    }, [])

    return (
        <div className='detailsContainer'>
            <Image src={Launch?.links.mission_patch_small} fluid />
            <div className='detailsTable'>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <td>Mission Name</td>
                            <td colSpan="3">{Launch?.mission_name}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td colSpan="3">{Launch?.launch_date_local} Local time</td>
                        </tr>
                        <tr>
                            <td>Details</td>
                            <td colSpan="3">{Launch?.details}</td>
                        </tr>
                        <tr>
                            <td>Rocket</td>
                            <td colSpan="3">Name: {Launch?.rocket.rocket_name} 🚀 Type: {Launch?.rocket.rocket_type}</td>
                        </tr>
                        <tr>
                            <td>Crew</td>
                            <td colSpan="3">{Launch?.crew ? Launch.crew : 'There was no crew on the board'}</td>
                        </tr>
                        <tr>
                            <td>Launch Site</td>
                            <td colSpan="3">{Launch?.launch_site.site_name_long}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button size="lg" variant="dark" onClick={() => history?.goBack()}>🚀Back</Button>
            </div>
        </div>

    );
}

export default DetailsPage;
