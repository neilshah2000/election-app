import React, { useState, useEffect } from "react";
import Query1 from './components/Query1/Query1'
import Query2 from './components/Query2/Query2'
import { listAll } from './../../election.service.js';

export default function Election(props) {
    const [constituencies, setConstituencies] = useState([]);

    useEffect(() => {
        listAll().then((data) => {
            setConstituencies(data);
            console.log(data);
        });
    }, [])

    return (
        <div>
            <h1>Election Page</h1>
            <Query1 constituencies={constituencies}></Query1>
            <Query2 constituencies={constituencies}></Query2>
        </div>
    )
}