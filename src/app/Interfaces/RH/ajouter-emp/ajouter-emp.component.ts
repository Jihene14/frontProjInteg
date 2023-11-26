import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeServiceService } from 'src/app/Services/employe-service.service';

@Component({
  selector: 'app-ajouter-emp',
  templateUrl: './ajouter-emp.component.html',
  styleUrls: ['./ajouter-emp.component.css']
})
export class AjouterEmpComponent {
  constructor(
    public activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
    private router: Router,
    public service: EmployeServiceService

  ) {}
  formregister!:FormGroup;
  register()
  {

    console.log(this.formregister.value);
    this.service.register(this.formregister.value).subscribe(data => 
      {
        console.log(data);
        this.router.navigate(['homeRh',this.activatedRoute.snapshot.params['id']]);
        
      })
    
  }

  ngOnInit(): void {
  

    this.formregister = this.fb.nonNullable.group({
      nom: [''],
      prenom: [''],
      poste: [''],
      email:[''],
      adresse: [''],
      departement:[''],
      role:['']
    });
    
  }
}
