export * as accessPackageResourceRoles from './roles';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    'delete'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    'get'
  >;
  'PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    'patch'
  >;
  'GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment',
    'get'
  >;
  'POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh': Operation<
    '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    paramDefs: {
      header: ['If-Match'],
      path: [
        'accessPackageCatalog-id',
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    paramDefs: {
      path: [
        'accessPackageCatalog-id',
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['body'],
  params?: IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource',
    paramDefs: {
      path: [
        'accessPackageCatalog-id',
        'accessPackageResource-id',
        'accessPackageResourceScope-id',
      ],
    },
    params,
    body,
  };
}

export const accessPackageResourceEnvironment = {
  /**
   * `GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment`
   *
   * Contains the environment information for the resource. This environment can be set using either the @odata.bind annotation or the environment&#x27;s originId. Supports $expand.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/accessPackageResourceEnvironment',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'accessPackageCatalog-id',
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
        ],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh`
   *
   * In Microsoft Entra entitlement management, refresh the accessPackageResource object to fetch the latest details for displayName, description, and resourceType from the origin system. For the AadApplication originSystem, this operation also updates the displayName and description for the accessPackageResourceRole.
   * @deprecated
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog-id}/accessPackageResources/{accessPackageResource-id}/accessPackageResourceScopes/{accessPackageResourceScope-id}/accessPackageResource/refresh',
      paramDefs: {
        path: [
          'accessPackageCatalog-id',
          'accessPackageResource-id',
          'accessPackageResourceScope-id',
        ],
      },
      params,
    };
  },
};
