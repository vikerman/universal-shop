import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Item } from '../item';
import { ShoppingCartService } from '../shopping-cart.service';
import { HTTP_BASE_URL } from '../app.module';

interface DepartmentData {
  title: string;
  url: string;
}

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  title = "";
  response: Item[];

  constructor(private readonly route: ActivatedRoute,
    private readonly http: HttpClient,
    private readonly cart: ShoppingCartService,
    @Inject(HTTP_BASE_URL) private readonly BASE_URL: string) { }

  ngOnInit() {
    this.route.data.pipe(
      tap((data: DepartmentData) => {
        this.title = data.title;
      }),
      switchMap((data: { url: string }) =>
        this.http.get(this.BASE_URL + data.url)
      )
    ).subscribe((response: Item[]) => {
      this.response = response;
    });
  }

  truncate(str: string) {
    if (str.length < 20) {
      return str;
    } else {
      return str.substr(0, 17) + "...";
    }
  }

  addToCart(entry: Item) {
    this.cart.add(entry);
  }
}
