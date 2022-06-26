const API = "https://fast-ravine-16741.herokuapp.com"

async function fetchAPI(options = {
    method: "GET",
}) {
    try {
        const response = await fetch(options.url, {
            method: options.method,
            headers: {
                "Content-type": "application/json",
                ...options.headers
            }
        })

        const result = await response.json();

        if (response.status >= 300) throw new Error(result);

        return result
    } catch (err) {
        alert(err)
    }

}



async function loginRequest(credentials) {
    const result = await fetchAPI({
        url: `${API}/api/auth`,
        method: "POST",
        body: credentials
    })
    return result
}

async function registerRequest(credentials) {
    const result = await fetchAPI({
        url: `${API}/api/users`,
        method: "POST",
        body: credentials
    })
    return result
}