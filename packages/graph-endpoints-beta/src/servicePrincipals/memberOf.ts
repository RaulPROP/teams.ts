import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/memberOf': Operation<
    '/servicePrincipals/{servicePrincipal-id}/memberOf',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/memberOf`
 *
 * Get the groups and directory roles that this servicePrincipal is a direct member of. This operation isn&#x27;t transitive.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/memberOf',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}`
 *
 * Roles that this service principal is a member of. HTTP Methods: GET Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/memberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
