let sonlar = [1, 6, 78, 45, 34, 89, 22, 9, 15, 54];

function top2EngKatta() {
    let max1 = -Infinity; 
    let max2 = -Infinity; 

    for (let i = 0; i < sonlar.length; i++) {
        let son = sonlar[i];
        if (son > max1) {
            max2 = max1;
            max1 = son;  
        } else if (son > max2 && son < max1) {
            max2 = son; 
        }
    }

    console.log(max1);
    console.log(max2);
}

top2EngKatta();
