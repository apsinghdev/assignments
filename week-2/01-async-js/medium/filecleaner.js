// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
const filePath = './samplefile.txt';

const fileData = fs.readFileSync(filePath, 'utf8');
const formattedData = fileData.replace(/\s+/g,' ');
fs.writeFileSync(filePath,formattedData);

