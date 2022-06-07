let a = 10;
let hasil = [];

for (let i = 3; i <= i * a; i += 3) {
  if (i % 5 === 0 && i % 6 === 0) {
    hasil.push("KANGKUNG");
  } else if (i % 5 === 0) {
    hasil.push("KANG");
  } else if (i % 6 === 0) {
    hasil.push("KUNG");
  } else {
    hasil.push(i);
  }
}

console.log(hasil);
