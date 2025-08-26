import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['body'],
  params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
