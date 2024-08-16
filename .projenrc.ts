import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  constructsVersion: '10.0.5',
  typescriptVersion: '5.4.x',
  jsiiVersion: '5.4.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-waf-managed-rules-set-web-acl',
  description: 'This is an AWS CDK Construct for AWS Managed Rules Sets Web ACL on WAF V2.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'waf', 'acl'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-waf-managed-rules-set-web-acl.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '22.4.x',
  releaseToNpm: true,
  stability: 'experimental', // stable
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 19 * * 1']), // every monday
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();