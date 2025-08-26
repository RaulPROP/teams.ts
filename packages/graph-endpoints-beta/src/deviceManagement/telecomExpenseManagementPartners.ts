import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}': Operation<
    '/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}',
    'delete'
  >;
  'GET /deviceManagement/telecomExpenseManagementPartners': Operation<
    '/deviceManagement/telecomExpenseManagementPartners',
    'get'
  >;
  'GET /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}': Operation<
    '/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}',
    'get'
  >;
  'PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}': Operation<
    '/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}',
    'patch'
  >;
  'POST /deviceManagement/telecomExpenseManagementPartners': Operation<
    '/deviceManagement/telecomExpenseManagementPartners',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'telecomExpenseManagementPartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/telecomExpenseManagementPartners`
 *
 * The telecom expense management partners.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/telecomExpenseManagementPartners']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/telecomExpenseManagementPartners']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/telecomExpenseManagementPartners',
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
 * `GET /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}`
 *
 * The telecom expense management partners.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'telecomExpenseManagementPartner-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}',
    paramDefs: [{ name: 'telecomExpenseManagementPartner-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/telecomExpenseManagementPartners`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/telecomExpenseManagementPartners']['body'],
  params?: IEndpoints['POST /deviceManagement/telecomExpenseManagementPartners']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/telecomExpenseManagementPartners']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/telecomExpenseManagementPartners',
    paramDefs: [],
    params,
    body,
  };
}
