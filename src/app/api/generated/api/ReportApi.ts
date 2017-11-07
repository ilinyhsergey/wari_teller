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
import { HttpService } from '../../http.service';


@Injectable()
export class ReportApi {

    protected basePath = 'http://localhost/teller_api/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: HttpService, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * provides pending transactions to validate
     * @summary provides pending transactions to validate
     * @param sessionID 
     * @param transactionId 
     * @param status 
     */
    public findPendingTransactionsSessionIDGet1(sessionID: number, transactionId?: number, status?: string, extraHttpRequestParams?: any): Observable<Array<models.PendingTransaction>> {
        return this.findPendingTransactionsSessionIDGet1WithHttpInfo(sessionID, transactionId, status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * provides the status of an airtime transactions
     * @summary provides the status of an airtime transactions
     * @param sessionID 
     * @param transactionId 
     */
    public getAirtimeStatusSessionIDTransactionIdGet1(sessionID: number, transactionId: number, extraHttpRequestParams?: any): Observable<models.AirTimeStatus> {
        return this.getAirtimeStatusSessionIDTransactionIdGet1WithHttpInfo(sessionID, transactionId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * get all the reports between two date and report type
     * @summary get all the reports between two date and report type
     * @param sessionID 
     * @param reportType 
     * @param reportSubType 
     * @param begin 
     * @param end 
     */
    public getReportsSessionIDReportTypeReportSubTypeBeginEndGet1(sessionID: number, reportType: string, reportSubType: string, begin: string, end: string, extraHttpRequestParams?: any): Observable<Array<models.Report>> {
        return this.getReportsSessionIDReportTypeReportSubTypeBeginEndGet1WithHttpInfo(sessionID, reportType, reportSubType, begin, end, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * get all the reports between two date and report type
     * @summary get all the reports between two date and report type
     * @param sessionID 
     * @param begin 
     * @param end 
     */
    public getTransactionListSessionIDBeginEndGet1(sessionID: number, begin: string, end: string, extraHttpRequestParams?: any): Observable<Array<models.TransactionListResponse>> {
        return this.getTransactionListSessionIDBeginEndGet1WithHttpInfo(sessionID, begin, end, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * provides pending transactions to validate
     * provides pending transactions to validate
     * @param sessionID 
     * @param transactionId 
     * @param status 
     */
    public findPendingTransactionsSessionIDGet1WithHttpInfo(sessionID: number, transactionId?: number, status?: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/report/findPendingTransactions/${sessionID}'
                    .replace('${' + 'sessionID' + '}', String(sessionID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling findPendingTransactionsSessionIDGet1.');
        }
        if (transactionId !== undefined) {
            queryParameters.set('transactionId', <any>transactionId);
        }

        if (status !== undefined) {
            queryParameters.set('status', <any>status);
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
     * provides the status of an airtime transactions
     * provides the status of an airtime transactions
     * @param sessionID 
     * @param transactionId 
     */
    public getAirtimeStatusSessionIDTransactionIdGet1WithHttpInfo(sessionID: number, transactionId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/report/getAirtimeStatus/${sessionID}/${transactionId}'
                    .replace('${' + 'sessionID' + '}', String(sessionID))
                    .replace('${' + 'transactionId' + '}', String(transactionId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling getAirtimeStatusSessionIDTransactionIdGet1.');
        }
        // verify required parameter 'transactionId' is not null or undefined
        if (transactionId === null || transactionId === undefined) {
            throw new Error('Required parameter transactionId was null or undefined when calling getAirtimeStatusSessionIDTransactionIdGet1.');
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
     * get all the reports between two date and report type
     * get all the reports between two date and report type
     * @param sessionID 
     * @param reportType 
     * @param reportSubType 
     * @param begin 
     * @param end 
     */
    public getReportsSessionIDReportTypeReportSubTypeBeginEndGet1WithHttpInfo(sessionID: number, reportType: string, reportSubType: string, begin: string, end: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/report/getReports/${sessionID}/${reportType}/${reportSubType}/${begin}/${end}'
                    .replace('${' + 'sessionID' + '}', String(sessionID))
                    .replace('${' + 'reportType' + '}', String(reportType))
                    .replace('${' + 'reportSubType' + '}', String(reportSubType))
                    .replace('${' + 'begin' + '}', String(begin))
                    .replace('${' + 'end' + '}', String(end));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling getReportsSessionIDReportTypeReportSubTypeBeginEndGet1.');
        }
        // verify required parameter 'reportType' is not null or undefined
        if (reportType === null || reportType === undefined) {
            throw new Error('Required parameter reportType was null or undefined when calling getReportsSessionIDReportTypeReportSubTypeBeginEndGet1.');
        }
        // verify required parameter 'reportSubType' is not null or undefined
        if (reportSubType === null || reportSubType === undefined) {
            throw new Error('Required parameter reportSubType was null or undefined when calling getReportsSessionIDReportTypeReportSubTypeBeginEndGet1.');
        }
        // verify required parameter 'begin' is not null or undefined
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling getReportsSessionIDReportTypeReportSubTypeBeginEndGet1.');
        }
        // verify required parameter 'end' is not null or undefined
        if (end === null || end === undefined) {
            throw new Error('Required parameter end was null or undefined when calling getReportsSessionIDReportTypeReportSubTypeBeginEndGet1.');
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
     * get all the reports between two date and report type
     * get all the reports between two date and report type
     * @param sessionID 
     * @param begin 
     * @param end 
     */
    public getTransactionListSessionIDBeginEndGet1WithHttpInfo(sessionID: number, begin: string, end: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/report/getTransactionList/${sessionID}/${begin}/${end}'
                    .replace('${' + 'sessionID' + '}', String(sessionID))
                    .replace('${' + 'begin' + '}', String(begin))
                    .replace('${' + 'end' + '}', String(end));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling getTransactionListSessionIDBeginEndGet1.');
        }
        // verify required parameter 'begin' is not null or undefined
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling getTransactionListSessionIDBeginEndGet1.');
        }
        // verify required parameter 'end' is not null or undefined
        if (end === null || end === undefined) {
            throw new Error('Required parameter end was null or undefined when calling getTransactionListSessionIDBeginEndGet1.');
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

}