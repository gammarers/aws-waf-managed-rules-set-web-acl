import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.70.0',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.1.x',
  jsiiVersion: '5.1.x',
  name: '@gammarer/aws-waf-managed-rules-set-web-acl',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/aws-waf-managed-rules-set-web-acl.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '18.17.1',
  releaseToNpm: false,
  depsUpgrade: false,
});
project.synth();