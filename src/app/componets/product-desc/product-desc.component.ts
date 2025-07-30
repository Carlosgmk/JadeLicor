import { Component } from '@angular/core';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrl: './product-desc.component.scss'
})
export class ProductDescComponent {
   listImg: string[] =  [
      'assets/images/drink-maracuja.png',
      'assets/images/Garrafa.png',
      'assets/images/maracuja-m.png',
      
   ]

   listTitle: { title: string; subtitle: string }[] = [
    { title: 'Sabor Tropical', subtitle: 'Drinks tropicais' },
    { title: 'Artesanal', subtitle: 'Elegância e sabor' },
    { title: 'Natural', subtitle: 'Ingredientes naturais' }
    
   ]
}
