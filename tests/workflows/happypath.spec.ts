//TODO:
// add new selectors and methods in corresponding page objects or utils
// 1. Search for apartment and connect with broker
//     1. start from homepage yavlena.com
//     2. in the dropdown filter sections, click and enter the following:
//         търся да : закупя
//         тип имот : 1-стаен
//         в : София
//     3. click search
//     4. ASSERT:
//         - verify that url has correct query params: https://www.yavlena.com/properties/sales/sofia/sofia/?ptype=OneBedroomApartment&view=Hybrid
//         - verify that map and list are visible
//     5. filter by price: click Цена dropdown, click max, and select 500,000
//     6. verify that all results on the page have a price of less than 500,000
//     7. click on an option from the list mode
//         - verify that popup has image carousel
//         - verify that broker section is visible
//     8. click connect with broker
//         - verify that popup loads
//         - verify that broker name and phone number are visible
//         - verify that the property id in the pre-written message is correct
