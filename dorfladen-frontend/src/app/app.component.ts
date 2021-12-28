import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ICategory, IItem, ItemService } from './item.service';
import { ModalService } from './modal/modal.service';
import { OrderModalComponent } from './modals/order-modal/order-modal.component';

@Component({
  selector: 'dlb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dorfladen-frontend';
  admin = false;
  stage = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe((event) => {
            console.log(event['url']);
            console.log(this.route.firstChild?.routeConfig?.path);
            this.stage = event['url'] === '/date' ? 0 : 1
        });
  }
}
