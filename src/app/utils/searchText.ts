import {TextFragment} from '../shared/models/library';

export function highlight(text: string, searchQuery: string): TextFragment[] {

  const re = new RegExp(`(${escapeRegExp(searchQuery)})`, 'gi');
  const fragments: TextFragment[] = [];
  let lastIndex = 0;
  let match;

  while ((match = re.exec(text)) !== null) {
    const matchStart = match.index;
    const matchEnd = re.lastIndex;


    if (matchStart > lastIndex) {
      fragments.push({ text: text.slice(lastIndex, matchStart), isHighlighted: false });
    }


    fragments.push({ text: match[1], isHighlighted: true });

    lastIndex = matchEnd;
  }


  if (lastIndex < text.length) {
    fragments.push({ text: text.slice(lastIndex), isHighlighted: false });
  }

  return fragments;
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}