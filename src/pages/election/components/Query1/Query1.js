import React, { useState, useEffect } from "react";
import { getConstituencyWinner } from './../../../../election.service.js';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

// styles
import useStyles from "./styles";
import { useTheme } from "@material-ui/styles";

export default function Query1(props) {
    const [selectedConstituency, setSelectedConstituency] = React.useState('');
    const [constWinner, setConstWinner] = React.useState(undefined)
    var classes = useStyles();
    var theme = useTheme();

    useEffect(() => {
        getConstituencyWinner(selectedConstituency).then((winner) => {
            setConstWinner(winner);
            console.log(winner);
        });
    }, [selectedConstituency])

    const handleChange = (event) => {
        setSelectedConstituency(event.target.value);
    };

    return (
        <div>
            <h3>Query 1</h3>
            <FormControl className={classes.formControl}>
                <InputLabel id="const-label">Constituency</InputLabel>
                <Select
                    labelId="const-label"
                    id="const-select"
                    value={selectedConstituency}
                    onChange={handleChange}>
                    {props.constituencies.map(aConst => <MenuItem key={aConst._id} value={aConst}>{aConst.area}</MenuItem>)}
                </Select>
            </FormControl>
            { constWinner && 
                <p>Winner: {constWinner.party}</p>
            }
        </div>
    )
}