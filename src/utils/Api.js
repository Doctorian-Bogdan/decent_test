class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(`Ошибка: ${response.status}`);
  }

  getAllCountries() {
    return fetch(`${this._baseUrl}/all`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  getCountry(countryName) {
    return fetch(`${this._baseUrl}/name/${countryName}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://restcountries.com/v3.1',
});

export default api;
