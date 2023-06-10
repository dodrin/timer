const delays = process.argv.slice(2);

if (delays.length === 0) {
  console.log("Please enter valid number(s)");
}

for (const delay of delays) {
  if (delay >= 0 && isNaN(delay) !== true) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay * 1000);
  }
}