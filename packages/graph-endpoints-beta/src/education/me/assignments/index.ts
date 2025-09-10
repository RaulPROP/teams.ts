export * as resources from './resources';
export * as submissions from './submissions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /education/me/assignments/{educationAssignment-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}',
    'delete'
  >;
  'GET /education/me/assignments': Operation<'/education/me/assignments', 'get'>;
  'GET /education/me/assignments/{educationAssignment-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}': Operation<
    '/education/me/assignments/{educationAssignment-id}',
    'patch'
  >;
  'POST /education/me/assignments': Operation<'/education/me/assignments', 'post'>;
  'POST /education/me/assignments/{educationAssignment-id}/activate': Operation<
    '/education/me/assignments/{educationAssignment-id}/activate',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/categories': Operation<
    '/education/me/assignments/{educationAssignment-id}/categories',
    'get'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/categories': Operation<
    '/education/me/assignments/{educationAssignment-id}/categories',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/deactivate': Operation<
    '/education/me/assignments/{educationAssignment-id}/deactivate',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/gradingCategory': Operation<
    '/education/me/assignments/{educationAssignment-id}/gradingCategory',
    'get'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/gradingScheme': Operation<
    '/education/me/assignments/{educationAssignment-id}/gradingScheme',
    'get'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/publish': Operation<
    '/education/me/assignments/{educationAssignment-id}/publish',
    'post'
  >;
  'GET /education/me/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/me/assignments/{educationAssignment-id}/rubric',
    'get'
  >;
  'PATCH /education/me/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/me/assignments/{educationAssignment-id}/rubric',
    'patch'
  >;
  'DELETE /education/me/assignments/{educationAssignment-id}/rubric': Operation<
    '/education/me/assignments/{educationAssignment-id}/rubric',
    'delete'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder': Operation<
    '/education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
    'post'
  >;
  'POST /education/me/assignments/{educationAssignment-id}/setUpResourcesFolder': Operation<
    '/education/me/assignments/{educationAssignment-id}/setUpResourcesFolder',
    'post'
  >;
}

/**
 * `DELETE /education/me/assignments/{educationAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/education/me/assignments/{educationAssignment-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['educationAssignment-id'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments`
 *
 * Returns a list of assignments assigned to a user for all classes. Only teachers, students, and applications with application permissions can perform this operation. This utility namespace allows a caller to find all of a student&#x27;s or teacher&#x27;s assignments in a single call, rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. All other operations on the assignment should use the class namespace.
 */
export function list(
  params?: IEndpoints['GET /education/me/assignments']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/assignments']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /education/me/assignments/{educationAssignment-id}`
 *
 * List of assignments for the user. Nullable.
 */
export function get(
  params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /education/me/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/me/assignments/{educationAssignment-id}',
    paramDefs: {
      path: ['educationAssignment-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /education/me/assignments/{educationAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}']['body'],
  params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/education/me/assignments/{educationAssignment-id}',
    paramDefs: {
      path: ['educationAssignment-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments']['body']
): EndpointRequest<IEndpoints['POST /education/me/assignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/me/assignments',
    body,
  };
}

export const activate = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/activate`
   *
   * Activate an inactive educationAssignment to signal that the assignment has further action items for teachers or students. This action can only be performed by a teacher on currently inactive assignments.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/activate',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const categories = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/categories`
   *
   * When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/categories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/categories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/categories`
   *
   */
  create: function create(
    body: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/categories']['body'],
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/categories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/categories']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/categories',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
      body,
    };
  },
};

export const deactivate = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/deactivate`
   *
   * Mark an assigned educationAssignment as inactive to signal that the assignment has no further action items for teachers and students. This action can only be performed by a teacher on assigned assignments.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/deactivate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/deactivate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/deactivate',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const gradingCategory = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/gradingCategory`
   *
   * When set, enables users to weight assignments differently when computing a class average grade.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingCategory']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingCategory']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/gradingCategory',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const gradingScheme = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/gradingScheme`
   *
   */
  get: function get(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingScheme']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/gradingScheme']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/gradingScheme',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const publish = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/publish`
   *
   * Change the status of an educationAssignment from its original draft status to the published status.  You can change the status from draft to scheduled if the assignment is scheduled for a future date.  Only a teacher in the class can make this call. When an assignment is in draft status, students will not see the assignment, nor will there be any submission objects. When you call this API, educationSubmission objects are created and the assignment appears in the student&#x27;s list. The status of the assignment goes back to draft if there is any backend failure during publish process. To update the properties of a published assignment, see update an assignment. To update the properties of a published assignment, see update an assignment.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/publish']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/publish']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/publish',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const rubric = {
  /**
   * `GET /education/me/assignments/{educationAssignment-id}/rubric`
   *
   * When set, the grading rubric attached to this assignment.
   */
  get: function get(
    params?: IEndpoints['GET /education/me/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /education/me/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/education/me/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/me/assignments/{educationAssignment-id}/rubric`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/rubric']['body'],
    params?: IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /education/me/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/education/me/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /education/me/assignments/{educationAssignment-id}/rubric`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/rubric']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /education/me/assignments/{educationAssignment-id}/rubric']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/education/me/assignments/{educationAssignment-id}/rubric',
      paramDefs: {
        header: ['If-Match'],
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const setUpFeedbackResourcesFolder = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder`
   *
   * Create a SharePoint folder to upload feedback files for a given educationSubmission. Only teachers can perform this operation. The teacher determines the resources to upload in the feedback resources folder of a submission.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/setUpFeedbackResourcesFolder',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};

export const setUpResourcesFolder = {
  /**
   * `POST /education/me/assignments/{educationAssignment-id}/setUpResourcesFolder`
   *
   * Create a SharePoint folder to upload files for a given educationAssignment. Only teachers can perform this operation. The teacher determines the resources to upload in the assignment&#x27;s folder.
   */
  create: function create(
    params?: IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpResourcesFolder']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /education/me/assignments/{educationAssignment-id}/setUpResourcesFolder']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/education/me/assignments/{educationAssignment-id}/setUpResourcesFolder',
      paramDefs: {
        path: ['educationAssignment-id'],
      },
      params,
    };
  },
};
