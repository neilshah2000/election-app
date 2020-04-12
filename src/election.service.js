exports.listAll = () => {
    return fetch('/api/election', {
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
    return fetch('/api/election/winner/' + id, {
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
    return fetch('/api/election/contested/' + id, {
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
    return fetch('/api/election/won', {
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
    return fetch('/api/election/ranking', {
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
    return fetch('/api/election/partyLostDeposit/' + party, {
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
    return fetch('/api/election/lostDepositPairs', {
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