(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),s=a(6),l=a(4),c=a(5),u=a(8),d=a(7),m=a(1),h=(a(14),a(15),function(e){var t=e.title,a=e.completed,n=e.id,o=e.userId,i=e.userName;return r.a.createElement("div",{className:"todo"},r.a.createElement("p",null,"ID: ".concat(n)),r.a.createElement("p",null,i),r.a.createElement("p",null,"USER ID: ".concat(o)),r.a.createElement("p",null,t),r.a.createElement("input",{type:"checkbox",value:a}))}),p=function(e){return e.todos.map((function(e){return r.a.createElement(h,Object.assign({},e,{key:e.id}))}))},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(m.a)(Object(m.a)({},e),{},{userName:b.find((function(t){return t.id===e.userId})).name})})),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:g,todo:"",user:"",userError:"",titleError:""},e.userChoose=function(t){return e.setState({user:t.target.value,userError:""})},e.addTodo=function(t){return e.setState({todo:t.target.value,titleError:""})},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.todo,r=a.todos,o=a.user;o||e.setState({userError:"Please choose a user"}),n||e.setState({titleError:"Please add todo"}),o&&n&&e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[{userName:o,title:n,userId:b.find((function(e){return e.name===o})).id,completed:!1,id:r.length+1}]),todo:"",user:""}}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.todo,n=t.todos,o=t.userError,i=t.titleError,s=t.user;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),b.length),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("select",{name:"selectUser",value:s,onChange:this.userChoose},r.a.createElement("option",null,"Choose a user"),b.map((function(e){return r.a.createElement("option",{key:e.id,value:e.name},e.name)}))),r.a.createElement("div",null,o),r.a.createElement("input",{type:"text",name:"todo",value:a,onChange:this.addTodo,placeholder:"Add Todo"}),r.a.createElement("div",null,i),r.a.createElement("button",{type:"submit"},"Add"),r.a.createElement("div",{className:"todo-list"},r.a.createElement(p,{todos:n}))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c4d147c7.chunk.js.map