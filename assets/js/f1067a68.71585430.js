"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={},i="Undo",s={unversionedId:"git/basics/git-04-undo",id:"git/basics/git-04-undo",title:"Undo",description:"Whoops, we messed up, what now?",source:"@site/docs/git/basics/git-04-undo.md",sourceDirName:"git/basics",slug:"/git/basics/git-04-undo",permalink:"/workflows/git/basics/git-04-undo",draft:!1,editUrl:"https://github.com/devinekask/workflows/blob/main/docs/git/basics/git-04-undo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Track & commit files",permalink:"/workflows/git/basics/git-03-commit"},next:{title:"Ignore files",permalink:"/workflows/git/basics/git-05-ignore"}},c={},l=[{value:"Undo changes after staging",id:"undo-changes-after-staging",level:2},{value:"Undo commits",id:"undo-commits",level:2},{value:"Resources",id:"resources",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"undo"},"Undo"),(0,a.kt)("p",null,"Whoops, we messed up, what now?"),(0,a.kt)("h2",{id:"undo-changes-after-staging"},"Undo changes after staging"),(0,a.kt)("p",null,'Change the text again to "hello devine", stage these changes via the add command, but don\'t commit it yet:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "hello devine" > hello.txt\n$ git add hello.txt\n$ git status\nOn branch master\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n\n  modified:   hello.txt\n')),(0,a.kt)("p",null,"You get a hint on how to ",(0,a.kt)("em",{parentName:"p"},"unstage")," these changes: via git restore --staged:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git restore --staged hello.txt\n")),(0,a.kt)("p",null,"The file is still changed, but the changes are not staged anymore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ git status\nOn branch master\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\n  modified:   hello.txt\n\nno changes added to commit (use "git add" and/or "git commit -a")\n')),(0,a.kt)("p",null,"You can now definitively undo this, by using -just like in the previous topic- git restore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git restore hello.txt\n")),(0,a.kt)("h2",{id:"undo-commits"},"Undo commits"),(0,a.kt)("p",null,"Let's say you've committed some changes, but for some reason you want to undo them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "hello devine" > hello.txt\ngit add hello.txt\ngit commit -m "changed, but not sure about it"\n')),(0,a.kt)("p",null,"You can do 2 things: either create a new commit that undoes the changes from the previous commit (",(0,a.kt)("inlineCode",{parentName:"p"},"git revert HEAD"),"), or completely clear the commit from history (",(0,a.kt)("inlineCode",{parentName:"p"},"git reset --hard _reference-to-commit_"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git revert HEAD\n")),(0,a.kt)("p",null,"Your terminal will now display a vim or nano editor, into which you can type a commit message. Edit the default message if you want, and type in vim ",(0,a.kt)("inlineCode",{parentName:"p"},":quit")," when you're done. For nano, use Ctrl + X, followed by Yes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[master 2bc740f] Revert "changed, but not sure about it"\n  1 file changed, 1 insertion(+), 1 deletion(-)\n')),(0,a.kt)("p",null,"The file will now contain the contents from before the last commit."),(0,a.kt)("p",null,"You can also set a different editor for the merge message edits. Instead of vim, nano is a more user-friendly alternative:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git config --global core.editor "nano"\n')),(0,a.kt)("p",null,"By the way, you can view a repository's commit history with the ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ git log\ncommit 2bc740f2af93348267c6b3558e1037c5db540600 (HEAD -> master)\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:57:33 2025 +0200\n\n    Revert "changed, but not sure about it"\n\n    This reverts commit 8d977cb2d4855a782e261015645e017c1e128000.\n\ncommit 8d977cb2d4855a782e261015645e017c1e128000\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:56:55 2025 +0200\n\n    changed, but not sure about it\n\ncommit 5aa411822d8546ef1cd73addc20a022a74deae91\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:54:26 2025 +0200\n\n    changed, but not sure about it\n\ncommit 9720321677e0798b540b287398edeaadcb630b17\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:35:21 2025 +0200\n\n    welcome + new world file\n\ncommit 7f65053ee86593fb29a3102e03f7ae3f44b112d7\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:32:22 2025 +0200\n\n    changed world to devine\n\ncommit 5588c399cd15bc841c89158d72cc4d3938581196\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:30:22 2025 +0200\n\n    first commit\n')),(0,a.kt)("p",null,'You can see that the "wrong" commit is still in the git history, and the changes were undone via a new commit. Also note that each commit has a unique SHA1 hash ID. You can use these IDs to specify commits on certain commands.'),(0,a.kt)("p",null,"A more drastic way to undo commits is with the ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset")," command. With git reset you are going to reset your working tree to a particular commit and delete all commits after that commit from the repository."),(0,a.kt)("p",null,'We want to go back to the state of our commit "welcome + new world file". Through git log, we find out that the SHA1 ID is ',(0,a.kt)("inlineCode",{parentName:"p"},"9720321677e0798b540b287398edeaadcb630b17"),". Specify the SHA1 ID of the commit to where you want to reset after the command. You don't have to specify the entire ID: the first 4 characters are often sufficient (at least if they are unique):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git reset --hard 9720\nHEAD is now at 9720321 welcome dev3 + new world file\n")),(0,a.kt)("p",null,"Now when you run git log again, you will see that the commits after 9720 are gone:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git log\ncommit 9720321677e0798b540b287398edeaadcb630b17 (HEAD -> master)\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:35:21 2025 +0200\n\n    welcome + new world file\n\ncommit 7f65053ee86593fb29a3102e03f7ae3f44b112d7\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:32:22 2025 +0200\n\n    changed world to devine\n\ncommit 5588c399cd15bc841c89158d72cc4d3938581196\nAuthor: Demo user <demo.user@howest.be>\nDate:   Wed Sep 1 09:30:22 2025 +0200\n\n    first commit\n")),(0,a.kt)("p",null,"You will only use such a ",(0,a.kt)("inlineCode",{parentName:"p"},"git reset")," command to undo local commits. Once you're collaborating with others, and commits have already been distributed to other users, you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"git revert")," command to create a new commit that undoes a previous commit."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ohshitgit.com/"},"https://ohshitgit.com/")))}u.isMDXComponent=!0}}]);