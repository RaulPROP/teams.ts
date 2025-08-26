import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
 *
 * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
