#!/usr/bin/env node
'use strict';

var _args = require('args');

var _args2 = _interopRequireDefault(_args);

var _globals = require('./globals');

var _globals2 = _interopRequireDefault(_globals);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USAGE = 'dolittle add intconcept [name]';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

_args2.default.example(USAGE, 'Creates a concept as int in the current folder');

_args2.default.parse(process.argv, { value: _helpers.usagePrefix + USAGE, name: 'dolittle add intconcept' });

if (!_args2.default.sub.length || _args2.default.sub.length < 1) _args2.default.showHelp();

(0, _helpers.validateArgsNameInput)(_args2.default.sub[0]);
var context = {
  artifactName: _args2.default.sub[0],
  artifactType: 'conceptAsInt',
  destination: process.cwd()
};

_globals2.default.artifactsManager.createArtifact(context);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL1NvdXJjZS9kb2xpdHRsZS1hZGQtaW50Y29uY2VwdC5qcyJdLCJuYW1lcyI6WyJVU0FHRSIsImFyZ3MiLCJleGFtcGxlIiwicGFyc2UiLCJwcm9jZXNzIiwiYXJndiIsInZhbHVlIiwidXNhZ2VQcmVmaXgiLCJuYW1lIiwic3ViIiwibGVuZ3RoIiwic2hvd0hlbHAiLCJjb250ZXh0IiwiYXJ0aWZhY3ROYW1lIiwiYXJ0aWZhY3RUeXBlIiwiZGVzdGluYXRpb24iLCJjd2QiLCJnbG9iYWxzIiwiYXJ0aWZhY3RzTWFuYWdlciIsImNyZWF0ZUFydGlmYWN0Il0sIm1hcHBpbmdzIjoiOztBQU1BOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFFBQVEsZ0NBQWQ7O0FBUkE7Ozs7O0FBU0FDLGVBQ0tDLE9BREwsQ0FDYUYsS0FEYixFQUNvQixnREFEcEI7O0FBR0FDLGVBQUtFLEtBQUwsQ0FBV0MsUUFBUUMsSUFBbkIsRUFBeUIsRUFBQ0MsT0FBT0MsdUJBQWNQLEtBQXRCLEVBQTZCUSxNQUFNLHlCQUFuQyxFQUF6Qjs7QUFFQSxJQUFJLENBQUVQLGVBQUtRLEdBQUwsQ0FBU0MsTUFBWCxJQUFxQlQsZUFBS1EsR0FBTCxDQUFTQyxNQUFULEdBQWtCLENBQTNDLEVBQThDVCxlQUFLVSxRQUFMOztBQUU5QyxvQ0FBc0JWLGVBQUtRLEdBQUwsQ0FBUyxDQUFULENBQXRCO0FBQ0EsSUFBSUcsVUFBVTtBQUNWQyxnQkFBY1osZUFBS1EsR0FBTCxDQUFTLENBQVQsQ0FESjtBQUVWSyxnQkFBYyxjQUZKO0FBR1ZDLGVBQWFYLFFBQVFZLEdBQVI7QUFISCxDQUFkOztBQU1BQyxrQkFBUUMsZ0JBQVIsQ0FBeUJDLGNBQXpCLENBQXdDUCxPQUF4QyIsImZpbGUiOiJkb2xpdHRsZS1hZGQtaW50Y29uY2VwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgRG9saXR0bGUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbXBvcnQgYXJncyBmcm9tICdhcmdzJztcbmltcG9ydCBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XG5pbXBvcnQgeyB1c2FnZVByZWZpeCwgdmFsaWRhdGVBcmdzTmFtZUlucHV0IH0gZnJvbSAnLi9oZWxwZXJzJztcblxuY29uc3QgVVNBR0UgPSAnZG9saXR0bGUgYWRkIGludGNvbmNlcHQgW25hbWVdJztcbmFyZ3NcbiAgICAuZXhhbXBsZShVU0FHRSwgJ0NyZWF0ZXMgYSBjb25jZXB0IGFzIGludCBpbiB0aGUgY3VycmVudCBmb2xkZXInKTtcbiBcbmFyZ3MucGFyc2UocHJvY2Vzcy5hcmd2LCB7dmFsdWU6IHVzYWdlUHJlZml4ICsgVVNBR0UsIG5hbWU6ICdkb2xpdHRsZSBhZGQgaW50Y29uY2VwdCd9KTtcblxuaWYgKCEgYXJncy5zdWIubGVuZ3RoIHx8IGFyZ3Muc3ViLmxlbmd0aCA8IDEpIGFyZ3Muc2hvd0hlbHAoKTtcblxudmFsaWRhdGVBcmdzTmFtZUlucHV0KGFyZ3Muc3ViWzBdKTtcbmxldCBjb250ZXh0ID0ge1xuICAgIGFydGlmYWN0TmFtZTogYXJncy5zdWJbMF0sIFxuICAgIGFydGlmYWN0VHlwZTogJ2NvbmNlcHRBc0ludCcsXG4gICAgZGVzdGluYXRpb246IHByb2Nlc3MuY3dkKClcbn07XG5cbmdsb2JhbHMuYXJ0aWZhY3RzTWFuYWdlci5jcmVhdGVBcnRpZmFjdChjb250ZXh0KTtcbiJdfQ==