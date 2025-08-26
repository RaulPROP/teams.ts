import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook': Operation<
    '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
    'get'
  >;
}

/**
 * `GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook`
 *
 * The notebook that contains the page.  Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onenote/sections/{onenoteSection-id}/pages/{onenotePage-id}/parentNotebook',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onenoteSection-id', in: 'path' },
      { name: 'onenotePage-id', in: 'path' },
    ],
    params,
  };
}
