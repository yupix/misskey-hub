import{_ as r,o as i,c as h,a as e,b as t,w as n,e as o,d as s,r as l}from"./app.eef9782f.js";const c={},d=o('<h1 id="create-your-own-misskey-instance" tabindex="-1"><a class="header-anchor" href="#create-your-own-misskey-instance" aria-hidden="true">#</a> Create your own Misskey instance</h1><p>Thank you for your interest in building a Misskey instance \u{1F680} There are several ways to create an instance, so please choose one below and read the guide.</p><div class="custom-container danger"><i class="fas fa-times"></i><p>Do not recreate the database with the domain/hostname of the server once you have started using it!</p></div><div class="custom-container danger"><i class="fas fa-times"></i><p>If you use Cloudflare for your own server, do not use the Auto Minify setting.</p><p>Misskey will not work properly because Cloudflare will not interpret the latest JavaScript and will break the source code inside.</p><p>See also: <a href="https://github.com/misskey-dev/misskey/issues/9791" target="_blank" rel="noopener noreferrer">misskey-dev/misskey #9791</a></p></div><h2 id="using-docker" tabindex="-1"><a class="header-anchor" href="#using-docker" aria-hidden="true">#</a> Using Docker</h2>',5),u=s("See here"),p=e("h2",{id:"using-bash-script",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-bash-script","aria-hidden":"true"},"#"),s(" Using Bash Script")],-1),_=s("See here"),f=e("h2",{id:"manually",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#manually","aria-hidden":"true"},"#"),s(" Manually")],-1),m=s("See here"),y=o('<h2 id="using-yunohost" tabindex="-1"><a class="header-anchor" href="#using-yunohost" aria-hidden="true">#</a> Using Yunohost</h2><p>Misskey can be installed as an App on YunoHost. For more information see <a href="https://github.com/YunoHost-Apps/misskey_ynh" target="_blank" rel="noopener noreferrer">the repository of the Misskey package for YunoHost</a>.</p><h2 id="using-kubernetes-truenas-scale" tabindex="-1"><a class="header-anchor" href="#using-kubernetes-truenas-scale" aria-hidden="true">#</a> Using Kubernetes/TrueNAS Scale</h2>',3),k=s("See here");function b(g,v){const a=l("RouterLink");return i(),h("div",null,[d,e("p",null,[t(a,{to:"/en/docs/install/docker.html"},{default:n(()=>[u]),_:1})]),p,e("p",null,[t(a,{to:"/en/docs/install/bash.html"},{default:n(()=>[_]),_:1})]),f,e("p",null,[t(a,{to:"/en/docs/install/manual.html"},{default:n(()=>[m]),_:1})]),y,e("p",null,[t(a,{to:"/en/docs/install/kubernetes.html"},{default:n(()=>[k]),_:1})])])}var x=r(c,[["render",b],["__file","install.html.vue"]]);export{x as default};