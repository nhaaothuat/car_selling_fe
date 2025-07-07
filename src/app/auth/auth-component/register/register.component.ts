import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule,NzSpinModule,ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  
  signupForm!:FormGroup
  isSpinning=false

  constructor(private fb:FormBuilder,private service:AuthService) {
    this.signupForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
     
    })
  }

  confirmationValidator = (control:FormControl):{[s:string]:boolean}=>{
    if(!control.value) return {require:true}
    else if (control.value!==this.signupForm.controls["password"].value) return {confirm:true,error:true}
    return {}
  }

  signup(){
    console.log(this.signupForm.value);
    this.service.register(this.signupForm.value).subscribe((res)=>{
      console.log(res)
    })
  }
}
