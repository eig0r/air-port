import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

  export class AddTaskComponent implements OnInit {

  	public tasks;

    	constructor(private angularFire: AngularFireDatabase) {

    	}

  	ngOnInit() {
  		this.getTask().subscribe(res => {

  			this.tasks = res;

      if(this.tasks[0].itemNumber2==null){
        console.log('ok')
      };
  		});
  	}

  	getTask(){
  		return this.angularFire.list('/shopping-list').valueChanges();
  	}

  }
