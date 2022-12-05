"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[150],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),d=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return a?t.createElement(h,l(l({ref:n},p),{},{components:a})):t.createElement(h,l({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1857:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(7462),o=(a(7294),a(3905));const r={},l="Advantages of npm",s={unversionedId:"modules/packages-04-advantages",id:"modules/packages-04-advantages",title:"Advantages of npm",description:"In the previous chapter, we've installed a package to get an idea how npm works. Here we are about to do some routines to make it clear what the advantages of such a workflow is. You will learn a couple of things along the way, so buckle up!",source:"@site/docs/modules/packages-04-advantages.md",sourceDirName:"modules",slug:"/modules/packages-04-advantages",permalink:"/workflows/modules/packages-04-advantages",draft:!1,editUrl:"https://github.com/devinekask/workflows/docs/modules/packages-04-advantages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Packages in practice",permalink:"/workflows/modules/packages-03-practice"},next:{title:"Npx",permalink:"/workflows/modules/packages-05-npx"}},i={},d=[{value:"Install a specific version",id:"install-a-specific-version",level:2},{value:"Install",id:"install",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Version Control",id:"version-control",level:2}],p={toc:d};function c(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advantages-of-npm"},"Advantages of npm"),(0,o.kt)("p",null,"In the previous chapter, we've installed a package to get an idea how npm works. Here we are about to do some routines to make it clear what the advantages of such a workflow is. You will learn a couple of things along the way, so buckle up!"),(0,o.kt)("h2",{id:"install-a-specific-version"},"Install a specific version"),(0,o.kt)("p",null,"It will happen sooner or later. You will need some previous version of a package to make it work with another package or a production server that only supports an older Node.js version."),(0,o.kt)("p",null,"Let us install an older version of ",(0,o.kt)("inlineCode",{parentName:"p"},"ora"),", this is a fancy 'spinner' for the command line, good for now. At the time of writing, the latest version is 6.1.2, we will install version 6.0.0. Let's say we've installed this in the past."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install ora@6.0.0\n\nadded 31 packages, and audited 33 packages in 2s\n\n17 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n")),(0,o.kt)("p",null,"If you're wondering why it added 31 packages, keep reading, we will address this in a minute."),(0,o.kt)("p",null,"Back to the present, curious to see the state of our packages. Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm outdated\nPackage  Current  Wanted  Latest  Location          Depended by\nora        6.0.0   6.1.2   6.1.2  node_modules/ora  hellonpm\n")),(0,o.kt)("p",null,"O-ow, there is a package outdated. Don't worry, we don't have to manually edit files in the node_modules folder, we can simply update this one by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ora\n\nremoved 6 packages, changed 2 packages, and audited 27 packages in 597ms\n\n15 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n")),(0,o.kt)("p",null,"Seems like some packages were removed and some changed. But, most important for now, let us check if we still have outdated packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm outdated\n")),(0,o.kt)("p",null,"Nope, all good!"),(0,o.kt)("p",null,"Now let us have a look at all those extra packages, check the contents of the node_modules directory. There are a lot of packages over there. That's because 'ora' depends on a couple of packages itself. You can see this on ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ora?activeTab=dependencies"},"the npmjs page")," or in its ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/ora/blob/main/package.json"},"package.json")),(0,o.kt)("p",null,'Notice there are "dependencies" and "devDependencies". Dependencies are needed to run the script itself. DevDependencies are for development purposes and not necessary in a production build. For instance, the author of this package uses ',(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ava"},"ava")," to test the code of this package."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Wanna' do a bold move? Delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," directory, go do it, don't be scared."),(0,o.kt)("p",null,"Well, be at least a little carefully with the ",(0,o.kt)("inlineCode",{parentName:"p"},"rm")," (remove) command, make sure you have the command correct. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-r"),' flag means "recursive" and deletes every directory and its contents of that path.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -r node_modules/\n")),(0,o.kt)("p",null,"Now try to run start again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n\n> hellonpm@1.0.0 start\n> node .\n\nnode:internal/errors:484\n    ErrorCaptureStackTrace(err);\n    ^\n\nError [ERR_MODULE_NOT_FOUND]: Cannot find package 'nanoid' imported from /Users/demouser/hellonpm/index.js\n    at new NodeError (node:internal/errors:393:5)\n    at packageResolve (node:internal/modules/esm/resolve:810:9)\n    at moduleResolve (node:internal/modules/esm/resolve:859:20)\n    at defaultResolve (node:internal/modules/esm/resolve:1074:11)\n    at nextResolve (node:internal/modules/esm/loader:164:28)\n    at ESMLoader.resolve (node:internal/modules/esm/loader:839:30)\n    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:426:18)\n    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:76:40)\n    at link (node:internal/modules/esm/module_job:75:36) {\n  code: 'ERR_MODULE_NOT_FOUND'\n}\n\nNode.js v18.8.0\n")),(0,o.kt)("p",null,"(If you don't get this error and everything works just fine, that probably means you have installed nanoid somewhere else up in the file tree)"),(0,o.kt)("p",null,"Now what? How can we get our project up and running again? This isn't a problem at all, in fact this is what we want to achieve. By running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," we can install all the packages listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," according to their version numbers listed. This way we can share a project with each other without including that large node_modules folder. Make sure you ",(0,o.kt)("strong",{parentName:"p"},"include node_modules/ in the .gitignore")," of your project. You don't want to version control this directory, it is not necessary.\nTo make things even more clear: never hand in a project with the node_modules included, this is not necessary!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n\nadded 26 packages, and audited 27 packages in 664ms\n\n15 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n\n$ npm start\n\n> hellonpm@1.0.0 start\n> node .\n\nHello Node.js The id is: eAKBUmelPv5LDTyOuJdP3\n")),(0,o.kt)("p",null,"Maybe you have to refresh the VS Code file explorer, but you can see the node_modules directory is back with all its content."),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"If you want to get rid of a package, you can remove it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," dependencies (and run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," again) or you can remove one with the ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall")," command. Let us remove ora since we don't use it afterall."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm uninstall ora\n\nremoved 25 packages, and audited 2 packages in 539ms\n\nfound 0 vulnerabilities\n")),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"A quick sidestep about those version numbers. These are not arbitrary but following a certain standard called ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver"),' and are structured like "MAJOR.MINOR.PATCH"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MAJOR version when there are incompatible changes"),(0,o.kt)("li",{parentName:"ul"},"MINOR version when new functionality is added in a backwards compatible manner"),(0,o.kt)("li",{parentName:"ul"},"PATCH version when there are backwards compatible bug fixes")),(0,o.kt)("p",null,"This means -at least in theory- that you can safely update minor and patch changes. When there is a major update, you should reach out to the documentation for that package to see if there is some kind of upgrade guide."),(0,o.kt)("p",null,"When you look at the dependencies in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", you can see which version is desired. Often these are proceeded by symbols like ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"^")," These all have special meanings which you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npm/node-semver#versions"},"read about here")," in detail."),(0,o.kt)("h2",{id:"version-control"},"Version Control"),(0,o.kt)("p",null,"Just to make things clear:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"node_modules: do ",(0,o.kt)("strong",{parentName:"li"},"not")," include in version control"),(0,o.kt)("li",{parentName:"ul"},"package.json: ",(0,o.kt)("em",{parentName:"li"},"do")," include in version control"),(0,o.kt)("li",{parentName:"ul"},"package-lock.json: ",(0,o.kt)("em",{parentName:"li"},"do")," include in version control")),(0,o.kt)("p",null,"The package-lock.json file is auto generated en keeps track of all the packages installed in your project. For instance: it is perfectly possible that two separate packages both need the same dependency. Npm then decides which version to install en keeps track of this in the lock file. So this can speed tings up in successive installations."))}c.isMDXComponent=!0}}]);