const fs = require('fs')
const copier = require('clipboardy')
const fileContents = fs.readFileSync('./post', 'utf-8')
const sanitize = (input) => {
  let output = ''
  output = input.replace(/’/g, "'")
  output = output.replace(/“/g, '"')
  output = output.replace(/”/g, '"')
  output = output.replace(/\n/g, '\n\n')
  return output
}
copier.write(sanitize(fileContents)).then(() => {
  console.log("Done. It's in your clipboard.")
})
