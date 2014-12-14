(function() {
  describe('URL ::', function() {
    describe('Language ::', function() {
      return it('set default language', function() {
        return parrot.language.should.eql('en');
      });
    });
    describe('Endpoint ::', function() {
      it('add', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1337'
        });
        return parrot.endpoint.development().should.eql('http://localhost:1337');
      });
      it('add concatenate', function() {
        parrot.endpoint.add({
          name: 'development',
          url: 'http://localhost:1334'
        }).add({
          name: 'production',
          url: 'http://api.com'
        });
        parrot.endpoint.development().should.eql('http://localhost:1334');
        return parrot.endpoint.production().should.eql('http://api.com');
      });
      return it('set', function() {
        parrot.endpoint.set('production');
        return parrot.environment.should.eql('production');
      });
    });
    it('add with default values', function() {
      var _default;
      _default = {};
      parrot.url.add({
        name: 'login'
      });
      return parrot.url.login().should.eql(_default);
    });
    it('add with query', function() {
      var _default;
      _default = {
        query: "sort=id%20asc"
      };
      parrot.url.add({
        name: 'tweets',
        query: ['sort', 'id asc']
      });
      return parrot.url.tweets().should.eql(_default);
    });
    it('add with path and query', function() {
      var _default;
      _default = {
        path: 'tweet',
        query: 'sort=id%20asc'
      };
      parrot.url.add({
        name: 'tweets',
        path: 'tweet',
        query: ['sort', 'id asc']
      });
      return parrot.url.tweets().should.eql(_default);
    });
    it('add with path and query and change values dynamically', function() {
      var _default;
      _default = {
        path: 'tweet',
        query: 'sort=id%20desc',
        method: 'POST'
      };
      parrot.url.add({
        name: 'tweets',
        path: 'tweet',
        query: ['sort', 'id asc']
      });
      return parrot.url.tweets({
        method: 'POST',
        query: ['sort', 'id desc']
      }).should.eql(_default);
    });
    return it('added headers dynamically', function() {
      var _default, _headers;
      _headers = {
        Autorization: 'Bearer token'
      };
      _default = {
        path: 'tweet',
        query: 'sort=id%20desc',
        headers: _headers,
        method: 'POST'
      };
      parrot.url.add({
        name: 'tweets',
        path: 'tweet',
        query: ['sort', 'id asc']
      });
      return parrot.url.tweets({
        headers: _headers,
        method: 'POST',
        query: ['sort', 'id desc']
      }).should.eql(_default);
    });
  });

}).call(this);
