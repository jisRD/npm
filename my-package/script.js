class Post {

    constructor(title, link, author, img) {

      this.title = title;

      this.link = link;

      this.author = author;

      this.img = img;

    }}

  

  

  const app = new Vue({

    el: '#app',

    data: {

      search: '',

      postList: [

      

  

      new Post(

      'facebook jishnu.r.dev',

      'https://www.facebook.com/jishnu.r.dev',

      'jishnu.r.dev',

      'https://blogger.googleusercontent.com/img/a/AVvXsEhqyjvDXfFqf0se66Ulafypo6WCA5jHNIW4bUKEeVA2ftdymQQ68MfbTbGkC4LSK3xJLFP195Gu0R_uqk8pzp7Tbvijn3EKk7yXYXKkGd4U7yp_umLPPfQZ3HqO29hqSg4UwWa9Yxbs5rrKTIoch2hiIYq7O3JtZeb1QFd4_klRaP9a05i-YmKh33I7mA=s320'),

  

      new Post(

      'Linkedin jishnu.r.dev',

      'https://www.linkedin.com/in/jishnu-r-dev/',

      'jishnu-r-dev',

      'https://blogger.googleusercontent.com/img/a/AVvXsEjTC-5d6qiTFVkz6VPE7hiDdPxEkEg-4wE3UH2lFDc_0WP74hIOsCdDcJSsOAjlWKcDLytsTt1TTXRNcht4UF3x-rlbjDl4MwLF1TaiIsnyf8LFOecOHsG1FwCUf17f2DwNJgv4L3FRzSV7Z8XnMt3k3PhER97PNLLm3GuFVeT--15nCmWpN-Fj2z3ruQ=s320'),

      new Post(

      'youtube JisRD',

      'https://www.youtube.com/channel/UCECt5T3pvuMwIln1S18b9jg',

      'JisRD',

      'https://blogger.googleusercontent.com/img/a/AVvXsEgC3qlHqZzlF2QO6EGAI081Mvvmlg5Qj2fexpg34Q6b8WH-LpoWuu0Ukv95mPFxkVC3wX2Cqd4Kx6Kfh-fk4aHEsyBhQAMgl73FMp6pbBNSbeei6qm0rkpSr6sgN90wF1Z9e7j3jX9ELUeag001oXjZqfLFLslHxHVKY1r3XC3JAfPHWYcFlvZNZi3aiw=s320')

  

      

      ] },

  

  

  

    computed: {

      filteredList() {

        return this.postList.filter(post => {

          return post.title.toLowerCase().includes(this.search.toLowerCase());

        });

      } } });
