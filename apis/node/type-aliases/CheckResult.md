[@filego/node](../README.md) / CheckResult

# Type Alias: CheckResult

```ts
type CheckResult = 
  | {
  success: true;
}
  | {
  error: CheckResultError;
  success: false;
};
```

Defined in: shared/dist/index.d.ts:15

Result of the `check` function.

## Type declaration

```ts
{
  success: true;
}
```

### success

```ts
success: true;
```

Successful check.

```ts
{
  error: CheckResultError;
  success: false;
}
```

### error

```ts
error: CheckResultError;
```

Error details of the check.

### success

```ts
success: false;
```

Failed check.
