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
import { UserApiInterface }                            from './UserApiInterface';


@Injectable()
export class UserApi implements UserApiInterface {

    protected basePath = 'http://localhost:8080/teller_api/v1';
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
     * get the profile information of the connected user.
     * @summary get the profile information of the connected user.
     * @param sessionID 
     */
    public getUserDetailsSessionIDGet1(sessionID: number, extraHttpRequestParams?: any): Observable<models.Actor> {
        return this.getUserDetailsSessionIDGet1WithHttpInfo(sessionID, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * update a user profile informations
     * @summary update a user profile informations
     * @param sessionID 
     * @param body 
     */
    public updateUserDetailsPost1(sessionID: number, body?: models.Actor, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateUserDetailsPost1WithHttpInfo(sessionID, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * [Implemented] open a user session with his username, password and special password.
     * @summary [Implemented] open a user session with his username, password and special password.
     * @param body 
     */
    public userLoginPost1(body?: models.LoginCredentials, extraHttpRequestParams?: any): Observable<{}> {
        return this.userLoginPost1WithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * logout user.
     * @summary logout user.
     */
    public userLogoutPost1(extraHttpRequestParams?: any): Observable<{}> {
        return this.userLogoutPost1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * get the profile information of the connected user.
     * get the profile information of the connected user.
     * @param sessionID 
     */
    public getUserDetailsSessionIDGet1WithHttpInfo(sessionID: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/user/details/${sessionID}'
                    .replace('${' + 'sessionID' + '}', String(sessionID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling getUserDetailsSessionIDGet1.');
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
     * update a user profile informations
     * update a user profile informations
     * @param sessionID 
     * @param body 
     */
    public updateUserDetailsPost1WithHttpInfo(sessionID: number, body?: models.Actor, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/user/details/${sessionID}'
                    .replace('${' + 'sessionID' + '}', String(sessionID));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'sessionID' is not null or undefined
        if (sessionID === null || sessionID === undefined) {
            throw new Error('Required parameter sessionID was null or undefined when calling updateUserDetailsPost1.');
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
     * [Implemented] open a user session with his username, password and special password.
     * [Implemented] open a user session with his username, password and special password.
     * @param body 
     */
    public userLoginPost1WithHttpInfo(body?: models.LoginCredentials, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/user/login';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

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
     * logout user.
     * logout user.
     */
    public userLogoutPost1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/user/logout';

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

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
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
