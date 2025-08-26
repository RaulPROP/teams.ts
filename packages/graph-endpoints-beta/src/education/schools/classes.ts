import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /education/schools/{educationSchool-id}/classes': Operation<
    '/education/schools/{educationSchool-id}/classes',
    'get'
  >;
}

/**
 * `GET /education/schools/{educationSchool-id}/classes`
 *
 * Retrieve a list of classes owned by a school.
 */
export function list(
  params?: IEndpoints['GET /education/schools/{educationSchool-id}/classes']['parameters']
): EndpointRequest<IEndpoints['GET /education/schools/{educationSchool-id}/classes']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/education/schools/{educationSchool-id}/classes',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'educationSchool-id', in: 'path' },
    ],
    params,
  };
}
