// const fs = require('fs');

// all methods are asynchronous by default

// fs.rename('before.json', 'after.json', err => {
//   if (err) {
//     return console.error(err);
//   }
// });


// Example: Read a file and change its content and read
// it again using promise-based API.
const fs = require('fs/promises');

const filename = 'test.txt';
async function example(filename) {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    console.log(data);
    const content = 'Some content!';
    await fs.writeFile(filename, content);
    console.log('Wrote some content!');
    const newData = await fs.readFile(filename, 'utf-8');
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

example(filename);