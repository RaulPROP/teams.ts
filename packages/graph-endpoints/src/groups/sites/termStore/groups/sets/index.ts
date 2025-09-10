export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup',
    'patch'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'group-id1', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets`
 *
 * All sets under the group in a term [store].
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1', 'set-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets',
    paramDefs: {
      path: ['group-id', 'site-id', 'group-id1'],
    },
    params,
    body,
  };
}

export const parentGroup = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup`
   *
   * The parent [group] that contains the set.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'group-id1', 'set-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup',
      paramDefs: {
        path: ['group-id', 'site-id', 'group-id1', 'set-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup']['response']
  > {
    return {
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/parentGroup',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'group-id1', 'set-id'],
      },
      params,
    };
  },
};
