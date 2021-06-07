import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import { API_URL } from '../Config';
import ListItem from './ListItem/ListItem';
import Heading from './Heading/Heading';
import './LandingPage.css';

const LandingPage = () => {
    const [Launch, setLaunch] = useState();
    const [activePage, setActivePage] = useState();

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
        handleFetch(pageNumber);
    }

    const handleFetch = (pageNumber) => {
        fetch(`${API_URL}?limit=${3}&offset=${pageNumber}`)
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

    console.log(Launch);

    return (
        <div>
            <Heading />

            {Launch?.map((launch) => (
                <ListItem launchInfo={launch} />
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
