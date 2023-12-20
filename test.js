const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
// First test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBeCloseTo(23);
});
// Second test
test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
// Third test
test("One dollar should be 146,261 yen", function() {

    const yen = fromDollarToYen(3.5);
    
    const expected = 3.5/1.07 * 156;

    expect(yen).toBe(expected); 
})
// Fourth and last test
test("One Yen should be 0,813 pounds", function() {

    const yen = fromYenToPound(3.5);

    const expected = 3.5/1.07 * 0.87;

    expect(yen).toBe(expected); 
})