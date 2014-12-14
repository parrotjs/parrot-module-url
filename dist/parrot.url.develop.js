/**
 * parrot-module-url - URL Management for Parrot
 * @version v0.12.14
 * @link    http://github.com/sailor/parrot-module-url
 * @author  Kiko Beats (https://github.com/Kikobeats)
 * @license MIT
 */
(function() {
  (function() {
    var _URL, _getQuery;
    _URL = {};
    _getQuery = function(queries) {
      var index, key, option, query, url, _i, _j, _len, _len1, _ref;
      url = new Url();
      _ref = ['protocol', 'path', 'host', 'port', 'hash'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        url[key] = '';
      }
      for (index = _j = 0, _len1 = queries.length; _j < _len1; index = _j += 2) {
        option = queries[index];
        url.query[option] = queries[index + 1];
      }
      query = url.toString();
      if (query.charAt(0) === '?') {
        query = query.substring(1);
      }
      return query;
    };
    parrot.environment = 'development';
    parrot.language = navigator.language.slice(0, 2);
    parrot.endpoint = {
      add: function(obj) {
        this[obj.name] = function() {
          return obj.url;
        };
        return this;
      },
      set: function(environment) {
        parrot.environment = environment;
        return this;
      }
    };
    return parrot.url = {
      getOrUpdate: function(name, update) {
        var option;
        if (update == null) {
          update = void 0;
        }
        if (update != null) {
          for (option in update) {
            _URL[name][option] = update[option];
          }
          if (update.query != null) {
            _URL[name].query = _getQuery(update.query);
          }
        }
        return _URL[name];
      },
      add: function(opts) {
        var name;
        name = opts.name;
        delete opts.name;
        if (opts.query != null) {
          opts.query = _getQuery(opts.query);
        }
        _URL[name] = opts;
        this[name] = require('fn-partial')(this.getOrUpdate, name);
        return this;
      }
    };
  })();

}).call(this);
