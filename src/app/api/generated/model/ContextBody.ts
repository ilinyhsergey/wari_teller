/**
 * Wari teller API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ContextBody {
    airtimeContext?: models.AirtimeContext;

    billPaymentContext?: models.BillPaymentContext;

    cashAdvanceContext?: models.CashAdvanceContext;

    receiveMoneyContext?: models.ReceiveMoneyContext;

    sendMoneyContext?: models.SendMoneyContext;

}