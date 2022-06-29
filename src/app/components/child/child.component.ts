import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage=''; // decorate the property
  @Output() parentMessage=new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(){
    this.parentMessage.emit('Hello from child');
  }

}
