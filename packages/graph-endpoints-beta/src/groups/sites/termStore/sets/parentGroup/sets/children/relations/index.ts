export * as fromTerm from './fromTerm';
export * as set from './set';
export * as toTerm from './toTerm';

import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations',
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
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations/{relation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}/relations',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}
