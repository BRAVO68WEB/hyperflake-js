<h1  align="center"  style="border-bottom: none;">❄️ Hyperflake </h1>

<h3  align="center">A simple and lightweight Node.js library to generate unique snowflake like IDs starting from beginning of the 21th century. </h3>

<br  />

<p  align="center">

<a  href="https://github.com/BRAVO68WEB/Hyperflake/actions/workflows/test-and-release.yml">

<img  alt="Build states"  src="https://github.com/BRAVO68WEB/Hyperflake/actions/workflows/test-and-release.yml/badge.svg?branch=main">

</a>

<a  href="https://www.npmjs.com/package/hyperflake">

<img  alt="npm latest version"  src="https://img.shields.io/npm/v/hyperflake/latest.svg">

</a>

<a  href="https://www.npmjs.com/package/hyperflake">

<img  alt="npm bundle size"  src="https://img.shields.io/bundlephobia/min/hyperflake">

</a>
<a  href="https://www.npmjs.com/package/hyperflake">

<img  alt="NPM license"  src="https://img.shields.io/npm/l/hyperflake">

</a>

<p  align="center">

<a  href="https://github.com/BRAVO68WEB/hyperflake/issues/new?template=bug_report.md">Bug report</a>

<a  href="https://github.com/BRAVO68WEB/hyperflake/issues/new?template=feature_request.md">Feature request</a>

</p>

<hr  />

`hyperflake` is a Node.js library for generating unique and distributed IDs that are suitable for use as primary keys in distributed systems.

It generates 64-bit IDs (in string format) that are composed of a timestamp, a worker ID, and a sequence number. These IDs are based on [Twitter's Snowflake ID](https://github.com/twitter-archive/snowflake/tree/snowflake-2010) generation algorithm.

> Read in detail about [what are Snowflake IDs](https://akashrajpurohit.com/blog/snowflake-id-generating-unique-ids-for-distributed-systems/?ref=github-desc)

## Installation 🚀

You can install `hyperflake` using pnpm/npm/yarn:

```bash

pnpm  add  hyperflake



# OR



npm  install  hyperflake



# OR



yarn  add  hyperflake

```

## Usage 💻

Here's an example of how to use `hyperflake`:

```javascript
const { SnowflakeId } = require('hyperflake');

const snowflake = SnowflakeId();

console.log(snowflake.generate()); // 3111215718188835840
```

This will generate a unique ID in string format.

## Methods 🧮

The SnowflakeId instance has the following methods:

- `generate()`: Generates a unique ID in string format.
- `decode()`: Retrive timestamp when the ID was generated.

## Error Handling 😱

The SnowflakeId instance throws an error if the clock moves backwards, i.e., if the current timestamp is less than the last timestamp.

This can happen if the system clock is adjusted manually or if the system clock drifts significantly.

If this happens, the library throws an Error with the message `Clock is moving backwards!`.

## Examples 🔠

Here's an example of how to generate 10 IDs:

```javascript
import { SnowflakeId } from 'hyperflake';

const snowflake = SnowflakeId();

for (let i = 0; i < 10; i++) {
  console.log(snowflake.generate());
}
```

## Bugs or Requests 🐛

If you encounter any problems feel free to open an [issue](https://github.com/bravo68web/hyperflake/issues/new?template=bug_report.md). If you feel the project is missing a feature, please raise a [ticket](https://github.com/bravo68web/hyperflake/new?template=feature_request.md) on GitHub and I'll look into it. Pull requests are also welcome.
