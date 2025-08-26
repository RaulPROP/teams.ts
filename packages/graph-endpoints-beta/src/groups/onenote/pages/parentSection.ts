import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection': Operation<
    '/groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection`
 *
 * The section that contains the page. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/onenote/pages/{onenotePage-id}/parentSection',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}
