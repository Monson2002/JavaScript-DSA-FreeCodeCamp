document.getElementById('convert-btn').addEventListener('click', function () {
  const numberInput = document.getElementById('number').value;
  const outputDiv = document.getElementById('output');
  let romanNumeral = '';

  if (numberInput === '') {
    outputDiv.textContent = 'Please enter a valid number';
    return;
  }
  let number = parseInt(numberInput);
  if (number <= 0) {
    outputDiv.textContent = 'Please enter a number greater than or equal to 1';
    return;
  } else if (number >= 4000) {
    outputDiv.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      romanNumeral += romanNumerals[i].numeral;
      number -= romanNumerals[i].value;
    }
  }
  outputDiv.textContent = romanNumeral;
});