function powersOfTwo(n){
    let answer = []
    for (i=0; i<=n; i++){
      answer[i] = Math.pow(2,i)
    }
    return answer
  }
  powersOfTwo(0)