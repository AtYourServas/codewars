function isDivisible(n, x, y) {
    //check to see if n is divisble by x and by y.  All inputs are positive, non-zero digits
    return n % x === 0 && n % y === 0
  }