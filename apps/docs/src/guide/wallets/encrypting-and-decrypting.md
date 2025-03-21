# Encrypting and Decrypting

JSON wallets are a standardized way of storing wallets securely. They follow a specific schema and are encrypted using a password. This makes it easier to manage multiple wallets and securely store them on disk. This guide will take you through the process of encrypting and decrypting JSON wallets using the Typescript SDK.

## Encrypting a Wallet

We will be calling `encrypt` from the [`WalletUnlocked`](DOCS_API_URL/classes/_fuel_ts_account.WalletUnlocked.html) instance which will take a password as the argument. It will encrypt the private key using a cipher and returns the JSON keystore wallet. You can then securely store this JSON wallet.

Here is an example of how you can accomplish this:

<<< @./snippets/encrypting-and-decrypting-wallets.ts#encrypting-and-decrypting-json-wallets-1{ts:line-numbers}

Please note that `encrypt` must be called within an instance of [`WalletUnlocked`](DOCS_API_URL/classes/_fuel_ts_account.WalletUnlocked.html). This instance can only be achieved through passing a private key or mnemonic phrase to a locked wallet.

## Decrypting a Wallet

To decrypt the JSON wallet and retrieve your private key, you can call `fromEncryptedJson` on a [Wallet](DOCS_API_URL/classes/_fuel_ts_account.Wallet.html) instance. It takes the encrypted JSON wallet and the password as its arguments, and returns the decrypted wallet.

Here is an example:

<<< @./snippets/encrypting-and-decrypting-json-wallets-two.ts#encrypting-and-decrypting-json-wallets-2{ts:line-numbers}

In this example, `decryptedWallet` is an instance of [`WalletUnlocked`](DOCS_API_URL/classes/_fuel_ts_account.WalletUnlocked.html) class, now available for use.

## Important

Remember to securely store your encrypted JSON wallet and password. If you lose them, there will be no way to recover your wallet. For security reasons, avoid sharing your private key, encrypted JSON wallet or password with anyone.
