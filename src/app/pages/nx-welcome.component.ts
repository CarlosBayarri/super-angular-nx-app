import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Photo } from '../models/photo';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'super-angular-nx-app-nx-welcome',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgOptimizedImage],
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  private httpClient: HttpClient = inject(HttpClient);
  public photos$ = this.httpClient
    .get<Photo[]>(environment.apiUrl + '/photos')
    .pipe(map((photos) => photos.slice(0, 10)));
}
