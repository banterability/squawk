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
$ squawk abc123
alpha
bravo
charlie
one
two
three
```

#### From Node.js

Installation:

```bash
$ npm install squawk
```

Usage:

```javascript
var squawk = require('squawk');
console.log(squawk('1a3'));
# -> one\nalpha\nthree
```
