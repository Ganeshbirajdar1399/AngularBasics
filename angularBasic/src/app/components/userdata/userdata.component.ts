import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userdata',
  imports: [CommonModule],
  templateUrl: './userdata.component.html',
  styleUrl: './userdata.component.css'
})
export class UserdataComponent {
  data: any;
  quotes: any[] = [];
  posts: any;

  total: number = 0; // Total number of quotes
  skip: number = 0; // Number of quotes skipped
  limit: number = 0; // Limit for the current request

  constructor(private userdata: UserService, private quotedata: UsersService) {}
  loadData() {
    this.data = this.userdata.getStaticData();
    // console.log(this.data)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadData();
    this.fromServer();
    this.postsFromDbjson();

  }

  fromServer() {
    this.quotedata.fetchData().subscribe((res: any) => {
      this.quotes = res.quotes; // Extract quotes array
      this.total = res.total; // Total number of quotes
      this.skip = res.skip; // Number of quotes skipped
      this.limit = res.limit;
      console.log(this.quotes, 'This data fetch from server');
    });
  }

  postsFromDbjson() {
    this.userdata.getPostData().subscribe((response) => {
      this.posts = response;
    });
  }
}
