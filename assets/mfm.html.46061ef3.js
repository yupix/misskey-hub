import{_ as e,o as a,c as i,e as t}from"./app.eef9782f.js";const o={},r=t(`<h1 id="mfm-misskey-flavoured-markdown" tabindex="-1"><a class="header-anchor" href="#mfm-misskey-flavoured-markdown" aria-hidden="true">#</a> MFM, Misskey Flavoured Markdown</h1><p>Uno speciale linguaggio di marcatura del testo che pu\xF2 essere usato in varie zone di Misskey.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Alcune parti sono compatibili con MarkDown</p></div><h2 id="elenco-delle-zone-in-cui-e-accettato" tabindex="-1"><a class="header-anchor" href="#elenco-delle-zone-in-cui-e-accettato" aria-hidden="true">#</a> Elenco delle zone in cui \xE8 accettato</h2><ul><li>Testo della Nota</li><li>Testo del Content Warning</li><li>Nome del profilo</li><li>Biografia del profilo</li></ul><h2 id="sintassi" tabindex="-1"><a class="header-anchor" href="#sintassi" aria-hidden="true">#</a> Sintassi</h2><h3 id="menzioni" tabindex="-1"><a class="header-anchor" href="#menzioni" aria-hidden="true">#</a> Menzioni</h3><p>Puoi nominare utenti locali o remoti, usando il carattere <code>@</code> (at oppure chiocciola)</p><div class="language-text ext-text"><pre class="language-text"><code>@ai
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>@ai@misskey.io
</code></pre></div><h3 id="hashtag" tabindex="-1"><a class="header-anchor" href="#hashtag" aria-hidden="true">#</a> Hashtag</h3><p>Puoi taggare le parole chiave usando <code>#</code> il cancelletto</p><div class="language-text ext-text"><pre class="language-text"><code>#misskey
</code></pre></div><h3 id="emoji-personalizzati" tabindex="-1"><a class="header-anchor" href="#emoji-personalizzati" aria-hidden="true">#</a> Emoji personalizzati</h3><p>Puoi utilizzarli includendo il nome tra il simbolo <code>:</code> due punti.</p><div class="language-text ext-text"><pre class="language-text"><code>:misskey:
</code></pre></div><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h3><p>Puoi indicare link senza mostrare l&#39;url completa.</p><div class="language-text ext-text"><pre class="language-text"><code>[Sito Example](https://example.com)
</code></pre></div><h3 id="grassetto" tabindex="-1"><a class="header-anchor" href="#grassetto" aria-hidden="true">#</a> Grassetto</h3><p>Il testo racchiuso da <code>**</code> due asterischi, diventer\xE0 grassetto, o bold.</p><div class="language-text ext-text"><pre class="language-text"><code>**Grassetto**
</code></pre></div><hr><div class="custom-container tip"><i class="fas fa-info"></i><p>Puoi trovare pi\xF9 esempi nella pagina <strong>Bigliettino MFM</strong> che trovi presso la tua istanza, all&#39;indirizzo <code>/mfm-cheat-sheet</code></p></div><h2 id="informazioni-per-sviluppatori" tabindex="-1"><a class="header-anchor" href="#informazioni-per-sviluppatori" aria-hidden="true">#</a> Informazioni per sviluppatori</h2><p>L&#39;implementazione del parser MFM \xE8 una libreria disponibile sotto licenza opensource, per facilitare l&#39;integrazione nel tuo client personalizzato.</p><ul><li>Implementazione JavaScript del parser: <a href="https://github.com/misskey-dev/mfm.js" target="_blank" rel="noopener noreferrer">misskey-dev/mfm.js</a></li></ul>`,27),n=[r];function s(l,d){return a(),i("div",null,n)}var h=e(o,[["render",s],["__file","mfm.html.vue"]]);export{h as default};