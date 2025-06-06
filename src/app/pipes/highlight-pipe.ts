import { Pipe, PipeTransform } from '@angular/core';
import {TextFragment} from '../shared/models/library';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, searchQuery: string): TextFragment[] {
    if (!text || !searchQuery) {
      return [{ text, isHighlighted: false }];
    }

    const re = new RegExp(`(${this.escapeRegExp(searchQuery)})`, 'gi');
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

  private escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
