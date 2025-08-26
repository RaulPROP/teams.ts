export * as content from './content';
export * as copyToSection from './copyToSection';
export * as onenotePatchContent from './onenotePatchContent';
export * as parentNotebook from './parentNotebook';
export * as parentSection from './parentSection';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/onenote/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/onenote/pages/{onenotePage-id}',
    'delete'
  >;
  'GET /groups/{group-id}/onenote/pages': Operation<'/groups/{group-id}/onenote/pages', 'get'>;
  'GET /groups/{group-id}/onenote/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/onenote/pages/{onenotePage-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}': Operation<
    '/groups/{group-id}/onenote/pages/{onenotePage-id}',
    'patch'
  >;
  'POST /groups/{group-id}/onenote/pages': Operation<'/groups/{group-id}/onenote/pages', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/pages`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/pages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/onenote/pages/{onenotePage-id}`
 *
 * The pages in all OneNote notebooks that the user or group owns. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/onenote/pages/{onenotePage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/onenote/pages/{onenotePage-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/onenote/pages`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/onenote/pages']['body'],
  params?: IEndpoints['POST /groups/{group-id}/onenote/pages']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/onenote/pages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/onenote/pages',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
