'use strict';

var _a_system_for_event_artifact = require('./given/a_system_for_event_artifact');

describe('when_creating_an_event_with_everything_correctly_setup', function () {
    var context = new _a_system_for_event_artifact.a_system_for_event_artifact();
    var path = require('path');
    (function (beforeEach) {
        context.boilerPlatesManager.createArtifactInstance(context.eventArtifactTemplate, context.destination, context.context);
    })();

    it('should call the filesystem to get artifact template files with the correct arguments', function () {
        return context.folders.getArtifactTemplateFilesRecursivelyIn.should.be.calledWith(context.eventArtifactTemplate.location, context.eventArtifactTemplate.template.includedFiles);
    });
    it('should call the filesystem to read from the correct path', function () {
        return context.fileSystem.readFileSync.should.be.calledWith(path.join(context.templateLocation, context.includedFiles[0]));
    });
}); /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Dolittle. All rights reserved.
     *  Licensed under the MIT License. See LICENSE in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL1NvdXJjZS9ib2lsZXJQbGF0ZXMvZm9yX0JvaWxlclBsYXRlc01hbmFnZXIvZm9yX2NyZWF0ZUFydGlmYWN0SW5zdGFuY2Uvd2hlbl9jcmVhdGluZ19hbl9ldmVudF93aXRoX2V2ZXJ5dGhpbmdfY29ycmVjdGx5X3NldHVwLmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiY29udGV4dCIsImFfc3lzdGVtX2Zvcl9ldmVudF9hcnRpZmFjdCIsInBhdGgiLCJyZXF1aXJlIiwiYm9pbGVyUGxhdGVzTWFuYWdlciIsImNyZWF0ZUFydGlmYWN0SW5zdGFuY2UiLCJldmVudEFydGlmYWN0VGVtcGxhdGUiLCJkZXN0aW5hdGlvbiIsIml0IiwiZm9sZGVycyIsImdldEFydGlmYWN0VGVtcGxhdGVGaWxlc1JlY3Vyc2l2ZWx5SW4iLCJzaG91bGQiLCJiZSIsImNhbGxlZFdpdGgiLCJsb2NhdGlvbiIsInRlbXBsYXRlIiwiaW5jbHVkZWRGaWxlcyIsImZpbGVTeXN0ZW0iLCJyZWFkRmlsZVN5bmMiLCJqb2luIiwidGVtcGxhdGVMb2NhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7QUFLQTs7QUFFQUEsU0FBUyx3REFBVCxFQUFtRSxZQUFNO0FBQ3JFLFFBQUlDLFVBQVUsSUFBSUMsd0RBQUosRUFBZDtBQUNBLFFBQU1DLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQ0EsS0FBQyxzQkFBYztBQUNYSCxnQkFBUUksbUJBQVIsQ0FBNEJDLHNCQUE1QixDQUFtREwsUUFBUU0scUJBQTNELEVBQWtGTixRQUFRTyxXQUExRixFQUF1R1AsUUFBUUEsT0FBL0c7QUFDSCxLQUZEOztBQUlBUSxPQUFHLHNGQUFILEVBQ0k7QUFBQSxlQUFNUixRQUFRUyxPQUFSLENBQWdCQyxxQ0FBaEIsQ0FBc0RDLE1BQXRELENBQTZEQyxFQUE3RCxDQUFnRUMsVUFBaEUsQ0FBMkViLFFBQVFNLHFCQUFSLENBQThCUSxRQUF6RyxFQUFtSGQsUUFBUU0scUJBQVIsQ0FBOEJTLFFBQTlCLENBQXVDQyxhQUExSixDQUFOO0FBQUEsS0FESjtBQUVBUixPQUFHLDBEQUFILEVBQStEO0FBQUEsZUFBTVIsUUFBUWlCLFVBQVIsQ0FBbUJDLFlBQW5CLENBQWdDUCxNQUFoQyxDQUF1Q0MsRUFBdkMsQ0FBMENDLFVBQTFDLENBQXFEWCxLQUFLaUIsSUFBTCxDQUFVbkIsUUFBUW9CLGdCQUFsQixFQUFvQ3BCLFFBQVFnQixhQUFSLENBQXNCLENBQXRCLENBQXBDLENBQXJELENBQU47QUFBQSxLQUEvRDtBQUNILENBVkQsRSxDQVBBIiwiZmlsZSI6IndoZW5fY3JlYXRpbmdfYW5fZXZlbnRfd2l0aF9ldmVyeXRoaW5nX2NvcnJlY3RseV9zZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiAgQ29weXJpZ2h0IChjKSBEb2xpdHRsZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHthX3N5c3RlbV9mb3JfZXZlbnRfYXJ0aWZhY3QgfSBmcm9tICcuL2dpdmVuL2Ffc3lzdGVtX2Zvcl9ldmVudF9hcnRpZmFjdCc7XG5cbmRlc2NyaWJlKCd3aGVuX2NyZWF0aW5nX2FuX2V2ZW50X3dpdGhfZXZlcnl0aGluZ19jb3JyZWN0bHlfc2V0dXAnLCAoKSA9PiB7XG4gICAgbGV0IGNvbnRleHQgPSBuZXcgYV9zeXN0ZW1fZm9yX2V2ZW50X2FydGlmYWN0KCk7XG4gICAgY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbiAgICAoYmVmb3JlRWFjaCA9PiB7XG4gICAgICAgIGNvbnRleHQuYm9pbGVyUGxhdGVzTWFuYWdlci5jcmVhdGVBcnRpZmFjdEluc3RhbmNlKGNvbnRleHQuZXZlbnRBcnRpZmFjdFRlbXBsYXRlLCBjb250ZXh0LmRlc3RpbmF0aW9uLCBjb250ZXh0LmNvbnRleHQpO1xuICAgIH0pKCk7XG5cbiAgICBpdCgnc2hvdWxkIGNhbGwgdGhlIGZpbGVzeXN0ZW0gdG8gZ2V0IGFydGlmYWN0IHRlbXBsYXRlIGZpbGVzIHdpdGggdGhlIGNvcnJlY3QgYXJndW1lbnRzJywgXG4gICAgICAgICgpID0+IGNvbnRleHQuZm9sZGVycy5nZXRBcnRpZmFjdFRlbXBsYXRlRmlsZXNSZWN1cnNpdmVseUluLnNob3VsZC5iZS5jYWxsZWRXaXRoKGNvbnRleHQuZXZlbnRBcnRpZmFjdFRlbXBsYXRlLmxvY2F0aW9uLCBjb250ZXh0LmV2ZW50QXJ0aWZhY3RUZW1wbGF0ZS50ZW1wbGF0ZS5pbmNsdWRlZEZpbGVzKSk7IFxuICAgIGl0KCdzaG91bGQgY2FsbCB0aGUgZmlsZXN5c3RlbSB0byByZWFkIGZyb20gdGhlIGNvcnJlY3QgcGF0aCcsICgpID0+IGNvbnRleHQuZmlsZVN5c3RlbS5yZWFkRmlsZVN5bmMuc2hvdWxkLmJlLmNhbGxlZFdpdGgocGF0aC5qb2luKGNvbnRleHQudGVtcGxhdGVMb2NhdGlvbiwgY29udGV4dC5pbmNsdWRlZEZpbGVzWzBdKSkpO1xufSk7Il19