// Array mit Werte: 23, 54, 75;

let array1 = [23, 54, 75];
console.log('Before push');
console.log(array1);

// Verwende die Push-Methode, um 5 Werte in dein Array einzufügen.
console.log('After push');
array1.push(25, 35, 45, 55, 65);
console.log(array1);

// Verwende die Unshift-Methode, um 5 Werte an der Vorderseite deines Arrays hinzuzufügen.
console.log('After unschift');
array1.unshift(1, 2, 3, 4, 5);
console.log(array1);

// Verwende die Pop-Methode, um 2 Werte von der Rückseite deines Arrays zu entfernen.
console.log('After pop');
// First pop
array1.pop();
// Second pop 
array1.pop();
console.log(array1);

// Verwende die Shift-Methode, um 2 Werte von der Vorderseite deines Arrays zu entfernen.
console.log('After Shift');
// First shift
array1.shift();
// Second shift
array1.shift();

console.log(array1);
