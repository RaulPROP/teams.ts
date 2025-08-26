import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate': Operation<
    '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate',
    'post'
  >;
}

/**
 * `POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate`
 *
 * Activate an inactive educationAssignment to signal that the assignment has further action items for teachers or students. This action can only be performed by a teacher on currently inactive assignments.
 */
export function create(
  body: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate']['body'],
  params?: IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/education/classes/{educationClass-id}/assignments/{educationAssignment-id}/activate',
    paramDefs: [
      { name: 'educationClass-id', in: 'path' },
      { name: 'educationAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}
