# AWS WAF(V2) Managed Rules Set Web ACL

This is an AWS CDK Construct for Rate Limit Rule on WAF V2.

## Resources

This construct creating resource list.

- WAF V2 Web ACL

## Install

### TypeScript

```shell
npm install @gammarer/aws-waf-managed-rules-set-web-acl
# or
yarn add @gammarer/aws-waf-managed-rules-set-web-acl
```

## Example

```typescript
import { ScopeType, WafManagedRulesSetWebACL } from '@gammarer/aws-waf-managed-rules-set-web-acl';

const webAcl = new WafManagedRulesSetWebACL(stack, 'WafManagedRulesSetWebACL', {
  scope: ScopeType.REGIONAL,
});

```

## License

This project is licensed under the Apache-2.0 License.


