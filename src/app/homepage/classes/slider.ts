interface ISlider {
    title: string;
    desc: string;
    image: string;
  }
  
  export class SliderClass {
    constructor(public title: string, public desc: string, public image: string) {
    }
  }
  
  export let Sliders:SliderClass[] = [
    new SliderClass("Find your own happiness", "50% sale is going on", "assets/images/slider-3.jpg"),
    new SliderClass("Soft glory", "50% sale is going on", "assets/images/slider-bg2_2000x.jpg"),
    new SliderClass("Cherish Your Love Ones", "with a flower bouquet,u will never regret", "assets/images/slideshow-1-1.jpg"),
    
    
    
    
    
  ];