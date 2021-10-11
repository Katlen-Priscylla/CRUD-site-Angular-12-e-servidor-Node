import { Component, OnInit } from '@angular/core';
import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    id: 0 ,
    name: '',
    price: null ,
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params.id;

    this.productService.readById(id).subscribe(product => {
      this.product = product ;
    });


}

deleteProduct(): void {

  this.productService.deleteById(this.product.id).subscribe(()=>{
    this.productService.showMessage("Produto excluído com sucesso!");
  this.router.navigate(["/products"]);
});

}

cancel(): void {
  this.router.navigate(["/products"]);
}
  }
