import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/move': Operation<
    '/me/mailFolders/{mailFolder-id}/move',
    'post'
  >;
}

/**
 * `POST /me/mailFolders/{mailFolder-id}/move`
 *
 * Move a mail folder and its contents to another mail folder.
 */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/move']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/move']['parameters']
): EndpointRequest<IEndpoints['POST /me/mailFolders/{mailFolder-id}/move']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/move',
    paramDefs: [{ name: 'mailFolder-id', in: 'path' }],
    params,
    body,
  };
}
