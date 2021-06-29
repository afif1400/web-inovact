interface Carousel {
   title:string;
   rating:number;
   description:string;
   url:string;
}
interface InstructorCard {
      id:number;
      name:string;
      designation?:string;
      description?:string;
      projects:number;
      mentored:number;
      image:string;
      ref:string;
}
interface WebinarCard {
   id?:number;
   name:string;
   level:string;
   image?:string;
   price:number;
   applyLink:string;
   date:string;
   time:string;
}
interface Explore {
   id?:number;
   name:string;
   image?:string;
   applyLink:string;
}
interface Review{
   id:number;
   courseId:number;
   name:string;
   rating:number;
   reviewTitle?:string;
   review:string;
};
interface CourseDetails {
   id:number;
   title:string;
   date:string;
   duration:number;
   enrolled:number;
   time:string;
   instructor:string;
   price:number;
   category:string;
   link:string;
   image?:string;
   description?:string;
   outcomes?:Outcome[]; 

}
interface Curriculum{
   id:number;
   courseId:number;
   lesson:string; 
   duration:number
}
interface Outcome {
   outcome:string;
}
export const curriculumDetails: Curriculum[]=[
   {
      id:0,
      courseId:0,
      lesson:"Introduction",
      duration:10,
   },
   {
      id:1,
      courseId:0,
      lesson:"Introduction",
      duration:10,
   },
   {
      id:2,
      courseId:0,
      lesson:"Introduction",
      duration:3,
   },
]
export const reviewDetails: Review[]=[
   {
      id:0,
      courseId:0,
      name:"Jone Assten",
      rating:4,
      reviewTitle:'Very Thorough',
      review:" The course identify things we want to change and then figure out the things that need to be done to create the desired outcome. The course helped me in clearly define problems and generate a wider variety of quality solutions. Support more structures analysis of options leading to better decisions."
   },
   {
      id:0,
      courseId:0,
      name:"Jone Assten",
      rating:4,
      reviewTitle:'Very Thorough',
      review:" The course identify things we want to change and then figure out the things that need to be done to create the desired outcome. The course helped me in clearly define problems and generate a wider variety of quality solutions. Support more structures analysis of options leading to better decisions."
   },
]
   

export const carouselDetails: Carousel[]=[
   { 
      title:' The complete guide to react vue development',
      rating:3,
      description:'Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum',
      url:'https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   },
   { 
      title:' The complete guide to react vue development',
      rating:3,
      description:'Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum',
      url:'https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   },
   { 
      title:' The complete guide to react vue development',
      rating:3,
      description:'Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum',
      url:'https://images.pexels.com/photos/414628/pexels-photo-414628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   },
];

export const webinarDetails: WebinarCard[]=[
   {
      id:1,
      name:"Get working experience to work with this amazing",
      level:"beginner",
      price:500,
      image:'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
      date:"29-9-2021",
      time:'3:00 am',

   },
   {
      id:2,
      name:"Get working experience to work with this amazing",
      level:"intermediate",
      price:500,
      image:'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",

      date:"29-9-2021",
      time:'3:00 am',
   },

   {
      id:3,
      name:"Get working experience to work with this amazing",
      level:"advance",
      price:500,
      image:'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
      date:"29-9-2021",
      time:'3:00 am',
   },
   {
      id:3,
      name:"Get working experience to work with this amazing",
      level:"intermediate",
      price:500,
      image:'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
      date:"29-9-2021",
      time:'3:00 am',
   },

   {
      id:4,
      name:"Get working experience to work with this amazing",
      level:"advance",
      price:500,
      image:'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
      date:"29-9-2021",
      time:'3:00 am',
   },
   {
      id:5,
      name:"Get working experience to work with this amazing",
      level:"intermediate",
      price:500,
      image:'https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
      date:"29-9-2021",
      time:'3:00 am',
   },
];
export const exploreDetails: Explore[]=[
   {
      id:1,
      name:"Engineering",
      image:"https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      applyLink:"https://www.google.com/",
   },
   {
      id:1,
      name:"Business",
      image:'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
   },
   {
      id:1,
      name:"Art & Something",
      image:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
   },
   {
      id:1,
      name:"Art & Something",
      image:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      applyLink:"https://www.google.com/",
   },
]
export const courseDetails :CourseDetails={
   id:0,
   title:"React Web developemnt",
   date:'29-9-2021',
   duration:90,
   instructor:'Jane Doe',
   enrolled:34,
   time:'4:00 pm',
   price:99,
   description:'  Knowing React has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications. Knowing PHP will allow you to build web applications, websites or Content Management systems, like WordPress, Facebook, Twitter or even Google.',
   link:"/pay",
   category:'engineering',
   image:'https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',

};
export const outcomeDetails :Outcome[]=[
   {
      outcome:'Clean up face imperfections, improve and repair photos',
   },
   {
      outcome:'Clean up face imperfections, improve and repair photos',
   },
   {
      outcome:'Clean up face imperfections, improve and repair photos',
   },

]

export const instructorDetails :InstructorCard[]=[
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   },
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   },
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   },
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   },
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   },
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   },
   {
      id:0,
      name:"Jane Doe",
      mentored:3,
      designation:'Web Developer',
      description:'Jone Smit is a celebrated photographer, author, and writer who brings passion to everything he does.',
      projects:45,
      image:'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdHJ1Y3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      ref:'inovact.in',
   }
];