Arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(Arr);

for (var i = 1; i < Arr.length; i++)
    for (var j = 0; j < i; j++)
        if (Arr[i] < Arr[j]) {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
        }

console.log(Arr);