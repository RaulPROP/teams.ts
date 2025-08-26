import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments': Operation<
    '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceCompliancePolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments`
 *
 * The collection of assignments for this compliance policy.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}`
 *
 * The collection of assignments for this compliance policy.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceCompliancePolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments/{deviceCompliancePolicyAssignment-id}',
    paramDefs: [
      { name: 'deviceCompliancePolicy-id', in: 'path' },
      { name: 'deviceCompliancePolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy-id}/assignments',
    paramDefs: [{ name: 'deviceCompliancePolicy-id', in: 'path' }],
    params,
    body,
  };
}
