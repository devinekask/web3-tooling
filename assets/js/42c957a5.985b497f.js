"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,h=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={},i="Upload your files",l={unversionedId:"FTP/uploading",id:"FTP/uploading",title:"Upload your files",description:"In this step you can finally upload your website to the server. Do this on a regular basis and do not wait until the last day before the deadline to upload the final version of your website. There can always be a problem (access rights to files, incorrect paths and filenames,...) that needs to be fixed.",source:"@site/docs/FTP/02-uploading.md",sourceDirName:"FTP",slug:"/FTP/uploading",permalink:"/workflows/FTP/uploading",draft:!1,editUrl:"https://github.com/devinekask/workflows/blob/main/docs/FTP/02-uploading.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FTP client",permalink:"/workflows/FTP/ftp-client"}},s={},d=[{value:"Folder structure",id:"folder-structure",level:2},{value:"Uploading files and folders",id:"uploading-files-and-folders",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"upload-your-files"},"Upload your files"),(0,r.kt)("p",null,"In this step you can finally upload your website to the server. Do this on a regular basis and do not wait until the last day before the deadline to upload the final version of your website. There can always be a problem (access rights to files, incorrect paths and filenames,...) that needs to be fixed. "),(0,r.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,r.kt)("p",null,"Once you are connected to the web server using FileZilla you will see a couple of folders (cgi-bin, data, logs, php, subsites, tmp, www). ",(0,r.kt)("strong",{parentName:"p"},"DO NOT delete or rename any of those folders"),". "),(0,r.kt)("p",null,"You only need to work in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"www"),". Double click on this folder to open it. Everything that is put in the ",(0,r.kt)("inlineCode",{parentName:"p"},"www")," folder is publicly accessible on your website through ",(0,r.kt)("a",{parentName:"p",href:"http://www.yourdomain.be."},"http://www.yourdomain.be.")," You notice that there is already an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," in this folder."),(0,r.kt)("p",null,"If you navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://www.yourdomain.be"},"http://www.yourdomain.be")," you notice that this ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file is the default landing page provided by Combell. You can remove that file.  You can add your own homepage if you want."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FileZilla Files",src:n(7481).Z,width:"951",height:"332"})),(0,r.kt)("p",null,"You have only access to one hosting package with one domain name. Because you want to upload ",(0,r.kt)("strong",{parentName:"p"},"multiple projects")," over time, you need to put them in their own folder. "),(0,r.kt)("p",null,"To create a new folder, right click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"www")," folder and select ",(0,r.kt)("inlineCode",{parentName:"p"},"create directory"),". Enter a name of the folder and click ",(0,r.kt)("inlineCode",{parentName:"p"},"ok"),"."),(0,r.kt)("h2",{id:"uploading-files-and-folders"},"Uploading files and folders"),(0,r.kt)("p",null,"You can upload files and folders by dragging them from Finder to the correct folder in FilleZilla. You can also drag files from the left pane in FileZilla. Both methods work in the same way."))}u.isMDXComponent=!0},7481:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/index-f39ddb873962f9afe05f3e28d9a74f2c.png"}}]);