const backEndUrl = 'http://3.82.50.130:3000';

exports.listAll = () => {
    return fetch(backEndUrl + '/api/election', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        console.log(response);
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}

exports.getConstituencyWinner = (aConst) => {
    return fetch(backEndUrl + '/api/election/winner/' + aConst._id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        console.log(response);
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}

exports.getConstituencyContestants = (aConst) => {
    return fetch(backEndUrl + '/api/election/contested/' + aConst._id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        console.log(response);
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}
