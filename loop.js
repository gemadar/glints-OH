let i = 0;
while (i < 21) {
  console.log(i);
  i++;
}

for (let i = 0; i < 21; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

for (let i = 0; i < 21; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
