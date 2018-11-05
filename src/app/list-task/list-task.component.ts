import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

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
