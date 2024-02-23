// getToken.tsx
// Define a function named getToken that retrieves or generates an access token
const getToken = async (): Promise<string> => {
    // Check if a token already exists in cookies
    const existingToken = getCookie('accessToken');

    // If a token exists, return it without making a new request
    if (existingToken) {
        return existingToken;
    }

    // If no token exists, make a request to obtain a new one
    const apiLogin = import.meta.env.VITE_REACT_APP_API_URL_LOGIN || '';
    //we need the apiKey...
    const key = import.meta.env.VITE_REACT_APP_API_KEY || '';
    
    const response = await fetch(apiLogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: key,
        }),
    });

    // Check if the request was successful (HTTP status code 2xx)
    if (response.ok) {
        // Parse the JSON data from the response
        const data = await response.json();
        const newToken = data.token;
        
        // Store the new token in a cookie with an expiration of 1 days
        setCookie('accessToken', newToken, { expires: 1 });

        // Return the new token
        return newToken;
    } else {
        // If the request fails, throw an error
        throw new Error('Authentication failed');
    }
};

// Utility function to get the value of a cookie
const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
};

// Utility function to set a cookie
const setCookie = (name: string, value: string, options: { expires?: number }): void => {
    // Set the cookie with an optional expiration date
    const expires = options.expires ? `; expires=${new Date(Date.now() + options.expires * 864e5).toUTCString()}` : '';
    document.cookie = `${name}=${value}${expires}; path=/`;
};

export default getToken;