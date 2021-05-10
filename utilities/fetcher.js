const fetch = require('node-fetch');

const stringIt = payload => {
    return JSON.stringify( payload )
};

const fetchOptions = {
    GET: { method: 'GET' },
    POST: { method: 'POST'},
    PUT: { method: 'PUT' },
    DELETE: { method: 'DELETE' },
    PATCH: { method: 'PATCH'}
};

const fetcher = async function( url, httpVerb = 'GET', payload, responseType = 'json' ){

    if( payload ){
        fetchOptions[httpVerb]['body'] = stringIt( payload );
    }

    console.log( url," fetchOptions = ", fetchOptions[httpVerb], " and payload = ", payload );

    return fetch( url, fetchOptions[httpVerb] )
        .then( res => {
            if (responseType === 'text') {
                return res.text();
            } else {
                return res.json();
            }
        })
        .catch( err => {
            console.log("fetch error = ", err);
            return err })
        .then( parsedRes => {
            console.log('fetch success ', url);
            if( !parsedRes ){
                return;
            }
            return parsedRes;

        });

};

async function getHtml(url){
    const body = await fetcher(url, 'GET');
    return body;
}

module.exports = {
    fetcher,
    getHtml
};
