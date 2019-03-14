#### wmf 

I use this to convert word chunks copied from Google Doc (where I write my notes) into Markdown-safe and HTML-safe chunk.

Currently, simply does the following:
- changes smart quotes to regular quotes
- adds extra new-line to every new-line character (double new-line = a paragraph in Markdown)

#### To use:

##### Install 

```
git clone <this repo url> wmf
cd wmf && npm install
```

##### Use

Paste the word chunk in `post` file.

Then run:
```
node index.js
```

The converted chunk will be in your clipboard. Paste it anywhere.
