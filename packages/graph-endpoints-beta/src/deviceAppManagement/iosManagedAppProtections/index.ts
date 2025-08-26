export * as apps from './apps';
export * as assignments from './assignments';
export * as deploymentSummary from './deploymentSummary';
export * as hasPayloadLinks from './hasPayloadLinks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections': Operation<
    '/deviceAppManagement/iosManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosManagedAppProtections': Operation<
    '/deviceAppManagement/iosManagedAppProtections',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections`
 *
 * iOS managed app policies.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/iosManagedAppProtections']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections',
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
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}`
 *
 * iOS managed app policies.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    paramDefs: [{ name: 'iosManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosManagedAppProtections`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections']['parameters']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/iosManagedAppProtections']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosManagedAppProtections',
    paramDefs: [],
    params,
    body,
  };
}
