export * as attachments from './attachments';
export * as extensions from './extensions';
export * as forward from './forward';
export * as mentions from './mentions';
export * as reply from './reply';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo': Operation<
    '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo`
 *
 * The earlier post that this post is replying to in the conversationThread. Read-only. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/threads/{conversationThread-id}/posts/{post-id}/inReplyTo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'conversationThread-id', in: 'path' },
      { name: 'post-id', in: 'path' },
    ],
    params,
  };
}
