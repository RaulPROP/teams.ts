import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/events/{event-id}/cancel': Operation<
    '/users/{user-id}/events/{event-id}/cancel',
    'post'
  >;
}

/**
  * `POST /users/{user-id}/events/{event-id}/cancel`
  *
  * This action allows the organizer of a meeting to send a cancellation message and cancel the event.  The action moves the event to the Deleted Items folder. The organizer can also cancel an occurrence of a recurring meeting 
by providing the occurrence event ID. An attendee calling this action gets an error (HTTP 400 Bad Request), with the following
error message: &#x27;Your request can&#x27;t be completed. You need to be an organizer to cancel a meeting.&#x27; This action differs from Delete in that Cancel is available to only the organizer, and lets
the organizer send a custom message to the attendees about the cancellation.
  */
export function create(
  body: IEndpoints['POST /users/{user-id}/events/{event-id}/cancel']['body'],
  params?: IEndpoints['POST /users/{user-id}/events/{event-id}/cancel']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/events/{event-id}/cancel']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/events/{event-id}/cancel',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'event-id', in: 'path' },
    ],
    params,
    body,
  };
}
