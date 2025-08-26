import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport': Operation<
    '/deviceManagement/reports/getCompliancePolicyNonComplianceReport',
    'post'
  >;
}

/**
 * `POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport']['body'],
  params?: IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/reports/getCompliancePolicyNonComplianceReport']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/reports/getCompliancePolicyNonComplianceReport',
    paramDefs: [],
    params,
    body,
  };
}
