
describe('some tests for linked list', function() {
  var linkedList = require('../../lib/jasmine_examples/linkedlist');
  var list = null;

  //initialize b/f every test
  beforeEach(function() {
    list = new List();
  });

  it('should start with empty list', function() {
    expect(list.start).toBeNull();
    expect(list.end).toBeNull();
  });

  it('should add single item to the list', function() {
    list.linkedList('einar');
    expect(list.start).not.toBeNull();
    expect(list.end).not.toBeNull();
    expect(list.start.data).toEqual('einar');
    expect(list.end.data).toEqual('einar');
  });

  it('should have a null next item at the start of the list after adding a single item', function() {
    list.linkedList('einar');
    expect(list.start.data).toEqual('einar');
    expect(list.end.data).toEqual('einar');
    expect(list.start.next).toBeNull();
    expect(list.end.next).toBeNull();
  });

  it('should have a null next item at the end of the list after adding a single item', function() {
    list.linkedList('einar');
    expect(list.start.data).toEqual('einar');
    expect(list.end.data).toEqual('einar');
    expect(list.end.next).toBeNull();
  });
});
