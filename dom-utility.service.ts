// Angular Modules
import { Injectable } from '@angular/core';

@Injectable()
export class DomUtility {

    // Elements
    public getElement = (selector: string): any => document.querySelector(selector);

    public getElements = (selector: string): any => document.querySelectorAll(selector); 

    public removeElements(selector: string): void {
        for(let el of this.getElements(selector)) {
            el.parentNode.removeChild(el);
        } 
    }

    // Classes
    public addClass(selector: string, className: string): void {
        for(let el of this.getElements(selector)) {
            el.classList.add(className);
        } 
    }

    public removeClass(selector: string, className: string): void {
        for(let el of this.getElements(selector)) {
            el.classList.remove(className);
        } 
    }

    public hasClass(el: any, className: string): boolean {
        if(el.classList.contains(className)) {
            return true;
        }
        return false;
    }

    // Attributes
    public setAttributes(selector: string, attributeName: string, attributeValue: string): void {
        for(let el of this.getElements(selector)) {
            el.setAttribute(attributeName, attributeValue);
        }
    }

    public removeAttributes(selector: string, attributeName: string): void {
        for(let el of this.getElements(selector)) {
            el.removeAttribute(attributeName);
        }
    }

    public getAttribute(selector: string, attributeName: string): string {
        return this.getElement(selector).getAttribute(attributeName);
    }

    // Style
    public setStyle(selector: string, propertyName: string, propertyValue: string): void {
        for(let el of this.getElements(selector)) {
            el.style[propertyName] = propertyValue;
        }
    }
}
