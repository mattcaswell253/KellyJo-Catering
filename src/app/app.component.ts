import { Component, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KellyJo Catering';

  ngAfterViewInit(){
    $(function() {

      var navBtn = $('.nav-btn');
      function toggleNav() {
          navBtn.toggleClass('open');
          $('nav').toggleClass('open');
          $('.container').toggleClass('open');
      }
      navBtn.click(function() {
          toggleNav();
      })
      $('nav ul li a').click(function(e) {
          toggleNav();
      })
  })
  }
}
