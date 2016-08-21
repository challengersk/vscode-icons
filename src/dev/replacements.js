/* eslint-disable */
 module.exports = { iconClassReplace: 't.prototype.iconClass = function(s) { return vsicons.iconClass(this, s); }', tabLabelReplace: 'vsicons.tabLabel(r)', editorsReplace: 'vsicons.editors(this)', vsicons: 'vsicons = {iconClass: function (context, fileInfo) {  var c = context.actionProvider.registry.instantiationService  ._services.get("configurationService");  var cf = c ? c.getConfiguration() : null;  var fileclass = "-file-icon file-icon";  var hideFolder = cf && cf.vsicons && cf.vsicons.hideFolders;  var result;  if (fileInfo.isDirectory) return hideFolder ? "folder-no-icon" : "folder-icon";  if (!fileInfo.name) return "default-file-icon file-icon";  result = vsicons.iconResolve(cf, fileInfo.name, fileclass);  return result;}, tabLabel: function (context) {  if (!context.instantiationService) return "tab-label";  var c = context.instantiationService._services.get("configurationService");  var cf = c ? c.getConfiguration() : null;  var name = context.name || context.getName();  if ((!name) ||  (cf && cf.vsicons && cf.vsicons.hideIconsInTabs)) {    return "tab-label";  }  return vsicons.iconResolve(cf, name, "-file-icon file-icon tab-label explorer-item");}, editors: function (context) {  if (!context.context.controller.instantiationService) return ["monaco-tree-row"];  var c = context.context.controller.instantiationService._services.get("configurationService");  var cf = c ? c.getConfiguration() : null;  var element = context.model.getElement();  var name = element.editor ? element.editor.name : null;  if ((!name) ||  (cf && cf.vsicons && cf.vsicons.hideIconsEditors)) {    return ["monaco-tree-row"];  }  var icon = vsicons.iconResolve(cf, name, "-file-icon file-icon monaco-tree-row explorer-item editors");  return [icon];}, checkAssociations: function checkAssociations(config, filename, additionalClass) {  var ascs;  var asc;  var rx;  var i = 0;  var len;  if (!config ||      !config.vsicons ||      !config.vsicons.useFileAssociations ||      !config.vsicons.associations) return null;  ascs = config.vsicons.associations;  for (len = ascs.length; i < len; i++) {    asc = ascs[i];    rx = new RegExp(asc[0], "gi");    if (rx.test(filename)) {      return asc[1] + (additionalClass || "");    }  }  return null;}, checkAssociations: function checkAssociations(config, filename, additionalClass) {  var ascs;  var asc;  var rx;  var i = 0;  var len;  if (!config ||      !config.vsicons ||      !config.vsicons.useFileAssociations ||      !config.vsicons.associations) return null;  ascs = config.vsicons.associations;  for (len = ascs.length; i < len; i++) {    asc = ascs[i];    rx = new RegExp(asc[0], "gi");    if (rx.test(filename)) {      return asc[1] + (additionalClass || "");    }  }  return null;}, iconResolve: function (config, filename, classname) {  var assoc = vsicons.checkAssociations(config, filename, classname);  if (assoc) return assoc;  var dot = filename.lastIndexOf(".");  var e = filename.substring(dot + 1).toLowerCase();  var exts = vsicons.extensions;  var specialExt = vsicons.specialExtensions;  function sn(ext) {    var res = ext.replace(/\\./g, "_");    if (/^\\d/.test(res)) res = "n" + res;    return res + classname;  }  var spext = specialExt[e];  if (spext) {    var f = filename.substring(0, dot).toLowerCase();    for (var kk = 0, len = spext.length; kk < len; kk++) {      var sp = spext[kk];      if (sp === f) return sn(sp);      var r = new RegExp(sp.replace(/\\./gi, "\\\\.") + "$");      if (r.test(filename)) return sn(sp);    }  }  if (exts.indexOf(e) >= 0) {    return sn(e);  }  return "default" + classname;}, extensions: ["as","htaccess","htpasswd","apib","app","asp","s","asm","ahk","babelrc","bin","o","a","exe","obj","lib","dll","pyc","pyd","pyo",".blade.php","bowerrc","bower","cpp","hpp","cc","cxx","c","cake","cfm","cfc","lucee","h","clojure","cjm","clj","cljs","cljc","edn","coffee","env","ini","makefile","cs","cshtml","css","csslintrc","feature","d","dockerfile","editorconfig","ex","exs","eex","elm","rhtml","erb","erl","hrl","emakefile","emakerfile","eslintrc","eslintignore",".eslintrc.js",".eslintrc.json",".eslintrc.yaml",".eslintrc.yml","xls","xlsx","csv","ods","favicon","woff","woff2","ttf","otf","eot","pfa","pfb","sfd","fs","fsx","fsi","gitattributes","gitignore","gitmodules","go","gradle","gruntfile","gulpfile","haml","hbs","handlebars","has","hs","lhs","lit","gf","hxml","htm","html","jpeg","jpg","gif","png","bmp","ionic","jade","pug","java","js","jsp","jl","log","less","license","bil","lsl","lua","m","md","markdown","marko",".marko.js","fig","mat","mex","mexn","mexrs6","mn","mum","mx","mx3","rwd","slx","slddc","smv","tikz","xvc","xvc","mustache","mst","nim","nims","cfg","json","nvmrc","npmignore","package","njk","nunjucks","nunjs","nunj","njs","nj","cma","cmi","ml","mly","ocamlmakefile","perl","php","php1","php2","php3","php4","php5","php6","phps","phpsa","phpt","procfile","pcss","postcss","ps1","psm1","psd1","epp","py","pyw","r","jsx","rt","tsx","tag","robot","rb","gemfile","gemfile","rs","sass","scala","scss","bat","sh","cmd","bash","zsh","fish","sql","tpl","swig","stylelintrc","stylelint.config","styl","svg","swift","tcl","texi","tex","txt","textile","todo","twig","ts",".d.ts","vbhtml","vue","vscodeignore","launch","jsconfig","tsconfig","xml","axml","xaml","yml","yaml","zip","rar","7z","tar","gz","bzip2","xz","bz2"], specialExtensions: {"php":[".blade.php"],"json":["bower",".eslintrc.json","package","vscodeignore","launch","jsconfig","tsconfig"],"js":[".eslintrc.js","gruntfile","gulpfile",".marko.js","stylelint.config"],"yaml":[".eslintrc.yaml"],"yml":[".eslintrc.yml"],"ico":["favicon"],"project":["ionic"],"lock":["gemfile"],"ts":[".d.ts"]} };',css: '.monaco-tree-row .content .sub-content .explorer-item.folder-icon {padding-left: 22px;background: url(browser/parts/editor/media/icons/Folder_inverse.svg) 1px 4px no-repeat;}.monaco-tree-row.expanded .content .sub-content .explorer-item.folder-icon { padding-left: 22px;background: url(browser/parts/editor/media/icons/Folder_opened.svg) 1px 4px no-repeat;background-size: 16px;}.explorer-item.default-file-icon {padding-left:22px;adding-left:22px;background:url(browser/parts/editor/media/icons/File.svg) 1px 3px no-repeat;background-size: 16px;}.explorer-item.file-icon {padding-left:22px;background-size: 16px !important;} .explorer-item.as-file-icon { background: url(browser/parts/editor/media/icons/file_type_actionscript@2x.png) 1px 4px no-repeat;}  .explorer-item.htaccess-file-icon { background: url(browser/parts/editor/media/icons/file_type_apache@2x.png) 1px 4px no-repeat;}.explorer-item.htpasswd-file-icon { background: url(browser/parts/editor/media/icons/file_type_apache@2x.png) 1px 4px no-repeat;} .explorer-item.apib-file-icon { background: url(browser/parts/editor/media/icons/file_type_apib@2x.png) 1px 4px no-repeat;} .explorer-item.app-file-icon { background: url(browser/parts/editor/media/icons/file_type_applescript@2x.png) 1px 4px no-repeat;} .explorer-item.asp-file-icon { background: url(browser/parts/editor/media/icons/file_type_asp@2x.png) 1px 4px no-repeat;} .explorer-item.s-file-icon { background: url(browser/parts/editor/media/icons/file_type_assembly@2x.png) 1px 4px no-repeat;}.explorer-item.asm-file-icon { background: url(browser/parts/editor/media/icons/file_type_assembly@2x.png) 1px 4px no-repeat;} .explorer-item.ahk-file-icon { background: url(browser/parts/editor/media/icons/file_type_autohotkey@2x.png) 1px 4px no-repeat;} .explorer-item.babelrc-file-icon { background: url(browser/parts/editor/media/icons/file_type_babel@2x.png) 1px 4px no-repeat;} .explorer-item.bin-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.o-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.a-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.exe-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.obj-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.lib-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.dll-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.pyc-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.pyd-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;}.explorer-item.pyo-file-icon { background: url(browser/parts/editor/media/icons/file_type_binary@2x.png) 1px 4px no-repeat;} .explorer-item._blade_php-file-icon { background: url(browser/parts/editor/media/icons/file_type_blade@2x.png) 1px 4px no-repeat;} .explorer-item.bowerrc-file-icon { background: url(browser/parts/editor/media/icons/file_type_bower@2x.png) 1px 4px no-repeat;} .explorer-item.bower-file-icon { background: url(browser/parts/editor/media/icons/file_type_bower@2x.png) 1px 4px no-repeat;} .explorer-item.cpp-file-icon { background: url(browser/parts/editor/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;}.explorer-item.hpp-file-icon { background: url(browser/parts/editor/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;}.explorer-item.cc-file-icon { background: url(browser/parts/editor/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;}.explorer-item.cxx-file-icon { background: url(browser/parts/editor/media/icons/file_type_c++@2x.png) 1px 4px no-repeat;} .explorer-item.c-file-icon { background: url(browser/parts/editor/media/icons/file_type_c@2x.png) 1px 4px no-repeat;} .explorer-item.cake-file-icon { background: url(browser/parts/editor/media/icons/file_type_cake@2x.png) 1px 4px no-repeat;} .explorer-item.cfm-file-icon { background: url(browser/parts/editor/media/icons/file_type_cfm@2x.png) 1px 4px no-repeat;}.explorer-item.cfc-file-icon { background: url(browser/parts/editor/media/icons/file_type_cfm@2x.png) 1px 4px no-repeat;}.explorer-item.lucee-file-icon { background: url(browser/parts/editor/media/icons/file_type_cfm@2x.png) 1px 4px no-repeat;} .explorer-item.h-file-icon { background: url(browser/parts/editor/media/icons/file_type_cheader@2x.png) 1px 4px no-repeat;} .explorer-item.clojure-file-icon { background: url(browser/parts/editor/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;}.explorer-item.cjm-file-icon { background: url(browser/parts/editor/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;}.explorer-item.clj-file-icon { background: url(browser/parts/editor/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;}.explorer-item.cljs-file-icon { background: url(browser/parts/editor/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;}.explorer-item.cljc-file-icon { background: url(browser/parts/editor/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;}.explorer-item.edn-file-icon { background: url(browser/parts/editor/media/icons/file_type_clojure@2x.png) 1px 4px no-repeat;} .explorer-item.coffee-file-icon { background: url(browser/parts/editor/media/icons/file_type_coffeescript@2x.png) 1px 4px no-repeat;} .explorer-item.env-file-icon { background: url(browser/parts/editor/media/icons/file_type_config@2x.png) 1px 4px no-repeat;}.explorer-item.ini-file-icon { background: url(browser/parts/editor/media/icons/file_type_config@2x.png) 1px 4px no-repeat;}.explorer-item.makefile-file-icon { background: url(browser/parts/editor/media/icons/file_type_config@2x.png) 1px 4px no-repeat;}  .explorer-item.cs-file-icon { background: url(browser/parts/editor/media/icons/file_type_cs@2x.png) 1px 4px no-repeat;} .explorer-item.cshtml-file-icon { background: url(browser/parts/editor/media/icons/file_type_cshtml@2x.png) 1px 4px no-repeat;} .explorer-item.css-file-icon { background: url(browser/parts/editor/media/icons/file_type_css@2x.png) 1px 4px no-repeat;} .explorer-item.csslintrc-file-icon { background: url(browser/parts/editor/media/icons/file_type_csslint@2x.png) 1px 4px no-repeat;} .explorer-item.feature-file-icon { background: url(browser/parts/editor/media/icons/file_type_cucumber@2x.png) 1px 4px no-repeat;} .explorer-item.d-file-icon { background: url(browser/parts/editor/media/icons/file_type_dlang@2x.png) 1px 4px no-repeat;} .explorer-item.dockerfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_docker@2x.png) 1px 4px no-repeat;} .explorer-item.editorconfig-file-icon { background: url(browser/parts/editor/media/icons/file_type_editorconfig@2x.png) 1px 4px no-repeat;} .explorer-item.ex-file-icon { background: url(browser/parts/editor/media/icons/file_type_elixir@2x.png) 1px 4px no-repeat;}.explorer-item.exs-file-icon { background: url(browser/parts/editor/media/icons/file_type_elixir@2x.png) 1px 4px no-repeat;}.explorer-item.eex-file-icon { background: url(browser/parts/editor/media/icons/file_type_elixir@2x.png) 1px 4px no-repeat;} .explorer-item.elm-file-icon { background: url(browser/parts/editor/media/icons/file_type_elm@2x.png) 1px 4px no-repeat;} .explorer-item.rhtml-file-icon { background: url(browser/parts/editor/media/icons/file_type_erb@2x.png) 1px 4px no-repeat;}.explorer-item.erb-file-icon { background: url(browser/parts/editor/media/icons/file_type_erb@2x.png) 1px 4px no-repeat;} .explorer-item.erl-file-icon { background: url(browser/parts/editor/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;}.explorer-item.hrl-file-icon { background: url(browser/parts/editor/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;}.explorer-item.emakefile-file-icon { background: url(browser/parts/editor/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;}.explorer-item.emakerfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_erlang@2x.png) 1px 4px no-repeat;} .explorer-item.eslintrc-file-icon { background: url(browser/parts/editor/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;}.explorer-item.eslintignore-file-icon { background: url(browser/parts/editor/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;} .explorer-item._eslintrc_js-file-icon { background: url(browser/parts/editor/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;} .explorer-item._eslintrc_json-file-icon { background: url(browser/parts/editor/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;} .explorer-item._eslintrc_yaml-file-icon { background: url(browser/parts/editor/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;} .explorer-item._eslintrc_yml-file-icon { background: url(browser/parts/editor/media/icons/file_type_eslint@2x.png) 1px 4px no-repeat;} .explorer-item.xls-file-icon { background: url(browser/parts/editor/media/icons/file_type_excel@2x.png) 1px 4px no-repeat;}.explorer-item.xlsx-file-icon { background: url(browser/parts/editor/media/icons/file_type_excel@2x.png) 1px 4px no-repeat;}.explorer-item.csv-file-icon { background: url(browser/parts/editor/media/icons/file_type_excel@2x.png) 1px 4px no-repeat;}.explorer-item.ods-file-icon { background: url(browser/parts/editor/media/icons/file_type_excel@2x.png) 1px 4px no-repeat;} .explorer-item.favicon-file-icon { background: url(browser/parts/editor/media/icons/file_type_favicon@2x.png) 1px 4px no-repeat;} .explorer-item.woff-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.woff2-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.ttf-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.otf-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.eot-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.pfa-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.pfb-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;}.explorer-item.sfd-file-icon { background: url(browser/parts/editor/media/icons/file_type_font@2x.png) 1px 4px no-repeat;} .explorer-item.fs-file-icon { background: url(browser/parts/editor/media/icons/file_type_fsharp@2x.png) 1px 4px no-repeat;}.explorer-item.fsx-file-icon { background: url(browser/parts/editor/media/icons/file_type_fsharp@2x.png) 1px 4px no-repeat;}.explorer-item.fsi-file-icon { background: url(browser/parts/editor/media/icons/file_type_fsharp@2x.png) 1px 4px no-repeat;} .explorer-item.gitattributes-file-icon { background: url(browser/parts/editor/media/icons/file_type_git@2x.png) 1px 4px no-repeat;}.explorer-item.gitignore-file-icon { background: url(browser/parts/editor/media/icons/file_type_git@2x.png) 1px 4px no-repeat;}.explorer-item.gitmodules-file-icon { background: url(browser/parts/editor/media/icons/file_type_git@2x.png) 1px 4px no-repeat;} .explorer-item.go-file-icon { background: url(browser/parts/editor/media/icons/file_type_go@2x.png) 1px 4px no-repeat;} .explorer-item.gradle-file-icon { background: url(browser/parts/editor/media/icons/file_type_gradle@2x.png) 1px 4px no-repeat;}   .explorer-item.gruntfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_gruntfile@2x.png) 1px 4px no-repeat;} .explorer-item.gulpfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_gulpfile@2x.png) 1px 4px no-repeat;} .explorer-item.haml-file-icon { background: url(browser/parts/editor/media/icons/file_type_haml@2x.png) 1px 4px no-repeat;} .explorer-item.hbs-file-icon { background: url(browser/parts/editor/media/icons/file_type_handlebars@2x.png) 1px 4px no-repeat;}.explorer-item.handlebars-file-icon { background: url(browser/parts/editor/media/icons/file_type_handlebars@2x.png) 1px 4px no-repeat;} .explorer-item.has-file-icon { background: url(browser/parts/editor/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.hs-file-icon { background: url(browser/parts/editor/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.lhs-file-icon { background: url(browser/parts/editor/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.lit-file-icon { background: url(browser/parts/editor/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;}.explorer-item.gf-file-icon { background: url(browser/parts/editor/media/icons/file_type_haskell@2x.png) 1px 4px no-repeat;} .explorer-item.hxml-file-icon { background: url(browser/parts/editor/media/icons/file_type_haxe@2x.png) 1px 4px no-repeat;} .explorer-item.htm-file-icon { background: url(browser/parts/editor/media/icons/file_type_html@2x.png) 1px 4px no-repeat;}.explorer-item.html-file-icon { background: url(browser/parts/editor/media/icons/file_type_html@2x.png) 1px 4px no-repeat;} .explorer-item.jpeg-file-icon { background: url(browser/parts/editor/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.jpg-file-icon { background: url(browser/parts/editor/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.gif-file-icon { background: url(browser/parts/editor/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.png-file-icon { background: url(browser/parts/editor/media/icons/file_type_image@2x.png) 1px 4px no-repeat;}.explorer-item.bmp-file-icon { background: url(browser/parts/editor/media/icons/file_type_image@2x.png) 1px 4px no-repeat;} .explorer-item.ionic-file-icon { background: url(browser/parts/editor/media/icons/file_type_ionic@2x.png) 1px 4px no-repeat;} .explorer-item.jade-file-icon { background: url(browser/parts/editor/media/icons/file_type_jade@2x.png) 1px 4px no-repeat;}.explorer-item.pug-file-icon { background: url(browser/parts/editor/media/icons/file_type_jade@2x.png) 1px 4px no-repeat;} .explorer-item.java-file-icon { background: url(browser/parts/editor/media/icons/file_type_java@2x.png) 1px 4px no-repeat;} .explorer-item.js-file-icon { background: url(browser/parts/editor/media/icons/file_type_js@2x.png) 1px 4px no-repeat;} .explorer-item.jsp-file-icon { background: url(browser/parts/editor/media/icons/file_type_jsp@2x.png) 1px 4px no-repeat;} .explorer-item.jl-file-icon { background: url(browser/parts/editor/media/icons/file_type_julia@2x.png) 1px 4px no-repeat;} .explorer-item.log-file-icon { background: url(browser/parts/editor/media/icons/file_type_log@2x.png) 1px 4px no-repeat;} .explorer-item.less-file-icon { background: url(browser/parts/editor/media/icons/file_type_less@2x.png) 1px 4px no-repeat;} .explorer-item.license-file-icon { background: url(browser/parts/editor/media/icons/file_type_license@2x.png) 1px 4px no-repeat;} .explorer-item.bil-file-icon { background: url(browser/parts/editor/media/icons/file_type_lisp@2x.png) 1px 4px no-repeat;} .explorer-item.lsl-file-icon { background: url(browser/parts/editor/media/icons/file_type_lsl@2x.png) 1px 4px no-repeat;} .explorer-item.lua-file-icon { background: url(browser/parts/editor/media/icons/file_type_lua@2x.png) 1px 4px no-repeat;} .explorer-item.m-file-icon { background: url(browser/parts/editor/media/icons/file_type_m@2x.png) 1px 4px no-repeat;} .explorer-item.md-file-icon { background: url(browser/parts/editor/media/icons/file_type_markdown@2x.png) 1px 4px no-repeat;}.explorer-item.markdown-file-icon { background: url(browser/parts/editor/media/icons/file_type_markdown@2x.png) 1px 4px no-repeat;} .explorer-item.marko-file-icon { background: url(browser/parts/editor/media/icons/file_type_marko@2x.png) 1px 4px no-repeat;} .explorer-item._marko_js-file-icon { background: url(browser/parts/editor/media/icons/file_type_markojs@2x.png) 1px 4px no-repeat;}  .explorer-item.fig-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mat-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mex-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mexn-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mexrs6-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mn-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mum-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mx-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.mx3-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.rwd-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.slx-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.slddc-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.smv-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.tikz-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.xvc-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;}.explorer-item.xvc-file-icon { background: url(browser/parts/editor/media/icons/file_type_matlab@2x.png) 1px 4px no-repeat;} .explorer-item.mustache-file-icon { background: url(browser/parts/editor/media/icons/file_type_mustache@2x.png) 1px 4px no-repeat;}.explorer-item.mst-file-icon { background: url(browser/parts/editor/media/icons/file_type_mustache@2x.png) 1px 4px no-repeat;} .explorer-item.nim-file-icon { background: url(browser/parts/editor/media/icons/file_type_nim@2x.png) 1px 4px no-repeat;}.explorer-item.nims-file-icon { background: url(browser/parts/editor/media/icons/file_type_nim@2x.png) 1px 4px no-repeat;}.explorer-item.cfg-file-icon { background: url(browser/parts/editor/media/icons/file_type_nim@2x.png) 1px 4px no-repeat;} .explorer-item.json-file-icon { background: url(browser/parts/editor/media/icons/file_type_node@2x.png) 1px 4px no-repeat;} .explorer-item.nvmrc-file-icon { background: url(browser/parts/editor/media/icons/file_type_node2@2x.png) 1px 4px no-repeat;} .explorer-item.npmignore-file-icon { background: url(browser/parts/editor/media/icons/file_type_npm@2x.png) 1px 4px no-repeat;} .explorer-item.package-file-icon { background: url(browser/parts/editor/media/icons/file_type_npm@2x.png) 1px 4px no-repeat;} .explorer-item.njk-file-icon { background: url(browser/parts/editor/media/icons/file_type_nunjucks@2x.png) 1px 4px no-repeat;}.explorer-item.nunjucks-file-icon { background: url(browser/parts/editor/media/icons/file_type_nunjucks@2x.png) 1px 4px no-repeat;}.explorer-item.nunjs-file-icon { background: url(browser/parts/editor/media/icons/file_type_nunjucks@2x.png) 1px 4px no-repeat;}.explorer-item.nunj-file-icon { background: url(browser/parts/editor/media/icons/file_type_nunjucks@2x.png) 1px 4px no-repeat;}.explorer-item.njs-file-icon { background: url(browser/parts/editor/media/icons/file_type_nunjucks@2x.png) 1px 4px no-repeat;}.explorer-item.nj-file-icon { background: url(browser/parts/editor/media/icons/file_type_nunjucks@2x.png) 1px 4px no-repeat;} .explorer-item.cma-file-icon { background: url(browser/parts/editor/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.cmi-file-icon { background: url(browser/parts/editor/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.ml-file-icon { background: url(browser/parts/editor/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.mly-file-icon { background: url(browser/parts/editor/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;}.explorer-item.ocamlmakefile-file-icon { background: url(browser/parts/editor/media/icons/file_type_ocaml@2x.png) 1px 4px no-repeat;} .explorer-item.perl-file-icon { background: url(browser/parts/editor/media/icons/file_type_perl@2x.png) 1px 4px no-repeat;} .explorer-item.php-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php1-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php2-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php3-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php4-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php5-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.php6-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.phps-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.phpsa-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;}.explorer-item.phpt-file-icon { background: url(browser/parts/editor/media/icons/file_type_php@2x.png) 1px 4px no-repeat;} .explorer-item.procfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_procfile@2x.png) 1px 4px no-repeat;} .explorer-item.pcss-file-icon { background: url(browser/parts/editor/media/icons/file_type_postcss@2x.png) 1px 4px no-repeat;}.explorer-item.postcss-file-icon { background: url(browser/parts/editor/media/icons/file_type_postcss@2x.png) 1px 4px no-repeat;} .explorer-item.ps1-file-icon { background: url(browser/parts/editor/media/icons/file_type_powershell@2x.png) 1px 4px no-repeat;}.explorer-item.psm1-file-icon { background: url(browser/parts/editor/media/icons/file_type_powershell@2x.png) 1px 4px no-repeat;}.explorer-item.psd1-file-icon { background: url(browser/parts/editor/media/icons/file_type_powershell@2x.png) 1px 4px no-repeat;} .explorer-item.epp-file-icon { background: url(browser/parts/editor/media/icons/file_type_puppet@2x.png) 1px 4px no-repeat;} .explorer-item.py-file-icon { background: url(browser/parts/editor/media/icons/file_type_python@2x.png) 1px 4px no-repeat;}.explorer-item.pyw-file-icon { background: url(browser/parts/editor/media/icons/file_type_python@2x.png) 1px 4px no-repeat;} .explorer-item.r-file-icon { background: url(browser/parts/editor/media/icons/file_type_r@2x.png) 1px 4px no-repeat;}  .explorer-item.jsx-file-icon { background: url(browser/parts/editor/media/icons/file_type_reactjs@2x.png) 1px 4px no-repeat;} .explorer-item.rt-file-icon { background: url(browser/parts/editor/media/icons/file_type_reacttemplate@2x.png) 1px 4px no-repeat;} .explorer-item.tsx-file-icon { background: url(browser/parts/editor/media/icons/file_type_reactts@2x.png) 1px 4px no-repeat;} .explorer-item.tag-file-icon { background: url(browser/parts/editor/media/icons/file_type_riot@2x.png) 1px 4px no-repeat;} .explorer-item.robot-file-icon { background: url(browser/parts/editor/media/icons/file_type_robotframework@2x.png) 1px 4px no-repeat;} .explorer-item.rb-file-icon { background: url(browser/parts/editor/media/icons/file_type_ruby@2x.png) 1px 4px no-repeat;}.explorer-item.gemfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_ruby@2x.png) 1px 4px no-repeat;} .explorer-item.gemfile-file-icon { background: url(browser/parts/editor/media/icons/file_type_ruby@2x.png) 1px 4px no-repeat;} .explorer-item.rs-file-icon { background: url(browser/parts/editor/media/icons/file_type_rust@2x.png) 1px 4px no-repeat;} .explorer-item.sass-file-icon { background: url(browser/parts/editor/media/icons/file_type_sass@2x.png) 1px 4px no-repeat;} .explorer-item.scala-file-icon { background: url(browser/parts/editor/media/icons/file_type_scala@2x.png) 1px 4px no-repeat;} .explorer-item.scss-file-icon { background: url(browser/parts/editor/media/icons/file_type_scss@2x.png) 1px 4px no-repeat;}  .explorer-item.bat-file-icon { background: url(browser/parts/editor/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.sh-file-icon { background: url(browser/parts/editor/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.cmd-file-icon { background: url(browser/parts/editor/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.bash-file-icon { background: url(browser/parts/editor/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.zsh-file-icon { background: url(browser/parts/editor/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}.explorer-item.fish-file-icon { background: url(browser/parts/editor/media/icons/file_type_shell@2x.png) 1px 4px no-repeat;}   .explorer-item.sql-file-icon { background: url(browser/parts/editor/media/icons/file_type_sql@2x.png) 1px 4px no-repeat;} .explorer-item.tpl-file-icon { background: url(browser/parts/editor/media/icons/file_type_smarty@2x.png) 1px 4px no-repeat;}.explorer-item.swig-file-icon { background: url(browser/parts/editor/media/icons/file_type_smarty@2x.png) 1px 4px no-repeat;} .explorer-item.stylelintrc-file-icon { background: url(browser/parts/editor/media/icons/file_type_stylelint@2x.png) 1px 4px no-repeat;} .explorer-item.stylelint_config-file-icon { background: url(browser/parts/editor/media/icons/file_type_stylelint@2x.png) 1px 4px no-repeat;} .explorer-item.styl-file-icon { background: url(browser/parts/editor/media/icons/file_type_stylus@2x.png) 1px 4px no-repeat;} .explorer-item.svg-file-icon { background: url(browser/parts/editor/media/icons/file_type_svg@2x.png) 1px 4px no-repeat;} .explorer-item.swift-file-icon { background: url(browser/parts/editor/media/icons/file_type_swift@2x.png) 1px 4px no-repeat;} .explorer-item.tcl-file-icon { background: url(browser/parts/editor/media/icons/file_type_tcl@2x.png) 1px 4px no-repeat;} .explorer-item.texi-file-icon { background: url(browser/parts/editor/media/icons/file_type_tex@2x.png) 1px 4px no-repeat;}.explorer-item.tex-file-icon { background: url(browser/parts/editor/media/icons/file_type_tex@2x.png) 1px 4px no-repeat;} .explorer-item.txt-file-icon { background: url(browser/parts/editor/media/icons/file_type_text@2x.png) 1px 4px no-repeat;} .explorer-item.textile-file-icon { background: url(browser/parts/editor/media/icons/file_type_textile@2x.png) 1px 4px no-repeat;} .explorer-item.todo-file-icon { background: url(browser/parts/editor/media/icons/file_type_todo@2x.png) 1px 4px no-repeat;} .explorer-item.twig-file-icon { background: url(browser/parts/editor/media/icons/file_type_twig@2x.png) 1px 4px no-repeat;} .explorer-item.ts-file-icon { background: url(browser/parts/editor/media/icons/file_type_typescript@2x.png) 1px 4px no-repeat;} .explorer-item._d_ts-file-icon { background: url(browser/parts/editor/media/icons/file_type_typescriptdef@2x.png) 1px 4px no-repeat;} .explorer-item.vbhtml-file-icon { background: url(browser/parts/editor/media/icons/file_type_vbhtml@2x.png) 1px 4px no-repeat;} .explorer-item.vue-file-icon { background: url(browser/parts/editor/media/icons/file_type_vue@2x.png) 1px 4px no-repeat;} .explorer-item.vscodeignore-file-icon { background: url(browser/parts/editor/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;}.explorer-item.launch-file-icon { background: url(browser/parts/editor/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;}.explorer-item.jsconfig-file-icon { background: url(browser/parts/editor/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;}.explorer-item.tsconfig-file-icon { background: url(browser/parts/editor/media/icons/file_type_vscode@2x.png) 1px 4px no-repeat;} .explorer-item.xml-file-icon { background: url(browser/parts/editor/media/icons/file_type_xml@2x.png) 1px 4px no-repeat;}.explorer-item.axml-file-icon { background: url(browser/parts/editor/media/icons/file_type_xml@2x.png) 1px 4px no-repeat;}.explorer-item.xaml-file-icon { background: url(browser/parts/editor/media/icons/file_type_xml@2x.png) 1px 4px no-repeat;} .explorer-item.yml-file-icon { background: url(browser/parts/editor/media/icons/file_type_yaml@2x.png) 1px 4px no-repeat;}.explorer-item.yaml-file-icon { background: url(browser/parts/editor/media/icons/file_type_yaml@2x.png) 1px 4px no-repeat;} .explorer-item.zip-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.rar-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.n7z-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.tar-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.gz-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.bzip2-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.xz-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.bz2-file-icon { background: url(browser/parts/editor/media/icons/file_type_zip@2x.png) 1px 4px no-repeat;}.explorer-item.file-icon.editors {background-position:35px 3px;}.explorer-item.file-icon.editors .open-editor {margin-left:24px !important;}.explorer-item.file-icon.tab-label {background-position:0px 2px;}' };