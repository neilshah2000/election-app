import React, { useState, useEffect } from "react";
import { partyLostDeposit } from '../../../../election.service.js';
import Select from 'react-select-virtualized';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// styles
import useStyles from "./styles";

export default function Query5(props) {
    const [selectedParty, setSelectedParty] = useState('');
    const [lostDeposits, setLostDeposits] = useState([]);
    var classes = useStyles();
    const selectOptions = [
        { value: 'con', label: 'Conservative'},
        { value: 'lab', label: 'Labour'},
        { value: 'lib', label: 'Liberal Democrats'},
        { value: 'sdp', label: 'Social Democrats'},
        { value: 'ind', label: 'Independant'},
        { value: 'snp', label: 'Scottish Nationalist Party'},
        { value: 'eco', label: 'Eco Warriors'},
    ]

    useEffect(() => {
        partyLostDeposit(selectedParty.value).then((ld) => {
            setLostDeposits(ld);
            console.log(ld);
        });
    }, [selectedParty])

    const handleChange = (selected) => {
        setSelectedParty(selected);
    };

    return (
        <div>
            <h3>Query 5 - Parties Lost Deposits</h3>
                <InputLabel className={classes.label}>Party</InputLabel>
                <Select
                    options={selectOptions}
                    value={selectedParty}
                    onChange={handleChange}/>
            <List>
                { lostDeposits.length > 0 && 
                    lostDeposits.map((constituency) => <ListItem key={constituency.area}>{constituency.area}</ListItem>)}
            </List>
        </div>
    )
}