export * as activate from './activate';
export * as categories from './categories';
export * as deactivate from './deactivate';
export * as gradingCategory from './gradingCategory';
export * as gradingScheme from './gradingScheme';
export * as publish from './publish';
export * as resources from './resources';
export * as rubric from './rubric';
export * as setUpFeedbackResourcesFolder from './setUpFeedbackResourcesFolder';
export * as setUpResourcesFolder from './setUpResourcesFolder';
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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'educationAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /education/me/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /education/me/assignments']['body'],
  params?: IEndpoints['POST /education/me/assignments']['parameters']
): EndpointRequest<IEndpoints['POST /education/me/assignments']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/me/assignments',
    paramDefs: [],
    params,
    body,
  };
}
