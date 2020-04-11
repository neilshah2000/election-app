import React, { useEffect, useState } from "react";
import { getElectionWinner } from '../../../../election.service.js';


export default function Query3(props) {
    const [winner, setWinner] = useState('');

    useEffect(() => {
        getElectionWinner().then((mWin) => {
            setWinner(mWin);
        });
    }, [])

    return (
        <div>
            <h3>Query 3 - Election Winner</h3>
            <h4>{winner.winner}</h4>
        </div>
    )
}