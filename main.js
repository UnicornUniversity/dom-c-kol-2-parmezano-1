/**
 * The main function which calls the application. 
 * Converts a number from decimal to binary
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  let decimal = parseDecimalString(inputNumber)
  let dtoOut = decimalToBinary(decimal)
  //let dtoOut = exMain(inputNumber, inputNumberSystem, outputNumberSystem);
  return dtoOut;
}

/**
 * Parses a decimal string into a number 
 * @param {string} input_string
 * @returns {number}
**/
function parseDecimalString(input_string){
  let converted_number = 0;
  for (let digit of input_string){
    converted_number = converted_number * 10 + Number.parseInt(digit);
  }
  return converted_number;
}

/**
 * Converts a decimal number to a binary string
 * @param {number} decimal_num 
 * @returns {string}
 */
function decimalToBinary(decimal_num){
  if (decimal_num === 0) return "0";
  let binary_num = "";
  while (decimal_num > 0) {
    binary_num = (decimal_num % 2) + binary_num
    decimal_num = (decimal_num - decimal_num % 2) / 2
  }
  return binary_num
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [2];
}