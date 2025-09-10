export * as events from './events';
export * as townhalls from './townhalls';
export * as webinars from './webinars';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/virtualEvents': Operation<'/solutions/virtualEvents', 'delete'>;
  'GET /solutions/virtualEvents': Operation<'/solutions/virtualEvents', 'get'>;
  'PATCH /solutions/virtualEvents': Operation<'/solutions/virtualEvents', 'patch'>;
}

/**
 * `DELETE /solutions/virtualEvents`
 *
 */
export function del(
  params?: IEndpoints['DELETE /solutions/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['DELETE /solutions/virtualEvents']['response']> {
  return {
    method: 'delete',
    path: '/solutions/virtualEvents',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /solutions/virtualEvents`
 *
 */
export function list(
  params?: IEndpoints['GET /solutions/virtualEvents']['parameters']
): EndpointRequest<IEndpoints['GET /solutions/virtualEvents']['response']> {
  return {
    method: 'get',
    path: '/solutions/virtualEvents',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /solutions/virtualEvents`
 *
 */
export function update(
  body: IEndpoints['PATCH /solutions/virtualEvents']['body']
): EndpointRequest<IEndpoints['PATCH /solutions/virtualEvents']['response']> {
  return {
    method: 'patch',
    path: '/solutions/virtualEvents',
    body,
  };
}
