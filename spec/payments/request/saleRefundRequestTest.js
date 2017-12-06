// This class was generated on Tue, 19 Sep 2017 17:11:32 UTC by version 0.1 of Braintree SDK Generator
// saleRefundRequestTest.js
// DO NOT EDIT
// @type request
// @json {"Name":"sale.refund","Description":"Refunds a sale, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an `amount` object in the JSON request body.","QueryParameters":[],"HeaderParameters":[],"FormParameters":[],"PathParameters":[{"Type":"string","VariableName":"sale_id","Description":"The ID of the sale transaction to refund.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}],"RequestType":{"Type":"Refund Request","VariableName":"body","Description":"A refund request.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Amount","VariableName":"amount","Description":"The payment amount, with break-ups.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"Amount details","VariableName":"details","Description":"The additional details about the payment amount.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"gift_wrap","Description":"The gift wrap fee.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"handling_fee","Description":"The handling fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"insurance","Description":"The insurance fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping","Description":"The shipping fee. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping_discount","Description":"The shipping fee discount. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subtotal","Description":"The subtotal amount for the items. If the request includes line items, this property is **required**. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"tax","Description":"The tax. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"total","Description":"The total amount charged to the payee by the payer. For refunds, represents the amount that the payee refunds to the original payer. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"description","Description":"The refund description. Maximum length is 255 single-byte alphanumeric characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"invoice_number","Description":"The invoice number that is used to track this payment. Maximum length is 127 single-byte alphanumeric characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Item","VariableName":"items","Description":"List of items.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Payer Info","VariableName":"payer_info","Description":"The payer information.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Address","VariableName":"billing_address","Description":"The billing address in a payment. Can be extended for shipping address.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"city","Description":"The city name. Maximum length is 50 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"country_code","Description":"The [two-character country code](https://developer.paypal.com/docs/classic/api/country_codes/).","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"line1","Description":"The first line of the address. For example, number, street, and so on. Maximum length is 100 characters.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"line2","Description":"The second line of the address. For example, suite, apartment number, and so on. Maximum length is 100 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"normalization_status","Description":"The address normalization status. Returned only for payers from Brazil.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"phone","Description":"The phone number, in [E.123 format](https://www.itu.int/rec/T-REC-E.123-200102-I/en). Maximum length is 50 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"postal_code","Description":"The zip code or equivalent. Typically required for countries that have them. Maximum length is 20 characters.**Required in certain countries.**","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"state","Description":"The two-letter code for US states or the equivalent for other countries. Maximum length is 100 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"status","Description":"The address status.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"type","Description":"The type of address. For example, `HOME_OR_WORK`, `GIFT`, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"birth_date","Description":"The birth date of the payer, in [Internet date format](http://tools.ietf.org/html/rfc3339#section-5.6). For example, `1990-04-12`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"country_code","Description":"The payer's [two-character IS0-3166-1 country code](https://developer.paypal.com/docs/classic/api/country_codes/).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"email","Description":"The payer's email address. Maximum length is 127 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"first_name","Description":"The payer's first name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"last_name","Description":"The payer's last name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"middle_name","Description":"The payer's middle name.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"payer_id","Description":"The PayPal-assigned encrypted payer ID.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"phone","Description":"The payer's phone number. Maximum length is 20 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"phone_type","Description":"The phone type.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"salutation","Description":"The payer's salutation.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Shipping Address","VariableName":"shipping_address","Description":"The extended address, which is used as the shipping address in a payment.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"city","Description":"The city name. Maximum length is 50 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"country_code","Description":"The [two-character country code](https://developer.paypal.com/docs/classic/api/country_codes/).","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"line1","Description":"The first line of the address. For example, number, street, and so on. Maximum length is 100 characters.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"line2","Description":"The second line of the address. For example, suite, apartment number, and so on. Maximum length is 100 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"normalization_status","Description":"The address normalization status. Returned only for payers from Brazil.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"phone","Description":"The phone number, in [E.123 format](https://www.itu.int/rec/T-REC-E.123-200102-I/en). Maximum length is 50 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"postal_code","Description":"The zip code or equivalent. Typically required for countries that have them. Maximum length is 20 characters.**Required in certain countries.**","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"recipient_name","Description":"The name of the recipient at this address.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"state","Description":"The two-letter code for US states or the equivalent for other countries. Maximum length is 100 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"status","Description":"The address status.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"type","Description":"The type of address. For example, `HOME_OR_WORK`, `GIFT`, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"suffix","Description":"The payer's suffix.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"tax_id","Description":"The payer’s tax ID. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"tax_id_type","Description":"The payer’s tax ID type. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"reason","Description":"The refund reason description.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"boolean","VariableName":"refund_advice","Description":"Indicates whether store credit was already given to the payer.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"refund_source","Description":"The PayPal funding source type, such as balance or eCheck, to use for auto refund.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Name and Value Pair","VariableName":"supplementary_data","Description":"Set of optional data","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null}]},"ResponseType":{"Type":"Detailed Refund","VariableName":"","Description":"A refund transaction that is returned by `GET /refund`.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"Amount","VariableName":"amount","Description":"The payment amount, with break-ups.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"Amount details","VariableName":"details","Description":"The additional details about the payment amount.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"gift_wrap","Description":"The gift wrap fee.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"handling_fee","Description":"The handling fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"insurance","Description":"The insurance fee. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping","Description":"The shipping fee. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"shipping_discount","Description":"The shipping fee discount. Supported for the PayPal payment method only.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"subtotal","Description":"The subtotal amount for the items. If the request includes line items, this property is **required**. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"tax","Description":"The tax. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},{"Type":"string","VariableName":"total","Description":"The total amount charged to the payee by the payer. For refunds, represents the amount that the payee refunds to the original payer. Maximum length is 10 characters. Supports two decimal places.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"capture_id","Description":"The ID of the sale transaction being refunded.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"create_time","Description":"The date and time when the refund was created, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"custom","Description":"A free-form field for the use by clients.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"description","Description":"The refund description.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"id","Description":"The ID of the refund transaction. Maximum length is 17 characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"invoice_number","Description":"Your own invoice or tracking ID number. Maximum length is 127 single-byte alphanumeric characters.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Link Description Object","VariableName":"links","Description":"","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"parent_payment","Description":"The ID of the payment on which this transaction is based.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"reason","Description":"The reason that the transaction is being refunded.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"reason_code","Description":"The reason code for the pending refund state.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Currency","VariableName":"refund_from_received_amount","Description":"Base currency object for all financial value-related fields. For example, balance, payment due, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"The amount, up to \u003ci\u003eN\u003c/i\u003e digits after the decimal separator, as defined in [ISO 4217](https://developer.paypal.com/docs/classic/api/currency_codes/) for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"Currency","VariableName":"refund_from_transaction_fee","Description":"Base currency object for all financial value-related fields. For example, balance, payment due, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"The amount, up to \u003ci\u003eN\u003c/i\u003e digits after the decimal separator, as defined in [ISO 4217](https://developer.paypal.com/docs/classic/api/currency_codes/) for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"refund_funding_type","Description":"Details Indicate whether Refund amount is funded by Payee or other funding accounts","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"refund_reason_code","Description":"Paypal assigned reason codes for the refund","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"External Funding","VariableName":"refund_to_external_funding","Description":"A list of external funding instruments that were refunded by the refund call. Each `external_funding` unit must have a unique reference ID.","ArrayType":6,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Currency","VariableName":"refund_to_msb","Description":"Base currency object for all financial value-related fields. For example, balance, payment due, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"The amount, up to \u003ci\u003eN\u003c/i\u003e digits after the decimal separator, as defined in [ISO 4217](https://developer.paypal.com/docs/classic/api/currency_codes/) for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"Currency","VariableName":"refund_to_payer","Description":"Base currency object for all financial value-related fields. For example, balance, payment due, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"The amount, up to \u003ci\u003eN\u003c/i\u003e digits after the decimal separator, as defined in [ISO 4217](https://developer.paypal.com/docs/classic/api/currency_codes/) for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"sale_id","Description":"The ID of the sale transaction being refunded. ","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"string","VariableName":"state","Description":"The state of the refund.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null},{"Type":"Currency","VariableName":"total_refunded_amount","Description":"Base currency object for all financial value-related fields. For example, balance, payment due, and so on.","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":[{"Type":"string","VariableName":"currency","Description":"The [three-character ISO-4217 currency code](https://developer.paypal.com/docs/classic/api/currency_codes/). PayPal does not support all currencies.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null},{"Type":"string","VariableName":"value","Description":"The amount, up to \u003ci\u003eN\u003c/i\u003e digits after the decimal separator, as defined in [ISO 4217](https://developer.paypal.com/docs/classic/api/currency_codes/) for the appropriate currency code.","ArrayType":0,"ReadOnly":false,"Required":true,"Properties":null}]},{"Type":"string","VariableName":"update_time","Description":"The date and time when the resource was last updated, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).","ArrayType":0,"ReadOnly":false,"Required":false,"Properties":null}]},"ContentType":"application/json","HttpMethod":"POST","Path":"/v1/payments/sale/{sale_id}/refund","ExpectedStatusCode":200,"FileSuffix":"Test","UseFakeInstance":true}

'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const SaleRefundRequest = require('../../../lib/paypalrestsdk').SaleRefundRequest;
const PaymentCreate = require('./paymentCreateRequestTest').PaymentCreate;

function buildRequestBody() {
  return {};
}

function saleRefund(saleId) {
  let request = new SaleRefundRequest(saleId);
  request.requestBody(buildRequestBody());
  return client.execute(request);
}

describe('SaleRefundRequest', function () {
  it('works as expected', function () {
    return PaymentCreate('sale').then((createResponse) => {
      let saleId = createResponse.result.transactions[0].related_resources[0].sale.id;

      saleRefund(saleId).then((r) => {
        chai.assert.equal(r.statusCode, 201);
        chai.assert.isNotNull(r.result);
      });
    });
  });
});

module.exports = {
  SaleRefund: saleRefund
}
