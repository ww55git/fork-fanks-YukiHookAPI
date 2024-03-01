import{_ as s,o as a,c as e,a as o}from"./app-Dngl3WKO.js";const n={},t=o(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="methodrules-class" tabindex="-1"><a class="header-anchor" href="#methodrules-class" aria-hidden="true">#</a> MethodRules <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">MethodRules</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">val</span><span style="color:#ADBAC7;"> rulesData: </span><span style="color:#F69D50;">MethodRulesData</span><span style="color:#ADBAC7;">) : </span><span style="color:#F69D50;">BaseRules</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p><code>Method</code> 查找条件实现类。</p></blockquote><h2 id="name-field" tabindex="-1"><a class="header-anchor" href="#name-field" aria-hidden="true">#</a> name <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> name: </span><span style="color:#F69D50;">String</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 名称。</p></blockquote><h2 id="paramcount-field" tabindex="-1"><a class="header-anchor" href="#paramcount-field" aria-hidden="true">#</a> paramCount <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> paramCount: </span><span style="color:#F69D50;">Int</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 参数个数。</p></blockquote><p>你可以不使用 <code>param</code> 指定参数类型而是仅使用此变量指定参数个数。</p><p>若参数个数小于零则忽略并使用 <code>param</code>。</p><h2 id="returntype-field" tabindex="-1"><a class="header-anchor" href="#returntype-field" aria-hidden="true">#</a> returnType <span class="symbol">- field</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> returnType: </span><span style="color:#F69D50;">Any</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 返回值。</p></blockquote><p>可不填写返回值。</p><h2 id="modifiers-method" tabindex="-1"><a class="header-anchor" href="#modifiers-method" aria-hidden="true">#</a> modifiers <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">modifiers</span><span style="color:#ADBAC7;">(conditions: </span><span style="color:#F69D50;">ModifierConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 标识符筛选条件。</p></blockquote><p>可不设置筛选条件。</p><h2 id="emptyparam-method" tabindex="-1"><a class="header-anchor" href="#emptyparam-method" aria-hidden="true">#</a> emptyParam <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">emptyParam</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 空参数、无参数。</p></blockquote><h2 id="param-method" tabindex="-1"><a class="header-anchor" href="#param-method" aria-hidden="true">#</a> param <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">param</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> paramType: </span><span style="color:#F69D50;">Any</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 参数。</p></blockquote><p>如果同时使用了 <code>paramCount</code> 则 <code>paramType</code> 的数量必须与 <code>paramCount</code> 完全匹配。</p><p>如果 <code>Method</code> 中存在一些无意义又很长的类型，你可以使用 <code>VagueType</code> 来替代它。</p><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>无参 <strong>Method</strong> 请使用 <strong>emptyParam</strong> 设置查找条件。</p><p>有参 <strong>Method</strong> 必须使用此方法设定参数或使用 <strong>paramCount</strong> 指定个数。</p></div><h2 id="param-method-1" tabindex="-1"><a class="header-anchor" href="#param-method-1" aria-hidden="true">#</a> param <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">param</span><span style="color:#ADBAC7;">(conditions: </span><span style="color:#F69D50;">ObjectsConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.5</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 参数条件。</p></blockquote><div class="custom-container danger"><p class="custom-container-title">Pay Attention</p><p>无参 <strong>Method</strong> 请使用 <strong>emptyParam</strong> 设置查找条件。</p><p>有参 <strong>Method</strong> 必须使用此方法设定参数或使用 <strong>paramCount</strong> 指定个数。</p></div><h2 id="name-method" tabindex="-1"><a class="header-anchor" href="#name-method" aria-hidden="true">#</a> name <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">name</span><span style="color:#ADBAC7;">(conditions: </span><span style="color:#F69D50;">NameConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 名称条件。</p></blockquote><h2 id="paramcount-method" tabindex="-1"><a class="header-anchor" href="#paramcount-method" aria-hidden="true">#</a> paramCount <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">paramCount</span><span style="color:#ADBAC7;">(numRange: </span><span style="color:#F69D50;">IntRange</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 参数个数范围。</p></blockquote><p>你可以不使用 <code>param</code> 指定参数类型而是仅使用此方法指定参数个数范围。</p><h2 id="paramcount-method-1" tabindex="-1"><a class="header-anchor" href="#paramcount-method-1" aria-hidden="true">#</a> paramCount <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">paramCount</span><span style="color:#ADBAC7;">(conditions: </span><span style="color:#F69D50;">CountConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 参数个数条件。</p></blockquote><p>你可以不使用 <code>param</code> 指定参数类型而是仅使用此方法指定参数个数条件。</p><h2 id="returntype-method" tabindex="-1"><a class="header-anchor" href="#returntype-method" aria-hidden="true">#</a> returnType <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">returnType</span><span style="color:#ADBAC7;">(conditions: </span><span style="color:#F69D50;">ObjectConditions</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.1.5</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>设置 <code>Method</code> 返回值条件。</p></blockquote><p>可不填写返回值。</p>`,84),p=[t];function d(c,l){return a(),e("div",null,p)}const i=s(n,[["render",d],["__file","MethodRules.html.vue"]]);export{i as default};
