import React, { useState, useEffect } from "react";
import { getConstituencyContestants } from './../../../../election.service.js';
import Select from 'react-select-virtualized';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// styles
import useStyles from "./styles";

export default function Query2(props) {
    const [selectedConstituency, setSelectedConstituency] = useState('');
    const [constContestants, setConstContestants] = useState(undefined)
    var classes = useStyles();

    useEffect(() => {
        getConstituencyContestants(selectedConstituency.value).then((contestants) => {
            setConstContestants(contestants);
            console.log(contestants);
        });
    }, [selectedConstituency])

    const selectOptions = props.constituencies.map((myConst, index) => {
        return {
            value: myConst._id,
            label: myConst.area
        }
    })

    const handleChange = (selected) => {
        setSelectedConstituency(selected);
    };

    return (
        <div>
            <h3>Query 2 - Party Votes in Constituency</h3>
                <InputLabel className={classes.label}>Constituency</InputLabel>
                <Select
                    options={selectOptions}
                    value={selectedConstituency}
                    onChange={handleChange}/>
            <List>
                { constContestants && 
                    constContestants.map((contests) => <ListItem key={contests.ukvotes}>{contests.party} : {contests.ukvotes}</ListItem>)}
            </List>
        </div>
    )
}