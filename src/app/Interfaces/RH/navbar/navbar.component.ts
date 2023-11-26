import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/Classes/employe';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  id: any;
  employe!: Employe;

  constructor(
    private activatedRoute: ActivatedRoute,
    public service: EmployeServiceService,
    public router: Router
  ) {}
  
    naListCal()
    {
      this.router.navigate(['listEmp',this.id]);

    }
    naHomeRh()
    {
      this.router.navigate(['/homeRh',this.id]);

    }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.service.getEmpById(this.id).subscribe((data) => {
      console.log(data);
      this.employe = data;
    });
  }
}
