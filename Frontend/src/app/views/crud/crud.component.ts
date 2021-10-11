import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private router: Router , private headerService: HeaderService) {
    headerService.headerData = {
      title:'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl:'/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate() : void{
     
   this.router.navigate(['/products/create'])
  }
}
