/**
 * onecx-permission-bff
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Permission } from './permission';


export interface PermissionPageResult { 
    /**
     * The total elements in the resource.
     */
    totalElements?: number;
    number?: number;
    size?: number;
    totalPages?: number;
    stream?: Array<Permission>;
}

