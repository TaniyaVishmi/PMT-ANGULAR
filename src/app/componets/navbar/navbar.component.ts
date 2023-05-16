import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup/lib/ng-toast.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

 
}