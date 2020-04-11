import React, { useState, useEffect } from "react";
import Query1 from './components/Query1/Query1';
import Query2 from './components/Query2/Query2';
import Query3 from './components/Query3/Query3';
import Query4 from './components/Query4/Query4';
import Query5 from './components/Query5/Query5';
import Query6 from './components/Query6/Query6';
import { listAll } from './../../election.service.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

// styles
import useStyles from "./styles";

export default function Election(props) {
    const [constituencies, setConstituencies] = useState([]);
    var classes = useStyles();

    useEffect(() => {
        listAll().then((data) => {
            setConstituencies(data);
        });
    }, [])

    return (
        <div>
            <h1>Election Page</h1>
            { constituencies.length > 0 &&
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Query1 constituencies={constituencies}></Query1>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Query2 constituencies={constituencies}></Query2>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Box display="flex" p={1} bgcolor="background.paper">
                            <Box p={1} flexGrow={1}>
                                <Query3 constituencies={constituencies}></Query3>
                            </Box>
                            <Box p={1} flexGrow={1}>
                                <Query4 constituencies={constituencies}></Query4>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Query5 constituencies={constituencies}></Query5>
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Query6 constituencies={constituencies}></Query6>
                    </CardContent>
                </Card>
            </div>}
        </div>
    )
}