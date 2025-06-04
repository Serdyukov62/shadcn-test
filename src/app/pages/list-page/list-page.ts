import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetData } from '../../shared/service/get-data.service';
import {LibraryInfo} from '../../shared/models/library';
import {FormsModule} from '@angular/forms';
import { UbInputDirective } from '~/components/ui/input'
import { UbButtonDirective } from '~/components/ui/button'


@Component({
  selector: 'app-list-page',
  imports: [CommonModule, FormsModule, UbButtonDirective],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})
export class ListPage {
  data: LibraryInfo[] = [];
  searchQuery: string = '';
  constructor(private service: GetData) {}

  async getData(str: string) {
    const req = await this.service.getData(str);
    this.data = req;
  }

  highlight(text: string) {
    if (!this.searchQuery) return text
    const re = new RegExp(`(${this.escapeRegExp(this.searchQuery)})`, 'gi');
    const highlighted = text.replace(re, '<span class="highlight">$1</span>');
    return highlighted;
  }

  private escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}
