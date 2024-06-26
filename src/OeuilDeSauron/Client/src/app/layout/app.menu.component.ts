import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Pages',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {
                        label: 'List Projects',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/pages/list-projects']
                    },

                ]
            },

            {
                label: 'Health Check',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'User Scenario Validation',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/pages/scenario-validation']
                    },
                    {
                        label: 'Domain Validation',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/pages/domain-validation']
                    },
                    {
                        label: 'SSL Validation',
                        icon: 'pi pi-fw pi-lock',
                        routerLink: ['/pages/ssl-validation']
                    },
                    
                    // {
                    //     label: 'Auth',
                    //     icon: 'pi pi-fw pi-user',
                    //     items: [
                    //         {
                    //             label: 'Login',
                    //             icon: 'pi pi-fw pi-sign-in',
                    //             routerLink: ['/auth/login']
                    //         },
                    //         {
                    //             label: 'Error',
                    //             icon: 'pi pi-fw pi-times-circle',
                    //             routerLink: ['/auth/error']
                    //         },
                    //         {
                    //             label: 'Access Denied',
                    //             icon: 'pi pi-fw pi-lock',
                    //             routerLink: ['/auth/access']
                    //         }
                    //     ]
                    // },
                    // {
                    //     label: 'Crud',
                    //     icon: 'pi pi-fw pi-pencil',
                    //     routerLink: ['/pages/crud']
                    // },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/notfound']
                    // },
                    // {
                    //     label: 'Empty',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // },
                ]
            },
        ];
    }
}
