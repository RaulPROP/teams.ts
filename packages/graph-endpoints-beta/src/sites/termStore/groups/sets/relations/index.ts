export * as fromTerm from './fromTerm';
export * as set from './set';
export * as toTerm from './toTerm';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations',
    'get'
  >;
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations`
 *
 * Indicates which terms have been pinned or reused directly under the set.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations',
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
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}`
 *
 * Indicates which terms have been pinned or reused directly under the set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/relations',
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
