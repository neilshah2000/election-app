import React, { useState, useEffect } from "react";
import { getElectionRanking } from '../../../../election.service.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


export default function Query4(props) {
    const [ranking, setRanking] = useState(undefined)

    useEffect(() => {
        getElectionRanking().then((rank) => {
            setRanking(rank);
        });
    }, [])

    return (
        <div>
            <h3>Query 4 - Constituencies Won</h3>
            <List>
                { ranking && 
                        ranking.map((party) => <ListItem key={party.party}>{party.party} : {party.constituencyCount}</ListItem>)}
            </List>
        </div>
    )
}