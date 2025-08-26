import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm': Operation<
    '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm`
 *
 * The to [term] of the relation. The term to which the relationship is defined.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/children/{term-id}/children/{term-id1}/relations/{relation-id}/toTerm',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}
