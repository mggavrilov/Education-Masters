import { Presentation } from './presentation'
export class Course {
    public presentations: Presentation[] = [
        new Presentation("Introduction to Angular 2", "http://e-mihailova.com/wp-content/uploads/2018/06/gettingstartedwithangular2-150927221103-lva1-app6891.pdf"),
        new Presentation("Angular 2 - Core Concepts", "http://e-mihailova.com/wp-content/uploads/2018/06/angularjscoreconceptswebinar23-160331095350.pdf"),
        new Presentation("Introduction to NativeScript - Build Truly Native Apps using JavaScript", "http://e-mihailova.com/wp-content/uploads/2018/06/nativescript-150507045730-lva1-app6892.pdf"),
        new Presentation("NativeScript with Angular 2", "http://e-mihailova.com/wp-content/uploads/2018/06/nativescript-160924091216.pdf"),
        new Presentation("ReactJS and why it's awesome", "http://e-mihailova.com/wp-content/uploads/2018/06/7nb4zlphscigcqmicxzs-signature-c813e74b9bcf05c46e974956d741fe66dfefd5236b21b165989d7bf0b2f6e150-poli-141027085827-conversion-gate01.pdf" ),
        new Presentation("ReactJS", "http://e-mihailova.com/wp-content/uploads/2018/06/react-js-140125005932-phpapp02.pdf"),
        new Presentation("JavaScript - an Introduction", "http://e-mihailova.com/wp-content/uploads/2018/06/javascript-141127001142-conversion-gate01-1.pdf"),
        new Presentation("JavaScript Fundamentals", "http://e-mihailova.com/wp-content/uploads/2018/06/fundamentaljavascriptutcmarch2014-140305104047-phpapp01.pdf")
    ]

    constructor(public name, public lecturer, public details?) {
    }
}
