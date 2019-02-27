import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics:Array<string> = ["Angular","Mocha","Jasmine"];
  constructor() { }
  // new:string = "";
  ngOnInit() {
  }
  public addTopic(topic): void {
    this.topics.push(topic)
  }

}
