import React, { useEffect, useState } from "react";
import { getElectionWinner } from '../../../../election.service.js';

// styles
import useStyles from "./styles";

export default function Query3(props) {
    const [winner, setWinner] = React.useState('');
    var classes = useStyles();

    useEffect(() => {
        getElectionWinner().then((mWin) => {
            setWinner(mWin);
            console.log(mWin);
        });
    }, [])

    return (
        <div>
            <h3>Query 3 - Election Winner</h3>
            <h4>{winner.winner}</h4>
        </div>
    )
}