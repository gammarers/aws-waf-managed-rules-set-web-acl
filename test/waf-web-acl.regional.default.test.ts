import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as waf from 'aws-cdk-lib/aws-wafv2';
import { ScopeType, WafManagedRulesSetWebACL } from '../src';

describe('Web Acl rule default group testing', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const acl = new WafManagedRulesSetWebACL(stack, 'WafManagedRulesSetWebACL', {
    scope: ScopeType.GLOBAL,
  });

  it('Is Waf Web ACL', () => {
    expect(acl).toBeInstanceOf(waf.CfnWebACL);
  });

  const template = Template.fromStack(stack);


  it('Should match snapshot', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});