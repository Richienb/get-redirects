# Get Redirects [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/get-redirects/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/get-redirects)

Get the urls redirected to when loading a url.

[![NPM Badge](https://nodei.co/npm/get-redirects.png)](https://npmjs.com/package/get-redirects)

## Install

```sh
npm install get-redirects
```

## Usage

```js
const getRedirects = require("get-redirects");

(async () => {
    await getRedirects("https://google.com")
    //=> ['https://www.google.com/']

    await getRedirects("http://richienb.github.io")
    //=> ['http://www.richie-bendall.ml/', 'https://www.richie-bendall.ml/']
})()
```

## API

### getRedirects(url)

#### url

Type: `string`

The URL to check.
