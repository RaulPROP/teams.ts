export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/lastModifiedByUser': Operation<
    '/shares/{sharedDriveItem-id}/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/lastModifiedByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sharedDriveItem-id', in: 'path' },
    ],
    params,
  };
}
