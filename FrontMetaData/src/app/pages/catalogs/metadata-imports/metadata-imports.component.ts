<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from "@angular/forms"
import { FormControl } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { UploadService } from './service/upload.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { MatRadioChange } from '@angular/material/radio';


=======
import { Component } from '@angular/core';
>>>>>>> 87a445450 (integration user cleaned)

@Component({
  selector: 'app-metadata-imports',
  templateUrl: './metadata-imports.component.html',
  styleUrl: './metadata-imports.component.scss'
})
<<<<<<< HEAD

export class MetadataImportsComponent implements OnInit{
  
  selectedFile: File | null = null; // Make selectedFile nullable
  
 
  selectedFW = new FormControl();
  frameworks: string[] = ['RH', 'Marketing', 'Finance'];
  locations: string[] = ['Canada', 'France'];
  checkBoxValue: any = false;
  @ViewChild(MatStepper) stepper: MatStepper;
  
 
  files: any = [];
  typeValue : string;
  constructor(private builder: FormBuilder, private uploadService: UploadService,  private snackBar: MatSnackBar ) { }
  ngOnInit(): void  {
  }
  onUpload() {
    if (this.selectedFile && this.Basicform.valid ) {
      const description = this.Empregister.get('basic').get('desc').value;
      const location = this.Empregister.get('contact').get('location').value;
      const nameFile = this.Empregister.get('basic').get('firstname').value;
      const type = this.Empregister.get("basic").get("typeF").value;
      
      const formData = new FormData();

      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('description', description);
      formData.append('location', location);
      formData.append('title', nameFile);
      formData.append('type', type);
      this.uploadService.uploadFile(formData).subscribe(
        response => {
          console.log(response);
         
        });
        
        this.snackBar.open("File Extracted Successfully !", "OK", {
          duration: 3000,
          panelClass: 'my-snackbar'
          
          
         });
        
        
      
    } else {
      console.error('No file selected');
      this.snackBar.open('No file selected', 'Try Again !', {
        duration: 3000,
        panelClass: 'my-snackbar'
      
        
      });
    }
  }
  onFileSelected(event: any) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
  
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
      this.files.push(this.selectedFile.name);
    } else {
      this.selectedFile = null; // Ensure this.selectedFile is null if no file is selected
    }
  }

  isFileUploadSuccessful(): boolean {
    // Implement your condition for successful file upload
    // For example, check the response from the server or any other criteria
    return true; // Modify this based on your logic
  }
  onTypeChange(event: MatRadioChange): void { this.typeValue = event.value; }

  
  /*
 upload(event) {
  
      const element = event[0];
      this.files.push(element.name)
  } 
  
  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('description', this.description);
      this.uploadService.uploadFile(formData).subscribe(response => {
        console.log(response);
      });
    } else {
      console.error('No file selected');
    } 
  
  }
 
}
 */
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  
  isLinear=true;
  
  
  
  
  checkCheckBoxvalue(){
    console.log(this.checkBoxValue)
}
  

  Empregister = this.builder.group({
    basic: this.builder.group({
      firstname:this.builder.control('',Validators.required),
      desc: this.builder.control(''),
      typeF: this.builder.control('', Validators.required)
     
    }),
    contact: this.builder.group({
      location:this.builder.control('',Validators.required),
      folder:this.builder.control('',Validators.required),

    }),
    address: this.builder.group({
      street:this.builder.control('',Validators.required),
      city:this.builder.control('',Validators.required),
      pin:this.builder.control('',Validators.required)
    }),
    
    
  });

  get Basicform(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get contactform(){
    return this.Empregister.get("contact") as FormGroup;
  }
  get addressform(){
    return this.Empregister.get("address") as FormGroup;
  }
  
  HandleSubmit(){
    if(this.Empregister.valid){
      console.log(this.Empregister.value);
    }
  }
}

=======
export class MetadataImportsComponent {

}
>>>>>>> 87a445450 (integration user cleaned)
