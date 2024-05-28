"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[494],{8113:(W,_,l)=>{l.r(_),l.d(_,{DomainValidationModule:()=>Q});var u=l(177),g=l(2365),j=l(5779),I=l(5160),e=l(4438),T=l(3366),p=l(7651),f=l(1141),c=l(4341),C=l(563),D=l(9998),b=l(2242),k=l(1305),M=l(494),x=l(1570);const V=()=>["id","name","healthCheckUrl","assignedTo"],R=()=>[10,20,30],h=()=>({width:"450px"}),d=i=>({"ng-invalid ng-dirty":i});function F(i,s){if(1&i){const t=e.RV6();e.j41(0,"div",15)(1,"h5",16),e.EFF(2,"Domain Check"),e.k0s(),e.j41(3,"span",17),e.nrm(4,"i",18),e.j41(5,"input",19),e.bIt("input",function(n){e.eBV(t);const o=e.XpG(),m=e.sdS(5);return e.Njj(o.onGlobalFilter(m,n))}),e.k0s()(),e.j41(6,"button",20),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.deleteSelectedProducts())}),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(6),e.Y8G("disabled",!t.selectedtProjects||!t.selectedtProjects.length)}}function y(i,s){1&i&&(e.j41(0,"tr")(1,"th",21),e.nrm(2,"p-tableHeaderCheckbox"),e.k0s(),e.j41(3,"th",22),e.EFF(4,"Id Project "),e.nrm(5,"p-sortIcon",23),e.k0s(),e.j41(6,"th",24),e.EFF(7,"Project Name "),e.nrm(8,"p-sortIcon",25),e.k0s(),e.j41(9,"th",26),e.EFF(10,"Assigned To "),e.nrm(11,"p-sortIcon",27),e.k0s(),e.nrm(12,"th"),e.k0s())}function v(i,s){if(1&i){const t=e.RV6();e.j41(0,"tr")(1,"td"),e.nrm(2,"p-tableCheckbox",28),e.k0s(),e.j41(3,"td",29)(4,"span",30),e.EFF(5,"Id Project"),e.k0s(),e.EFF(6),e.k0s(),e.j41(7,"td",31)(8,"span",30),e.EFF(9,"Project Name"),e.k0s(),e.EFF(10),e.k0s(),e.j41(11,"td",31)(12,"span",30),e.EFF(13,"Assigned To"),e.k0s(),e.EFF(14),e.k0s(),e.j41(15,"td")(16,"div",32)(17,"button",33),e.bIt("click",function(){const n=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.getProjectDetails(n.id))}),e.k0s(),e.j41(18,"button",34),e.bIt("click",function(){const n=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.deleteProject(n))}),e.k0s()()()()}if(2&i){const t=s.$implicit;e.R7$(2),e.Y8G("value",t),e.R7$(4),e.SpI(" ",t.id," "),e.R7$(4),e.SpI(" ",t.name," "),e.R7$(4),e.SpI(" ",t.assignedTo," ")}}function P(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Name is required."),e.k0s())}function S(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Health Check Url is required."),e.k0s())}function G(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Site Url is required."),e.k0s())}function B(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Email is required."),e.k0s())}function E(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Duration Url is required."),e.k0s())}function N(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Time out is required."),e.k0s())}function U(i,s){1&i&&(e.j41(0,"small",66),e.EFF(1,"Header Serializedis required."),e.k0s())}function X(i,s){if(1&i){const t=e.RV6();e.j41(0,"div",35)(1,"label",36),e.EFF(2," Project Name"),e.k0s(),e.j41(3,"input",37),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.name,n)||(o.project.name=n),e.Njj(n)}),e.k0s(),e.DNE(4,P,2,0,"small",38),e.k0s(),e.j41(5,"div",39)(6,"div",40)(7,"div",41)(8,"p-radioButton",42),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.type,n)||(o.project.type=n),e.Njj(n)}),e.k0s(),e.j41(9,"label",43),e.EFF(10,"Domain Check"),e.k0s()()(),e.j41(11,"div",40)(12,"div",41)(13,"p-radioButton",44),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.type,n)||(o.project.type=n),e.Njj(n)}),e.k0s(),e.j41(14,"label",45),e.EFF(15,"SSL Check"),e.k0s()()(),e.j41(16,"div",40)(17,"div",41)(18,"p-radioButton",46),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.type,n)||(o.project.type=n),e.Njj(n)}),e.k0s(),e.j41(19,"label",47),e.EFF(20,"User Scenario"),e.k0s()()()(),e.j41(21,"div",35)(22,"label",48),e.EFF(23,"Health Check Url"),e.k0s(),e.j41(24,"input",49),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.healthcheckUrl,n)||(o.project.healthcheckUrl=n),e.Njj(n)}),e.k0s(),e.DNE(25,S,2,0,"small",38),e.k0s(),e.j41(26,"div",35)(27,"label",50),e.EFF(28,"Site Url"),e.k0s(),e.j41(29,"input",51),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.siteUrl,n)||(o.project.siteUrl=n),e.Njj(n)}),e.k0s(),e.DNE(30,G,2,0,"small",38),e.k0s(),e.j41(31,"div",35)(32,"label",52),e.EFF(33,"Assigned To"),e.k0s(),e.j41(34,"input",53),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.assignedTo,n)||(o.project.assignedTo=n),e.Njj(n)}),e.k0s(),e.DNE(35,B,2,0,"small",38),e.k0s(),e.j41(36,"div",54)(37,"div",55)(38,"label",56),e.EFF(39,"Is Active"),e.k0s(),e.j41(40,"input",57),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.isActive,n)||(o.project.isActive=n),e.Njj(n)}),e.k0s()(),e.j41(41,"div",55)(42,"label",58),e.EFF(43,"Send Mail if Unhealthy"),e.k0s(),e.j41(44,"input",59),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.sendMailifUnhealthy,n)||(o.project.sendMailifUnhealthy=n),e.Njj(n)}),e.k0s()()(),e.j41(45,"div",35)(46,"label",60),e.EFF(47,"Duration(Minute)"),e.k0s(),e.j41(48,"input",61),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.durationInMinute,n)||(o.project.durationInMinute=n),e.Njj(n)}),e.k0s(),e.DNE(49,E,2,0,"small",38),e.k0s(),e.j41(50,"div",35)(51,"label",62),e.EFF(52,"Max Time Out"),e.k0s(),e.j41(53,"input",63),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.project.maxResponseTimeInSecond,n)||(o.project.maxResponseTimeInSecond=n),e.Njj(n)}),e.k0s(),e.DNE(54,N,2,0,"small",38),e.k0s(),e.j41(55,"div",35)(56,"label",64),e.EFF(57,"Header Serialized"),e.k0s(),e.j41(58,"textarea",65),e.mxI("ngModelChange",function(n){e.eBV(t);const o=e.XpG();return e.DH7(o.headerString,n)||(o.headerString=n),e.Njj(n)}),e.k0s(),e.DNE(59,U,2,0,"small",38),e.k0s()}if(2&i){const t=e.XpG();e.R7$(3),e.R50("ngModel",t.project.name),e.Y8G("ngClass",e.eq3(25,d,t.submitted&&!t.project.name)),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.project.name),e.R7$(4),e.R50("ngModel",t.project.type),e.R7$(5),e.R50("ngModel",t.project.type),e.R7$(5),e.R50("ngModel",t.project.type),e.R7$(6),e.R50("ngModel",t.project.healthcheckUrl),e.Y8G("ngClass",e.eq3(27,d,t.submitted&&!t.project.healthCheckUrl)),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.project.healthcheckUrl),e.R7$(4),e.R50("ngModel",t.project.siteUrl),e.Y8G("ngClass",e.eq3(29,d,t.submitted&&!t.project.healthCheckUrl)),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.project.siteUrl),e.R7$(4),e.R50("ngModel",t.project.assignedTo),e.Y8G("ngClass",e.eq3(31,d,t.submitted&&!t.project.assignedTo)),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.project.assignedTo),e.R7$(5),e.R50("ngModel",t.project.isActive),e.R7$(4),e.R50("ngModel",t.project.sendMailifUnhealthy),e.R7$(4),e.R50("ngModel",t.project.durationInMinute),e.Y8G("ngClass",e.eq3(33,d,t.submitted&&!t.project.durationUInMinute)),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.project.durationInMinute),e.R7$(4),e.R50("ngModel",t.project.maxResponseTimeInSecond),e.Y8G("ngClass",e.eq3(35,d,t.submitted&&!t.project.maxResponseTimeInSecond)),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.project.maxResponseTimeInSecond),e.R7$(4),e.R50("ngModel",t.headerString),e.R7$(),e.Y8G("ngIf",t.submitted&&!t.headerString)}}function Y(i,s){if(1&i){const t=e.RV6();e.j41(0,"button",67),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.hideDialog())}),e.k0s(),e.j41(1,"button",68),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.saveProject())}),e.k0s()}}function H(i,s){if(1&i&&(e.j41(0,"span"),e.EFF(1,"Are you sure you want to delete "),e.j41(2,"b"),e.EFF(3),e.k0s(),e.EFF(4,"?"),e.k0s()),2&i){const t=e.XpG();e.R7$(3),e.JRh(t.project.name)}}function A(i,s){if(1&i){const t=e.RV6();e.j41(0,"button",69),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.deleteProjectDialog=!1)}),e.k0s(),e.j41(1,"button",70),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.confirmDelete())}),e.k0s()}}function w(i,s){if(1&i){const t=e.RV6();e.j41(0,"button",69),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.deleteProductsDialog=!1)}),e.k0s(),e.j41(1,"button",70),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.confirmDeleteSelected())}),e.k0s()}}const z=[{path:"",component:(()=>{class i{constructor(t,a,n){this.messageService=t,this.api=a,this.router=n,this.projectDialog=!1,this.deleteProjectDialog=!1,this.deleteProjectsDialog=!1,this.headerString="",this.loading=!1,this.project={id:"",name:"",healthcheckUrl:"",siteUrl:"",type:0,assignedTo:"",isActive:!1,sendMailifUnhealthy:!1,durationInMinute:0,maxResponseTimeInSecond:0,headersSerialized:"",headers:[]},this.projects=[],this.selectedtProjects=[],this.submitted=!1,this.cols=[],this.statuses=[],this.rowsPerPageOptions=[5,10,20]}ngOnInit(){this.getAllProject()}getProjectDetails(t){this.router.navigateByUrl("/pages/project-details/"+t)}openNew(){this.project=new I.M,this.submitted=!1,this.projectDialog=!0}deleteSelectedProducts(){this.deleteProjectsDialog=!0}editProduct(t){this.project={...t},this.projectDialog=!0}deleteProject(t){this.deleteProjectDialog=!0,this.project={...t}}confirmDeleteSelected(){this.deleteProjectsDialog=!1,this.projects=this.projects.filter(t=>!this.selectedtProjects.includes(t)),this.selectedtProjects.forEach(t=>{this.deleteProjectById(t.id)}),this.messageService.add({severity:"success",summary:"Successful",detail:"Projects Deleted",life:3e3}),this.selectedtProjects=[]}confirmDelete(){this.deleteProjectDialog=!1,this.deleteProjectById(this.project.id),this.projects=this.projects.filter(t=>t.id!==this.project.id),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3}),this.project={id:"",name:"",healthcheckUrl:"",siteUrl:"",assignedTo:"",isActive:!1,sendMailifUnhealthy:!1,durationInMinute:0,type:0,maxResponseTimeInSecond:0,headersSerialized:"",headers:[]}}hideDialog(){this.projectDialog=!1,this.submitted=!1}saveProject(){this.submitted=!0,this.project.name?.trim()&&(this.project.id?(this.project.id=this.project.id,this.project.name=this.project.name,this.projects[this.findIndexById(this.project.id)]=this.project,this.api.updateProject(this.project).subscribe(t=>{this.projectDialog=!1},t=>{alert(t.message)}),this.messageService.add({severity:"success",summary:"Successful",detail:"Project Updated",life:3e3})):(this.headerString=JSON.parse('"'+this.headerString+'"'),this.project.headersSerialized=this.headerString,console.log(this.headerString),console.log(this.project),this.api.addProject(this.project).subscribe(t=>{this.projectDialog=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Project Created",life:3e3})},t=>{alert(t.message)})),this.projects=[...this.projects],this.projectDialog=!1,this.project={id:"",name:"",healthcheckUrl:"",siteUrl:"",assignedTo:"",isActive:!1,sendMailifUnhealthy:!1,durationInMinute:0,type:0,maxResponseTimeInSecond:0,headersSerialized:"",headers:[]},this.headerString="")}findIndexById(t){let a=-1;for(let n=0;n<this.projects.length;n++)if(this.projects[n].id===t){a=n;break}return a}createId(){let t="";for(let n=0;n<5;n++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return t}onGlobalFilter(t,a){t.filterGlobal(a.target.value,"contains")}addProject(t){this.api.addProject(t)}deleteProjectById(t){this.api.deleteProject(t).subscribe(a=>{console.log(a)})}getAllProject(){this.api.getProjectByDns().subscribe(t=>{this.projects=t,console.log(this.projects)})}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(j.bg),e.rXU(T.G),e.rXU(g.Ix))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-domain-validation"]],features:[e.Jv_([j.bg])],decls:23,vars:27,consts:[["dt",""],[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","selectionMode","multiple","dataKey","id",3,"selectionChange","value","columns","rows","globalFilterFields","paginator","rowsPerPageOptions","showCurrentPageReport","selection","rowHover"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["header","Project Details",1,"p-fluid",3,"visibleChange","visible","modal"],["pTemplate","content"],["pTemplate","footer"],["header","Confirm",3,"visibleChange","visible","modal"],[1,"flex","align-items-center","justify-content-center"],[1,"pi","pi-exclamation-triangle","mr-3",2,"font-size","2rem"],[4,"ngIf"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],["pButton","","pRipple","","label","Delete","icon","pi pi-trash",1,"p-button-danger",3,"click","disabled"],[2,"width","3rem"],["pSortableColumn","idProject"],["field","code"],["pSortableColumn","name"],["field","name"],["pSortableColumn","assignedTo"],["field","category"],[3,"value"],[2,"width","35%","min-width","10rem"],[1,"p-column-title"],[2,"width","25%","min-width","10rem"],[1,"flex"],["pButton","","pRipple","","icon","pi pi-user",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModelChange","ngModel","ngClass"],["class","ng-dirty ng-invalid",4,"ngIf"],[1,"grid","formgrid"],[1,"col-12","md:col-4"],[1,"field-radiobutton"],["name","type","value","2","id","dns",3,"ngModelChange","ngModel"],["for","dns"],["name","type","value","1","id","ssl",3,"ngModelChange","ngModel"],["for","ssl"],["name","type","value","0","id","user",3,"ngModelChange","ngModel"],["for","user"],["for","healthCheckUrl"],["type","text","pInputText","","id","healthCheckUrl","required","","autofocus","",3,"ngModelChange","ngModel","ngClass"],["for","siteUrl"],["type","text","pInputText","","id","siteUrl","required","","autofocus","",3,"ngModelChange","ngModel","ngClass"],["for","assignedTo"],["type","email","pInputText","","id","email","required","","autofocus","",3,"ngModelChange","ngModel","ngClass"],[1,"p-formgrid","grid"],[1,"field","col"],["for","isActive"],["type","checkbox","id","isActive","value","true",3,"ngModelChange","ngModel"],["for","sendMailifUnhealthy"],["type","checkbox","id","sendMailifUnhealthy","value","true",3,"ngModelChange","ngModel"],["for","durationUInMinute"],["type","number","pInputText","","id","durationUInMinute","required","","autofocus","",3,"ngModelChange","ngModel","ngClass"],["for","maxResponseTimeInSecond"],["type","number","pInputText","","id","maxResponseTimeInSecond","required","","autofocus","",3,"ngModelChange","ngModel","ngClass"],["for","headerSerialized"],["rows","5","cols","30","pInputTextarea","",3,"ngModelChange","ngModel"],[1,"ng-dirty","ng-invalid"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","No",1,"p-button-text",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","Yes",1,"p-button-text",3,"click"]],template:function(a,n){if(1&a){const o=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"div",3),e.nrm(3,"p-toast"),e.j41(4,"p-table",4,0),e.mxI("selectionChange",function(r){return e.eBV(o),e.DH7(n.selectedtProjects,r)||(n.selectedtProjects=r),e.Njj(r)}),e.DNE(6,F,7,1,"ng-template",5)(7,y,13,0,"ng-template",6)(8,v,19,4,"ng-template",7),e.k0s()(),e.j41(9,"p-dialog",8),e.mxI("visibleChange",function(r){return e.eBV(o),e.DH7(n.projectDialog,r)||(n.projectDialog=r),e.Njj(r)}),e.DNE(10,X,60,37,"ng-template",9)(11,Y,2,0,"ng-template",10),e.k0s(),e.j41(12,"p-dialog",11),e.mxI("visibleChange",function(r){return e.eBV(o),e.DH7(n.deleteProjectDialog,r)||(n.deleteProjectDialog=r),e.Njj(r)}),e.j41(13,"div",12),e.nrm(14,"i",13),e.DNE(15,H,5,1,"span",14),e.k0s(),e.DNE(16,A,2,0,"ng-template",10),e.k0s(),e.j41(17,"p-dialog",11),e.mxI("visibleChange",function(r){return e.eBV(o),e.DH7(n.deleteProjectsDialog,r)||(n.deleteProjectsDialog=r),e.Njj(r)}),e.j41(18,"div",12),e.nrm(19,"i",13),e.j41(20,"span"),e.EFF(21,"Are you sure you want to delete selected projects?"),e.k0s()(),e.DNE(22,w,2,0,"ng-template",10),e.k0s()()()}2&a&&(e.R7$(4),e.Y8G("value",n.projects)("columns",n.cols)("rows",10)("globalFilterFields",e.lJ4(22,V))("paginator",!0)("rowsPerPageOptions",e.lJ4(23,R))("showCurrentPageReport",!0),e.R50("selection",n.selectedtProjects),e.Y8G("rowHover",!0),e.R7$(5),e.Aen(e.lJ4(24,h)),e.R50("visible",n.projectDialog),e.Y8G("modal",!0),e.R7$(3),e.Aen(e.lJ4(25,h)),e.R50("visible",n.deleteProjectDialog),e.Y8G("modal",!0),e.R7$(3),e.Y8G("ngIf",n.project),e.R7$(2),e.Aen(e.lJ4(26,h)),e.R50("visible",n.deleteProjectsDialog),e.Y8G("modal",!0))},dependencies:[u.YU,u.bT,p.XI,j.Ei,p.Tg,p.yc,p.S9,p.nA,f._f,c.me,c.Q0,c.Zm,c.BC,c.YS,c.vS,C.n,D.y8,b.S,k.Z,M.a,x.l],encapsulation:2})}return i})()}];let J=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[g.iI.forChild(z),g.iI]})}return i})();var O=l(8253),Z=l(788),K=l(981),L=l(4714),$=l(1830);let Q=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[u.MD,J,p.bG,Z.e,c.YN,f.tm,C.Z,D.MB,$.m,L.wZ,b.u,k.f,O.kr,M.Ko,K.O3,x.P]})}return i})()}}]);