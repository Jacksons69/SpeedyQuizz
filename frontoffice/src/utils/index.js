/*
 * UTILS FUNCTIONS
 */

export const shuffle = unshuffled =>
  unshuffled
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
