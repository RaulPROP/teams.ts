export * as threads from './threads';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/conversations/{conversation-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/conversations': Operation<'/groups/{group-id}/conversations', 'get'>;
  'GET /groups/{group-id}/conversations/{conversation-id}': Operation<
    '/groups/{group-id}/conversations/{conversation-id}',
    'get'
  >;
  'POST /groups/{group-id}/conversations': Operation<'/groups/{group-id}/conversations', 'post'>;
}

/**
 * `DELETE /groups/{group-id}/conversations/{conversation-id}`
 *
 * Delete conversation.
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/conversations/{conversation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/conversations/{conversation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'conversation-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations`
 *
 * Retrieve the list of conversations in this group.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/conversations']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/conversations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/conversations',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/conversations/{conversation-id}`
 *
 * Retrieve the properties and relationships of conversation object.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/conversations/{conversation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/conversations/{conversation-id}',
    paramDefs: {
      path: ['group-id', 'conversation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `POST /groups/{group-id}/conversations`
 *
 * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/conversations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/conversations']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/conversations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/conversations',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}
