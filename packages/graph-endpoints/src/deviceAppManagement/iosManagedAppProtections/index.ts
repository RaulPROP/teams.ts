import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections': Operation<
    '/deviceAppManagement/iosManagedAppProtections',
    'get'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosManagedAppProtections': Operation<
    '/deviceAppManagement/iosManagedAppProtections',
    'post'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
    'get'
  >;
  'POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
    'post'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
    'get'
  >;
  'POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
    'post'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}`
 *
 * Deletes a iosManagedAppProtection.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['iosManagedAppProtection-id'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections`
 *
 * List properties and relationships of the iosManagedAppProtection objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections']['parameters']
): EndpointRequest<IEndpoints['GET /deviceAppManagement/iosManagedAppProtections']['response']> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}`
 *
 * Read properties and relationships of the iosManagedAppProtection object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    paramDefs: {
      path: ['iosManagedAppProtection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}`
 *
 * Update the properties of a iosManagedAppProtection object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}',
    paramDefs: {
      path: ['iosManagedAppProtection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosManagedAppProtections`
 *
 * Create a new iosManagedAppProtection object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections']['body']
): EndpointRequest<IEndpoints['POST /deviceAppManagement/iosManagedAppProtections']['response']> {
  return {
    method: 'post',
    path: '/deviceAppManagement/iosManagedAppProtections',
    body,
  };
}

export const apps = {
  /**
   * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps`
   *
   * List properties and relationships of the managedMobileApp objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['iosManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps`
   *
   * Create a new managedMobileApp object.
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
      paramDefs: {
        path: ['iosManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   * Read properties and relationships of the managedMobileApp object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['iosManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   * Update the properties of a managedMobileApp object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        path: ['iosManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}`
   *
   * Deletes a managedMobileApp.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['iosManagedAppProtection-id', 'managedMobileApp-id'],
      },
      params,
    };
  },
};

export const assignments = {
  /**
   * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments`
   *
   * List properties and relationships of the targetedManagedAppPolicyAssignment objects.
   */
  list: function list(
    params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['iosManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['body'],
    params?: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['response']
  > {
    return {
      method: 'post',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
      paramDefs: {
        path: ['iosManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Read properties and relationships of the targetedManagedAppPolicyAssignment object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['iosManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Update the properties of a targetedManagedAppPolicyAssignment object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        path: ['iosManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
   *
   * Deletes a targetedManagedAppPolicyAssignment.
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['iosManagedAppProtection-id', 'targetedManagedAppPolicyAssignment-id'],
      },
      params,
    };
  },
};

export const deploymentSummary = {
  /**
   * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary`
   *
   * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
   */
  get: function get(
    params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'get',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['iosManagedAppProtection-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary`
   *
   * Update the properties of a managedAppPolicyDeploymentSummary object.
   */
  update: function update(
    body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['body'],
    params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'patch',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        path: ['iosManagedAppProtection-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['response']
  > {
    return {
      method: 'delete',
      path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
      paramDefs: {
        header: ['If-Match'],
        path: ['iosManagedAppProtection-id'],
      },
      params,
    };
  },
};
