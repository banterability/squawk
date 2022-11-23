# squawk

Read out complex strings in a vaguely understandable way.

[![Latest Version](https://img.shields.io/npm/v/squawk.svg)](https://www.npmjs.com/package/squawk)
[![Build status](https://img.shields.io/circleci/project/github/banterability/squawk/main.svg)](https://circleci.com/gh/banterability/squawk/tree/main)

### Usage

#### From the command line

Installation:

```bash
$ npm install -g squawk
```

Usage:

```bash
$ squawk THX-1138
tango
hotel
x-ray
dash
one
one
three
eight
```

#### From Node.js

Installation:

```bash
$ npm install squawk
```

Usage:

```javascript
var squawk = require("squawk");
squawk("a113");
// -> ['alpha', 'one', 'one', 'three']
```
