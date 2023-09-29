const truecallerjs = require('truecallerjs')


async function performTruecallerSearch() {
    const searchData = {
        number: "9912345678",
        countryCode: "IN",
        installationId: "a1i0j--iD9OouFnF2pVNEzRe9doqPgDWREC-IL4gexlXvw2_YTbRpW1fZ6z1B3-q",
    };

    try {
        const response = await truecallerjs.search(searchData);
        console.log(JSON.stringify(response.json()));

        // Additional response methods:
        // console.log(response.xml());
        // console.log(response.yaml());
        // console.log(response.json());

        // Example of available data from the response:
        // console.log(response.getName()); // "Sumith Emmadi"
        // console.log(response.getAlternateName()); // "sumith"
        // console.log(response.getAddresses()); // {....}
        // console.log(response.getEmailId()); // example@domain.com
        // console.log(response.getCountryDetails()); // {...}
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

performTruecallerSearch();