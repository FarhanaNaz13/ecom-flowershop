import { Product } from './product.model';

export class CartProduct{
    
    product :Product;
    quantity: number ;
    
    clear() {
        throw new Error('Method not implemented.');
    }  
}