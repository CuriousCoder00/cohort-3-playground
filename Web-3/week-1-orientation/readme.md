# Week 1

## Why Blockchain?

### 1. Currency Inflation and Devaluation

Governments often print more money, which drives inflation and diminishes the value of currency over time. Holding cash is seen as unwise compared to assets like gold or real estate, which tend to retain value better.

### 2. Fractional Reserve Banking

Banks don’t keep all deposits on hand; they lend most of it out. If too many people withdraw simultaneously (a "bank run"), the bank may fail to meet all withdrawal requests, risking collapse.

### 3. Historical Financial Collapses

- **Silicon Valley Bank (SVB):** Its collapse in 2022 had severe impacts, especially on startups backed by YC. While bailed out, without this, many companies might have failed.
- **2008 Financial Crisis:** Triggered by risky mortgage-backed securities, the government had to use taxpayer money to bail out Wall Street banks despite their negligence.

### 4. Currency Depreciation

Many currencies, like the INR and JPY, lose value over time due to not being backed by assets. This creates dependency on central governments to issue currency.

### 5. Blockchain as a Solution

Unlike traditional currencies, blockchain-based assets are decentralized and transparent. Blockchain allows anyone to create a currency (like “Kirat coin”), but it requires trust in scarcity and decentralization to gain value.


## Hashing

Hashing is a process that turns data into a fixed-size string of characters. The properties of hash functions make them secure, reliable, and collision-resistant, key for blockchain security.

```copy
const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)
```