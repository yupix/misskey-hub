import{_,o as p,c as l,b as c,w as o,a as e,d as a,r as d}from"./app.eef9782f.js";const E={},h=e("h1",{id:"notes-polls-vote",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-polls-vote","aria-hidden":"true"},"#"),a(),e("code",null,"notes/polls/vote")],-1),m=e("p",null,"\u30CE\u30FC\u30C8\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u306B\u6295\u7968\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u9078\u629E\u80A2\u306B\u6295\u7968\u3059\u308B\u306B\u306F\u3001choice\u3092\u5909\u66F4\u3057\u3066\u8907\u6570\u56DE\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002",-1),u=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),a(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),A=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),a(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),O=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),a(" \u30A8\u30E9\u30FC")],-1),I=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),a(" \u30EA\u30BD\u30FC\u30B9")],-1);function D(N,C){const t=d("el-alert"),r=d("MkApiConsole"),i=d("ClientOnly"),s=d("MkSchemaViewerItemObject"),n=d("MkSchemaViewer"),b=d("MkApiErrors"),f=d("MkApiResources");return p(),l("div",null,[h,m,c(t,{title:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808",type:"success",closable:!1}),c(i,null,{default:o(()=>[c(r,{name:"notes/polls/vote",def:{summary:"\u30CE\u30FC\u30C8\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u306B\u6295\u7968\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u306B\u6295\u7968\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u9078\u629E\u80A2\u306B\u6295\u7968\u3059\u308B\u306B\u306F\u3001choice\u3092\u5909\u66F4\u3057\u3066\u8907\u6570\u56DE\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306Eid\u3002"},choice:{type:"integer",description:"\u6295\u7968\u3059\u308B\u9078\u629E\u80A2\u3002"}},required:["noteId","choice"]},res:{},errors:{"ecafbd2e-c283-4d6d-aecb-1a0a33b75396":{id:"ecafbd2e-c283-4d6d-aecb-1a0a33b75396",code:"NO_SUCH_NOTE",description:"\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"5f979967-52d9-4314-a911-1c673727f92f":{id:"5f979967-52d9-4314-a911-1c673727f92f",code:"NO_POLL",description:"\u30CE\u30FC\u30C8\u306B\u30A2\u30F3\u30B1\u30FC\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"e0cc9a04-f2e8-41e4-a5f1-4127293260cc":{id:"e0cc9a04-f2e8-41e4-a5f1-4127293260cc",code:"INVALID_CHOICE",description:"\u9078\u629E\u80A2\u304C\u4E0D\u6B63\u3067\u3059\u3002"},"0963fc77-efac-419b-9424-b391608dc6d8":{id:"0963fc77-efac-419b-9424-b391608dc6d8",code:"ALREADY_VOTED",description:"\u3059\u3067\u306B\u6295\u7968\u3057\u3066\u3044\u307E\u3059\u3002"},"1022a357-b085-4054-9083-8f8de358337e":{id:"1022a357-b085-4054-9083-8f8de358337e",code:"ALREADY_EXPIRED",description:"\u6295\u7968\u671F\u9593\u3092\u904E\u304E\u3066\u3044\u307E\u3059\u3002"},"85a5377e-b1e9-4617-b0b9-5bea73331e49":{id:"85a5377e-b1e9-4617-b0b9-5bea73331e49",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30CE\u30FC\u30C8\u3092\u6295\u7A3F\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u306B\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}}}})]),_:1}),u,c(i,null,{default:o(()=>[c(s,{schema:{type:"object",properties:{noteId:{type:"string",format:"misskey:id",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306Eid\u3002"},choice:{type:"integer",description:"\u6295\u7968\u3059\u308B\u9078\u629E\u80A2\u3002"}},required:["noteId","choice"]}})]),_:1}),A,c(i,null,{default:o(()=>[c(n,{schema:{}})]),_:1}),O,c(i,null,{default:o(()=>[c(b,{errors:{"ecafbd2e-c283-4d6d-aecb-1a0a33b75396":{id:"ecafbd2e-c283-4d6d-aecb-1a0a33b75396",code:"NO_SUCH_NOTE",description:"\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"5f979967-52d9-4314-a911-1c673727f92f":{id:"5f979967-52d9-4314-a911-1c673727f92f",code:"NO_POLL",description:"\u30CE\u30FC\u30C8\u306B\u30A2\u30F3\u30B1\u30FC\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"e0cc9a04-f2e8-41e4-a5f1-4127293260cc":{id:"e0cc9a04-f2e8-41e4-a5f1-4127293260cc",code:"INVALID_CHOICE",description:"\u9078\u629E\u80A2\u304C\u4E0D\u6B63\u3067\u3059\u3002"},"0963fc77-efac-419b-9424-b391608dc6d8":{id:"0963fc77-efac-419b-9424-b391608dc6d8",code:"ALREADY_VOTED",description:"\u3059\u3067\u306B\u6295\u7968\u3057\u3066\u3044\u307E\u3059\u3002"},"1022a357-b085-4054-9083-8f8de358337e":{id:"1022a357-b085-4054-9083-8f8de358337e",code:"ALREADY_EXPIRED",description:"\u6295\u7968\u671F\u9593\u3092\u904E\u304E\u3066\u3044\u307E\u3059\u3002"},"85a5377e-b1e9-4617-b0b9-5bea73331e49":{id:"85a5377e-b1e9-4617-b0b9-5bea73331e49",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30CE\u30FC\u30C8\u3092\u6295\u7A3F\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u306B\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),I,c(i,null,{default:o(()=>[c(f,{def:{summary:"\u30CE\u30FC\u30C8\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u306B\u6295\u7968\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u306E\u30A2\u30F3\u30B1\u30FC\u30C8\u306B\u6295\u7968\u3057\u307E\u3059\u3002\u8907\u6570\u306E\u9078\u629E\u80A2\u306B\u6295\u7968\u3059\u308B\u306B\u306F\u3001choice\u3092\u5909\u66F4\u3057\u3066\u8907\u6570\u56DE\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u884C\u3063\u3066\u304F\u3060\u3055\u3044\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"misskey:id",description:"\u30A2\u30F3\u30B1\u30FC\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u305F\u30CE\u30FC\u30C8\u306Eid\u3002"},choice:{type:"integer",description:"\u6295\u7968\u3059\u308B\u9078\u629E\u80A2\u3002"}},required:["noteId","choice"]},res:{},errors:{"ecafbd2e-c283-4d6d-aecb-1a0a33b75396":{id:"ecafbd2e-c283-4d6d-aecb-1a0a33b75396",code:"NO_SUCH_NOTE",description:"\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"5f979967-52d9-4314-a911-1c673727f92f":{id:"5f979967-52d9-4314-a911-1c673727f92f",code:"NO_POLL",description:"\u30CE\u30FC\u30C8\u306B\u30A2\u30F3\u30B1\u30FC\u30C8\u304C\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},"e0cc9a04-f2e8-41e4-a5f1-4127293260cc":{id:"e0cc9a04-f2e8-41e4-a5f1-4127293260cc",code:"INVALID_CHOICE",description:"\u9078\u629E\u80A2\u304C\u4E0D\u6B63\u3067\u3059\u3002"},"0963fc77-efac-419b-9424-b391608dc6d8":{id:"0963fc77-efac-419b-9424-b391608dc6d8",code:"ALREADY_VOTED",description:"\u3059\u3067\u306B\u6295\u7968\u3057\u3066\u3044\u307E\u3059\u3002"},"1022a357-b085-4054-9083-8f8de358337e":{id:"1022a357-b085-4054-9083-8f8de358337e",code:"ALREADY_EXPIRED",description:"\u6295\u7968\u671F\u9593\u3092\u904E\u304E\u3066\u3044\u307E\u3059\u3002"},"85a5377e-b1e9-4617-b0b9-5bea73331e49":{id:"85a5377e-b1e9-4617-b0b9-5bea73331e49",code:"YOU_HAVE_BEEN_BLOCKED",description:"\u30CE\u30FC\u30C8\u3092\u6295\u7A3F\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u306B\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002"}}}})]),_:1})])}var R=_(E,[["render",D],["__file","vote.html.vue"]]);export{R as default};