import React, { useEffect, useState, useRef } from 'react';
import Pagination from "react-js-pagination";
import { API_URL } from '../Config';
import ListItem from './ListItem/ListItem';
import Heading from './Heading/Heading';
import './LandingPage.css';
import { Row, Col, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { PageNumberContext } from '../context/context';

const LandingPage = () => {
    const pageNumberContext = useContext(PageNumberContext);
    const pageState = pageNumberContext.counterCount.state;

    const [Launch, setLaunch] = useState();
    const [activePage, setActivePage] = useState(1);

    // const handlePageChange = useRef(() => { })

    const handlePageChange = async (pageNumber) => {
        await handleFetch(pageNumber);

        pageNumberContext.counterDispatch({ type: 'UPDATE_PAGE', pageNumber })
        setActivePage(pageNumber);
    }

    const handleFetch = (pageNumber) => {
        return fetch(`${API_URL}?limit=${3}&offset=${pageNumber}`)
            .then(res => res.json())
            .then((result) => {
                setLaunch(result);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        setActivePage(pageState);
        handleFetch(pageState);
    }, [])

    return (
        <div>
            <Heading />

            <Container>
                <Row>
                    {Launch?.map((launch) => (
                        <Col lg={4}>
                            <ListItem key={launch.flight_number} launchInfo={launch} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className='pagination'>
                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={activePage}
                    itemsCountPerPage={1}
                    totalItemsCount={100}
                    pageRangeDisplayed={10}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default LandingPage;
