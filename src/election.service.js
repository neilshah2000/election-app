const backEndUrl = 'http://3.82.50.130:3000';

exports.listAll = () => {
    return fetch(backEndUrl + '/api/election', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}

exports.getConstituencyWinner = (id) => {
    return fetch(backEndUrl + '/api/election/winner/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}

exports.getConstituencyContestants = (id) => {
    return fetch(backEndUrl + '/api/election/contested/' + id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}

exports.getElectionWinner = () => {
    return fetch(backEndUrl + '/api/election/won', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}

exports.getElectionRanking = () => {
    return fetch(backEndUrl + '/api/election/ranking', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}

exports.partyLostDeposit = (party) => {
    return fetch(backEndUrl + '/api/election/partyLostDeposit/' + party, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}

exports.allLostDeposits = () => {
    return fetch(backEndUrl + '/api/election/lostDepositPairs', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json();
    }).catch((err) => {
        console.error(err)
    })
}