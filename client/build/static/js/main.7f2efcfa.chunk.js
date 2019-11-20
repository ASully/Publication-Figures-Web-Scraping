(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,n){e.exports=n(398)},175:function(e,t,n){},176:function(e,t,n){},203:function(e,t){},205:function(e,t){},237:function(e,t){},238:function(e,t){},303:function(e,t){},398:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(169),o=n.n(i),l=(n(175),n(59)),s=n(60),c=n(62),u=n(61),m=n(63),p=(n(176),n(95)),d=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"init",value:function(){var e=new p.a,t=document.getElementById("organism").value.trim().split(" ").join("-"),n=parseInt(document.getElementById("retmax").value);e.init(t,n)}},{key:"handleClick",value:function(e){e.preventDefault();var t=new p.a,n=document.getElementById("organism").value.split(" ").join("-"),a=parseInt(document.getElementById("retmax").value);t.init(n,a)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},"You need an internet connection for this script to work. If you cannot see the cat below, this script will not work."),r.a.createElement("br",null),r.a.createElement("div",{id:"imageContainer"},r.a.createElement("img",{id:"imgTest",className:"fixedImg",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",alt:"Testing whether internet connection exists or not. No internet means script will fail"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{id:"progress"},"Progress will display here with current image link in the process below"),r.a.createElement("a",{id:"imgLinkTest",href:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",atl:"download link",target:"_blank",rel:"noopener noreferrer"},"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/220px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{id:"start-process"},"To start this script, fill the two following inputs for which organism and how many papers you wish to scrape through. If you wish to parse through the maximum number of papers available, search for your species on ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pubmed",atl:"download link",target:"_blank",rel:"noopener noreferrer"},"PubMed")," (for example ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pubmed/?term=ArabIdopsis+thaliana",atl:"download link",target:"_blank",rel:"noopener noreferrer"},"https://www.ncbi.nlm.nih.gov/pubmed/?term=ArabIdopsis+thaliana"),') and see how many results appear total. You would see it right above the first results saying "Items: 1 to 20 of #", that # is the max number of papers available. This scrapper will only scrape through open access or publicly available publications and will not be able to access publications locked behind a paywall.',r.a.createElement("br",null),r.a.createElement("br",null),"The images are downloaded to your local download location that is designated by your browser you decide to run this tool on.",r.a.createElement("br",null),r.a.createElement("br",null),"The default suggested run values if you are doing this for the first time be 'Arabidopsis thaliana' (case insensitive, don't worry) and '100'. These are also the values that will run in no input has been put in.",r.a.createElement("br",null),r.a.createElement("br",null),"Organism: ",r.a.createElement("input",{id:"organism",placeholder:"Arabidopsis thaliana",type:"text",pattern:"[a-zA-Z]"}),r.a.createElement("br",null),"Max papers: ",r.a.createElement("input",{id:"retmax",placeholder:"100",type:"number"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{id:"startScrapping",onClick:this.handleClick},"Start scrapping")))}}]),t}(r.a.Component);o.a.render(r.a.createElement(d,null),document.getElementById("root"))},95:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return g});var a=n(59),r=n(60),i=n(62),o=n(61),l=n(63),s=n(2),c=n.n(s),u=n(179),m=n(101).defaults({encoding:null}),p=[],d={},g=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"ncbiArticleInfo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Arabidopsis-thaliana",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;""===t&&(t="Arabidopsis-thaliana"),(""===n||0===n||isNaN(n))&&(n=100),console.log(t,n);var a=new XMLHttpRequest;p=[];var r="https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term="+t+"[Organism]&usehistory=y&retmax="+n;a.responseType="document",a.onreadystatechange=function(){if(a.readyState===XMLHttpRequest.DONE&&200===a.status){var t=a.responseXML;console.log(t),document.getElementById("progress").innerHTML="Starting scraping",document.getElementById("titleOfPage").innerHTML="Starting scraping";var r=[];if(t&&t.getElementsByTagName("IdList")[0]){r=t.getElementsByTagName("IdList")[0].innerHTML.trim().split("\n");for(var i=0;i<r.length;i++)p.push(r[i].replace("<Id>","").replace("</Id>",""))}console.log(p),e.retrieveFigures(p,n)}},a.open("GET",r,!0),a.send()}},{key:"retrieveFigures",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["31307397"];document.getElementById("progress").innerHTML="Starting to retrieve figures",document.getElementById("titleOfPage").innerHTML="Starting to retrieve figures",console.log("Starting to retrieve figures");for(var t=0;t<e.length;t++){var n="http://localhost:8080/https://ncbi.nlm.nih.gov/pubmed/"+e[t];t===e.length-1?h(n,e[t],!0):h(n,e[t])}}},{key:"init",value:function(e,t){this.ncbiArticleInfo(e,t)}}]),t}(c.a.Component);function h(t,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];u(t).then(function(n){for(var r,i=[],o=(new DOMParser).parseFromString(n,"text/html").getElementsByClassName("figpopup"),l=0;l<o.length;l++){var s=o[l];s.children.length>0&&null!==s.children[0].getAttribute("src-large")&&i.push(s.children[0].getAttribute("src-large"))}var c=t.split("http://localhost:8080/");r=c.length>1?c[1]:c[0],d[r]=i;for(var u="",p=0;p<i.length;p++){u="http://localhost:8080/https://ncbi.nlm.nih.gov"+i[p];var g,h=i[p].split("/");h[h.length-1],document.getElementById("progress").innerHTML.split(",")[0];document.getElementById("progress").innerHTML="Image position: "+p+"/"+i.length,document.getElementById("titleOfPage").innerHTML="Image position: "+p+"/"+i.length,m.get(u,function(t,n,a){if(!t&&200===n.statusCode){for(var r=n.url,i=r.split("/"),o="brokenID",l=0;l<i.length;l++)if(void 0!==i[l]&&""!==i[l]&&!1===isNaN(i[l])){o=i[l];break}var s=i[i.length-1];console.log(r),g="data:"+n.headers["content-type"]+";base64,"+new e(a).toString("base64"),document.getElementById("imgTest").src=g,document.getElementById("imgLinkTest").href=g;var c=o+"-"+s;document.getElementById("imgLinkTest").download=c,document.getElementById("imgLinkTest").innerHTML=r,document.getElementById("imgLinkTest").click()}}),!0===a&&(document.getElementById("progress").innerHTML="Done",document.getElementById("titleOfPage").innerHTML="Done")}0===i.length&&!0===a&&(console.log(d),document.getElementById("progress").innerHTML="Done",document.getElementById("titleOfPage").innerHTML="Done")}).catch(function(e){console.log(e)})}}).call(this,n(3).Buffer)}},[[170,1,2]]]);
//# sourceMappingURL=main.7f2efcfa.chunk.js.map