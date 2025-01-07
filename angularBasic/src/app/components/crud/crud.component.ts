import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [CommonModule,FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  userData: any;
  isSubmited = false;
  isSubmitedupd = false;

  formData: { id?: string; name: string; role: string } = {
    name: '',
    role: '',
  };

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.userService.userFetchData().subscribe((res) => {
      this.userData = res;
      console.log('fetch data from server', res);
    });
  }

  addData() {
    if (this.formData?.id) {
      if (confirm('Are you sure you want to update this item?')) {
        this.userService
          .updateUser(this.formData, this.formData.id)
          .subscribe((res) => {
            console.log('Update data successfully', res);
            this.clearForm();
            this.isSubmitedupd = true;
            setTimeout(() => {
              this.isSubmitedupd = false;
            }, 2000);
            this.fetchData();
          });
      }
    } else {
      this.userService.insertData(this.formData).subscribe((res) => {
        console.log('data Added Successfully');
        this.isSubmited = true;
        setTimeout(() => {
          this.isSubmited = false;
        }, 2000);
        this.fetchData();
        this.clearForm();
      });
    }
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.userService.DeletetData(id).subscribe((res) => {
        console.log('Data deleted successfully');
        this.fetchData();
      });
    }
  }

  editUser(userData: any) {
    this.formData = { ...userData }; // Create a copy of the user object
  }

  //this.formData = { ...userData }; // Creates a shallow copy
  //this.formData is a new object with the same properties but independent of userData.
  //Changes to form inputs do not affect the original userData in the table.

  clearForm(): void {
    this.formData = {
      name: '',
      role: '',
    };
  }

  cancel() {
    this.formData = {
      name: '',
      role: '',
    };
  }
}
