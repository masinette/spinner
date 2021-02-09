// process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  /* Spaces are added after the character so that the cursor moves 
  far enough away from our animation - Removing the space padding 
  at the end of the strings will mean that the cursor will sit on 
  top of the animation, making it harder to see
  */
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   \n');
}, 900);