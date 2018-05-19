
import {
  replaceParams,
  toQueryParams
} from './index';

describe('replaceParams', () => {
  it('returns a string with one parameter replaced', () => {
    expect(
      replaceParams("/users/:id", {id: 123})
    ).toEqual("/users/123");
  });
  
  it('returns a string with two parameters replaced', () => {
    expect(
      replaceParams("/users/:id/users/:id", {id: 123})
    ).toEqual("/users/123/users/123");
  });

  it('returns a string with multiple parameters replaced', () => {
    expect(
      replaceParams("/users/:userId/posts/:postId", {userId: 123, postId:456})
    ).toEqual("/users/123/posts/456");
  });

  it('returns a string with one parameter replaced and an alterative prefix', () => {
    expect(
      replaceParams("/users/#id", {id: 123}, '#')
    ).toEqual("/users/123");
  });

  it('returns a string with one parameter replaced and an alterative prefix that has meaning in a regex', () => {
    expect(
      replaceParams("/users/+id", {id: 123}, '\\+')
    ).toEqual("/users/123");
  });
});

describe('toQueryParams', () => {
  it('returns an array with query params', () => {
    expect(
      toQueryParams({foo:123, bar:'zyx'})
    ).toEqual(['foo=123', 'bar=zyx']);
  });

  it('returns an array with query params and alternate seperator', () => {
    expect(
      toQueryParams({foo:123, bar:'zyx'}, ':')
    ).toEqual(['foo:123', 'bar:zyx']);
  });
});
