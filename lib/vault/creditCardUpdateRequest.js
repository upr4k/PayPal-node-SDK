// This class was generated on Thu, 18 Jan 2018 17:23:56 CST by version 0.1.0-dev+01638e of Braintree SDK Generator
// creditCardUpdateRequest.js
// @version 0.1.0-dev+01638e
// @type request
// @data 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
// DO NOT EDIT
'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Updates information for a vaulted credit card, by ID. In the JSON request body, specify the values to update.
 **/

class CreditCardUpdateRequest {

  constructor(creditCardId) {
    this.path = '/v1/vault/credit-cards/{credit_card_id}?';
    this.path = this.path.replace('{credit_card_id}', querystring.escape(creditCardId));
    this.verb = 'PATCH';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  requestBody(patchRequest) {
    this.body = patchRequest;
    return this;
  }
}

module.exports = {CreditCardUpdateRequest: CreditCardUpdateRequest};