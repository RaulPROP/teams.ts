export * as subject from './subject';
export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults`
 *
 * The associated individual user execution.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults',
    paramDefs: {
      path: ['workflow-id', 'run-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}`
 *
 * The associated individual user execution.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'run-id', 'userProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
