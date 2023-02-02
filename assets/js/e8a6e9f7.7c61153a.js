"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i="NPM",s={unversionedId:"modules/packages-02-npm",id:"modules/packages-02-npm",title:"NPM",description:"In the previous chapter we learned how to make our code more reusable by splitting it up into modules. But it doesn't stop there. Now, we want to be able to share modules with other developers.",source:"@site/docs/modules/packages-02-npm.md",sourceDirName:"modules",slug:"/modules/packages-02-npm",permalink:"/workflows/modules/packages-02-npm",draft:!1,editUrl:"https://github.com/devinekask/workflows/blob/main/docs/modules/packages-02-npm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packages",permalink:"/workflows/modules/packages-01-modules"},next:{title:"Packages in practice",permalink:"/workflows/modules/packages-03-practice"}},l={},p=[{value:"Registry",id:"registry",level:2},{value:"Website",id:"website",level:2},{value:"CLI",id:"cli",level:2},{value:"Node.js",id:"nodejs",level:3},{value:"nvm",id:"nvm",level:3},{value:"npm",id:"npm-1",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"npm"},"NPM"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/workflows/modules/packages-01-modules"},"previous chapter")," we learned how to make our code more reusable by splitting it up into modules. But it doesn't stop there. Now, we want to be able to share modules with other developers."),(0,o.kt)("p",null,"To make something like that possible, we would need a couple of things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a way to gather all those packages"),(0,o.kt)("li",{parentName:"ul"},"a way to search them, get information about it"),(0,o.kt)("li",{parentName:"ul"},"a way to implement, use them in our project")),(0,o.kt)("p",null,"You saw it coming, didn't ya? Off course there is something like that, it is called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-npm"},"npm")," or ",(0,o.kt)("strong",{parentName:"p"},"N"),"ode ",(0,o.kt)("strong",{parentName:"p"},"P"),"ackage ",(0,o.kt)("strong",{parentName:"p"},"M"),"anager"),(0,o.kt)("p",null,'We call the modules who are available on npm "packages". Often, they exist of multiple modules, and they can make use of other packages on their own.'),(0,o.kt)("h2",{id:"registry"},"Registry"),(0,o.kt)("p",null,"You can compare the registry with a large database (in fact, it is) that keeps track of all the packages, their versions etc."),(0,o.kt)("p",null,"Everyone (including you) can publish a package to this registry."),(0,o.kt)("h2",{id:"website"},"Website"),(0,o.kt)("p",null,"To have easy access to all those packages, one can use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs")," site."),(0,o.kt)("p",null,"Let's say we need a short, random string to create the url for a new chatroom. Do a search on ",(0,o.kt)("inlineCode",{parentName:"p"},"unique string id")," and you get a couple of results. Picking the right one can be tricky, have a look at the description, the time it was last updated is also a good parameter."),(0,o.kt)("p",null,"Take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/nanoid"},"nanoid")," You get some kind of overview, often you will find a readme here with instructions how to install and use the package."),(0,o.kt)("p",null,"Notice the Repository link in the right column. Often the repositories of these packages are open source (but they don't have to be) This comes in handy when you stumble upon an issue and you need some help. In this case, the full readme is on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ai/nanoid"},"Github repository")),(0,o.kt)("h2",{id:"cli"},"CLI"),(0,o.kt)("p",null,"To interact (installing, updating and even publishing) with these packages, we use a command line tool ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")),(0,o.kt)("h3",{id:"nodejs"},"Node.js"),(0,o.kt)("p",null,"You might have noticed the 'Node' in Node package manager, it won't come as a surprise that we need to install Node.js. Node.js is a JavaScript runtime to execute JavaScript on a server (i.e. not in a browser) This runtime is under continues development, so version updates arrive regularly. New versions mean new possibilities, but that implies that older packages aren't updated yet to newer Node.js versions. If we would ",(0,o.kt)("em",{parentName:"p"},"just")," install a Node.js version system-wide, this would be problematic if we were working on two different project who require different Node.js versions."),(0,o.kt)("h3",{id:"nvm"},"nvm"),(0,o.kt)("p",null,"To handle different Node.js versions easaly, there is a tool called ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm")," (node version manager) Lets start by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"installing")," this one first. ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," See the documentation for the most recent version, the command is something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.XX.X/install.sh | bash\n")),(0,o.kt)("p",null,"To doule-check if everything went well, close every terminal instance and open a new window. Type ",(0,o.kt)("inlineCode",{parentName:"p"},"nvm")," and you should get an overview with all the commands nvm has to offer."),(0,o.kt)("p",null,"Now the Node Version Manager is installed, but we still have to install a Node.js runtime. With the ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," command, we can install specific Node.js versions, but by using the alias ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," we simply install the latest stable version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install node\n")),(0,o.kt)("p",null,"Have a look at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#usage"},"the documentation")," to see which other options are possible."),(0,o.kt)("p",null,(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," Assuming that the xcode command line tools are installed (run ",(0,o.kt)("inlineCode",{parentName:"p"},"xcode-select \u2013install")," otherwise)"),(0,o.kt)("h3",{id:"npm-1"},"npm"),(0,o.kt)("p",null,"There is no need to install npm on its own, it comes with the installation of Node.js. Try it, just run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," on the command line."))}m.isMDXComponent=!0}}]);