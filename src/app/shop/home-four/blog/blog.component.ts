import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-four',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogFourComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // Slick slider config
  public blogSlideConfig: any = {
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  // Blog
  public blog = [{
      image: 'assets/images/vegetables/blog/1.jpg',
      date: '1397 بهمن ',
      title: 'کاربرد رنگ ها در دکوراسیون داخلی',
      by: 'مصطفی هاشمی'
    }, {
      image: 'assets/images/vegetables/blog/2.jpg',
      date: ' دی 1397',
      title: 'روانشناسی رنگ ها',
      by: 'مسعود هاشمی'
    }, {
      image: 'assets/images/vegetables/blog/3.jpg',
      date: ' اسفند 1397',
      title: 'حضور نیپون در رنگ ابزار',
      by: 'مظفر هاشمی'
    }, {
      image: 'assets/images/vegetables/blog/4.jpg',
      date: '12 اسفند 1397',
      title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
      by: 'John Dio'
  }]
  

}
