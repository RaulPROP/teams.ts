import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview`
 *
 * Device compliance devices status overview
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/deviceStatusOverview',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
