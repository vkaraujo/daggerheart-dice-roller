import { prompts } from './loadPrompts';

export function getNarrativePrompt(hope, fear) {
  if (hope == null || fear == null) return null;

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  if (hope > fear) return getRandom(prompts.hope);
  if (fear > hope) return getRandom(prompts.fear);
  return getRandom(prompts.crit);
}
