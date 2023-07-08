import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, OnDestroy {
  count: number = Math.floor(Math.random() * 100);

  ngOnInit() {
    console.log("First render");    

    setTimeout(() =>{
      this.increment();
    },2000);
    
    setInterval(() => {
      this.increment();
    }, 1000);
  }

  ngDoCheck() {
    console.log("changes performed(re-render)");
    if (this.count >= 10) {
      this.count = 0;
    }
    
  }

  ngOnDestroy() {
    console.log("Component destroyed");
    
  }

  increment() {
    this.count = this.count + 1; //potential rerender
  }
}
