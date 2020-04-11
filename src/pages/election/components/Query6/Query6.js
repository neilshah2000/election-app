import React, { useState, useEffect } from "react";
import { allLostDeposits } from '../../../../election.service.js';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

// styles
import useStyles from "./styles";

export default function Query6(props) {
    const [lostDeposits, setLostDeposits] = useState([])
    var classes = useStyles();

    useEffect(() => {
        allLostDeposits().then((ld) => {
            setLostDeposits(ld);
        });
    }, [])

    function renderRow(props) {
        const { index, style } = props;
        try{
            return (
                <ListItem button style={style} key={index}>
                    <ListItemText className={classes.item}
                        primary={lostDeposits[index].constituency}
                        secondary={lostDeposits[index].lostDepositParty} />
                </ListItem>
            );
        } catch(err){
            console.error(err);
            return (
                <ListItem button style={style} key={index}>
                    <ListItemText className={classes.item}
                        primary={`Error at index ${index}`}/>
                </ListItem>
            );
        }
    }
    
    renderRow.propTypes = {
        index: PropTypes.number.isRequired,
        style: PropTypes.object.isRequired,
    };

    return (
        <div>
            <h3>Query 6 - All Lost Deposits</h3>
            <div className={classes.root}>
            { lostDeposits.length > 0 && 
                <FixedSizeList height={400} width={500} itemSize={60} itemCount={lostDeposits.length}>
                    {renderRow}
                </FixedSizeList>}
            </div>
        </div>
    )
}