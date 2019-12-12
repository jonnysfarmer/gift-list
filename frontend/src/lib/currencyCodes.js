

// Create a list of symbols for currency
const getSymbol = (code, price) => {

  // const EURFormatter = currencyFormat('EUR')


  let symbol
  switch(code) {
    // case 'USD' : symbol = String.fromCharCode(&#36;); break
    // case 'EUR' : EURFormatter.format(price); break
    // case 'GBP' : symbol = String.fromCharCode(&#163;); break
    // case 'EUR' : symbol = ; break
    default : symbol = code
  }
  return symbol
}

export default getSymbol