import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    'get'
  >;
  'PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    'put'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: '$format', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content`
 *
 * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
 */
export function set(
  body: IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['body'],
  params?: IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/content',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
