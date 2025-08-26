export * as childrenChildren from './childrenChildren';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    'get'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    'post'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children/{term-id}',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}/children',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
    body,
  };
}
