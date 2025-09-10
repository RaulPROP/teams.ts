import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/vppTokens/{vppToken-id}': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}',
    'delete'
  >;
  'GET /deviceAppManagement/vppTokens': Operation<'/deviceAppManagement/vppTokens', 'get'>;
  'GET /deviceAppManagement/vppTokens/{vppToken-id}': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/vppTokens/{vppToken-id}': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}',
    'patch'
  >;
  'POST /deviceAppManagement/vppTokens': Operation<'/deviceAppManagement/vppTokens', 'post'>;
  'POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses',
    'post'
  >;
  'POST /deviceAppManagement/vppTokens/syncLicenseCounts': Operation<
    '/deviceAppManagement/vppTokens/syncLicenseCounts',
    'post'
  >;
  'POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses': Operation<
    '/deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/vppTokens/{vppToken-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/vppTokens/{vppToken-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceAppManagement/vppTokens/{vppToken-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['vppToken-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/vppTokens`
 *
 * List of Vpp tokens for this organization.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/vppTokens']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/vppTokens']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/vppTokens',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/vppTokens/{vppToken-id}`
 *
 * List of Vpp tokens for this organization.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/vppTokens/{vppToken-id}']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/vppTokens/{vppToken-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}',
    paramDefs: {
      path: ['vppToken-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/vppTokens/{vppToken-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/vppTokens/{vppToken-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/vppTokens/{vppToken-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceAppManagement/vppTokens/{vppToken-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/vppTokens/{vppToken-id}',
    paramDefs: {
      path: ['vppToken-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/vppTokens`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/vppTokens']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/vppTokens']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/vppTokens',
    body,
  };
}

export const revokeLicenses = {
  /**
   * `POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses`
   *
   * Revoke licenses associated with a specific appleVolumePurchaseProgramToken
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses']['body'],
    params?: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/vppTokens/{vppToken-id}/revokeLicenses',
      paramDefs: {
        path: ['vppToken-id'],
      },
      params,
      body,
    };
  },
};

export const syncLicenseCounts = {
  /**
   * `POST /deviceAppManagement/vppTokens/syncLicenseCounts`
   *
   */
  create: function create(): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/vppTokens/syncLicenseCounts']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/vppTokens/syncLicenseCounts',
    };
  },
};

export const syncLicenses = {
  /**
   * `POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses`
   *
   * Syncs licenses associated with a specific appleVolumePurchaseProgramToken
   */
  create: function create(
    params?: IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceAppManagement/vppTokens/{vppToken-id}/syncLicenses',
      paramDefs: {
        path: ['vppToken-id'],
      },
      params,
    };
  },
};
