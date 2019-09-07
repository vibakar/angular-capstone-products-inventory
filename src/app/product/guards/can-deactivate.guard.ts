import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddEditProductComponent } from '../components/add-edit-product/add-edit-product.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AddEditProductComponent> {
  
  canDeactivate(component: AddEditProductComponent): boolean { 
    if(component.hasUnsavedData()){
        if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
            return true;
        } else {
            return false;
        }
    }
    return true;
  }
}