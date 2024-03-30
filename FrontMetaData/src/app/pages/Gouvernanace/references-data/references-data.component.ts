import { Component, OnInit } from '@angular/core';
import { MetaData } from 'src/app/core/models/Metadata';
import { MeadataService } from 'src/app/core/services/meadata.service';
@Component({
  selector: 'app-references-data',
  templateUrl: './references-data.component.html',
  styleUrl: './references-data.component.scss'
})
export class ReferencesDataComponent  implements OnInit{
 

    listMetaData: MetaData[] = [];
  
    constructor(private MetaDataService: MeadataService) { }
  
    ngOnInit(): void {
      this.loadPolicies();
    }
  
    loadPolicies(): void {
      this.MetaDataService.getMetaData().subscribe(
        (data: MetaData[]) => {
          this.listMetaData = data;
        },
        (error) => {
          console.error('Error fetching policies:', error);
        }
      );
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      console.log(filterValue);
      if(filterValue!=""){
        this.listMetaData = this.listMetaData.filter(item => item.name
          .toLowerCase().startsWith(filterValue
          .toLowerCase()));
      }
      if(filterValue=="") {
        this.ngOnInit();
      }
    }
}
