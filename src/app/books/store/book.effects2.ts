import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  withLatestFrom,
  filter,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { selectAllBooks } from './book.selectors';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadBooks),
      withLatestFrom(this.store.pipe(select(selectAllBooks))),
      filter(([action, books]) => !books.length),
      switchMap(() =>
        this.bs.getAll().pipe(
          map((books) => BookActions.loadBooksSuccess({ data: books })),
          catchError((error) => of(BookActions.loadBooksFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
    private store: Store
  ) {}
}
