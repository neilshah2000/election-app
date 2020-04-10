const backEndUrl = 'http://3.82.50.130:3000';

const listAll = (journal) => {
    return fetch(backEndUrl + '/api/election', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(journal)
    }).then((response) => {
        console.log(response);
        return response.json();
    }).catch((err) => {
        console.log(err)
    })
}