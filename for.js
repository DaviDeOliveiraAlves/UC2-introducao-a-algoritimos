for (let voltas = 10; voltas >= 0; voltas --) {
    if(voltas === 0) {
        console.log(`BOOOOM`)
    }else if(voltas % 2 === 0) {
        console.log(`${voltas} TIC`)
    }else{
        console.log(`${voltas} TAC`)
    }
}