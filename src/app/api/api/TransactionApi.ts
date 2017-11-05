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

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TransactionApi {

    protected basePath = 'http://localhost/teller_api/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * [Implemented] permits to teller agent to simulate money transfer to a selected destination country in order to know paid fees and amount received by the beneficiary.
     * @summary [Implemented] permits to teller agent to simulate money transfer to a selected destination country in order to know paid fees and amount received by the beneficiary.
     * @param sessionID 
     * @param countryId 
     * @param transferType 
     * @param amountType 
     * @param amount 
     */
    public calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1(sessionID: number, countryId: number, transferType: string, amountType: string, amount: number, extraHttpRequestParams?: any): Observable<models.CalculatorResponse> {
        return this.calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1WithHttpInfo(sessionID, countryId, transferType, amountType, amount, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * [Implemented] find a customer's bill subscriber id or bill number etc...
     * @summary [Implemented] find a customer's bill subscriber id or bill number etc...
     * @param body 
     */
    public findCustomerBillPost1(body?: models.BillRequestBody, extraHttpRequestParams?: any): Observable<Array<models.BillResponse>> {
        return this.findCustomerBillPost1WithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * [Implemented] find a transaction to pay by send code
     * @summary [Implemented] find a transaction to pay by send code
     * @param body 
     */
    public findTransactionBySendCodePost1(body?: models.SendCodeBody, extraHttpRequestParams?: any): Observable<models.SearchTransactionResponse> {
        return this.findTransactionBySendCodePost1WithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * to pull a receipt of any kind of transaction
     * @summary to pull a receipt of any kind of transaction
     * @param body 
     */
    public getTransactionReceiptPost1(body?: models.TransactionBody, extraHttpRequestParams?: any): Observable<models.TransactionReceipt> {
        return this.getTransactionReceiptPost1WithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * [Implemented] process any kind of transaction
     * @summary [Implemented] process any kind of transaction
     * @param body 
     */
    public processTransactionPost1(body?: models.TransactionRequestBody, extraHttpRequestParams?: any): Observable<models.TransactionResponse> {
        return this.processTransactionPost1WithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * validate any kind of transaction.
     * @summary validate any kind of transaction.
     * @param body 
     */
    public validateTransactionPost1(body?: models.TransactionBody, extraHttpRequestParams?: any): Observable<models.TransactionReceipt> {
        return this.validateTransactionPost1WithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * [Implemented] permits to teller agent to simulate money transfer to a selected destination country in order to know paid fees and amount received by the beneficiary.
     * [Implemented] permits to teller agent to simulate money transfer to a selected destination country in order to know paid fees and amount received by the beneficiary.
     * @param sessionID 
     * @param countryId 
     * @param transferType 
     * @param amountType 
     * @param amount 
     */
    public calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1WithHttpInfo(sessionID: number, countryId: number, transferType: string, amountType: string, amount: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/transaction/calculateTransfer/${sessionID}/${countryId}/${transferType}/${amountType}/${amount}'
                    .replace('${' + 'sessionID' + '}', String(sessionID))
                    .replace('${' + 'countryId' + '}', String(countryId))
                    .replace('${' + 'transferType' + '}', String(transferType))
                    .replace('${' + 'amountType' + '}', String(amountType))
                    .replace('${' + 'amount' + '}', String(amount));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1.');
        }
        // verify required parameter 'countryId' is not null or undefined
        if (countryId === null || countryId === undefined) {
            throw new Error('Required parameter countryId was null or undefined when calling calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1.');
        }
        // verify required parameter 'transferType' is not null or undefined
        if (transferType === null || transferType === undefined) {
            throw new Error('Required parameter transferType was null or undefined when calling calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1.');
        }
        // verify required parameter 'amountType' is not null or undefined
        if (amountType === null || amountType === undefined) {
            throw new Error('Required parameter amountType was null or undefined when calling calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1.');
        }
        // verify required parameter 'amount' is not null or undefined
        if (amount === null || amount === undefined) {
            throw new Error('Required parameter amount was null or undefined when calling calculateTransferSessionIDCountryIdTransferTypeAmountTypeAmountGet1.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * [Implemented] find a customer&#39;s bill subscriber id or bill number etc...
     * [Implemented] find a customer&#39;s bill subscriber id or bill number etc...
     * @param body 
     */
    public findCustomerBillPost1WithHttpInfo(body?: models.BillRequestBody, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/transaction/findCustomerBill';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * [Implemented] find a transaction to pay by send code
     * [Implemented] find a transaction to pay by send code
     * @param body 
     */
    public findTransactionBySendCodePost1WithHttpInfo(body?: models.SendCodeBody, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/transaction/findTransactionBySendCode';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * to pull a receipt of any kind of transaction
     * to pull a receipt of any kind of transaction
     * @param body 
     */
    public getTransactionReceiptPost1WithHttpInfo(body?: models.TransactionBody, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/transaction/getTransactionReceipt';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * [Implemented] process any kind of transaction
     * [Implemented] process any kind of transaction
     * @param body 
     */
    public processTransactionPost1WithHttpInfo(body?: models.TransactionRequestBody, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/transaction/processTransaction';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * validate any kind of transaction.
     * validate any kind of transaction.
     * @param body 
     */
    public validateTransactionPost1WithHttpInfo(body?: models.TransactionBody, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/transaction/validateTransaction';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

        // authentication (bearer) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
