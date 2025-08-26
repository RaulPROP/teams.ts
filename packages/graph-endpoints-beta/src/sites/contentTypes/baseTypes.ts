import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/baseTypes',
    'get'
  >;
  'GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}': Operation<
    '/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes`
 *
 * The collection of content types that are ancestors of this content type.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/baseTypes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}`
 *
 * The collection of content types that are ancestors of this content type.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/contentTypes/{contentType-id}/baseTypes/{contentType-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'contentType-id', in: 'path' },
      { name: 'contentType-id1', in: 'path' },
    ],
    params,
  };
}
