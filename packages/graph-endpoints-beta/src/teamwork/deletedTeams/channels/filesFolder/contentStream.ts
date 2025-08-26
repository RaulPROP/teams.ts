import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream',
    'get'
  >;
  'PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream',
    'put'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream`
 *
 * The content stream, if the item represents a file.
 */
export function set(
  body: IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['body'],
  params?: IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['parameters']
): EndpointRequest<
  IEndpoints['PUT /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/filesFolder/contentStream',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
