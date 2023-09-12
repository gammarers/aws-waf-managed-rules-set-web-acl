import * as waf from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

export interface WafManagedRulesSetWebACLProps {
  readonly name?: string;
  readonly scope: ScopeType;
}

export enum ScopeType {
  GLOBAL = 'Global',
  REGIONAL = 'Regional',
}

// export enum ServerType {
//   LINUX = 'Linux',
//   WINDOWS = 'Windows',
// }

export class WafManagedRulesSetWebACL extends waf.CfnWebACL {
  constructor(scope: Construct, id: string, props: WafManagedRulesSetWebACLProps) {
    super(scope, id, {
      name: props.name,
      description: '',
      scope: ((): string => {
        switch (props.scope) {
          case ScopeType.GLOBAL:
            return 'CLOUDFRONT';
          case ScopeType.REGIONAL:
            return 'REGIONAL';
        }
      })(),
      defaultAction: {
        allow: {},
      },
      rules: ((): waf.CfnWebACL.RuleProperty[] => {
        //const rules: waf.CfnWebACL.RuleProperty[] = [
        return [
          {
            name: 'aws-managed-rules-common-rule-set',
            priority: 0,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesCommonRuleSet',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesCommonRuleSet',
            },
          },
          {
            name: 'aws-managed-rules-known-bad-inputs-rule-set',
            priority: 1,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesKnownBadInputsRuleSet',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesKnownBadInputsRuleSet',
            },
          },
          {
            name: 'aws-managed-rules-amazon-ip-reputation-rule-set',
            priority: 2,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesAmazonIpReputationList',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesAmazonIpReputationList',
            },
          },
          {
            name: 'aws-managed-rules-anonymous-ip-list',
            priority: 3,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesAnonymousIpList',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesAnonymousIpList',
            },
          },
          {
            name: 'aws-managed-rules-sqli-rule-set',
            priority: 4,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesSQLiRuleSet',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesSQLiRuleSet',
            },
          },
          // only server type is linux
          {
            name: 'aws-managed-rules-linux-rule-set',
            priority: 5,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesLinuxRuleSet',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesLinuxRuleSet',
            },
          },
          {
            name: 'aws-managed-rules-unix-rule-set',
            priority: 6,
            overrideAction: {
              count: {},
            },
            statement: {
              managedRuleGroupStatement: {
                vendorName: 'AWS',
                name: 'AWSManagedRulesUnixRuleSet',
                excludedRules: [],
              },
            },
            visibilityConfig: {
              sampledRequestsEnabled: true,
              cloudWatchMetricsEnabled: true,
              metricName: 'AWSManagedRulesUnixRuleSet',
            },
          },
        ];
        //return rules;
      })(),
      customResponseBodies: undefined,
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudWatchMetricsEnabled: true,
        metricName: 'WafManagedRulesSetWebACL',
      },
    });
  }
}