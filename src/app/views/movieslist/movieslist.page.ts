import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/models/movie';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.page.html',
  styleUrls: ['./movieslist.page.scss'],
})
export class MovieslistPage implements OnInit {
movieTitle:string;
movies:Movie[];
  constructor(private router: Router, private route: ActivatedRoute, private rest: ApiService, public ut: UtilityService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state) {
     console.log(this.router.getCurrentNavigation().extras.state.movietitle);
     this.movieTitle = this.router.getCurrentNavigation().extras.state.movietitle;
     if(this.movieTitle)
     this.getMovieByTitle(this.movieTitle)
      }
    })
   }

  ngOnInit() {}

 async getMovieByTitle(movieTitle:string){
   await this.ut.present('Finding movies...')
      this.rest.findMoviesByTitle(movieTitle).subscribe(async(movies) => {
        console.log(movies)
       await this.ut.dismiss();
        if(movies.Response == 'True'){
          this.movies = movies.Search
        }else{
          this.ut.presentAlert('Error','',movies.Error)
        }
      }, err => {
        console.log(err)
        this.ut.dismiss();
        this.ut.presentAlert('Error','', 'There is some error in your request');
      })
  }

}
