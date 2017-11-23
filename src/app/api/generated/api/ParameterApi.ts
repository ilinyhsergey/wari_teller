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
export class ParameterApi {

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
     * provides all B2B partners
     * @summary provides all B2B partners
     */
    public findB2BPartnerInformationsGet1(extraHttpRequestParams?: any): Observable<Array<models.B2BPartnerInformation>> {
        return this.findB2BPartnerInformationsGet1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * provides a set of fileld of a merchant's form
     * @summary [Implemented] find merchant form
     * @param reference 
     */
    public findMerchantFormByReferenceGet1(reference: string, extraHttpRequestParams?: any): Observable<models.MerchantForm> {
        return this.findMerchantFormByReferenceGet1WithHttpInfo(reference, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * research a merchant by name or reference and provides merchant informations.
     * @summary [Implemented] find merchant info
     * @param reference 
     */
    public findMerchantInformationsByReferenceGet1(reference: string, extraHttpRequestParams?: any): Observable<Array<models.B2BPartnerInformation>> {
        return this.findMerchantInformationsByReferenceGet1WithHttpInfo(reference, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * [Implemented] provides all countries of the world.
     * @summary [Implemented] provides all countries of the world.
     */
    public getAllCountriesGet1(extraHttpRequestParams?: any): Observable<Array<models.GeoZone>> {
        return this.getAllCountriesGet1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * Category can be WATER, ELECTRICITY, TV, OTHER and numeric like 0000031 - monetque merchant categories
     * @summary Provides all merchants in a country by category(TV,bill,water etc...).
     * @param countryCode 
     * @param category Merchant category
     */
    public getAllMerchantInCountryByCategoryCountryCodeCategoryGet1(countryCode: number, category: string, extraHttpRequestParams?: any): Observable<Array<models.B2BPartnerInformation>> {
        return this.getAllMerchantInCountryByCategoryCountryCodeCategoryGet1WithHttpInfo(countryCode, category, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * provides all mobile operators in a country
     * @summary [Implemented] provides all mobile operators in a country
     * @param mobileCountryCode 
     */
    public getAllMobileOperatorsInCountryMobileCountryCodeGet1(mobileCountryCode: number, extraHttpRequestParams?: any): Observable<Array<models.MobileOperator>> {
        return this.getAllMobileOperatorsInCountryMobileCountryCodeGet1WithHttpInfo(mobileCountryCode, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * provides all the Piece types used in Wari platform.
     * @summary provides all the Piece types used in Wari platform.
     */
    public getAllPieceTypesGet1(extraHttpRequestParams?: any): Observable<Array<models.PieceType>> {
        return this.getAllPieceTypesGet1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * provides all transfer motifs used in Wari platform.
     * @summary [Implemented] provides all transfer motifs used in Wari platform.
     */
    public getAllTransferMotifsGet1(extraHttpRequestParams?: any): Observable<Array<models.Motif>> {
        return this.getAllTransferMotifsGet1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * provides all countries where Wari platform can send money by sender country.
     * @summary provides all countries where Wari platform can send money by sender country.
     * @param geoZoneId 
     */
    public getAvailableDestinationCountriesGeoZoneIdGet1(geoZoneId: number, extraHttpRequestParams?: any): Observable<Array<models.GeoZone>> {
        return this.getAvailableDestinationCountriesGeoZoneIdGet1WithHttpInfo(geoZoneId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * [Implemented] provides country by id.
     * @summary [Implemented] provides country by id.
     * @param countryId 
     */
    public getCountryGet1(countryId: number, extraHttpRequestParams?: any): Observable<models.GeoZone> {
        return this.getCountryGet1WithHttpInfo(countryId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * get informations(name, mobile number, addresses etc...) of all pos services of the network.
     * @summary get informations(name, mobile number, addresses etc...) of all pos services of the network.
     */
    public getInformationsGet1(extraHttpRequestParams?: any): Observable<Array<models.NetworkInformation>> {
        return this.getInformationsGet1WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * provides all B2B partners
     * provides all B2B partners
     */
    public findB2BPartnerInformationsGet1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/findB2BPartnerInformations';

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
     * [Implemented] find merchant form
     * provides a set of fileld of a merchant&#39;s form
     * @param reference 
     */
    public findMerchantFormByReferenceGet1WithHttpInfo(reference: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/findMerchantFormByReference/${reference}'
                    .replace('${' + 'reference' + '}', String(reference));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'reference' is not null or undefined
        if (reference === null || reference === undefined) {
            throw new Error('Required parameter reference was null or undefined when calling findMerchantFormByReferenceGet1.');
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
     * [Implemented] find merchant info
     * research a merchant by name or reference and provides merchant informations.
     * @param reference 
     */
    public findMerchantInformationsByReferenceGet1WithHttpInfo(reference: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/findMerchantInformations/${reference}'
                    .replace('${' + 'reference' + '}', String(reference));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'reference' is not null or undefined
        if (reference === null || reference === undefined) {
            throw new Error('Required parameter reference was null or undefined when calling findMerchantInformationsByReferenceGet1.');
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
     * [Implemented] provides all countries of the world.
     * [Implemented] provides all countries of the world.
     */
    public getAllCountriesGet1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getAllCountries';

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
     * Provides all merchants in a country by category(TV,bill,water etc...).
     * Category can be WATER, ELECTRICITY, TV, OTHER and numeric like 0000031 - monetque merchant categories
     * @param countryCode 
     * @param category Merchant category
     */
    public getAllMerchantInCountryByCategoryCountryCodeCategoryGet1WithHttpInfo(countryCode: number, category: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getAllMerchantInCountryByCategory/${countryCode}/${category}'
                    .replace('${' + 'countryCode' + '}', String(countryCode))
                    .replace('${' + 'category' + '}', String(category));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new Error('Required parameter countryCode was null or undefined when calling getAllMerchantInCountryByCategoryCountryCodeCategoryGet1.');
        }
        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new Error('Required parameter category was null or undefined when calling getAllMerchantInCountryByCategoryCountryCodeCategoryGet1.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

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
     * [Implemented] provides all mobile operators in a country
     * provides all mobile operators in a country
     * @param mobileCountryCode 
     */
    public getAllMobileOperatorsInCountryMobileCountryCodeGet1WithHttpInfo(mobileCountryCode: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getAllMobileOperatorsInCountry/${mobileCountryCode}'
                    .replace('${' + 'mobileCountryCode' + '}', String(mobileCountryCode));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'mobileCountryCode' is not null or undefined
        if (mobileCountryCode === null || mobileCountryCode === undefined) {
            throw new Error('Required parameter mobileCountryCode was null or undefined when calling getAllMobileOperatorsInCountryMobileCountryCodeGet1.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

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
     * provides all the Piece types used in Wari platform.
     * provides all the Piece types used in Wari platform.
     */
    public getAllPieceTypesGet1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getAllPieceTypes';

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
     * [Implemented] provides all transfer motifs used in Wari platform.
     * provides all transfer motifs used in Wari platform.
     */
    public getAllTransferMotifsGet1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getAllTransferMotifs';

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
     * provides all countries where Wari platform can send money by sender country.
     * provides all countries where Wari platform can send money by sender country.
     * @param geoZoneId 
     */
    public getAvailableDestinationCountriesGeoZoneIdGet1WithHttpInfo(geoZoneId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getAvailableDestinationCountries/${geoZoneId}'
                    .replace('${' + 'geoZoneId' + '}', String(geoZoneId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'geoZoneId' is not null or undefined
        if (geoZoneId === null || geoZoneId === undefined) {
            throw new Error('Required parameter geoZoneId was null or undefined when calling getAvailableDestinationCountriesGeoZoneIdGet1.');
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
     * [Implemented] provides country by id.
     * [Implemented] provides country by id.
     * @param countryId 
     */
    public getCountryGet1WithHttpInfo(countryId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getCountry/${countryId}'
                    .replace('${' + 'countryId' + '}', String(countryId));

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'countryId' is not null or undefined
        if (countryId === null || countryId === undefined) {
            throw new Error('Required parameter countryId was null or undefined when calling getCountryGet1.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
        ];

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
     * get informations(name, mobile number, addresses etc...) of all pos services of the network.
     * get informations(name, mobile number, addresses etc...) of all pos services of the network.
     */
    public getInformationsGet1WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/parameter/getInformations';

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
