
let timer = 1;
const spinningLines = ['\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   '];
for (const line of spinningLines) {
  setTimeout(() => {
    process.stdout.write(line);
  }, (timer * 100));
  timer += 2;
}