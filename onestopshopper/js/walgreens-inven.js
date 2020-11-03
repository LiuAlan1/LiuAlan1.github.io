import axios from 'axios';

const axios = require('axios').default;

const apiKeyInventory = 'bL8gvedlapsuxSKgEMYaTh73oeHLsJvG';
const UrlInventory = 'https://services-qa.walgreens.com/api/products/inventory/v2';

const instance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

axios.post(Url, {
    apiKey: apiKeyInventory,
    affId: 'storesapi',
    store: '1120',
    planograms: '07385209652'
});