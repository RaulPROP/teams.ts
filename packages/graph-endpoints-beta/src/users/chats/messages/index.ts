export * as forwardToChat from './forwardToChat';
export * as hostedContents from './hostedContents';
export * as replies from './replies';
export * as replyWithQuote from './replyWithQuote';
export * as setReaction from './setReaction';
export * as softDelete from './softDelete';
export * as undoSoftDelete from './undoSoftDelete';
export * as unsetReaction from './unsetReaction';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/messages': Operation<
    '/users/{user-id}/chats/{chat-id}/messages',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/messages': Operation<
    '/users/{user-id}/chats/{chat-id}/messages',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/messages`
 *
 * A collection of all the messages in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/messages',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/messages',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
    body,
  };
}
