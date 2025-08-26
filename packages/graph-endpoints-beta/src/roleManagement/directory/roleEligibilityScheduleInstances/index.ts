export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}': Operation<
    '/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleInstances': Operation<
    '/roleManagement/directory/roleEligibilityScheduleInstances',
    'get'
  >;
  'GET /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}': Operation<
    '/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}': Operation<
    '/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleEligibilityScheduleInstances': Operation<
    '/roleManagement/directory/roleEligibilityScheduleInstances',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleEligibilityScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilityScheduleInstances`
 *
 * Get a list of the unifiedRoleEligibilityScheduleInstance objects and their properties.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilityScheduleInstances',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}`
 *
 * Read the properties and relationships of an unifiedRoleEligibilityScheduleInstance object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilityScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance-id}',
    paramDefs: [{ name: 'unifiedRoleEligibilityScheduleInstance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleEligibilityScheduleInstances`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleInstances']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleEligibilityScheduleInstances']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleEligibilityScheduleInstances',
    paramDefs: [],
    params,
    body,
  };
}
