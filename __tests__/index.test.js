const { sumAlphabetIndices } = require("../index")

describe("sumAlphabetIndices", () => {
  test("function returns the sum of the index values of a string containing a single character", () => {
    //arrange
    const input = "a"
    const expected = 0
    //act
    const actual = sumAlphabetIndices(input)
    //assert
    expect(actual).toBe(expected)
  })
  test("function returns the sum of the index values for a single word containing multiple characters", () => {
    //arrange
    const input = "hello"
    const expected = 47
    //act
    const actual = sumAlphabetIndices(input)
    //assert
    expect(actual).toBe(expected)
  })
  test("function returns the sum of the index values for a sentence containing multiple words", () => {
    //arrange
    const input = "hello world"
    const expected = 114
    //act
    const actual = sumAlphabetIndices(input)
    //assert
    expect(actual).toBe(expected)
  })
  test("function returns the sum of the index values for a sentence, ignoring any characters that are not lower case letters", () => {
    //arrange
    const input = "hello world!:)3"
    const expected = 114
    //act
    const actual = sumAlphabetIndices(input)
    //assert
    expect(actual).toBe(expected)
  })
  test("function will return 0 when passed an empty string", () => {
    //arrange
    const input = ""
    const expected = 0
    //act
    const actual = sumAlphabetIndices(input)
    //assert
    expect(actual).toBe(expected)
  })
})
