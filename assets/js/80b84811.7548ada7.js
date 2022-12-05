"use strict";(self.webpackChunktooling=self.webpackChunktooling||[]).push([[146],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7023:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const a={},i="Pull",l={unversionedId:"collaboration/collab-02-pull-rebase",id:"collaboration/collab-02-pull-rebase",title:"Pull",description:"Pull existing repository",source:"@site/docs/collaboration/collab-02-pull-rebase.md",sourceDirName:"collaboration",slug:"/collaboration/collab-02-pull-rebase",permalink:"/workflows/collaboration/collab-02-pull-rebase",draft:!1,editUrl:"https://github.com/devinekask/workflows/docs/collaboration/collab-02-pull-rebase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collaboration with git",permalink:"/workflows/collaboration/collab-01-github-push"},next:{title:"Merge conflicts",permalink:"/workflows/collaboration/collab-03-merge-conflicts"}},c={},s=[{value:"Pull existing repository",id:"pull-existing-repository",level:2},{value:"Push and pull",id:"push-and-pull",level:3},{value:"rebase",id:"rebase",level:2}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pull"},"Pull"),(0,r.kt)("h2",{id:"pull-existing-repository"},"Pull existing repository"),(0,r.kt)("p",null,"Once a repository has been created, and is on a server like GitHub, you can also download it from other computers/locations. Downloading the repository for the first time is done via the ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone")," command. From then on you can get updates via the ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," command. ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," is the inverse of ",(0,r.kt)("inlineCode",{parentName:"p"},"git push"),", and you will use it to pull in updates you don't already have locally."),(0,r.kt)("p",null,"Open a second terminal window, navigate to the parent directory of your original git repository and create a directory where you will clone a duplicate of the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir project_2\ncd project_2\n")),(0,r.kt)("p",null,"Execute the git clone command to get the online repository (just change the url to your own repository)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@github.com:demouser/hellogit\nCloning into 'hellogit'...\nremote: Enumerating objects: 22, done.\nremote: Counting objects: 100% (22/22), done.\nremote: Compressing objects: 100% (11/11), done.\nremote: Total 22 (delta 3), reused 22 (delta 3), pack-reused 0\nUnpacking objects: 100% (22/22), done.\n")),(0,r.kt)("p",null,"You now have 2 clones from the same repository on your computer. One in the project folder and one in the project2 folder. We'll use these two to test syncs and merges."),(0,r.kt)("h3",{id:"push-and-pull"},"Push and pull"),(0,r.kt)("p",null,"We simulate collaboration with 2 users by synchronizing in two different folders with the same remote (online repository). For the following actions, pay attention to the folder in which you execute the commands (from now on the project folder will always be in front of the dollar sign in the command to be executed)."),(0,r.kt)("p",null,"Tip: you can open 2 terminal windows, set them side by side."),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"folder 1")," we create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"project.txt"),", we add, commit and push to the remote:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'project_1 $ echo "created in project" > project.txt\nproject_1 $ git add .\nproject_1 $ git commit -m "added project.txt file"\n[main 3dc1c52] add project.txt file\n  1 file changed, 1 insertion(+)\n  create mode 100644 project.txt\n\nproject_1 $ git push\nEnumerating objects: 4, done.\nCounting objects: 100% (4/4), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (2/2), done.\nWriting objects: 100% (3/3), 300 bytes | 300.00 KiB/s, done.\nTotal 3 (delta 1), reused 0 (delta 0)\nremote: Resolving deltas: 100% (1/1), completed with 1 local object.\nTo git@github.com:demouser/hellogit.git\n    a8515e0..3dc1c52  main -> main\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"folder 2")," we create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"project2.txt"),", add & commit and try to push to the remote:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project_2 $ echo \"created in project2\" > project2.txt\nproject_2 $ git add .\nproject_2 $ git commit -m \"added project2.txt file\"\n[main 3bdfe55] added project2.txt file\n 1 file changed, 1 insertion(+)\n create mode 100644 project2.txt\n\nproject_2 $ git push\nTo git@github.com:demouser/hellogit\n ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs to 'git@github.com:demouser/hellogit'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally. This is usually caused by another repository pushing\nhint: to the same ref. You may want to first integrate the remote changes\nhint: (e.g., 'git pull ...') before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")),(0,r.kt)("p",null,"We get an error: there are new commits on the remote that we haven't pulled into our project2 clone yet. We have to pull these first before we can do a push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project_2 $ git pull\n")),(0,r.kt)("p",null,"We are presented with a vim or nano editor to perform a merge. You can enter a custom message here. Enter ",(0,r.kt)("inlineCode",{parentName:"p"},":quit")," to close the vim editor and continue the merge."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"remote: Enumerating objects: 4, done.\nremote: Counting objects: 100% (4/4), done.\nremote: Compressing objects: 100% (1/1), done.\nremote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0\nUnpacking objects: 100% (3/3), done.\nFrom git@github.com:demouser/hellogit\n    a8515e0..3dc1c52  main       -> origin/main\nMerge made by the 'recursive' strategy.\n  project.txt | 1 +\n  1 file changed, 1 insertion(+)\n  create mode 100644 project.txt\n")),(0,r.kt)("p",null,"When you execute ",(0,r.kt)("inlineCode",{parentName:"p"},"git status"),", you will see that you are 2 commits ahead of the remote: 1 commit is the merge commit, and a second commit is the ",(0,r.kt)("inlineCode",{parentName:"p"},"project2.txt")," commit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project_2 $ git status\nOn branch main\nYour branch is ahead of 'origin/main' by 2 commits.\nnothing to commit (working directory clean)\n")),(0,r.kt)("p",null,"Push the commits again to the remote. It succeeds this time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project_2 $ git push\nEnumerating objects: 7, done.\nCounting objects: 100% (7/7), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (4/4), done.\nWriting objects: 100% (5/5), 551 bytes | 551.00 KiB/s, done.\nTotal 5 (delta 2), reused 0 (delta 0)\nremote: Resolving deltas: 100% (2/2), completed with 1 local object.\nTo git@github.com:demouser/hellogit\n    3dc1c52..c18628a  main -> main\n")),(0,r.kt)("p",null,"Now also get these commits in your first folder (don't forget to switch folders) via a ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project_1 $ git pull\nremote: Enumerating objects: 7, done.\nremote: Counting objects: 100% (7/7), done.\nremote: Compressing objects: 100% (2/2), done.\nremote: Total 5 (delta 2), reused 5 (delta 2), pack-reused 0\nUnpacking objects: 100% (5/5), done.\nFrom git@github.com:demouser/hellogit\n    3dc1c52..c18628a  main       -> origin/main\nUpdating 3dc1c52..c18628a\nFast-forward\n  project2.txt | 1 +\n  1 file changed, 1 insertion(+)\n  create mode 100644 project2.txt\n")),(0,r.kt)("h2",{id:"rebase"},"rebase"),(0,r.kt)("p",null,"We will work with a centralized workflow for the time being: we work with several people on 1 main branch via 1 remote. There are other more advanced workflows that work through branches and forks. However, these are a bit more complex."),(0,r.kt)("p",null,"In the previous scenario, we added a merge commit to fast-forward an out-of-date repository. This is not optimal in a centralized workflow: it is better to use a rebase with the ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull"),". A rebase will execute all commits from the remote first, and execute your commits after it, instead of executing a merge commit by default."),(0,r.kt)("p",null,"Delete ",(0,r.kt)("inlineCode",{parentName:"p"},"project.txt")," in the project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'project_1 $ rm project.txt\nproject_1 $ git add -u .\nproject_1 $ git commit -m "removed project.txt"\n[main de80b79] removed project.txt\n 1 file changed, 1 deletion(-)\n delete mode 100644 project.txt\n\nproject_1 $ git push\nEnumerating objects: 3, done.\nCounting objects: 100% (3/3), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (2/2), done.\nWriting objects: 100% (2/2), 233 bytes | 233.00 KiB/s, done.\nTotal 2 (delta 1), reused 0 (delta 0)\nremote: Resolving deltas: 100% (1/1), completed with 1 local object.\nTo git@github.com:demouser/hellogit.git\n   c18628a..de80b79  main -> main\n')),(0,r.kt)("p",null,"Then delete ",(0,r.kt)("inlineCode",{parentName:"p"},"project2.txt")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project2")," folder. We will also have to do a pull here before we can push. The difference with the pull is that we pass a rebase flag, to ensure that all commits from the remote repository are executed first, and then our own commits:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'project_2 $ rm project2.txt\nproject_2 $ git add -u .\nproject_2 $ git commit -m "removed project2.txt"\n[main 6be65fb] removed project2.txt\n 1 file changed, 1 deletion(-)\n delete mode 100644 project2.txt\n\nproject_2 $ git pull --rebase\nremote: Enumerating objects: 3, done.\nremote: Counting objects: 100% (3/3), done.\nremote: Compressing objects: 100% (1/1), done.\nremote: Total 2 (delta 1), reused 2 (delta 1), pack-reused 0\nUnpacking objects: 100% (2/2), done.\nFrom git@github.com:demouser/hellogit\n   c18628a..de80b79  main   ->  origin/main\nFirst, rewinding head to replay your work on top of it...\nApplying: removed project2.txt\n')),(0,r.kt)("p",null,"This way, no merge commit is created. When you execute ",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," you see that you are now only 1 commit ahead of the remote repository, instead of 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project_2 $ git status\nOn branch main\nYour branch is ahead of 'origin/main' by 1 commit.\n  (use \"git push\" to publish your local commits)\nnothing to commit (working directory clean)\n")),(0,r.kt)("p",null,"Push to the remote repository. Also pull in the projects folder so that both repositories are up-to-date."))}m.isMDXComponent=!0}}]);