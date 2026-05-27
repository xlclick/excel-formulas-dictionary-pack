# Excel Formulas Dictionary by XLclick

> **Used by the [XLclick.com](https://xlclick.com) Excel Add-in** — the smart assistant for Microsoft Excel.

A lightweight, offline-first JavaScript library that provides a structured dictionary of Excel formulas. Search, filter, and explore **78 documented formulas** with no dependencies and no build step required.

---

## Installation

```bash
npm install excel-formulas-dictionary-by-xlclick
```

---

## Quick start

```js
import { getFormula, search, getRandom, getByCategory } from 'excel-formulas-dictionary-by-xlclick';

// Look up a formula by name (case-insensitive)
const f = getFormula('XLOOKUP');
console.log(f.name);        // "XLOOKUP"
console.log(f.syntax);      // "XLOOKUP(lookup_value, lookup_array, return_array, ...)"
console.log(f.description); // "Modern replacement for VLOOKUP/HLOOKUP..."
console.log(f.difficulty);  // "intermediate"

// Search by keyword — returns results sorted by relevance
const results = search('loan');
results.forEach(({ formula, score }) => {
  console.log(`${formula.name} (score: ${score})`);
});
// PMT (score: 40), IPMT (score: 40), PPMT (score: 40) ...

// Get all financial formulas
const financial = getByCategory('financial');

// Get a random formula — great for "Formula of the Day"
const daily = getRandom();
console.log(`Today's formula: ${daily.name}`);
```

Works with CommonJS too:

```js
const { getFormula, search } = require('excel-formulas-dictionary-by-xlclick');
```

---

## Full API

| Function | Description |
|---|---|
| `getFormula(name)` | Returns one formula by name, or `undefined`. Case-insensitive. |
| `getAll()` | Returns all 78 formulas as an array. |
| `search(query, options?)` | Returns matching formulas sorted by relevance score. |
| `getByTag(tag)` | Returns formulas that include a specific tag. |
| `getByCategory(category)` | Returns formulas in a given category. |
| `getByDifficulty(level)` | Returns formulas at `beginner`, `intermediate`, or `advanced`. |
| `getRandom()` | Returns one randomly picked formula. |
| `count()` | Returns the total number of formulas. |

### Search options

```js
search('date')                    // all date-related formulas
search('loan', { limit: 5 })      // top 5 loan-related formulas
search('')                        // returns all 78 formulas
```

---

## Formula object

Every formula in the dictionary looks like this:

```js
{
  id:          "xlookup",
  name:        "XLOOKUP",
  syntax:      "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], ...)",
  description: "Modern replacement for VLOOKUP/HLOOKUP. Searches a range or array...",
  example: {
    input:       '=XLOOKUP("Smith", B2:B100, C2:C100, "Not found")',
    output:      '"Engineer"',
    explanation: 'Finds "Smith" in column B and returns the value from column C.',
  },
  tags:        ["lookup", "search", "modern", "dynamic", "flexible"],
  category:    "lookup",
  difficulty:  "intermediate",
  related:     ["vlookup", "hlookup", "index", "match"],
}
```

---

## Categories

| Category | Examples |
|---|---|
| `lookup` | VLOOKUP, XLOOKUP, INDEX, MATCH, INDIRECT |
| `financial` | PMT, FV, PV, NPV, IRR, RATE, IPMT |
| `text` | LEFT, MID, TRIM, SUBSTITUTE, TEXTJOIN |
| `date` | TODAY, DATEDIF, WORKDAY, NETWORKDAYS |
| `logical` | IF, IFS, IFERROR, AND, OR, SWITCH |
| `math` | SUM, SUMIFS, SUMPRODUCT, ROUND, MOD |
| `statistical` | COUNTIFS, AVERAGEIFS, MEDIAN, LARGE |
| `array` | UNIQUE, SORT, FILTER, SEQUENCE, VSTACK |
| `information` | ISBLANK, ISNUMBER, ISTEXT |

---

## TypeScript support

Full TypeScript declarations are included — no `@types` package needed:

```ts
import { getFormula, Formula, SearchResult } from 'excel-formulas-dictionary-by-xlclick';

const f: Formula | undefined = getFormula('SUM');
```

---

## Use cases

- Formula reference panel inside an Excel or Google Sheets add-in
- "Formula of the Day" widget
- Autocomplete for formula editors
- Study tools and quiz apps
- Chatbots that explain Excel functions

---

## About XLclick

This library is maintained by the team behind **[XLclick.com](https://xlclick.com)** — an Excel Add-in that brings formula intelligence, smart suggestions, and productivity tools directly into Microsoft Excel.

---

## License

[MIT](LICENSE) © [XLclick](https://xlclick.com)
