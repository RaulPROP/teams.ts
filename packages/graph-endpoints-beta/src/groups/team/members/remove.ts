import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/members/remove': Operation<
    '/groups/{group-id}/team/members/remove',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/members/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/members/remove']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/members/remove']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/members/remove']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/members/remove',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
