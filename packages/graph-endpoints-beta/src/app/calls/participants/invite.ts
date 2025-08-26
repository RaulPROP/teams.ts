import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/participants/invite': Operation<
    '/app/calls/{call-id}/participants/invite',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/participants/invite`
 *
 * Delete a specific participant in a call. In some situations, it is appropriate for an application to remove a participant from an active call. This action can be done before or after the participant answers the call. When an active caller is removed, they are immediately dropped from the call with no pre- or post-removal notification. When an invited participant is removed, any outstanding add participant request is canceled.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/participants/invite']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/participants/invite']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/participants/invite']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/participants/invite',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
