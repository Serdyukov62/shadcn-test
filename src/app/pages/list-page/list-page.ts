import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { LibraryInfo } from '../../shared/models/library';
import { GetData } from '../../shared/service/get-data.service';
// import { highlight } from '../../utils/searchText';
import {HighlightPipe} from '../../pipes/highlight-pipe';
import {RouterLink} from '@angular/router';
import { LoaderComponent } from "../../shared/ components/loader/loader.component";

@Component({
  selector: 'app-list-page',
  imports: [CommonModule, FormsModule, HighlightPipe, RouterLink, LoaderComponent],
  templateUrl: './list-page.html',
})
export class ListPage {
  data: LibraryInfo[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;

  constructor(
    private service: GetData,
  ) {}

  getData(str: string) {
    this.isLoading = true;
    this.service
      .getData(str)
      .pipe(
        tap(req => {
          this.data = req

          // Оставил реализацию с единичным выделением,
          // то есть выделение не реактивное а исполняется
          // только в момент первого получения списка

          // .map((item: LibraryInfo) => {
          //   return {
          //     ...item,
          //     Cells: {
          //       ...item.Cells,
          //       FullNameFragments: highlight(
          //         item.Cells.FullName,
          //         this.searchQuery
          //       ),
          //     },
          //   };
          // });

          this.isLoading = false;
        })
      )
      .subscribe();
  }
}
