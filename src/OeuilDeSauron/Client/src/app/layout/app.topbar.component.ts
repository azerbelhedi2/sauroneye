import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];
    display: boolean = false;
    userDetails : any ; 
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService , private router : Router ,private authService : AuthService) { }
    ngOnInit(): void {
        this.authService.getUserProfile().subscribe(res=> {
            this.userDetails = res;
        })
    }



    logout() {
        this.authService.logout().subscribe(res=>{
            console.log(res);
            this.router.navigate(['/auth/login'])
        })

    }
}
