const SeparateChainingHashTableST = require('./SymbolTable');

describe('SeparateChainingHashTableST', () => {
  let symbolTable;
  // to edit
  const starWarsCharacters = [
    ['Ben', 'Kenobi'],
    ['Padme', 'Amidala'],
    ['Luke', 'Skywalker'],
    ['Ki', 'Adimundi'],
    ['Darth', 'Sidious'],
    ['Master', 'Yoda'],
    ['Asohka', 'Thano'],
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

  test('should return true if table is empty', () => {
    symbolTable.put('Mad', 'Max');
    symbolTable.delete('Mad');
    expect(symbolTable.isEmpty()).toBe(true);
  });

  test('should return false if table is not empty', () => {
    symbolTable.put('Mad', 'Max');
    expect(symbolTable.isEmpty()).toBe(false);
  });

  test('should return true if table contains a key', () => {
    symbolTable.put('Mad', 'Max');
    expect(symbolTable.contains('Mad')).toBe(true);
  });

  test('should return false if table does not contain a key', () => {
    symbolTable.put('Mad', 'Max');
    symbolTable.delete('Mad');
    expect(symbolTable.contains('Mad')).toBe(false);
  });

  test('should handle hash function collisions', () => {
    const v1 = 'grow';
    const v2 = 'yeah';
    symbolTable.put(v1, v1);
    symbolTable.put(v2, v2);
    expect(symbolTable.get(v1)).toBe(v1);
    expect(symbolTable.get(v2)).toBe(v2);
  });

  test('should return all keys in the table', () => {
    starWarsCharacters.forEach(([firstName, lastName]) => {
      symbolTable.put(firstName, lastName);
      expect(symbolTable.get(firstName)).toBe(lastName);
    });
    const keys = symbolTable.keys().sort();
    const expected = starWarsCharacters.map(([firstName]) => firstName).sort();
    expect(keys).toEqual(expected);
  });

  test('should double in size when needed', () => {
    starWarsCharacters.forEach(([firstName, lastName]) => {
      symbolTable.put(firstName, lastName);
      expect(symbolTable.get(firstName)).toBe(lastName);
    });
    expect(symbolTable._limit).toBe(16);
  });

  test('should halve in size when needed', () => {
    starWarsCharacters.forEach(([firstName, lastName]) => {
      symbolTable.put(firstName, lastName);
      expect(symbolTable.get(firstName)).toBe(lastName);
    });
    expect(symbolTable._limit).toBe(16);
    symbolTable.delete('Ben');
    symbolTable.delete('Padme');
    symbolTable.delete('Luke');
    symbolTable.delete('Ki');
    symbolTable.delete('Darth');
    expect(symbolTable._limit).toBe(8);
  });
});
