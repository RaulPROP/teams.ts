import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort': Operation<
    '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort',
    'post'
  >;
}

/**
 * `POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort`
 *
 * Abort a print job. Only applications using application permissions can abort a print job. Aborting a print job will only succeed if there is a printTask in a processing state on the associated print job, started by a trigger that the requesting app created. For details about how to register a task trigger, see Extending Universal Print to support pull printing.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort']['body'],
  params?: IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort']['parameters']
): EndpointRequest<
  IEndpoints['POST /print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/printerShares/{printerShare-id}/jobs/{printJob-id}/abort',
    paramDefs: [
      { name: 'printerShare-id', in: 'path' },
      { name: 'printJob-id', in: 'path' },
    ],
    params,
    body,
  };
}
