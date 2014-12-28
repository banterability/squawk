squawk
======

Read out complex strings in a vaguely understandable way.

[![Build Status](https://travis-ci.org/banterability/squawk.svg?branch=master)](https://travis-ci.org/banterability/squawk)

### Usage

#### From the command line

Installation:

```bash
$ npm install -g squawk
```

Usage:

```bash
$ squawk THX1138
tango
hotel
x-ray
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
var squawk = require('squawk');
squawk('a113');
// -> ['alpha', 'one', 'one', 'three']
```
