import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.80.0',
  typescriptVersion: '4.9.x',
  jsiiVersion: '~5.0.0',
  defaultReleaseBranch: 'main',
  name: '@gammarer/aws-waf-managed-rules-set-web-acl',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-managed-rules-set-web-acl.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '16.0.0',
  workflowNodeVersion: '18.17.1',
  releaseToNpm: false,
  depsUpgrade: false,
});
project.synth();