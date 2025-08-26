import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/messages/{message-id}/createReply': Operation<
    '/users/{user-id}/messages/{message-id}/createReply',
    'post'
  >;
}

/**
  * `POST /users/{user-id}/messages/{message-id}/createReply`
  *
  * Create a draft to reply to the sender of a message in either JSON or MIME format. When using JSON format:
- Specify either a comment or the body property of the message parameter. Specifying both will return an HTTP 400 Bad Request error.
- If replyTo is specified in the original message, per Internet Message Format (RFC 2822), you should send the reply to the recipients in replyTo, and not the recipients in from.
- You can update the draft later to add reply content to the body or change other message properties. When using MIME format:
- Provide the applicable Internet message headers and the MIME content, all encoded in base64 format in the request body.
- Add any attachments and S/MIME properties to the MIME content. Send the draft message in a subsequent operation. Alternatively, reply to a message in a single operation.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/messages/{message-id}/createReply']['body'],
  params?: IEndpoints['POST /users/{user-id}/messages/{message-id}/createReply']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/messages/{message-id}/createReply']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/messages/{message-id}/createReply',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'message-id', in: 'path' },
    ],
    params,
    body,
  };
}
