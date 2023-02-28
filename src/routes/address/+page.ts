export const load = async (loadEvent: any) => {
    console.log("Load function called in page.ts");
    const { fetch } = loadEvent;
    const response = await fetch("api/postcodes");
    const postcodes = await response.json();
    const addressList = postcodes.map((postcode: any) => {
        return `${postcode.buildingName}, ${postcode.line1} ,${postcode.line2}, ${postcode.line3}, ${postcode.town}, ${postcode.country}, ${postcode.postcode}`;
    })

    return { addressList }
}