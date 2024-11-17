/*
Sveltekit using fetch for making request and getting data
This load function --> special version of fetch, which is invoke directly in the server side
Without making http request, making it a little bit faster
*/

export async function load({ fetch }) {
    try {
        const productsResponse = await fetch("/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        if (!productsResponse.ok) {
            throw new Error(`Error fetching products: ${productsResponse.statusText}`);
        }

        const products = await productsResponse.json();

        // Return the data in the expected format
        return products;
        
    } catch (error) {
        console.error("Error loading data:", error);
        // Optionally, you can handle the error differently if needed
        throw error;
    }
}


