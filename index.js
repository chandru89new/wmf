const fs = require('fs')
const copier = require('copy-paste')
const fileContents = fs.readFileSync('./post', 'utf-8')
const sanitize = (input) => {
  let output = ''
  output = input.replace(/’/g, "'")
  output = output.replace(/“/g, '"')
  output = output.replace(/”/g, '"')
  output = output.replace(/\n/g, '\n\n')
  return output
}
copier.copy(sanitize(fileContents), () => {
  console.log("Done. It's in your clipboard.")
})
