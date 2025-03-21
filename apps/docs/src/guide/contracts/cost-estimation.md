# Estimating Contract Call Cost

The [`FunctionInvocationScope.getTransactionCost`](DOCS_API_URL/classes/_fuel_ts_program.FunctionInvocationScope.html#getTransactionCost) method allows you to estimate the cost of a specific contract call. The return type, `TransactionCost`, is an object containing relevant information for the estimation:

<<< @/../../../packages/account/src/providers/provider.ts#cost-estimation-1{ts:line-numbers}

The following example demonstrates how to get the estimated transaction cost for:

## 1. Single contract call transaction:

<<< @./snippets/cost-estimation.ts#cost-estimation-1{ts:line-numbers}

## 2. Multiple contract calls transaction:

<<< @./snippets/cost-estimation.ts#cost-estimation-2{ts:line-numbers}

You can use the transaction cost estimation to set the gas limit for an actual call or display the estimated cost to the user.
