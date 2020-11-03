import axios from 'axios';

const axios = require('axios').default;

const apiKeyInventory = 'bL8gvedlapsuxSKgEMYaTh73oeHLsJvG';
const apiKeyLocator = 'pf4AIUWI6Wpq7mXEukizcPamMZgTC99n';

const UrlInventory = 'https://services-qa.walgreens.com/api/products/inventory/v2';
const UrlLocator = 'https://services-qa.walgreens.com/api/stores/search/v1';

const instance = axios.create({
  baseURL: 'https://services-qa.walgreens.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
axios.post(UrlLocator, {
    apiKey: apiKeyLocator,
    affId: 'storesapi',
    zip: getZipCode(),
    r: 10,
    s: 10,
    requestType: 'locator',
});