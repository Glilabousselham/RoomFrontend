import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { HomeUserProfile } from '../../component/home-user-profile/home-user-profile';
import { ProfilesList } from '../../component/profiles-list/profiles-list';

@Component({
  selector: 'app-home-page',
  imports: [Navbar, HomeUserProfile, ProfilesList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
