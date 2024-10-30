import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-load-modal',
  templateUrl: './load-modal.component.html',
  styleUrls: ['./load-modal.component.scss']
})
export class LoadModalComponent implements OnInit{

  labels = {
    routes: [
      'Delhi - Allhabad',
      'Agartala - Rishikesh',
      'Odisha - Gurgaon'
    ],
    patterns: [
      'One Way Loaded',
      'Both Way Loaded',
      'Empty'
    ],
    roads: [
      'Good',
      'Average',
      'Poor'
    ]
  }

  constructor(private fb: FormBuilder, private dialog : MatDialog, private dialogRef: MatDialogRef<LoadModalComponent>){}

  loadForm : FormGroup;

  ngOnInit(): void {
    this.loadForm = this.fb.group({
      loadNo: new FormControl(1,[ Validators.required, Validators.min(1), Validators.max(100)]),
      pattern: new FormControl('',[ Validators.required]) ,
      road:new FormControl('', [Validators.required]) ,
      routeTake: new FormControl('', [Validators.required]),
    })
  }

  increment(){
    const currentLoad = this.loadForm.get('loadNo')?.value
    if(currentLoad < 99){
      this.loadForm.get('loadNo')?.setValue(currentLoad + 1)
    }
  }

  decrement(){
    const currentLoad = this.loadForm.get('loadNo')?.value
    if(currentLoad > 1){
      this.loadForm.get('loadNo')?.setValue(currentLoad - 1)
    }
  }

  formatLoad(){
    const load = this.loadForm.get('loadNo')?.value;
    return load < 10 ? `0${load}` : load;
  }

  onLoadInput(event: any){
    const inputValue = event.target.value.replace(/[^0-9]/g, '') || 1;
    this.loadForm.get('loadNo')?.setValue(Number(inputValue))
  }

  onSubmit(){
    if (this.loadForm.valid) {
      const { loadNo, pattern, road, routeTake } = this.loadForm.value;
      alert(`Load in Tonnes: ${loadNo}, Pattern: ${pattern}, Road Condition: ${road}, Route: ${routeTake}`);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  onReset(){
    this.loadForm.reset({loadNo: 1}); 

  }

  closeDialog(){
    this.dialogRef.close()
  }
}
