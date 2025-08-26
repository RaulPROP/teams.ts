import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reply': Operation<
    '/me/mailFolders/{mailFolder-id}/messages/{message-id}/reply',
    'post'
  >;
}

/**
  * `POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reply`
  *
  * Reply to the sender of a message using either JSON or MIME format. When using JSON format:
* Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
* If the original message specifies a recipient in the replyTo property, per Internet Message Format (RFC 2822), send the reply to the recipients in replyTo and not the recipient in the from property. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. This method saves the message in the Sent Items folder. Alternatively, create a draft to reply to a message, and send it later.
  */
export function create(
  body: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reply']['body'],
  params?: IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reply']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/mailFolders/{mailFolder-id}/messages/{message-id}/reply']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/mailFolders/{mailFolder-id}/messages/{message-id}/reply',
    paramDefs: [
      { name: 'mailFolder-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
