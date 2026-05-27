import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const formulas = require('./data/formulas.json');

const formulaMap = new Map(formulas.map(f => [f.id.toLowerCase(), f]));

export function getFormula(name) {
  return formulaMap.get(name.toLowerCase());
}

export function getAll() {
  return [...formulas];
}

export function search(query, options = {}) {
  const { limit } = options;
  const q = query.trim().toLowerCase();

  if (!q) {
    const all = formulas.map(f => ({ formula: f, score: 1 }));
    return limit ? all.slice(0, limit) : all;
  }

  const results = [];

  for (const f of formulas) {
    let score = 0;
    const name = f.name.toLowerCase();

    if (name === q)                    score += 100;
    else if (name.startsWith(q))       score += 60;
    else if (name.includes(q))         score += 30;

    for (const tag of f.tags) {
      const t = tag.toLowerCase();
      if (t === q)                     score += 40;
      else if (t.includes(q))          score += 20;
    }

    if (f.category.toLowerCase().includes(q)) score += 15;
    if (f.description.toLowerCase().includes(q)) score += 10;

    if (score > 0) results.push({ formula: f, score });
  }

  results.sort((a, b) => b.score - a.score);
  return limit ? results.slice(0, limit) : results;
}

export function getByTag(tag) {
  const t = tag.toLowerCase();
  return formulas.filter(f => f.tags.some(x => x.toLowerCase() === t));
}

export function getByCategory(category) {
  const c = category.toLowerCase();
  return formulas.filter(f => f.category.toLowerCase() === c);
}

export function getByDifficulty(level) {
  const l = level.toLowerCase();
  return formulas.filter(f => f.difficulty.toLowerCase() === l);
}

export function getRandom() {
  return formulas[Math.floor(Math.random() * formulas.length)];
}

export function count() {
  return formulas.length;
}
