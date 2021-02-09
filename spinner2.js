let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(i);
  }, 100);
}