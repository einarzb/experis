var cubes = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
];

for(var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for(var j = 0; j < cube.length; j++) {
        console.log("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}


/*
cube[0][0] = 1
cube[0][1] = 2
cube[0][2] = 3
cube[1][0] = 4
cube[1][1] = 5
cube[1][2] = 6
cube[2][0] = 7
cube[2][1] = 8
cube[2][2] = 9

*/
