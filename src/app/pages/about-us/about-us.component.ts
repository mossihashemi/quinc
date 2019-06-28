import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Testimonial Carousel
  public testimonial = [{
     image: 'assets/images/avtar.jpg',
     name: 'MossiXYZ',
     designation: 'Developer',
     description: 'Spinach man who develop sofware!',
   }, {
     image: 'assets/images/2.jpg',
     name: 'Mostafa HASHEMI',
     designation: 'Designer',
     description: '',
   }, {
     image: 'assets/images/avtar.jpg',
     name: 'MossiXYZ',
     designation: 'Lead Developer',
     description: '',
  }]

  // Teastimonial Slick slider config
  public testimonialSliderConfig = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };

  // Team 
  public team = [{
     image: 'assets/images/team/1.jpg',
     name: 'شرکت رنگسازی نیپون',
     designation: 'تاسیس'
   }, {
     image: 'assets/images/team/2.jpg',
     name: 'شرکت رنگسازی ایران',
     designation: 'تاسیس'
   }, {
     image: 'assets/images/team/3.jpg',
     name: 'شرکت رنگسازی سحر',
     designation: 'تاسیس'
   }, {
     image: 'assets/images/team/4.jpg',
     name: 'شرکت مثال',
     designation: 'Cتاسیس'
   }, {
     image: 'assets/images/team/3.jpg',
     name: 'شرکت فیثال',
     designation: 'تاسیس'
  }]

  // Team Slick slider config
  public teamSliderConfig = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 586,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
     ]
  };

}
