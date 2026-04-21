import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ignoreElements} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  constructor(private http: HttpClient) {
    }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/llistaAssigfernandezbueno").forEach((data) =>{
    console.log(data)
    });

    this.http.put("http://localhost:3000/vergefernandezbueno", "")

  }

  protected readonly title = signal('RA2RA3ExErikFernandezBueno');

}


