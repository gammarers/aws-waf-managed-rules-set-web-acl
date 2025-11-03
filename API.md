# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafManagedRulesSetWebACL <a name="WafManagedRulesSetWebACL" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer"></a>

```typescript
import { WafManagedRulesSetWebACL } from '@gammarers/aws-waf-managed-rules-set-web-acl'

new WafManagedRulesSetWebACL(scope: Construct, id: string, props: WafManagedRulesSetWebACLProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | Specifies whether this is for an Amazon CloudFront distribution or for a regional application. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps">WafManagedRulesSetWebACLProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Specifies whether this is for an Amazon CloudFront distribution or for a regional application.

A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, or an AWS App Runner service. Valid Values are `CLOUDFRONT` and `REGIONAL` .

> For `CLOUDFRONT` , you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1` .

For information about how to define the association of the web ACL with your resource, see `WebACLAssociation` .

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps">WafManagedRulesSetWebACLProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDependency">addDependency</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.obtainDependencies">obtainDependencies</a></code> | Retrieves an array of resources this resource depends on. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.obtainResourceDependencies">obtainResourceDependencies</a></code> | Get a shallow copy of dependencies between this resource and other resources in the same stack. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.removeDependency">removeDependency</a></code> | Indicates that this resource no longer depends on another resource. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.replaceDependency">replaceDependency</a></code> | Replaces one dependency with another. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependency` <a name="addDependency" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDependency"></a>

```typescript
public addDependency(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### ~~`addDependsOn`~~ <a name="addDependsOn" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

###### `target`<sup>Required</sup> <a name="target" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
  "GlobalSecondaryIndexes": [
    {
      "Projection": {
        "NonKeyAttributes": [ "myattribute" ]
        ...
      }
      ...
    },
    {
      "ProjectionType": "INCLUDE"
      ...
    },
  ]
  ...
}
```

The `value` argument to `addOverride` will not be processed or translated
in any way. Pass raw JSON values in here with the correct capitalization
for CloudFormation. If you pass CDK classes or structs, they will be
rendered with lowercased key names, and CloudFormation will reject the
template.

###### `path`<sup>Required</sup> <a name="path" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`). In some
cases, a snapshot can be taken of the resource prior to deletion
(`RemovalPolicy.SNAPSHOT`). A list of resources that support this policy
can be found in the following link:

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html#aws-attribute-deletionpolicy-options)

###### `policy`<sup>Optional</sup> <a name="policy" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getAtt"></a>

```typescript
public getAtt(attributeName: string, typeHint?: ResolutionTypeHint): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

###### `typeHint`<sup>Optional</sup> <a name="typeHint" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getAtt.parameter.typeHint"></a>

- *Type:* aws-cdk-lib.ResolutionTypeHint

---

##### `getMetadata` <a name="getMetadata" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `obtainDependencies` <a name="obtainDependencies" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.obtainDependencies"></a>

```typescript
public obtainDependencies(): (Stack | CfnResource)[]
```

Retrieves an array of resources this resource depends on.

This assembles dependencies on resources across stacks (including nested stacks)
automatically.

##### `obtainResourceDependencies` <a name="obtainResourceDependencies" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.obtainResourceDependencies"></a>

```typescript
public obtainResourceDependencies(): CfnResource[]
```

Get a shallow copy of dependencies between this resource and other resources in the same stack.

##### `removeDependency` <a name="removeDependency" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.removeDependency"></a>

```typescript
public removeDependency(target: CfnResource): void
```

Indicates that this resource no longer depends on another resource.

This can be used for resources across stacks (including nested stacks)
and the dependency will automatically be removed from the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.removeDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `replaceDependency` <a name="replaceDependency" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.replaceDependency"></a>

```typescript
public replaceDependency(target: CfnResource, newTarget: CfnResource): void
```

Replaces one dependency with another.

###### `target`<sup>Required</sup> <a name="target" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.replaceDependency.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

The dependency to replace.

---

###### `newTarget`<sup>Required</sup> <a name="newTarget" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.replaceDependency.parameter.newTarget"></a>

- *Type:* aws-cdk-lib.CfnResource

The new dependency to add.

---

##### `inspect` <a name="inspect" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### `isConstruct` <a name="isConstruct" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isConstruct"></a>

```typescript
import { WafManagedRulesSetWebACL } from '@gammarers/aws-waf-managed-rules-set-web-acl'

WafManagedRulesSetWebACL.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isCfnElement"></a>

```typescript
import { WafManagedRulesSetWebACL } from '@gammarers/aws-waf-managed-rules-set-web-acl'

WafManagedRulesSetWebACL.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isCfnResource"></a>

```typescript
import { WafManagedRulesSetWebACL } from '@gammarers/aws-waf-managed-rules-set-web-acl'

WafManagedRulesSetWebACL.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrArn">attrArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the web ACL. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrCapacity">attrCapacity</a></code> | <code>number</code> | The web ACL capacity units (WCUs) currently being used by this web ACL. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrId">attrId</a></code> | <code>string</code> | The ID of the web ACL. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrLabelNamespace">attrLabelNamespace</a></code> | <code>string</code> | The label namespace prefix for this web ACL. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | Key:value pairs associated with an AWS resource. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.defaultAction">defaultAction</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.DefaultActionProperty</code> | The action to perform if none of the `Rules` contained in the `WebACL` match. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.scope">scope</a></code> | <code>string</code> | Specifies whether this is for an Amazon CloudFront distribution or for a regional application. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.visibilityConfig">visibilityConfig</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.VisibilityConfigProperty</code> | Defines and enables Amazon CloudWatch metrics and web request sample collection. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.captchaConfig">captchaConfig</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.CaptchaConfigProperty</code> | Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.challengeConfig">challengeConfig</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.ChallengeConfigProperty</code> | Specifies how AWS WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.customResponseBodies">customResponseBodies</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.CustomResponseBodyProperty}</code> | A map of custom response keys and content bodies. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.description">description</a></code> | <code>string</code> | A description of the web ACL that helps with identification. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.name">name</a></code> | <code>string</code> | The name of the web ACL. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.rules">rules</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_wafv2.CfnWebACL.RuleProperty[]</code> | The rule statements used to identify the web requests that you want to allow, block, or count. |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.tokenDomains">tokenDomains</a></code> | <code>string[]</code> | Specifies the domains that AWS WAF should accept in a web request token. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the web ACL.

---

##### `attrCapacity`<sup>Required</sup> <a name="attrCapacity" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrCapacity"></a>

```typescript
public readonly attrCapacity: number;
```

- *Type:* number

The web ACL capacity units (WCUs) currently being used by this web ACL.

AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

The ID of the web ACL.

---

##### `attrLabelNamespace`<sup>Required</sup> <a name="attrLabelNamespace" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.attrLabelNamespace"></a>

```typescript
public readonly attrLabelNamespace: string;
```

- *Type:* string

The label namespace prefix for this web ACL.

All labels added by rules in this web ACL have this prefix.

The syntax for the label namespace prefix for a web ACL is the following: `awswaf:<account ID>:webacl:<web ACL name>:`

When a rule with a label matches a web request, AWS WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

Key:value pairs associated with an AWS resource.

The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.

> To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation , you can only add tags to AWS WAF resources during resource creation.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tags)

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.defaultAction"></a>

```typescript
public readonly defaultAction: IResolvable | DefaultActionProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.DefaultActionProperty

The action to perform if none of the `Rules` contained in the `WebACL` match.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-defaultaction](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-defaultaction)

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Specifies whether this is for an Amazon CloudFront distribution or for a regional application.

A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, or an AWS App Runner service. Valid Values are `CLOUDFRONT` and `REGIONAL` .

> For `CLOUDFRONT` , you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1` .

For information about how to define the association of the web ACL with your resource, see `WebACLAssociation` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-scope](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-scope)

---

##### `visibilityConfig`<sup>Required</sup> <a name="visibilityConfig" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.visibilityConfig"></a>

```typescript
public readonly visibilityConfig: IResolvable | VisibilityConfigProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.VisibilityConfigProperty

Defines and enables Amazon CloudWatch metrics and web request sample collection.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig)

---

##### `captchaConfig`<sup>Optional</sup> <a name="captchaConfig" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.captchaConfig"></a>

```typescript
public readonly captchaConfig: IResolvable | CaptchaConfigProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.CaptchaConfigProperty

Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings.

If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-captchaconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-captchaconfig)

---

##### `challengeConfig`<sup>Optional</sup> <a name="challengeConfig" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.challengeConfig"></a>

```typescript
public readonly challengeConfig: IResolvable | ChallengeConfigProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.ChallengeConfigProperty

Specifies how AWS WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings.

If you don't specify this, AWS WAF uses its default settings for `ChallengeConfig` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-challengeconfig](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-challengeconfig)

---

##### `customResponseBodies`<sup>Optional</sup> <a name="customResponseBodies" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.customResponseBodies"></a>

```typescript
public readonly customResponseBodies: IResolvable | {[ key: string ]: IResolvable | CustomResponseBodyProperty};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.CustomResponseBodyProperty}

A map of custom response keys and content bodies.

When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.

For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .

For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponsebodies](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponsebodies)

---

##### `description`<sup>Optional</sup> <a name="description" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the web ACL that helps with identification.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-description](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-description)

---

##### `name`<sup>Optional</sup> <a name="name" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the web ACL.

You cannot change the name of a web ACL after you create it.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-name)

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.rules"></a>

```typescript
public readonly rules: IResolvable | (IResolvable | RuleProperty)[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_wafv2.CfnWebACL.RuleProperty[]

The rule statements used to identify the web requests that you want to allow, block, or count.

Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rules](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rules)

---

##### `tokenDomains`<sup>Optional</sup> <a name="tokenDomains" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.tokenDomains"></a>

```typescript
public readonly tokenDomains: string[];
```

- *Type:* string[]

Specifies the domains that AWS WAF should accept in a web request token.

This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tokendomains](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tokendomains)

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACL.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

## Structs <a name="Structs" id="Structs"></a>

### WafManagedRulesSetWebACLProps <a name="WafManagedRulesSetWebACLProps" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps.Initializer"></a>

```typescript
import { WafManagedRulesSetWebACLProps } from '@gammarers/aws-waf-managed-rules-set-web-acl'

const wafManagedRulesSetWebACLProps: WafManagedRulesSetWebACLProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps.property.scope">scope</a></code> | <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType">ScopeType</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps.property.scope"></a>

```typescript
public readonly scope: ScopeType;
```

- *Type:* <a href="#@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType">ScopeType</a>

---

##### `name`<sup>Optional</sup> <a name="name" id="@gammarers/aws-waf-managed-rules-set-web-acl.WafManagedRulesSetWebACLProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### ScopeType <a name="ScopeType" id="@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType.GLOBAL">GLOBAL</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType.REGIONAL">REGIONAL</a></code> | *No description.* |

---

##### `GLOBAL` <a name="GLOBAL" id="@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType.GLOBAL"></a>

---


##### `REGIONAL` <a name="REGIONAL" id="@gammarers/aws-waf-managed-rules-set-web-acl.ScopeType.REGIONAL"></a>

---

