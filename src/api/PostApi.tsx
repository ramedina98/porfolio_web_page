//import the getToken function from the "getToken" module...
import getToken from "./getToken";

//I defined a function...
async function PostApi<T>(url: string, data: any): Promise<T> {
    try{
        //call the getToken fucntion to ensure the presence of a valid access token...
        const token = await getToken(); 

        //make a fetch request to the specific URL...
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', 
            }, 
            body: JSON. stringify(data),
        }); 

        //verify if the response is ok or not...
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const success = await response.json();

        //return the success message...
        return success; 

    } catch(error: any){
        console.error('Error:', error.message);
        throw error;
    }
}

export default PostApi;