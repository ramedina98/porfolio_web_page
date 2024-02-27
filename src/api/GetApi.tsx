//import the getToken functions from the "getToken" module...
import getToken from "./getToken";

//I defined a generic function FetchData that takes a URL and returns a Promiseof type T
async function FetchData<T>(url: string): Promise<T> {
    try {
        //call the getToken function to ensure the presence of a valid access token
        const token = await getToken();

        //make a fetch request to the specific URL with the access token...
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', 
            },
        });

        //check if the response is successfully (status 200); 
        if (!response.ok) {
            //if not throw and error...
            throw new Error('Error fetching data');
        }

        //parse the response as a JSON and return the data...
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default FetchData;