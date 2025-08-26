import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn': Operation<
    '/sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn`
 *
 * The source column for content type column.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/columns/{columnDefinition-id}/sourceColumn',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'list-id', in: 'path' },
      { name: 'columnDefinition-id', in: 'path' },
    ],
    params,
  };
}
