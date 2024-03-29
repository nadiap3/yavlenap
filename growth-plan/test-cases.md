### ToDo

- update selectors to try to get around using **.first()**
- improve waits

## E2E & Component Tests

### Happy Path Flow

_test location : tests\workflows\happypath.spec.ts_

1. Search for apartment and connect with broker
   1. start from homepage yavlena.com
   2. in the dropdown filter sections, click and enter the following:
      търся да : закупя
      тип имот : 1-стаен
      в : София
   3. click search
   4. ASSERT:
      - verify that url has correct query params: https://www.yavlena.com/properties/sales/sofia/sofia/?ptype=OneBedroomApartment&view=Hybrid
      - verify that map and list are visible
   5. filter by price: click Цена dropdown, click max, and select 500,000
   6. verify that all results on the page have a price of less than 500,000
   7. click on an option from the list mode
      - verify that popup has image carousel
      - verify that broker section is visible
   8. click connect with broker
      - verify that popup loads
      - verify that broker name and phone number are visible
      - verify that the property id in the pre-written message is correct

### Home Page

_yavlenap\yavlenap\tests\homepage.spec.ts_

1. Selected filter carries over to properties page

   - click property type dropdown
   - select a property type
   - click Search
   - on properties page, click the property type dropdown
   - verify that the previously selected property type is selected

   - Scroll down to Featured properties carousel
   - Verify that ID matches the anchor url
   - Verify that CTA button is available
   - click connect with broker button
   - in popup

     - verify correct property name, id, location, price are the same
     - verify that send button is visible and active

   - Check if Right arrow exists
     - If yes -> Clcik it and repeat the process 3 times

2. Switch language to English

   - verify default language is Bulgarian
   - click language selector
   - click English
   - verify language on the page has changed to English

3. Switch language to Russian
   Change language button - verify default language is Bulgarian - click language selector - click Russian - verify language on the page has changed to Russian

### Service Page - uslugi

1. verify that online message button is visible and active
2. verify that clicking online message button loads popup
3. inside popup, click send button
   verify that popup requires fields to be filled before sending

### Properties Search Page

Map and list display toggle works - select list view button - verify that property results are displayed in the list view - verify that map is not visible

    Filters
        - click property type Filter
        - select all zhileshtni imoti
        - verify that url contains all of the selected types
        (extract string, split into array, check against array of elements)

### Brokers Page

1. check that all brokers have needed information

   - load all brokers
   - get their data in an array
   - verify that each broker has name, location, properties, phone numbers

2. filtering by office
   - select office filtering
   - select an office
   - verify that all the brokers that load have that office location listed
