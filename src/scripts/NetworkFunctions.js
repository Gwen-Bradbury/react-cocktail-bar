export async function handleErrors(response) {
    if (
        response.ok === false ||
        response.status === 401 ||
        response.status === 403 ||
        response.status >= 500
    ) {
        const formattedResponse = await returnJsonOrRes(response);
        console.error(`formattedResponse`, formattedResponse)
        throw(formattedResponse)
    }
    return response;
}

export const returnJsonOrRes = async (data) => {
    // check to see if body is json and converts it if it needs to be converted
    const contentType = data.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        return data.json();
    }
    return data;
};

export const getData = async (requestType) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/${requestType}`
    try{
        const data = fetch(url)
        .then(res => handleErrors(res))
        .then((res) => res.json())
        return await data
    } catch(error) {
        console.log(`error`, error)
    }
}
