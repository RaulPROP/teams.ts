import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp': Operation<
    '/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp`
 *
 * The application that is linked to the tab.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/tabs/{teamsTab-id}/teamsApp']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/tabs/{teamsTab-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsTab-id', in: 'path' },
    ],
    params,
  };
}
