import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempScreen1';


  // config = {
  //   "testingElement": {
  //     loaded: false,
  //     path: '/testingElement/main.js',
  //     element: 'app-testingelement'
  //   }
    
  // };
// testingComponent
  ngOnInit(){
    console.log("this is ng ONinit");
    // this.load('testingElement');

  }

  // load(name: string):void{
    
  //   const configItem = this.config[name];

  //   const content = document.getElementById('testingComponent');

  //   console.log(content);

  //   const script = document.createElement('script');
    
  //   script.src = configItem.path;
  //   content.appendChild(script);
    
  //   const element: HTMLElement = document.createElement(configItem.element);
    
  //   content.appendChild(element);
  // }
}
