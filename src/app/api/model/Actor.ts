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

export interface Actor {
    id?: number;

    firstName?: string;

    lastName?: string;

    login?: string;

    password?: string;

    specialPassword?: string;

    mobileNumber?: string;

    email?: string;

    matricule?: string;

    adress?: string;

    lastAccountUpdate?: Date;

    status?: string;

}
