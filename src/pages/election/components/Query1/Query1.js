import React, { useState, useEffect } from "react";
import { getConstituencyWinner } from './../../../../election.service.js';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from 'react-select-virtualized';

// styles
import useStyles from "./styles";

export default function Query1(props) {
    const [selectedConstituency, setSelectedConstituency] = React.useState('');
    const [constWinner, setConstWinner] = React.useState(undefined)
    var classes = useStyles();

    const selectOptions = props.constituencies.map((myConst, index) => {
        return {
            value: myConst._id,
            label: myConst.area
        }
    })

    useEffect(() => {
        getConstituencyWinner(selectedConstituency.value).then((winner) => {
            setConstWinner(winner);
            console.log(winner);
        });
    }, [selectedConstituency])

    const handleChange = (selected) => {
        setSelectedConstituency(selected);
    };

    return (
        <div>
            <h3>Query 1 - Constituency Winner</h3>
                <InputLabel className={classes.label}>Constituency</InputLabel>
                <Select
                    options={selectOptions}
                    value={selectedConstituency}
                    onChange={handleChange}/>
            { constWinner && 
                <p>Winner: {constWinner.party}</p>}
        </div>
    )
}