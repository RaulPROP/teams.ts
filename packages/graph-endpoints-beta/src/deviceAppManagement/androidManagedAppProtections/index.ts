export * as apps from './apps';
export * as assignments from './assignments';
export * as deploymentSummary from './deploymentSummary';
export * as hasPayloadLinks from './hasPayloadLinks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections': Operation<
    '/deviceAppManagement/androidManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/androidManagedAppProtections': Operation<
    '/deviceAppManagement/androidManagedAppProtections',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections`
 *
 * Android managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}`
 *
 * Android managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}',
    paramDefs: [{ name: 'androidManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/androidManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections']['body'],
  params?: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/androidManagedAppProtections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/androidManagedAppProtections',
    paramDefs: [],
    params,
    body,
  };
}
