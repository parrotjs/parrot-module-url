# Parrot URL <a href="http://bower.io/search/?q=parrot-module-url"><img src="http://benschwarz.github.io/bower-badges/badge@2x.png" width="130" height="30"></a>

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/parrotjs/Parrotjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency status](http://img.shields.io/david/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs)
[![Dev Dependencies Status](http://img.shields.io/david/dev/parrotjs/Parrotjs.svg?style=flat)](https://david-dm.org/parrotjs/Parrotjs#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/Kikobeats.svg?style=flat)](https://www.gittip.com/Kikobeats/)

> URL Management with support for different environments (testing, production, development,...).

Remember use with [AJAX module](https://github.com/parrotjs/parrot-module-ajax) for better experience.

## Browsers Compatibility

[![browser support](https://ci.testling.com/parrotjs/parrot-module-url.png)
](https://ci.testling.com/parrotjs/parrot-module-url)

## Install

```bash
bower install parrot-module-url --save
```

## Get Started

The module `parrot.url` provides you everything you need for URL management. For do this:

* Extend `parrot` namespace.
* Add new `parrot.endpoint` namespace.
* Add new `parrot.url` namespace.

## Documentation

### parrot

In the `parrot` namespace, add the following methods:

#### .environment

It returns the environment that you are using at this moment.

```coffee
parrot.environment
# => 'development'
```

The default environment is `development`.

### parrot.endpoint

The methods that are available in the `parrot.endpoint` namespace are:

#### .add(&lt;Object&gt;)

It registers a new endpoint. Object must have:

```coffee
name : 'development'
url  : 'http://localhost:1337'
```

When you register an endpoint it is accesible in the `parrot.endpoint` namespace:

```coffee
parrot.endpoint.development()
# => http://localhost:1337
```

#### .set(&lt;String&gt;)

It sets the default environment of `parrot.environment`. It's important due to the URLs depend on the URL path registered in the environment.

```coffee
parrot.environment.set 'production'
```

The methods that are available in `parrot.url` namespace are:

URL Management makes easier to do ajax or sockets requests with your backend. In order to do it, you need first to register the URLs. Each URL has a different schema, as `protocol`, `path` and/or `query`.

### parrot.URL

#### .add(&lt;Object&gt;)

It registers a new URL. The minimum information you need to check is:

```coffee
name: 'login'
```

You can specify the same options than ajax options and other options specify of the URL:

```coffee
path  : 'user/find'
query : ['sort','id asc']
```

Remember that in a URL Object the `url` is equal to:

```
<endpoint URL>/[url.path]/[url.query]
```

Now, the URL is available in the `parrot.url` namespace:

```coffee
parrot.url.login()
# => { method: 'GET', protocol: 'http', path: 'user/login', query: null }
```

If you want update a value, you can provide an argument when you call the method. For example, if you want to login you need to send the user information to the server:

```coffee
user = username: 'kiko', password: 'nerd'
parrot.url.login send: user
```

## License

MIT © ParrotJS
