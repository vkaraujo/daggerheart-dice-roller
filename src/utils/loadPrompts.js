import yaml from 'js-yaml';
import hopeRaw from '../prompts/hope.yml?raw';
import fearRaw from '../prompts/fear.yml?raw';
import critRaw from '../prompts/crit.yml?raw';

export const prompts = {
  hope: yaml.load(hopeRaw),
  fear: yaml.load(fearRaw),
  crit: yaml.load(critRaw),
};
