const SeparateChainingHashTableST = require('./SymbolTable');

describe('SeparateChainingHashTableST', () => {
  let symbolTable;
  // to edit
  const people = [
    ['Steven', 'Tyler'],
    ['George', 'Harrison'],
    ['Mr.', 'Doob'],
    ['Dr.', 'Sunshine'],
    ['John', 'Resig'],
    ['Brendan', 'Eich'],
    ['Alan', 'Turing'],
  ];

  beforeEach(() => {
    symbolTable = new SeparateChainingHashTableST();
  });

  test('should have methods named "put", "get", "delete", "contains", "isEmpty", "size", and "keys"', () => {
    expect(typeof symbolTable.put).toBe('function');
    expect(typeof symbolTable.get).toBe('function');
    expect(typeof symbolTable.delete).toBe('function');
    expect(typeof symbolTable.contains).toBe('function');
    expect(typeof symbolTable.isEmpty).toBe('function');
    expect(typeof symbolTable.size).toBe('function');
    expect(typeof symbolTable.keys).toBe('function');
  });

  test('should store values that were inserted', () => {
    symbolTable.put('Family', 'Guy');
    expect(symbolTable.get('Family')).toBe('Guy');
  });

  test('should not contain values that were not inserted', () => {
    symbolTable.put('Mad', 'Matters');
    expect(symbolTable.get('Mad')).not.toBe('Max');
  });

  test('should overwrite values that have the same key', () => {
    symbolTable.put('Family', 'Guy');
    symbolTable.put('Family', 'Matters');
    expect(symbolTable.get('Family')).toBe('Matters');
  });

  test('should report the correct size after adding two keys', () => {
    symbolTable.put('Family', 'Guy');
    symbolTable.put('Mad', 'Matters');
    expect(symbolTable.size()).toBe(2);
  });

  test('should not contain values that were removed', () => {
    symbolTable.put('Mad', 'Max');
    symbolTable.delete('Mad');
    expect(symbolTable.get('Mad')).toBe(null);
  });

  test('should handle hash function collisions', () => {
    const v1 = 'grow';
    const v2 = 'yeah';
    symbolTable.put(v1, v1);
    symbolTable.put(v2, v2);
    expect(symbolTable.get(v1)).toBe(v1);
    expect(symbolTable.get(v2)).toBe(v2);
  });

  // // (Advanced! Remove the extra "x" when you want the following tests to run)
  // test('should double in size when needed', function() {
  //   _.each(people, function(person) {
  //     var firstName = person[0];
  //     var lastName = person[1];
  //     symbolTable.insert(firstName, lastName);
  //     expect(symbolTable.retrieve(firstName)).to.equal(lastName);
  //   });
  //   expect(symbolTable._limit).to.equal(16);
  // });

  // test('should halve in size when needed', function() {
  //   _.each(people, function(person) {
  //     var firstName = person[0];
  //     var lastName = person[1];
  //     symbolTable.insert(firstName, lastName);
  //     expect(symbolTable.retrieve(firstName)).to.equal(lastName);
  //   });
  //   expect(symbolTable._limit).to.equal(16);
  //   symbolTable.remove('George');
  //   symbolTable.remove('Dr.');
  //   symbolTable.remove('Steven');
  //   symbolTable.remove('John');
  //   symbolTable.remove('Mr.');
  //   expect(symbolTable._limit).to.equal(8);
  // });
});
