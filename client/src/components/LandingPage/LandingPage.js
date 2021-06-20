import React, { useEffect, useState } from 'react';
import Pagination from "react-js-pagination";
import { API_URL } from '../Config';
import ListItem from './ListItem/ListItem';
import Heading from './Heading/Heading';
import './LandingPage.css';

const LandingPage = () => {
    const [Launch, setLaunch] = useState();
    const [activePage, setActivePage] = useState(1);

    const handlePageChange = async (pageNumber) => {
        await handleFetch(pageNumber);
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
        handleFetch();
    }, [])

    return (
        <div>
            <Heading />

            {Launch?.map((launch) => (
                <ListItem key={launch.flight_number} launchInfo={launch} />
            ))}

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
