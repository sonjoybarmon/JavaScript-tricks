    
    // 1 Number
    let ary = [ 1 , 2, 3 , 4, 5];       // [5 , 2 , 3 , 4 , 1]
    [ary[0] , ary[4]] = [ ary[4] , ary[0] ]
    console.log(ary);

    // 2 number swap a and b (10 , 5)
    let a = 5 ;
    let b = 10 ;

    [a , b] = [b , a]
    console.log(a , b);

    // 3 number duplicate number remove
    let num = [ 12 ,10 ,13 ,12 ,10 ,13 ,15 ,41 ,15 ,17 ,18 ,17 ,19 ,19];
    console.log([...new Set(num)]);

    // 4 number random output a limit numbers

    let limit = [1, 2 , 3 , 4 , 5];
    const result = limit.sort(() => Math.random() -0.5)
    console.log(result);

