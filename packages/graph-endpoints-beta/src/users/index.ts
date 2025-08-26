export * as activities from './activities';
export * as agreementAcceptances from './agreementAcceptances';
export * as analytics from './analytics';
export * as appConsentRequestsForApproval from './appConsentRequestsForApproval';
export * as appRoleAssignedResources from './appRoleAssignedResources';
export * as appRoleAssignments from './appRoleAssignments';
export * as approvals from './approvals';
export * as assignLicense from './assignLicense';
export * as authentication from './authentication';
export * as calendar from './calendar';
export * as calendarGroups from './calendarGroups';
export * as calendarView from './calendarView';
export * as calendars from './calendars';
export * as changePassword from './changePassword';
export * as chats from './chats';
export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as cloudClipboard from './cloudClipboard';
export * as cloudPCs from './cloudPCs';
export * as communications from './communications';
export * as contactFolders from './contactFolders';
export * as contacts from './contacts';
export * as convertExternalToInternalMemberUser from './convertExternalToInternalMemberUser';
export * as createdObjects from './createdObjects';
export * as dataSecurityAndGovernance from './dataSecurityAndGovernance';
export * as deletePasswordSingleSignOnCredentials from './deletePasswordSingleSignOnCredentials';
export * as deviceEnrollmentConfigurations from './deviceEnrollmentConfigurations';
export * as deviceManagementTroubleshootingEvents from './deviceManagementTroubleshootingEvents';
export * as devices from './devices';
export * as directReports from './directReports';
export * as drive from './drive';
export * as drives from './drives';
export * as employeeExperience from './employeeExperience';
export * as events from './events';
export * as exportPersonalData from './exportPersonalData';
export * as extensions from './extensions';
export * as findMeetingTimes from './findMeetingTimes';
export * as followedSites from './followedSites';
export * as getByIds from './getByIds';
export * as getMailTips from './getMailTips';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as getPasswordSingleSignOnCredentials from './getPasswordSingleSignOnCredentials';
export * as getUserOwnedObjects from './getUserOwnedObjects';
export * as inferenceClassification from './inferenceClassification';
export * as informationProtection from './informationProtection';
export * as insights from './insights';
export * as invalidateAllRefreshTokens from './invalidateAllRefreshTokens';
export * as invitedBy from './invitedBy';
export * as joinedGroups from './joinedGroups';
export * as joinedTeams from './joinedTeams';
export * as licenseDetails from './licenseDetails';
export * as mailFolders from './mailFolders';
export * as mailboxSettings from './mailboxSettings';
export * as managedAppLogCollectionRequests from './managedAppLogCollectionRequests';
export * as managedAppRegistrations from './managedAppRegistrations';
export * as managedDevices from './managedDevices';
export * as manager from './manager';
export * as memberOf from './memberOf';
export * as messages from './messages';
export * as mobileAppIntentAndStates from './mobileAppIntentAndStates';
export * as mobileAppTroubleshootingEvents from './mobileAppTroubleshootingEvents';
export * as notifications from './notifications';
export * as oauth2PermissionGrants from './oauth2PermissionGrants';
export * as onenote from './onenote';
export * as onlineMeetings from './onlineMeetings';
export * as outlook from './outlook';
export * as ownedDevices from './ownedDevices';
export * as ownedObjects from './ownedObjects';
export * as pendingAccessReviewInstances from './pendingAccessReviewInstances';
export * as people from './people';
export * as permissionGrants from './permissionGrants';
export * as photo from './photo';
export * as photos from './photos';
export * as planner from './planner';
export * as presence from './presence';
export * as profile from './profile';
export * as registeredDevices from './registeredDevices';
export * as removeAllDevicesFromManagement from './removeAllDevicesFromManagement';
export * as reprocessLicenseAssignment from './reprocessLicenseAssignment';
export * as restore from './restore';
export * as retryServiceProvisioning from './retryServiceProvisioning';
export * as revokeSignInSessions from './revokeSignInSessions';
export * as scopedRoleMemberOf from './scopedRoleMemberOf';
export * as security from './security';
export * as sendMail from './sendMail';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';
export * as settings from './settings';
export * as solutions from './solutions';
export * as sponsors from './sponsors';
export * as teamwork from './teamwork';
export * as todo from './todo';
export * as transitiveMemberOf from './transitiveMemberOf';
export * as transitiveReports from './transitiveReports';
export * as translateExchangeIds from './translateExchangeIds';
export * as unblockManagedApps from './unblockManagedApps';
export * as usageRights from './usageRights';
export * as validatePassword from './validatePassword';
export * as validateProperties from './validateProperties';
export * as virtualEvents from './virtualEvents';
export * as windowsInformationProtectionDeviceRegistrations from './windowsInformationProtectionDeviceRegistrations';
export * as wipeAndBlockManagedApps from './wipeAndBlockManagedApps';
export * as wipeManagedAppRegistrationByDeviceTag from './wipeManagedAppRegistrationByDeviceTag';
export * as wipeManagedAppRegistrationsByAzureAdDeviceId from './wipeManagedAppRegistrationsByAzureAdDeviceId';
export * as wipeManagedAppRegistrationsByDeviceTag from './wipeManagedAppRegistrationsByDeviceTag';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}': Operation<'/users/{user-id}', 'delete'>;
  'GET /users': Operation<'/users', 'get'>;
  'GET /users/{user-id}': Operation<'/users/{user-id}', 'get'>;
  'PATCH /users/{user-id}': Operation<'/users/{user-id}', 'patch'>;
  'POST /users': Operation<'/users', 'post'>;
}

/**
 * `DELETE /users/{user-id}`
 *
 * Delete a user object.   When deleted, user resources, including their mailbox and license assignments, are moved to a temporary container and if the user is restored within 30 days, these objects are restored to them. The user is also restored to any groups they were a member of. After 30 days and if not restored, the user object is permanently deleted and their assigned resources freed. To manage the deleted user object, see deletedItems.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users`
 *
 * Retrieve a list of user objects. This operation returns by default only a subset of the more commonly used properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the user and specify the properties in a $select OData query option.
 */
export function list(
  params?: IEndpoints['GET /users']['parameters']
): EndpointRequest<IEndpoints['GET /users']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$top', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}`
 *
 * Retrieve the properties and relationships of user object. This operation returns by default only a subset of the more commonly used properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation for the user and specify the properties in a $select OData query option. Because the user resource supports extensions, you can also use the GET operation to get custom properties and extension data in a user instance. Customers through Microsoft Entra ID for customers can also use this API operation to retrieve their details.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}`
 *
 * Update the properties of a user object.
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}

/**
  * `POST /users`
  *
  * Create a new user.
The request body contains the user to create. At a minimum, you must specify the required properties for the user. You can optionally specify any other writable properties. This operation returns by default only a subset of the properties for each user. These default properties are noted in the Properties section. To get properties that are not returned by default, do a GET operation and specify the properties in a $select OData query option.
  */
export function create(
  body: IEndpoints['POST /users']['body'],
  params?: IEndpoints['POST /users']['parameters']
): EndpointRequest<IEndpoints['POST /users']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users',
    paramDefs: [],
    params,
    body,
  };
}
