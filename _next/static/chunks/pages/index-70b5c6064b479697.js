(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(878)}])},6899:function(t,e,r){"use strict";var a=r(7320),n=r(1720);r(5675);var i=r(1664),c=r.n(i),l=r(9145);let o=t=>{let{article:e,authors:r,isFeatured:i=!1}=t,[o,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>s(!0),[]),(0,a.BX)("div",{className:"card card-background hover:hover-card !rounded-2xl hover:hover-card-uv hover:dark:hover-card-neon-yellow",children:[(0,a.tZ)("img",{src:e.cover?e.cover:e.imageHeader,className:"!rounded-2xl ".concat(e.styles.filter," ").concat(i?"card-background-image-featured":"card-background-image"),alt:"".concat(e.title," image")}),(0,a.BX)("div",{className:"card-img-overlay flex flex-col justify-end",children:[(0,a.tZ)("div",{className:"flex items-center mb-2 leading-normal !text-base",children:(0,a.tZ)("span",{className:"marker-line !py-1 bg-dark text-light capitalize font-medium",children:e.channel})}),(0,a.tZ)(c(),{className:"",href:"/articles/".concat(e.slug),children:(0,a.tZ)("h3",{className:"card-title text-2xl",children:(0,a.tZ)("span",{className:"marker-line bg-dark text-light !py-1 hover:underline underline-offset-1",children:e.title})})}),(0,a.BX)("div",{className:"flex",children:[r.map(t=>(0,a.tZ)("div",{className:"flex items-center my-1",children:(0,a.BX)("div",{className:"flex-shrink-0",children:[(0,a.tZ)("img",{id:"anchor-".concat(t.slug,"-").concat(e.slug),src:t.avatar,className:"w-10 h-10 object-cover rounded-full border border-dark mr-2",alt:"".concat(t.name," avatar")}),o&&(0,a.tZ)(l.u,{anchorId:"anchor-".concat(t.slug,"-").concat(e.slug),content:"Por: ".concat(t.name),place:"right"})]})},t.name)),(0,a.tZ)("div",{className:"flex items-center my-1",children:(0,a.tZ)("span",{className:"text-light text-base font-medium bg-dark capitalize tracking-wide !py-1",children:(0,a.tZ)("span",{className:"marker-line",children:"12 Jan 2023"})})}),(0,a.tZ)("div",{className:"flex flex-1 items-center",children:(0,a.tZ)(c(),{className:"ml-auto",href:"/articles/".concat(e.slug),children:(0,a.tZ)("button",{className:"tracking-wider text-light dark:text-dark bg-uv-500 dark:bg-neon-yellow-500 hover:ring-2 ring-uv-300 dark:ring-neon-yellow-200 py-1 px-3 rounded font-medium transition-all !text-base",children:"Ler mais..."})})})]})]})]})};e.Z=o},2815:function(t,e,r){"use strict";var a=r(7320),n=r(1664),i=r.n(n);let c=t=>{let{href:e,...r}=t,n=e&&e.startsWith("/"),c=e&&e.startsWith("#");return n?(0,a.tZ)(i(),{href:e,children:(0,a.tZ)("a",{...r})}):c?(0,a.tZ)("a",{href:e,...r}):(0,a.tZ)("a",{target:"_blank",rel:"noopener noreferrer",href:e,...r})};e.Z=c},6200:function(t,e,r){"use strict";r.d(e,{TQ:function(){return d},es:function(){return m}});var a=r(7320),n=r(9008),i=r.n(n),c=r(1163),l=r(1576),o=r.n(l);let s=t=>{let{title:e,description:r,ogType:n,ogImage:l,twImage:s,canonicalUrl:d}=t,m=(0,c.useRouter)();return(0,a.BX)(i(),{children:[(0,a.tZ)("title",{children:e}),(0,a.tZ)("meta",{name:"robots",content:"follow, index"}),(0,a.tZ)("meta",{name:"description",content:r}),(0,a.tZ)("meta",{property:"og:url",content:"".concat(o().siteUrl).concat(m.asPath)}),(0,a.tZ)("meta",{property:"og:type",content:n}),(0,a.tZ)("meta",{property:"og:site_name",content:o().title}),(0,a.tZ)("meta",{property:"og:description",content:r}),(0,a.tZ)("meta",{property:"og:title",content:e}),"Array"===l.constructor.name?l.map(t=>{let{url:e}=t;return(0,a.tZ)("meta",{property:"og:image",content:e},e)}):(0,a.tZ)("meta",{property:"og:image",content:l},l),(0,a.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.tZ)("meta",{name:"twitter:site",content:o().twitter}),(0,a.tZ)("meta",{name:"twitter:title",content:e}),(0,a.tZ)("meta",{name:"twitter:description",content:r}),(0,a.tZ)("meta",{name:"twitter:image",content:s}),(0,a.tZ)("link",{rel:"canonical",href:d||"".concat(o().siteUrl).concat(m.asPath)})]})},d=t=>{let{title:e,description:r}=t,n=o().siteUrl+o().socialBanner,i=o().siteUrl+o().socialBanner;return(0,a.tZ)(s,{title:e,description:r,ogType:"website",ogImage:n,twImage:i})},m=t=>{let e,{authorDetails:r,title:n,description:l,date:d,modifiedDate:m,url:u,images:g=[],cover:h,canonicalUrl:p}=t;(0,c.useRouter)();let f=new Date(d).toISOString(),y=new Date(m||d).toISOString(),Z=0===g.length?[o().socialBanner]:"string"==typeof g?[g]:g,x=Z.map(t=>({"@type":"ImageObject",url:t.includes("http")?t:o().siteUrl+t}));e=r?r.map(t=>({"@type":"Person",name:t.name})):{"@type":"Person",name:o().author};let b={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:n,image:x,datePublished:f,dateModified:y,author:e,publisher:{"@type":"Organization",name:o().author,logo:{"@type":"ImageObject",url:"".concat(o().siteUrl).concat(o().siteLogo)}},description:l},v=x[0].url;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(s,{title:n,description:l,ogType:"article",ogImage:x,twImage:v,canonicalUrl:p}),(0,a.BX)(i(),{children:[d&&(0,a.tZ)("meta",{property:"article:published_time",content:f}),m&&(0,a.tZ)("meta",{property:"article:modified_time",content:y}),(0,a.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(b,null,2)}})]})]})}},6720:function(t,e,r){"use strict";r(7320),r(1664),r(9671)},1576:function(t){"use strict";t.exports={title:"Ultimate Mercer - Testing NextJS",author:"Ultimate Mercer",headerTitle:"Ultimate Mercer - Testing NextJS",description:"Testing NextJS",language:"pt-BR",theme:"system",siteUrl:"https://ultimatemercer.com/nextjs-test/",siteLogo:"/static/images/ultimate-mercer-thumb.jpg",image:"/static/images/ultimate-mercer-thumb.jpg",socialBanner:"/static/images/ultimate-mercer-thumb.jpg",email:"address@yoursite.com",github:"https://github.com",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"pt-BR"}},878:function(t,e,r){"use strict";r.r(e),r.d(e,{ARTICLES_PER_PAGE:function(){return m},__N_SSG:function(){return d},default:function(){return g}});var a=r(7320);r(9008),r(5675),r(1664);var n=r(6200);r(2010);var i=r(6899);r(2815),r(6720);var c=r(1576),l=r.n(c),o=r(1720);let s=t=>{let{articles:e,title:r,initialDisplayArticles:n=[],pagination:c}=t,[l,s]=(0,o.useState)(""),d=e.filter(t=>{let e=t.article.title+t.article.description;return e.toLowerCase().includes(l.toLowerCase())}),m=n.length>0&&!l?n:d;return(0,a.tZ)(a.HY,{children:(0,a.BX)("div",{className:"",children:[(0,a.BX)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,a.tZ)("h1",{className:"text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,a.tZ)("div",{className:"flex justify-center mb-4",children:(0,a.BX)("div",{className:"relative max-w-lg flex-1",children:[(0,a.tZ)("input",{"aria-label":"Search articles",type:"text",onChange:t=>s(t.target.value),placeholder:"Search articles",className:"block w-full rounded-md border border-gray-300 bg-light px-4 py-2 text-dark focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,a.tZ)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.tZ)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})})]}),(0,a.BX)("div",{className:"px-10 pb-6",children:[!d.length&&"No articles found.",(0,a.tZ)("div",{className:"grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4",children:m.map(t=>(0,a.tZ)(i.Z,{article:t.article,authors:t.authorDetails,isFeatured:!0},t.article.slug))})]})]})})};var d=!0;let m=25,u=t=>{let{articles:e,initialDisplayArticles:r,pagination:i}=t;return(0,a.BX)(a.HY,{children:[(0,a.tZ)(n.TQ,{title:l().title,description:l().description}),(0,a.tZ)("section",{className:"background-texture",children:(0,a.tZ)(s,{articles:e,initialDisplayPosts:r,pagination:i,title:"Articles"})})]})};var g=u}},function(t){t.O(0,[366,888,774,179],function(){return t(t.s=5728)}),_N_E=t.O()}]);