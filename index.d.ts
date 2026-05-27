export type FormulaCategory =
  | 'lookup'
  | 'financial'
  | 'text'
  | 'date'
  | 'logical'
  | 'math'
  | 'statistical'
  | 'array'
  | 'information'
  | 'engineering';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export interface FormulaExample {
  input: string;
  output: string;
  explanation: string;
}

export interface Formula {
  id: string;
  name: string;
  syntax: string;
  description: string;
  example: FormulaExample;
  tags: string[];
  category: FormulaCategory;
  difficulty: DifficultyLevel;
  related?: string[];
}

export interface SearchResult {
  formula: Formula;
  score: number;
}

export interface SearchOptions {
  limit?: number;
}

/** Returns a formula by name (case-insensitive), or undefined if not found. */
export function getFormula(name: string): Formula | undefined;

/** Returns all formulas as an array. */
export function getAll(): Formula[];

/** Searches formulas by keyword, sorted by relevance score. */
export function search(query: string, options?: SearchOptions): SearchResult[];

/** Returns all formulas that include the given tag. */
export function getByTag(tag: string): Formula[];

/** Returns all formulas in the given category. */
export function getByCategory(category: string): Formula[];

/** Returns all formulas at the given difficulty level. */
export function getByDifficulty(level: string): Formula[];

/** Returns a randomly picked formula. */
export function getRandom(): Formula;

/** Returns the total number of formulas in the dictionary. */
export function count(): number;
