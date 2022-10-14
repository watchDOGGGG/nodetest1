function add (params:number):Number{
  return params + 1
}

describe('testing index file', () => {
  test('should return a number', () =>{
    expect(String(add(5))).not.toBeNaN()
  })

  test('add params to 1 and return sum', () => {
    expect(add(3)).toBe(4);
  });
});