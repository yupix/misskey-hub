import{_ as o,o as i,c as l,a as n,b as e,w as t,d as s,e as p,r}from"./app.f41856e7.js";const c={},d=n("h1",{id:"\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30AF\u3099api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30AF\u3099api","aria-hidden":"true"},"#"),s(" \u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API")],-1),u={class:"custom-container tip"},v=n("i",{class:"fas fa-info"},null,-1),k=s("\u6700\u521D\u306B"),y=s("Misskey API"),b=s("\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u8AAD\u3080\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002"),h=p(`<p>\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API\u3092\u4F7F\u3046\u3068\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u69D8\u3005\u306A\u60C5\u5831(\u4F8B\u3048\u3070\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u65B0\u3057\u3044\u6295\u7A3F\u304C\u6D41\u308C\u3066\u304D\u305F\u3001\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3055\u308C\u305F\u3001\u30D5\u30A9\u30ED\u30FC\u3055\u308C\u305F\u3001\u306A\u3069)\u3092\u53D7\u3051\u53D6\u3063\u305F\u308A\u3001\u69D8\u3005\u306A\u64CD\u4F5C\u3092\u884C\u3063\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h2 id="\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u63A5\u7D9A\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u63A5\u7D9A\u3059\u308B" aria-hidden="true">#</a> \u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u63A5\u7D9A\u3059\u308B</h2><p>\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API\u3092\u5229\u7528\u3059\u308B\u306B\u306F\u3001\u307E\u305AMisskey\u30B5\u30FC\u30D0\u30FC\u306B<strong>websocket</strong>\u3067\u63A5\u7D9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><p>\u4EE5\u4E0B\u306E\u5F62\u5F0F\u306EURL\u306Bwebsocket\u63A5\u7D9A\u3057\u307E\u3059:</p><div class="language-text ext-text"><pre class="language-text"><code>wss://{host}/streaming?i={token}
</code></pre></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>{host}</code>\u306E\u90E8\u5206\u306F\u3001\u63A5\u7D9A\u3057\u305F\u3044\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u30DB\u30B9\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002</li><li><code>{token}</code>\u306E\u90E8\u5206\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306F\u7701\u7565\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u304C\u3001\u305D\u306E\u5834\u5408\u975E\u30ED\u30B0\u30A4\u30F3\u3067\u306E\u5229\u7528\u3068\u3044\u3046\u3053\u3068\u306B\u306A\u308A\u3001\u53D7\u4FE1\u3067\u304D\u308B\u60C5\u5831\u3084\u53EF\u80FD\u306A\u64CD\u4F5C\u306F\u9650\u3089\u308C\u307E\u3059\u3002</p></div><p>\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u63A5\u7D9A\u3059\u308B\u3068\u3001\u5F8C\u8FF0\u6295\u7A3F\u306E\u8CFC\u8AAD\u3092\u884C\u3063\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u304C\u3001\u307E\u3060\u3053\u306E\u6BB5\u968E\u3067\u306F\u3001\u4F8B\u3048\u3070\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u3078\u306E\u65B0\u3057\u3044\u6295\u7A3F\u3092\u53D7\u4FE1\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002 \u305D\u306E\u3088\u3046\u306A\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u4FE1\u3059\u308B\u306B\u306F\u3001\u30B9\u30C8\u30EA\u30FC\u30E0\u4E0A\u3067\u5F8C\u8FF0\u3059\u308B<strong>\u30C1\u30E3\u30F3\u30CD\u30EB</strong>\u306B\u63A5\u7D9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002</p><p><strong>\u30B9\u30C8\u30EA\u30FC\u30E0\u4E0A\u306E\u3084\u308A\u53D6\u308A\u306F\u3059\u3079\u3066JSON\u3067\u884C\u308F\u308C\u307E\u3059\u3002</strong></p><h2 id="\u30C1\u30E3\u30F3\u30CD\u30EB" tabindex="-1"><a class="header-anchor" href="#\u30C1\u30E3\u30F3\u30CD\u30EB" aria-hidden="true">#</a> \u30C1\u30E3\u30F3\u30CD\u30EB</h2><p>Misskey\u306E\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API\u306B\u306F\u30C1\u30E3\u30F3\u30CD\u30EB\u3068\u3044\u3046\u6982\u5FF5\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u9001\u53D7\u4FE1\u3059\u308B\u60C5\u5831\u3092\u5206\u96E2\u3059\u308B\u305F\u3081\u306E\u4ED5\u7D44\u307F\u3067\u3059\u3002 \u30B9\u30C8\u30EA\u30FC\u30E0\u4E0A\u3067\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u3053\u3068\u3067\u3001\u69D8\u3005\u306A\u60C5\u5831\u3092\u53D7\u3051\u53D6\u3063\u305F\u308A\u60C5\u5831\u3092\u9001\u4FE1\u3057\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002</p><div class="custom-container tip"><i class="fas fa-info"></i><p>\u3072\u3068\u3064\u306E\u30B9\u30C8\u30EA\u30FC\u30E0\u63A5\u7D9A\u4E0A\u3067\u3001\u540C\u6642\u306B\u8907\u6570\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p></div>`,13),m=s("\u4EE5\u4E0B\u3067\u306F\u3001\u30C1\u30E3\u30F3\u30CD\u30EB\u306E\u4F7F\u7528\u65B9\u6CD5\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002\u3069\u306E\u3088\u3046\u306A\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u3042\u308B\u304B\u306F\u3001"),x=s("\u30C1\u30E3\u30F3\u30CD\u30EB\u4E00\u89A7"),g=s("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),_=p(`<h3 id="\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B" aria-hidden="true">#</a> \u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B</h3><p>\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306A\u30C7\u30FC\u30BF\u3092JSON\u3067\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u9001\u4FE1\u3057\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token operator">...</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p>`,4),f=n("code",null,"channel",-1),j=s("\u306B\u306F\u63A5\u7D9A\u3057\u305F\u3044\u30C1\u30E3\u30F3\u30CD\u30EB\u540D\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"),I=s("\u30C1\u30E3\u30F3\u30CD\u30EB\u4E00\u89A7"),N=s("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),D=n("li",null,[n("code",null,"id"),s("\u306B\u306F\u305D\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u3068\u3084\u308A\u53D6\u308A\u3059\u308B\u305F\u3081\u306E\u4EFB\u610F\u306EID\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u30B9\u30C8\u30EA\u30FC\u30E0\u3067\u306F\u69D8\u3005\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6D41\u308C\u308B\u306E\u3067\u3001\u305D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3069\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u306E\u3082\u306E\u306A\u306E\u304B\u8B58\u5225\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u304B\u3089\u3067\u3059\u3002\u3053\u306EID\u306F\u3001UUID\u3084\u3001\u4E71\u6570\u306E\u3088\u3046\u306A\u3082\u306E\u3067\u69CB\u3044\u307E\u305B\u3093\u3002")],-1),M=n("li",null,[n("code",null,"params"),s("\u306F\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u969B\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u3059\u3002\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3088\u3063\u3066\u63A5\u7D9A\u6642\u306B\u5FC5\u8981\u3068\u3055\u308C\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u7570\u306A\u308A\u307E\u3059\u3002\u30D1\u30E9\u30E1\u30FC\u30BF\u4E0D\u8981\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u969B\u306F\u3001\u3053\u306E\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u7701\u7565\u53EF\u80FD\u3067\u3059\u3002")],-1),S=p(`<div class="custom-container tip"><i class="fas fa-info"></i><p>ID\u306F\u30C1\u30E3\u30F3\u30CD\u30EB\u3054\u3068\u3067\u306F\u306A\u304F\u300C\u30C1\u30E3\u30F3\u30CD\u30EB\u306E\u63A5\u7D9A\u3054\u3068\u300D\u3067\u3059\u3002\u306A\u305C\u306A\u3089\u3001\u540C\u3058\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u7570\u306A\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u8907\u6570\u63A5\u7D9A\u3059\u308B\u30B1\u30FC\u30B9\u3082\u3042\u308B\u304B\u3089\u3067\u3059\u3002</p></div><h3 id="\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B7\u3099\u3092\u53D7\u3051\u53D6\u308B" tabindex="-1"><a class="header-anchor" href="#\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B7\u3099\u3092\u53D7\u3051\u53D6\u308B" aria-hidden="true">#</a> \u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308B</h3><p>\u4F8B\u3048\u3070\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306A\u3089\u3001\u65B0\u3057\u3044\u6295\u7A3F\u304C\u3042\u3063\u305F\u6642\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u767A\u3057\u307E\u3059\u3002\u305D\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u3067\u3001\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u65B0\u3057\u3044\u6295\u7A3F\u304C\u3055\u308C\u305F\u3053\u3068\u3092\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><p>\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u767A\u3059\u308B\u3068\u3001\u6B21\u306E\u3088\u3046\u306A\u30C7\u30FC\u30BF\u304CJSON\u3067\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u6D41\u308C\u3066\u304D\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>id</code>\u306B\u306F\u524D\u8FF0\u3057\u305F\u305D\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u969B\u306B\u8A2D\u5B9A\u3057\u305FID\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3067\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3069\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u306E\u3082\u306E\u306A\u306E\u304B\u77E5\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</li><li><code>type</code>\u306B\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u7A2E\u985E\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3088\u3063\u3066\u3001\u3069\u306E\u3088\u3046\u306A\u7A2E\u985E\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6D41\u308C\u3066\u304F\u308B\u304B\u306F\u7570\u306A\u308A\u307E\u3059\u3002</li><li><code>body</code>\u306B\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5185\u5BB9\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3088\u3063\u3066\u3001\u3069\u306E\u3088\u3046\u306A\u5185\u5BB9\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6D41\u308C\u3066\u304F\u308B\u304B\u306F\u7570\u306A\u308A\u307E\u3059\u3002</li></ul><h3 id="\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u5411\u3051\u3066\u30E1\u30C3\u30BB\u30FC\u30B7\u3099\u3092\u9001\u4FE1\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u5411\u3051\u3066\u30E1\u30C3\u30BB\u30FC\u30B7\u3099\u3092\u9001\u4FE1\u3059\u308B" aria-hidden="true">#</a> \u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u5411\u3051\u3066\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B</h3><p>\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3088\u3063\u3066\u306F\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u53D6\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u3053\u3061\u3089\u304B\u3089\u4F55\u304B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u3001\u4F55\u3089\u304B\u306E\u64CD\u4F5C\u3092\u884C\u3048\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002</p><p>\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306A\u30C7\u30FC\u30BF\u3092JSON\u3067\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u9001\u4FE1\u3057\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>id</code>\u306B\u306F\u524D\u8FF0\u3057\u305F\u305D\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u969B\u306B\u8A2D\u5B9A\u3057\u305FID\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3067\u3001\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u3069\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u5411\u3051\u305F\u3082\u306E\u306A\u306E\u304B\u8B58\u5225\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</li><li><code>type</code>\u306B\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u7A2E\u985E\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3088\u3063\u3066\u3001\u3069\u306E\u3088\u3046\u306A\u7A2E\u985E\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u4ED8\u3051\u308B\u304B\u306F\u7570\u306A\u308A\u307E\u3059\u3002</li><li><code>body</code>\u306B\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u5185\u5BB9\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u3088\u3063\u3066\u3001\u3069\u306E\u3088\u3046\u306A\u5185\u5BB9\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u53D7\u3051\u4ED8\u3051\u308B\u304B\u306F\u7570\u306A\u308A\u307E\u3059\u3002</li></ul><h3 id="\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u5207\u65AD\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u5207\u65AD\u3059\u308B" aria-hidden="true">#</a> \u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u5207\u65AD\u3059\u308B</h3><p>\u30C1\u30E3\u30F3\u30CD\u30EB\u304B\u3089\u5207\u65AD\u3059\u308B\u306B\u306F\u3001\u6B21\u306E\u3088\u3046\u306A\u30C7\u30FC\u30BF\u3092JSON\u3067\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u9001\u4FE1\u3057\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>id</code>\u306B\u306F\u524D\u8FF0\u3057\u305F\u305D\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u306B\u63A5\u7D9A\u3059\u308B\u969B\u306B\u8A2D\u5B9A\u3057\u305FID\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</li></ul><h2 id="\u6295\u7A3F\u306E\u30AD\u30E3\u30D5\u309A\u30C1\u30E3" tabindex="-1"><a class="header-anchor" href="#\u6295\u7A3F\u306E\u30AD\u30E3\u30D5\u309A\u30C1\u30E3" aria-hidden="true">#</a> \u6295\u7A3F\u306E\u30AD\u30E3\u30D7\u30C1\u30E3</h2><p>Misskey\u306F\u6295\u7A3F\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u3068\u547C\u3070\u308C\u308B\u4ED5\u7D44\u307F\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u306F\u3001\u6307\u5B9A\u3057\u305F\u6295\u7A3F\u306E\u30A4\u30D9\u30F3\u30C8\u3092\u30B9\u30C8\u30EA\u30FC\u30E0\u3067\u53D7\u3051\u53D6\u308B\u6A5F\u80FD\u3067\u3059\u3002</p><p>\u4F8B\u3048\u3070\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u3092\u53D6\u5F97\u3057\u3066\u30E6\u30FC\u30B6\u30FC\u306B\u8868\u793A\u3057\u305F\u3068\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u8AB0\u304B\u304C\u305D\u306E\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u306B\u542B\u307E\u308C\u308B\u3069\u308C\u304B\u306E\u6295\u7A3F\u306B\u5BFE\u3057\u3066\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3057\u305F\u3068\u3057\u307E\u3059\u3002 \u3057\u304B\u3057\u3001\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u304B\u3089\u3059\u308B\u3068\u3042\u308B\u6295\u7A3F\u306B\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u4ED8\u3044\u305F\u3053\u3068\u306A\u3069\u306F\u77E5\u308B\u7531\u304C\u306A\u3044\u305F\u3081\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u30BF\u30A4\u30E0\u30E9\u30A4\u30F3\u4E0A\u306E\u6295\u7A3F\u306B\u53CD\u6620\u3057\u3066\u8868\u793A\u3059\u308B\u3068\u3044\u3063\u305F\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002</p><p>\u3053\u306E\u554F\u984C\u3092\u89E3\u6C7A\u3059\u308B\u305F\u3081\u306B\u3001Misskey\u306F\u6295\u7A3F\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u6A5F\u69CB\u3092\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002\u6295\u7A3F\u3092\u30AD\u30E3\u30D7\u30C1\u30E3\u3059\u308B\u3068\u3001\u305D\u306E\u6295\u7A3F\u306B\u95A2\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3092\u53D7\u3051\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u305F\u3081\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u3067\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u53CD\u6620\u3055\u305B\u305F\u308A\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u306B\u306A\u308A\u307E\u3059\u3002</p>`,22),w=s("\u4EE5\u4E0B\u3067\u306F\u3001\u6295\u7A3F\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u6A5F\u80FD\u306E\u4F7F\u7528\u65B9\u6CD5\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002\u3069\u306E\u3088\u3046\u306A\u30AD\u30E3\u30D7\u30C1\u30E3\u30A4\u30D9\u30F3\u30C8\u304C\u3042\u308B\u304B\u306F\u3001"),A=s("\u30AD\u30E3\u30D7\u30C1\u30E3\u30A4\u30D9\u30F3\u30C8\u4E00\u89A7"),J=s("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),O=p(`<h3 id="\u6295\u7A3F\u3092\u30AD\u30E3\u30D5\u309A\u30C1\u30E3\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u6295\u7A3F\u3092\u30AD\u30E3\u30D5\u309A\u30C1\u30E3\u3059\u308B" aria-hidden="true">#</a> \u6295\u7A3F\u3092\u30AD\u30E3\u30D7\u30C1\u30E3\u3059\u308B</h3><p>\u6295\u7A3F\u3092\u30AD\u30E3\u30D7\u30C1\u30E3\u3059\u308B\u306B\u306F\u3001\u30B9\u30C8\u30EA\u30FC\u30E0\u306B\u6B21\u306E\u3088\u3046\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;subNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>id</code>\u306B\u30AD\u30E3\u30D7\u30C1\u30E3\u3057\u305F\u3044\u6295\u7A3F\u306E<code>id</code>\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</li></ul><p>\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u3068\u3001Misskey\u306B\u30AD\u30E3\u30D7\u30C1\u30E3\u3092\u8981\u8ACB\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u3001\u4EE5\u5F8C\u3001\u305D\u306E\u6295\u7A3F\u306B\u95A2\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u304C\u6D41\u308C\u3066\u304F\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002</p><p>\u4F8B\u3048\u3070\u6295\u7A3F\u306B\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u4ED8\u3044\u305F\u3068\u3059\u308B\u3068\u3001\u6B21\u306E\u3088\u3046\u306A\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u6D41\u308C\u3066\u304D\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;noteUpdated&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;reacted&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">reaction</span><span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;yyyyyyyyyyyyyyyy&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>body</code>\u5185\u306E<code>id</code>\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u751F\u3055\u305B\u305F\u6295\u7A3F\u306EID\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002</li><li><code>body</code>\u5185\u306E<code>type</code>\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u306E\u7A2E\u985E\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002</li><li><code>body</code>\u5185\u306E<code>body</code>\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u306E\u8A73\u7D30\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002</li></ul><h3 id="\u6295\u7A3F\u306E\u30AD\u30E3\u30D5\u309A\u30C1\u30E3\u3092\u89E3\u9664\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u6295\u7A3F\u306E\u30AD\u30E3\u30D5\u309A\u30C1\u30E3\u3092\u89E3\u9664\u3059\u308B" aria-hidden="true">#</a> \u6295\u7A3F\u306E\u30AD\u30E3\u30D7\u30C1\u30E3\u3092\u89E3\u9664\u3059\u308B</h3><p>\u305D\u306E\u6295\u7A3F\u304C\u3082\u3046\u753B\u9762\u306B\u8868\u793A\u3055\u308C\u306A\u304F\u306A\u3063\u305F\u308A\u3057\u3066\u3001\u305D\u306E\u6295\u7A3F\u306B\u95A2\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3092\u3082\u3046\u53D7\u3051\u53D6\u308B\u5FC5\u8981\u304C\u306A\u304F\u306A\u3063\u305F\u3068\u304D\u306F\u3001\u30AD\u30E3\u30D7\u30C1\u30E3\u306E\u89E3\u9664\u3092\u7533\u8ACB\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><p>\u6B21\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3057\u307E\u3059:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;unsubNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>id</code>\u306B\u30AD\u30E3\u30D7\u30C1\u30E3\u3092\u89E3\u9664\u3057\u305F\u3044\u6295\u7A3F\u306E<code>id</code>\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002</li></ul><p>\u3053\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u9001\u4FE1\u3059\u308B\u3068\u3001\u4EE5\u5F8C\u3001\u305D\u306E\u6295\u7A3F\u306B\u95A2\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u306F\u6D41\u308C\u3066\u3053\u306A\u3044\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002</p>`,17);function P(U,V){const a=r("RouterLink");return i(),l("div",null,[d,n("div",u,[v,n("p",null,[k,e(a,{to:"/docs/api/"},{default:t(()=>[y]),_:1}),b])]),h,n("p",null,[m,e(a,{to:"/docs/api/streaming/channel/"},{default:t(()=>[x]),_:1}),g]),_,n("ul",null,[n("li",null,[f,j,e(a,{to:"/docs/api/streaming/channel/"},{default:t(()=>[I]),_:1}),N]),D,M]),S,n("p",null,[w,e(a,{to:"/docs/api/streaming/note-capture-events.html"},{default:t(()=>[A]),_:1}),J]),O])}var L=o(c,[["render",P],["__file","index.html.vue"]]);export{L as default};