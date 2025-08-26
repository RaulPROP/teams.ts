export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators',
    'get'
  >;
  'GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}': Operation<
    '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}',
    'get'
  >;
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators`
 *
 */
export function list(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/subjectRightsRequests/{subjectRightsRequest-id}/collaborators/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'subjectRightsRequest-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
