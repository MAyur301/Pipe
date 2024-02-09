import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe';

  servers =[
    {
      instanceType: 'medium',
      name : 'Production server',
      status:'stable',
      started: new Date(13,1,2017)
    },
    {
      instanceType: 'large',
      name : 'User Data',
      status:'stable',
      started: new Date(15,1,2017)
    },
    {
      instanceType: 'small',
      name : 'Development server',
      status:'offline',
      started: new Date(15,1,2017)
    },
  ];
  filter ='ER'
  getStatusClasses(server:{instanceType:string,name : String,status: string ,started: Date})
  {

    return{
      'list-group-item-success':server.status ==='stable',
      'list-group-item-warning':server.status ==='offline',
      'list-group-item-danger':server.status ==='critical'
    }

  }
}
