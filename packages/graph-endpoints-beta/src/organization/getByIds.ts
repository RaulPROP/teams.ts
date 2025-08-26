import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/getByIds': Operation<'/organization/getByIds', 'post'>;
}

/**
 * `POST /organization/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /organization/getByIds']['body'],
  params?: IEndpoints['POST /organization/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /organization/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization/getByIds',
    paramDefs: [],
    params,
    body,
  };
}
