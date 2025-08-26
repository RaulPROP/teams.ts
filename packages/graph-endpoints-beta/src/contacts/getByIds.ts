import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/getByIds': Operation<'/contacts/getByIds', 'post'>;
}

/**
 * `POST /contacts/getByIds`
 *
 * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
 */
export function create(
  body: IEndpoints['POST /contacts/getByIds']['body'],
  params?: IEndpoints['POST /contacts/getByIds']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/getByIds']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/contacts/getByIds',
    paramDefs: [],
    params,
    body,
  };
}
