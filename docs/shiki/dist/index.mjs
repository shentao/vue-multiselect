const themesImports = {
  "css-variables": () => import('./themes/css-variables-05f06e1d.mjs').then((r) => r.default),
  "dark-plus": () => import('./themes/dark-plus-3b14211e.mjs').then((r) => r.default),
  "dracula-soft": () => import('./themes/dracula-soft-ab0a6f08.mjs').then((r) => r.default),
  "dracula": () => import('./themes/dracula-22fc157d.mjs').then((r) => r.default),
  "github-dark-dimmed": () => import('./themes/github-dark-dimmed-2886658b.mjs').then((r) => r.default),
  "github-dark": () => import('./themes/github-dark-45d4d058.mjs').then((r) => r.default),
  "github-light": () => import('./themes/github-light-1abdeeba.mjs').then((r) => r.default),
  "hc_light": () => import('./themes/hc_light-866656c0.mjs').then((r) => r.default),
  "light-plus": () => import('./themes/light-plus-c4a6acc7.mjs').then((r) => r.default),
  "material-theme-darker": () => import('./themes/material-theme-darker-121e11cb.mjs').then((r) => r.default),
  "material-theme-lighter": () => import('./themes/material-theme-lighter-67dbb5c6.mjs').then((r) => r.default),
  "material-theme-ocean": () => import('./themes/material-theme-ocean-4c5f4079.mjs').then((r) => r.default),
  "material-theme-palenight": () => import('./themes/material-theme-palenight-b570e313.mjs').then((r) => r.default),
  "material-theme": () => import('./themes/material-theme-8c7cb8cf.mjs').then((r) => r.default),
  "min-dark": () => import('./themes/min-dark-222484e0.mjs').then((r) => r.default),
  "min-light": () => import('./themes/min-light-76cd360d.mjs').then((r) => r.default),
  "monokai": () => import('./themes/monokai-cdbd8f53.mjs').then((r) => r.default),
  "nord": () => import('./themes/nord-5cc6e909.mjs').then((r) => r.default),
  "one-dark-pro": () => import('./themes/one-dark-pro-25b24aee.mjs').then((r) => r.default),
  "poimandres": () => import('./themes/poimandres-67d1631f.mjs').then((r) => r.default),
  "rose-pine-dawn": () => import('./themes/rose-pine-dawn-c3c73070.mjs').then((r) => r.default),
  "rose-pine-moon": () => import('./themes/rose-pine-moon-eff88722.mjs').then((r) => r.default),
  "rose-pine": () => import('./themes/rose-pine-82cbccbd.mjs').then((r) => r.default),
  "slack-dark": () => import('./themes/slack-dark-b21eb9a6.mjs').then((r) => r.default),
  "slack-ochin": () => import('./themes/slack-ochin-56e5a657.mjs').then((r) => r.default),
  "solarized-dark": () => import('./themes/solarized-dark-dc3ec4c3.mjs').then((r) => r.default),
  "solarized-light": () => import('./themes/solarized-light-b414084a.mjs').then((r) => r.default),
  "vitesse-dark": () => import('./themes/vitesse-dark-255f0bad.mjs').then((r) => r.default),
  "vitesse-light": () => import('./themes/vitesse-light-93fe28eb.mjs').then((r) => r.default)
};
const themes = Object.keys(themesImports);

const languages = [
  {
    id: "abap",
    scopeName: "source.abap",
    path: "abap.tmLanguage.json",
    import: () => import('./languages/abap.tmLanguage-23f03be6.mjs').then((r) => r.default),
    displayName: "ABAP",
    samplePath: "abap.sample"
  },
  {
    id: "actionscript-3",
    scopeName: "source.actionscript.3",
    path: "actionscript-3.tmLanguage.json",
    import: () => import('./languages/actionscript-3.tmLanguage-cef213c4.mjs').then((r) => r.default),
    displayName: "ActionScript",
    samplePath: "actionscript-3.sample"
  },
  {
    id: "ada",
    scopeName: "source.ada",
    path: "ada.tmLanguage.json",
    import: () => import('./languages/ada.tmLanguage-c812cbb3.mjs').then((r) => r.default),
    displayName: "Ada",
    samplePath: "ada.sample"
  },
  {
    id: "apache",
    scopeName: "source.apacheconf",
    path: "apache.tmLanguage.json",
    import: () => import('./languages/apache.tmLanguage-13ae24f7.mjs').then((r) => r.default),
    displayName: "Apache Conf"
  },
  {
    id: "apex",
    scopeName: "source.apex",
    path: "apex.tmLanguage.json",
    import: () => import('./languages/apex.tmLanguage-59f98cba.mjs').then((r) => r.default),
    displayName: "Apex",
    samplePath: "apex.sample"
  },
  {
    id: "apl",
    scopeName: "source.apl",
    path: "apl.tmLanguage.json",
    import: () => import('./languages/apl.tmLanguage-d5366ebc.mjs').then((r) => r.default),
    displayName: "APL",
    embeddedLangs: ["html", "xml", "css", "javascript", "json"]
  },
  {
    id: "applescript",
    scopeName: "source.applescript",
    path: "applescript.tmLanguage.json",
    import: () => import('./languages/applescript.tmLanguage-0e0bae3b.mjs').then((r) => r.default),
    displayName: "AppleScript",
    samplePath: "applescript.sample"
  },
  {
    id: "ara",
    scopeName: "source.ara",
    path: "ara.tmLanguage.json",
    import: () => import('./languages/ara.tmLanguage-071907fd.mjs').then((r) => r.default),
    displayName: "Ara",
    samplePath: "ara.sample"
  },
  {
    id: "asm",
    scopeName: "source.asm.x86_64",
    path: "asm.tmLanguage.json",
    import: () => import('./languages/asm.tmLanguage-60f817f7.mjs').then((r) => r.default),
    displayName: "Assembly",
    samplePath: "asm.sample"
  },
  {
    id: "astro",
    scopeName: "source.astro",
    path: "astro.tmLanguage.json",
    import: () => import('./languages/astro.tmLanguage-0d6ab168.mjs').then((r) => r.default),
    displayName: "Astro",
    samplePath: "astro.sample",
    embeddedLangs: ["json", "javascript", "typescript", "stylus", "sass", "css", "scss", "less", "postcss", "tsx"]
  },
  {
    id: "awk",
    scopeName: "source.awk",
    path: "awk.tmLanguage.json",
    import: () => import('./languages/awk.tmLanguage-036854f7.mjs').then((r) => r.default),
    displayName: "AWK",
    samplePath: "awk.sample"
  },
  {
    id: "ballerina",
    scopeName: "source.ballerina",
    path: "ballerina.tmLanguage.json",
    import: () => import('./languages/ballerina.tmLanguage-7d3b71ff.mjs').then((r) => r.default),
    displayName: "Ballerina",
    samplePath: "ballerina.sample"
  },
  {
    id: "bat",
    scopeName: "source.batchfile",
    path: "bat.tmLanguage.json",
    import: () => import('./languages/bat.tmLanguage-8fbec8c3.mjs').then((r) => r.default),
    displayName: "Batch",
    samplePath: "bat.sample",
    aliases: ["batch"]
  },
  {
    id: "beancount",
    scopeName: "text.beancount",
    path: "beancount.tmLanguage.json",
    import: () => import('./languages/beancount.tmLanguage-45642e1a.mjs').then((r) => r.default),
    displayName: "Beancount",
    samplePath: "beancount.sample"
  },
  {
    id: "berry",
    scopeName: "source.berry",
    path: "berry.tmLanguage.json",
    import: () => import('./languages/berry.tmLanguage-9b5533c7.mjs').then((r) => r.default),
    displayName: "Berry",
    samplePath: "berry.sample",
    aliases: ["be"]
  },
  {
    id: "bibtex",
    scopeName: "text.bibtex",
    path: "bibtex.tmLanguage.json",
    import: () => import('./languages/bibtex.tmLanguage-fc598e52.mjs').then((r) => r.default),
    displayName: "BibTeX"
  },
  {
    id: "bicep",
    scopeName: "source.bicep",
    path: "bicep.tmLanguage.json",
    import: () => import('./languages/bicep.tmLanguage-dc7a40ff.mjs').then((r) => r.default),
    displayName: "Bicep",
    samplePath: "bicep.sample"
  },
  {
    id: "blade",
    scopeName: "text.html.php.blade",
    path: "blade.tmLanguage.json",
    import: () => import('./languages/blade.tmLanguage-d9190bfa.mjs').then((r) => r.default),
    displayName: "Blade",
    samplePath: "blade.sample",
    embeddedLangs: ["html", "xml", "sql", "javascript", "json", "css"]
  },
  {
    id: "c",
    scopeName: "source.c",
    path: "c.tmLanguage.json",
    import: () => import('./languages/c.tmLanguage-1ff9dcec.mjs').then((r) => r.default),
    displayName: "C",
    samplePath: "c.sample"
  },
  {
    id: "cadence",
    scopeName: "source.cadence",
    path: "cadence.tmLanguage.json",
    import: () => import('./languages/cadence.tmLanguage-d7be92e6.mjs').then((r) => r.default),
    displayName: "Cadence",
    samplePath: "cadence.sample",
    aliases: ["cdc"]
  },
  {
    id: "clarity",
    scopeName: "source.clar",
    path: "clarity.tmLanguage.json",
    import: () => import('./languages/clarity.tmLanguage-cefd551b.mjs').then((r) => r.default),
    displayName: "Clarity",
    samplePath: "clarity.sample"
  },
  {
    id: "clojure",
    scopeName: "source.clojure",
    path: "clojure.tmLanguage.json",
    import: () => import('./languages/clojure.tmLanguage-29296e29.mjs').then((r) => r.default),
    displayName: "Clojure",
    samplePath: "clojure.sample",
    aliases: ["clj"]
  },
  {
    id: "cmake",
    scopeName: "source.cmake",
    path: "cmake.tmLanguage.json",
    import: () => import('./languages/cmake.tmLanguage-3ea35bc8.mjs').then((r) => r.default),
    displayName: "CMake",
    samplePath: "cmake.sample"
  },
  {
    id: "cobol",
    scopeName: "source.cobol",
    path: "cobol.tmLanguage.json",
    import: () => import('./languages/cobol.tmLanguage-1aadb5b9.mjs').then((r) => r.default),
    displayName: "COBOL",
    samplePath: "cobol.sample",
    embeddedLangs: ["sql", "html", "java"]
  },
  {
    id: "codeql",
    scopeName: "source.ql",
    path: "codeql.tmLanguage.json",
    import: () => import('./languages/codeql.tmLanguage-3b632bd5.mjs').then((r) => r.default),
    displayName: "CodeQL",
    samplePath: "codeql.sample",
    aliases: ["ql"]
  },
  {
    id: "coffee",
    scopeName: "source.coffee",
    path: "coffee.tmLanguage.json",
    import: () => import('./languages/coffee.tmLanguage-6ed3b28c.mjs').then((r) => r.default),
    displayName: "CoffeeScript",
    samplePath: "coffee.sample",
    embeddedLangs: ["javascript"]
  },
  {
    id: "cpp",
    scopeName: "source.cpp",
    path: "cpp.tmLanguage.json",
    import: () => import('./languages/cpp.tmLanguage-815420ff.mjs').then((r) => r.default),
    displayName: "C++",
    samplePath: "cpp.sample",
    embeddedLangs: ["glsl", "sql"]
  },
  {
    id: "crystal",
    scopeName: "source.crystal",
    path: "crystal.tmLanguage.json",
    import: () => import('./languages/crystal.tmLanguage-1023ff70.mjs').then((r) => r.default),
    displayName: "Crystal",
    samplePath: "crystal.sample",
    embeddedLangs: ["html", "sql", "css", "c", "javascript", "shellscript"]
  },
  {
    id: "csharp",
    scopeName: "source.cs",
    path: "csharp.tmLanguage.json",
    import: () => import('./languages/csharp.tmLanguage-35a94c19.mjs').then((r) => r.default),
    displayName: "C#",
    samplePath: "csharp.sample",
    aliases: ["c#", "cs"]
  },
  {
    id: "css",
    scopeName: "source.css",
    path: "css.tmLanguage.json",
    import: () => import('./languages/css.tmLanguage-ddae7075.mjs').then((r) => r.default),
    displayName: "CSS",
    samplePath: "css.sample"
  },
  {
    id: "cue",
    scopeName: "source.cue",
    path: "cue.tmLanguage.json",
    import: () => import('./languages/cue.tmLanguage-b8fcbc33.mjs').then((r) => r.default),
    displayName: "CUE",
    samplePath: "cue.sample"
  },
  {
    id: "cypher",
    scopeName: "source.cypher",
    path: "cypher.tmLanguage.json",
    import: () => import('./languages/cypher.tmLanguage-a0179e48.mjs').then((r) => r.default),
    displayName: "Cypher",
    samplePath: "cypher.sample",
    aliases: ["cql"]
  },
  {
    id: "d",
    scopeName: "source.d",
    path: "d.tmLanguage.json",
    import: () => import('./languages/d.tmLanguage-b9012936.mjs').then((r) => r.default),
    displayName: "D",
    samplePath: "d.sample"
  },
  {
    id: "dart",
    scopeName: "source.dart",
    path: "dart.tmLanguage.json",
    import: () => import('./languages/dart.tmLanguage-6958809a.mjs').then((r) => r.default),
    displayName: "Dart",
    samplePath: "dart.sample"
  },
  {
    id: "dax",
    scopeName: "source.dax",
    path: "dax.tmLanguage.json",
    import: () => import('./languages/dax.tmLanguage-553d206a.mjs').then((r) => r.default),
    displayName: "DAX",
    samplePath: "dax.sample"
  },
  {
    id: "diff",
    scopeName: "source.diff",
    path: "diff.tmLanguage.json",
    import: () => import('./languages/diff.tmLanguage-a69d9982.mjs').then((r) => r.default),
    displayName: "Diff",
    samplePath: "diff.sample"
  },
  {
    id: "docker",
    scopeName: "source.dockerfile",
    path: "docker.tmLanguage.json",
    import: () => import('./languages/docker.tmLanguage-4487995b.mjs').then((r) => r.default),
    displayName: "Docker",
    samplePath: "docker.sample",
    aliases: ["dockerfile"]
  },
  {
    id: "dream-maker",
    scopeName: "source.dm",
    path: "dream-maker.tmLanguage.json",
    import: () => import('./languages/dream-maker.tmLanguage-ab035a00.mjs').then((r) => r.default),
    displayName: "Dream Maker"
  },
  {
    id: "elixir",
    scopeName: "source.elixir",
    path: "elixir.tmLanguage.json",
    import: () => import('./languages/elixir.tmLanguage-564a40b9.mjs').then((r) => r.default),
    displayName: "Elixir",
    samplePath: "elixir.sample",
    embeddedLangs: ["html"]
  },
  {
    id: "elm",
    scopeName: "source.elm",
    path: "elm.tmLanguage.json",
    import: () => import('./languages/elm.tmLanguage-a3a9b164.mjs').then((r) => r.default),
    displayName: "Elm",
    samplePath: "elm.sample",
    embeddedLangs: ["glsl"]
  },
  {
    id: "erb",
    scopeName: "text.html.erb",
    path: "erb.tmLanguage.json",
    import: () => import('./languages/erb.tmLanguage-35e5b435.mjs').then((r) => r.default),
    displayName: "ERB",
    samplePath: "erb.sample",
    embeddedLangs: ["html", "ruby"]
  },
  {
    id: "erlang",
    scopeName: "source.erlang",
    path: "erlang.tmLanguage.json",
    import: () => import('./languages/erlang.tmLanguage-48bcb023.mjs').then((r) => r.default),
    displayName: "Erlang",
    samplePath: "erlang.sample",
    aliases: ["erl"]
  },
  {
    id: "fish",
    scopeName: "source.fish",
    path: "fish.tmLanguage.json",
    import: () => import('./languages/fish.tmLanguage-f2d0541b.mjs').then((r) => r.default),
    displayName: "Fish",
    samplePath: "fish.sample"
  },
  {
    id: "fsharp",
    scopeName: "source.fsharp",
    path: "fsharp.tmLanguage.json",
    import: () => import('./languages/fsharp.tmLanguage-50c72119.mjs').then((r) => r.default),
    displayName: "F#",
    samplePath: "fsharp.sample",
    aliases: ["f#", "fs"],
    embeddedLangs: ["markdown"]
  },
  {
    id: "gdresource",
    scopeName: "source.gdresource",
    path: "gdresource.tmLanguage.json",
    import: () => import('./languages/gdresource.tmLanguage-6a1b651d.mjs').then((r) => r.default),
    displayName: "GDResource",
    samplePath: "gdresource.sample",
    embeddedLangs: ["gdshader", "gdscript"]
  },
  {
    id: "gdscript",
    scopeName: "source.gdscript",
    path: "gdscript.tmLanguage.json",
    import: () => import('./languages/gdscript.tmLanguage-ba0811cb.mjs').then((r) => r.default),
    displayName: "GDScript",
    samplePath: "gdscript.sample"
  },
  {
    id: "gdshader",
    scopeName: "source.gdshader",
    path: "gdshader.tmLanguage.json",
    import: () => import('./languages/gdshader.tmLanguage-2e198d22.mjs').then((r) => r.default),
    displayName: "GDShader",
    samplePath: "gdshader.sample"
  },
  {
    id: "gherkin",
    scopeName: "text.gherkin.feature",
    path: "gherkin.tmLanguage.json",
    import: () => import('./languages/gherkin.tmLanguage-00b58be8.mjs').then((r) => r.default),
    displayName: "Gherkin"
  },
  {
    id: "git-commit",
    scopeName: "text.git-commit",
    path: "git-commit.tmLanguage.json",
    import: () => import('./languages/git-commit.tmLanguage-f01d6710.mjs').then((r) => r.default),
    displayName: "Git Commit Message",
    embeddedLangs: ["diff"]
  },
  {
    id: "git-rebase",
    scopeName: "text.git-rebase",
    path: "git-rebase.tmLanguage.json",
    import: () => import('./languages/git-rebase.tmLanguage-e0ede1eb.mjs').then((r) => r.default),
    displayName: "Git Rebase Message",
    embeddedLangs: ["shellscript"]
  },
  {
    id: "glimmer-js",
    scopeName: "source.gjs",
    path: "glimmer-js.tmLanguage.json",
    import: () => import('./languages/glimmer-js.tmLanguage-f699a380.mjs').then((r) => r.default),
    displayName: "Glimmer JS",
    aliases: ["gjs"],
    embeddedLangs: ["javascript", "handlebars"]
  },
  {
    id: "glimmer-ts",
    scopeName: "source.gts",
    path: "glimmer-ts.tmLanguage.json",
    import: () => import('./languages/glimmer-ts.tmLanguage-4277041e.mjs').then((r) => r.default),
    displayName: "Glimmer TS",
    aliases: ["gts"],
    embeddedLangs: ["typescript", "handlebars"]
  },
  {
    id: "glsl",
    scopeName: "source.glsl",
    path: "glsl.tmLanguage.json",
    import: () => import('./languages/glsl.tmLanguage-440339e8.mjs').then((r) => r.default),
    displayName: "GLSL",
    samplePath: "glsl.sample",
    embeddedLangs: ["c"]
  },
  {
    id: "gnuplot",
    scopeName: "source.gnuplot",
    path: "gnuplot.tmLanguage.json",
    import: () => import('./languages/gnuplot.tmLanguage-10be0b3e.mjs').then((r) => r.default),
    displayName: "Gnuplot"
  },
  {
    id: "go",
    scopeName: "source.go",
    path: "go.tmLanguage.json",
    import: () => import('./languages/go.tmLanguage-290090a5.mjs').then((r) => r.default),
    displayName: "Go",
    samplePath: "go.sample"
  },
  {
    id: "graphql",
    scopeName: "source.graphql",
    path: "graphql.tmLanguage.json",
    import: () => import('./languages/graphql.tmLanguage-6f080657.mjs').then((r) => r.default),
    displayName: "GraphQL",
    embeddedLangs: ["javascript", "typescript", "jsx", "tsx"]
  },
  {
    id: "groovy",
    scopeName: "source.groovy",
    path: "groovy.tmLanguage.json",
    import: () => import('./languages/groovy.tmLanguage-0a0bc1de.mjs').then((r) => r.default),
    displayName: "Groovy"
  },
  {
    id: "hack",
    scopeName: "source.hack",
    path: "hack.tmLanguage.json",
    import: () => import('./languages/hack.tmLanguage-b0111193.mjs').then((r) => r.default),
    displayName: "Hack",
    embeddedLangs: ["html", "sql"]
  },
  {
    id: "haml",
    scopeName: "text.haml",
    path: "haml.tmLanguage.json",
    import: () => import('./languages/haml.tmLanguage-21841d45.mjs').then((r) => r.default),
    displayName: "Ruby Haml",
    embeddedLangs: ["ruby", "javascript", "sass", "coffee", "markdown", "css"]
  },
  {
    id: "handlebars",
    scopeName: "text.html.handlebars",
    path: "handlebars.tmLanguage.json",
    import: () => import('./languages/handlebars.tmLanguage-a7c0a82b.mjs').then((r) => r.default),
    displayName: "Handlebars",
    aliases: ["hbs"],
    embeddedLangs: ["html", "css", "javascript", "yaml"]
  },
  {
    id: "haskell",
    scopeName: "source.haskell",
    path: "haskell.tmLanguage.json",
    import: () => import('./languages/haskell.tmLanguage-46e87b26.mjs').then((r) => r.default),
    displayName: "Haskell",
    aliases: ["hs"]
  },
  {
    id: "hcl",
    scopeName: "source.hcl",
    path: "hcl.tmLanguage.json",
    import: () => import('./languages/hcl.tmLanguage-cce67ae8.mjs').then((r) => r.default),
    displayName: "HashiCorp HCL",
    samplePath: "hcl.sample"
  },
  {
    id: "hjson",
    scopeName: "source.hjson",
    path: "hjson.tmLanguage.json",
    import: () => import('./languages/hjson.tmLanguage-fe57d2df.mjs').then((r) => r.default),
    displayName: "Hjson",
    samplePath: "hjson.sample"
  },
  {
    id: "hlsl",
    scopeName: "source.hlsl",
    path: "hlsl.tmLanguage.json",
    import: () => import('./languages/hlsl.tmLanguage-baf1ea76.mjs').then((r) => r.default),
    displayName: "HLSL"
  },
  {
    id: "html",
    scopeName: "text.html.basic",
    path: "html.tmLanguage.json",
    import: () => import('./languages/html.tmLanguage-7bee90a8.mjs').then((r) => r.default),
    displayName: "HTML",
    samplePath: "html.sample",
    embeddedLangs: ["javascript", "css"]
  },
  {
    id: "http",
    scopeName: "source.http",
    path: "http.tmLanguage.json",
    import: () => import('./languages/http.tmLanguage-ddfca291.mjs').then((r) => r.default),
    displayName: "HTTP",
    samplePath: "http.sample",
    embeddedLangs: ["shellscript", "json", "xml", "graphql"]
  },
  {
    id: "imba",
    scopeName: "source.imba",
    path: "imba.tmLanguage.json",
    import: () => import('./languages/imba.tmLanguage-0a2d3e2e.mjs').then((r) => r.default),
    displayName: "Imba",
    samplePath: "imba.sample"
  },
  {
    id: "ini",
    scopeName: "source.ini",
    path: "ini.tmLanguage.json",
    import: () => import('./languages/ini.tmLanguage-dfc7b333.mjs').then((r) => r.default),
    displayName: "INI",
    aliases: ["properties"]
  },
  {
    id: "java",
    scopeName: "source.java",
    path: "java.tmLanguage.json",
    import: () => import('./languages/java.tmLanguage-348e34fc.mjs').then((r) => r.default),
    displayName: "Java",
    samplePath: "java.sample"
  },
  {
    id: "javascript",
    scopeName: "source.js",
    path: "javascript.tmLanguage.json",
    import: () => import('./languages/javascript.tmLanguage-c53ede72.mjs').then((r) => r.default),
    displayName: "JavaScript",
    samplePath: "javascript.sample",
    aliases: ["js"]
  },
  {
    id: "jinja-html",
    scopeName: "text.html.jinja",
    path: "jinja-html.tmLanguage.json",
    import: () => import('./languages/jinja-html.tmLanguage-138ee912.mjs').then((r) => r.default),
    displayName: "Jinja",
    embeddedLangs: ["html"]
  },
  {
    id: "jison",
    scopeName: "source.jison",
    path: "jison.tmLanguage.json",
    import: () => import('./languages/jison.tmLanguage-dc776b31.mjs').then((r) => r.default),
    displayName: "Jison",
    samplePath: "jison.sample",
    embeddedLangs: ["javascript"]
  },
  {
    id: "json",
    scopeName: "source.json",
    path: "json.tmLanguage.json",
    import: () => import('./languages/json.tmLanguage-f0a34dd6.mjs').then((r) => r.default),
    displayName: "JSON"
  },
  {
    id: "json5",
    scopeName: "source.json5",
    path: "json5.tmLanguage.json",
    import: () => import('./languages/json5.tmLanguage-647a087f.mjs').then((r) => r.default),
    displayName: "JSON5",
    samplePath: "json5.sample"
  },
  {
    id: "jsonc",
    scopeName: "source.json.comments",
    path: "jsonc.tmLanguage.json",
    import: () => import('./languages/jsonc.tmLanguage-23a8af9f.mjs').then((r) => r.default),
    displayName: "JSON with Comments"
  },
  {
    id: "jsonl",
    scopeName: "source.json.lines",
    path: "jsonl.tmLanguage.json",
    import: () => import('./languages/jsonl.tmLanguage-949e3102.mjs').then((r) => r.default),
    displayName: "JSON Lines"
  },
  {
    id: "jsonnet",
    scopeName: "source.jsonnet",
    path: "jsonnet.tmLanguage.json",
    import: () => import('./languages/jsonnet.tmLanguage-a6bacf25.mjs').then((r) => r.default),
    displayName: "Jsonnet"
  },
  {
    id: "jssm",
    scopeName: "source.jssm",
    path: "jssm.tmLanguage.json",
    import: () => import('./languages/jssm.tmLanguage-5df9ad58.mjs').then((r) => r.default),
    displayName: "JSSM",
    samplePath: "jssm.sample",
    aliases: ["fsl"]
  },
  {
    id: "jsx",
    scopeName: "source.js.jsx",
    path: "jsx.tmLanguage.json",
    import: () => import('./languages/jsx.tmLanguage-8607c961.mjs').then((r) => r.default),
    displayName: "JSX"
  },
  {
    id: "julia",
    scopeName: "source.julia",
    path: "julia.tmLanguage.json",
    import: () => import('./languages/julia.tmLanguage-40aad3fa.mjs').then((r) => r.default),
    displayName: "Julia",
    embeddedLangs: ["cpp", "python", "javascript", "r", "sql"]
  },
  {
    id: "kotlin",
    scopeName: "source.kotlin",
    path: "kotlin.tmLanguage.json",
    import: () => import('./languages/kotlin.tmLanguage-5cfeec6d.mjs').then((r) => r.default),
    displayName: "Kotlin",
    samplePath: "kotlin.sample"
  },
  {
    id: "kusto",
    scopeName: "source.kusto",
    path: "kusto.tmLanguage.json",
    import: () => import('./languages/kusto.tmLanguage-e4114bbf.mjs').then((r) => r.default),
    displayName: "Kusto",
    samplePath: "kusto.sample",
    aliases: ["kql"]
  },
  {
    id: "latex",
    scopeName: "text.tex.latex",
    path: "latex.tmLanguage.json",
    import: () => import('./languages/latex.tmLanguage-284c1242.mjs').then((r) => r.default),
    displayName: "LaTeX",
    embeddedLangs: ["tex", "css", "haskell", "html", "xml", "java", "lua", "julia", "ruby", "javascript", "typescript", "python", "yaml", "rust", "scala", "gnuplot"]
  },
  {
    id: "less",
    scopeName: "source.css.less",
    path: "less.tmLanguage.json",
    import: () => import('./languages/less.tmLanguage-3e196c19.mjs').then((r) => r.default),
    displayName: "Less",
    embeddedLangs: ["css"]
  },
  {
    id: "liquid",
    scopeName: "text.html.liquid",
    path: "liquid.tmLanguage.json",
    import: () => import('./languages/liquid.tmLanguage-498c87c1.mjs').then((r) => r.default),
    displayName: "Liquid",
    samplePath: "liquid.sample",
    embeddedLangs: ["html", "css", "json", "javascript"]
  },
  {
    id: "lisp",
    scopeName: "source.lisp",
    path: "lisp.tmLanguage.json",
    import: () => import('./languages/lisp.tmLanguage-59b3584d.mjs').then((r) => r.default),
    displayName: "Lisp"
  },
  {
    id: "logo",
    scopeName: "source.logo",
    path: "logo.tmLanguage.json",
    import: () => import('./languages/logo.tmLanguage-5c644d2d.mjs').then((r) => r.default),
    displayName: "Logo"
  },
  {
    id: "lua",
    scopeName: "source.lua",
    path: "lua.tmLanguage.json",
    import: () => import('./languages/lua.tmLanguage-3826d711.mjs').then((r) => r.default),
    displayName: "Lua",
    embeddedLangs: ["c"]
  },
  {
    id: "make",
    scopeName: "source.makefile",
    path: "make.tmLanguage.json",
    import: () => import('./languages/make.tmLanguage-5934b3d3.mjs').then((r) => r.default),
    displayName: "Makefile",
    aliases: ["makefile"]
  },
  {
    id: "markdown",
    scopeName: "text.html.markdown",
    path: "markdown.tmLanguage.json",
    import: () => import('./languages/markdown.tmLanguage-76bd4831.mjs').then((r) => r.default),
    displayName: "Markdown",
    aliases: ["md"],
    embeddedLangs: ["css", "html", "ini", "java", "lua", "make", "perl", "r", "ruby", "php", "sql", "vb", "xml", "xsl", "yaml", "bat", "clojure", "coffee", "c", "cpp", "diff", "docker", "git-commit", "git-rebase", "go", "groovy", "pug", "javascript", "json", "jsonc", "less", "objective-c", "swift", "scss", "raku", "powershell", "python", "julia", "rust", "scala", "shellscript", "typescript", "tsx", "csharp", "fsharp", "dart", "handlebars", "erlang", "elixir", "latex", "bibtex"]
  },
  {
    id: "marko",
    scopeName: "text.marko",
    path: "marko.tmLanguage.json",
    import: () => import('./languages/marko.tmLanguage-f7cdd412.mjs').then((r) => r.default),
    displayName: "Marko",
    samplePath: "marko.sample",
    embeddedLangs: ["css", "less", "scss", "javascript"]
  },
  {
    id: "matlab",
    scopeName: "source.matlab",
    path: "matlab.tmLanguage.json",
    import: () => import('./languages/matlab.tmLanguage-bbd592ac.mjs').then((r) => r.default),
    displayName: "MATLAB"
  },
  {
    id: "mdx",
    scopeName: "source.mdx",
    path: "mdx.tmLanguage.json",
    import: () => import('./languages/mdx.tmLanguage-0e09f242.mjs').then((r) => r.default),
    displayName: "MDX",
    embeddedLangs: ["tsx", "toml", "yaml", "c", "clojure", "coffee", "cpp", "csharp", "css", "diff", "docker", "elixir", "elm", "erlang", "go", "graphql", "haskell", "html", "ini", "java", "javascript", "json", "julia", "kotlin", "less", "lua", "make", "markdown", "objective-c", "perl", "python", "r", "ruby", "rust", "scala", "scss", "shellscript", "shellsession", "sql", "xml", "swift", "typescript"]
  },
  {
    id: "mermaid",
    scopeName: "source.mermaid",
    path: "mermaid.tmLanguage.json",
    import: () => import('./languages/mermaid.tmLanguage-5db1f6a2.mjs').then((r) => r.default),
    displayName: "Mermaid"
  },
  {
    id: "mojo",
    scopeName: "source.mojo",
    path: "mojo.tmLanguage.json",
    import: () => import('./languages/mojo.tmLanguage-ce449c28.mjs').then((r) => r.default),
    displayName: "MagicPython",
    samplePath: "mojo.sample"
  },
  {
    id: "narrat",
    scopeName: "source.narrat",
    path: "narrat.tmLanguage.json",
    import: () => import('./languages/narrat.tmLanguage-2646344e.mjs').then((r) => r.default),
    displayName: "Narrat Language",
    samplePath: "narrat.sample",
    aliases: ["nar"]
  },
  {
    id: "nextflow",
    scopeName: "source.nextflow",
    path: "nextflow.tmLanguage.json",
    import: () => import('./languages/nextflow.tmLanguage-7bff6c0e.mjs').then((r) => r.default),
    displayName: "Nextflow",
    samplePath: "nextflow.sample",
    aliases: ["nf"]
  },
  {
    id: "nginx",
    scopeName: "source.nginx",
    path: "nginx.tmLanguage.json",
    import: () => import('./languages/nginx.tmLanguage-d7d0f70f.mjs').then((r) => r.default),
    displayName: "Nginx",
    embeddedLangs: ["lua"]
  },
  {
    id: "nim",
    scopeName: "source.nim",
    path: "nim.tmLanguage.json",
    import: () => import('./languages/nim.tmLanguage-95389e93.mjs').then((r) => r.default),
    displayName: "Nim",
    embeddedLangs: ["c", "html", "xml", "javascript", "css", "glsl", "markdown"]
  },
  {
    id: "nix",
    scopeName: "source.nix",
    path: "nix.tmLanguage.json",
    import: () => import('./languages/nix.tmLanguage-ce2318ba.mjs').then((r) => r.default),
    displayName: "Nix"
  },
  {
    id: "objective-c",
    scopeName: "source.objc",
    path: "objective-c.tmLanguage.json",
    import: () => import('./languages/objective-c.tmLanguage-f57e891e.mjs').then((r) => r.default),
    displayName: "Objective-C",
    aliases: ["objc"]
  },
  {
    id: "objective-cpp",
    scopeName: "source.objcpp",
    path: "objective-cpp.tmLanguage.json",
    import: () => import('./languages/objective-cpp.tmLanguage-f80072f8.mjs').then((r) => r.default),
    displayName: "Objective-C++"
  },
  {
    id: "ocaml",
    scopeName: "source.ocaml",
    path: "ocaml.tmLanguage.json",
    import: () => import('./languages/ocaml.tmLanguage-d9b75886.mjs').then((r) => r.default),
    displayName: "OCaml"
  },
  {
    id: "pascal",
    scopeName: "source.pascal",
    path: "pascal.tmLanguage.json",
    import: () => import('./languages/pascal.tmLanguage-1d94501b.mjs').then((r) => r.default),
    displayName: "Pascal"
  },
  {
    id: "perl",
    scopeName: "source.perl",
    path: "perl.tmLanguage.json",
    import: () => import('./languages/perl.tmLanguage-9ababd67.mjs').then((r) => r.default),
    displayName: "Perl",
    embeddedLangs: ["html", "xml", "css", "javascript", "sql"]
  },
  {
    id: "php",
    scopeName: "source.php",
    path: "php.tmLanguage.json",
    import: () => import('./languages/php.tmLanguage-11848870.mjs').then((r) => r.default),
    displayName: "PHP",
    embeddedLangs: ["html", "xml", "sql", "javascript", "json", "css"]
  },
  {
    id: "plsql",
    scopeName: "source.plsql.oracle",
    path: "plsql.tmLanguage.json",
    import: () => import('./languages/plsql.tmLanguage-7b7b1b95.mjs').then((r) => r.default),
    displayName: "PL/SQL"
  },
  {
    id: "postcss",
    scopeName: "source.css.postcss",
    path: "postcss.tmLanguage.json",
    import: () => import('./languages/postcss.tmLanguage-e1ce9483.mjs').then((r) => r.default),
    displayName: "PostCSS"
  },
  {
    id: "powerquery",
    scopeName: "source.powerquery",
    path: "powerquery.tmLanguage.json",
    import: () => import('./languages/powerquery.tmLanguage-5e63151a.mjs').then((r) => r.default),
    displayName: "PowerQuery",
    samplePath: "powerquery.sample"
  },
  {
    id: "powershell",
    scopeName: "source.powershell",
    path: "powershell.tmLanguage.json",
    import: () => import('./languages/powershell.tmLanguage-0b9e2100.mjs').then((r) => r.default),
    displayName: "PowerShell",
    aliases: ["ps", "ps1"]
  },
  {
    id: "prisma",
    scopeName: "source.prisma",
    path: "prisma.tmLanguage.json",
    import: () => import('./languages/prisma.tmLanguage-c4dcb630.mjs').then((r) => r.default),
    displayName: "Prisma",
    samplePath: "prisma.sample"
  },
  {
    id: "prolog",
    scopeName: "source.prolog",
    path: "prolog.tmLanguage.json",
    import: () => import('./languages/prolog.tmLanguage-cf9cb4e0.mjs').then((r) => r.default),
    displayName: "Prolog"
  },
  {
    id: "proto",
    scopeName: "source.proto",
    path: "proto.tmLanguage.json",
    import: () => import('./languages/proto.tmLanguage-791e2569.mjs').then((r) => r.default),
    displayName: "Protocol Buffer 3",
    samplePath: "proto.sample"
  },
  {
    id: "pug",
    scopeName: "text.pug",
    path: "pug.tmLanguage.json",
    import: () => import('./languages/pug.tmLanguage-a02607f0.mjs').then((r) => r.default),
    displayName: "Pug",
    aliases: ["jade"],
    embeddedLangs: ["javascript", "css", "sass", "scss", "stylus", "coffee", "html"]
  },
  {
    id: "puppet",
    scopeName: "source.puppet",
    path: "puppet.tmLanguage.json",
    import: () => import('./languages/puppet.tmLanguage-f4a3eca0.mjs').then((r) => r.default),
    displayName: "Puppet"
  },
  {
    id: "purescript",
    scopeName: "source.purescript",
    path: "purescript.tmLanguage.json",
    import: () => import('./languages/purescript.tmLanguage-a543cff2.mjs').then((r) => r.default),
    displayName: "PureScript"
  },
  {
    id: "python",
    scopeName: "source.python",
    path: "python.tmLanguage.json",
    import: () => import('./languages/python.tmLanguage-1cba37cc.mjs').then((r) => r.default),
    displayName: "Python",
    samplePath: "python.sample",
    aliases: ["py"]
  },
  {
    id: "r",
    scopeName: "source.r",
    path: "r.tmLanguage.json",
    import: () => import('./languages/r.tmLanguage-d2ebe5ba.mjs').then((r) => r.default),
    displayName: "R"
  },
  {
    id: "raku",
    scopeName: "source.perl.6",
    path: "raku.tmLanguage.json",
    import: () => import('./languages/raku.tmLanguage-21107e05.mjs').then((r) => r.default),
    displayName: "Perl 6",
    aliases: ["perl6"]
  },
  {
    id: "razor",
    scopeName: "text.aspnetcorerazor",
    path: "razor.tmLanguage.json",
    import: () => import('./languages/razor.tmLanguage-00b7c492.mjs').then((r) => r.default),
    displayName: "ASP.NET Razor",
    embeddedLangs: ["html", "csharp"]
  },
  {
    id: "reg",
    scopeName: "source.reg",
    path: "reg.tmLanguage.json",
    import: () => import('./languages/reg.tmLanguage-c66b7785.mjs').then((r) => r.default),
    displayName: "Windows Registry Script",
    samplePath: "reg.sample"
  },
  {
    id: "rel",
    scopeName: "source.rel",
    path: "rel.tmLanguage.json",
    import: () => import('./languages/rel.tmLanguage-ec666bfd.mjs').then((r) => r.default),
    displayName: "Rel",
    samplePath: "rel.sample"
  },
  {
    id: "riscv",
    scopeName: "source.riscv",
    path: "riscv.tmLanguage.json",
    import: () => import('./languages/riscv.tmLanguage-3f2cee90.mjs').then((r) => r.default),
    displayName: "RISC-V"
  },
  {
    id: "rst",
    scopeName: "source.rst",
    path: "rst.tmLanguage.json",
    import: () => import('./languages/rst.tmLanguage-ef4c4c8c.mjs').then((r) => r.default),
    displayName: "reStructuredText",
    embeddedLangs: ["cpp", "python", "javascript", "shellscript", "yaml", "cmake", "ruby"]
  },
  {
    id: "ruby",
    scopeName: "source.ruby",
    path: "ruby.tmLanguage.json",
    import: () => import('./languages/ruby.tmLanguage-15dc1407.mjs').then((r) => r.default),
    displayName: "Ruby",
    samplePath: "ruby.sample",
    aliases: ["rb"],
    embeddedLangs: ["html", "xml", "sql", "css", "c", "javascript", "shellscript", "lua"]
  },
  {
    id: "rust",
    scopeName: "source.rust",
    path: "rust.tmLanguage.json",
    import: () => import('./languages/rust.tmLanguage-7f99b044.mjs').then((r) => r.default),
    displayName: "Rust",
    aliases: ["rs"]
  },
  {
    id: "sas",
    scopeName: "source.sas",
    path: "sas.tmLanguage.json",
    import: () => import('./languages/sas.tmLanguage-7595cb9a.mjs').then((r) => r.default),
    displayName: "SAS",
    embeddedLangs: ["sql"]
  },
  {
    id: "sass",
    scopeName: "source.sass",
    path: "sass.tmLanguage.json",
    import: () => import('./languages/sass.tmLanguage-cfe72fe3.mjs').then((r) => r.default),
    displayName: "Sass"
  },
  {
    id: "scala",
    scopeName: "source.scala",
    path: "scala.tmLanguage.json",
    import: () => import('./languages/scala.tmLanguage-78b9a846.mjs').then((r) => r.default),
    displayName: "Scala"
  },
  {
    id: "scheme",
    scopeName: "source.scheme",
    path: "scheme.tmLanguage.json",
    import: () => import('./languages/scheme.tmLanguage-d7ec01c9.mjs').then((r) => r.default),
    displayName: "Scheme"
  },
  {
    id: "scss",
    scopeName: "source.css.scss",
    path: "scss.tmLanguage.json",
    import: () => import('./languages/scss.tmLanguage-3e3c6b2d.mjs').then((r) => r.default),
    displayName: "SCSS",
    embeddedLangs: ["css"]
  },
  {
    id: "shaderlab",
    scopeName: "source.shaderlab",
    path: "shaderlab.tmLanguage.json",
    import: () => import('./languages/shaderlab.tmLanguage-21a55f92.mjs').then((r) => r.default),
    displayName: "ShaderLab",
    aliases: ["shader"],
    embeddedLangs: ["hlsl"]
  },
  {
    id: "shellscript",
    scopeName: "source.shell",
    path: "shellscript.tmLanguage.json",
    import: () => import('./languages/shellscript.tmLanguage-c9d85e8e.mjs').then((r) => r.default),
    displayName: "Shell",
    aliases: ["bash", "sh", "shell", "zsh"]
  },
  {
    id: "shellsession",
    scopeName: "text.shell-session",
    path: "shellsession.tmLanguage.json",
    import: () => import('./languages/shellsession.tmLanguage-4020d968.mjs').then((r) => r.default),
    displayName: "Shell Session",
    samplePath: "shellsession.sample",
    aliases: ["console"],
    embeddedLangs: ["shellscript"]
  },
  {
    id: "smalltalk",
    scopeName: "source.smalltalk",
    path: "smalltalk.tmLanguage.json",
    import: () => import('./languages/smalltalk.tmLanguage-d20d7968.mjs').then((r) => r.default),
    displayName: "Smalltalk"
  },
  {
    id: "solidity",
    scopeName: "source.solidity",
    path: "solidity.tmLanguage.json",
    import: () => import('./languages/solidity.tmLanguage-5eda4445.mjs').then((r) => r.default),
    displayName: "Solidity"
  },
  {
    id: "sparql",
    scopeName: "source.sparql",
    path: "sparql.tmLanguage.json",
    import: () => import('./languages/sparql.tmLanguage-e2d30fe9.mjs').then((r) => r.default),
    displayName: "SPARQL",
    samplePath: "sparql.sample",
    embeddedLangs: ["turtle"]
  },
  {
    id: "splunk",
    scopeName: "source.splunk_search",
    path: "splunk.tmLanguage.json",
    import: () => import('./languages/splunk.tmLanguage-334fbd1e.mjs').then((r) => r.default),
    displayName: "Splunk Query Language",
    samplePath: "splunk.sample",
    aliases: ["spl"]
  },
  {
    id: "sql",
    scopeName: "source.sql",
    path: "sql.tmLanguage.json",
    import: () => import('./languages/sql.tmLanguage-e83fef9a.mjs').then((r) => r.default),
    displayName: "SQL"
  },
  {
    id: "ssh-config",
    scopeName: "source.ssh-config",
    path: "ssh-config.tmLanguage.json",
    import: () => import('./languages/ssh-config.tmLanguage-2afa8259.mjs').then((r) => r.default),
    displayName: "SSH Config"
  },
  {
    id: "stata",
    scopeName: "source.stata",
    path: "stata.tmLanguage.json",
    import: () => import('./languages/stata.tmLanguage-ef6f2eba.mjs').then((r) => r.default),
    displayName: "Stata",
    samplePath: "stata.sample",
    embeddedLangs: ["sql"]
  },
  {
    id: "stylus",
    scopeName: "source.stylus",
    path: "stylus.tmLanguage.json",
    import: () => import('./languages/stylus.tmLanguage-0e5d68da.mjs').then((r) => r.default),
    displayName: "Stylus",
    aliases: ["styl"]
  },
  {
    id: "svelte",
    scopeName: "source.svelte",
    path: "svelte.tmLanguage.json",
    import: () => import('./languages/svelte.tmLanguage-6f52fc6f.mjs').then((r) => r.default),
    displayName: "Svelte",
    embeddedLangs: ["javascript", "typescript", "coffee", "stylus", "sass", "css", "scss", "less", "postcss", "pug", "markdown"]
  },
  {
    id: "swift",
    scopeName: "source.swift",
    path: "swift.tmLanguage.json",
    import: () => import('./languages/swift.tmLanguage-0bb34705.mjs').then((r) => r.default),
    displayName: "Swift"
  },
  {
    id: "system-verilog",
    scopeName: "source.systemverilog",
    path: "system-verilog.tmLanguage.json",
    import: () => import('./languages/system-verilog.tmLanguage-5011d5c2.mjs').then((r) => r.default),
    displayName: "SystemVerilog"
  },
  {
    id: "tasl",
    scopeName: "source.tasl",
    path: "tasl.tmLanguage.json",
    import: () => import('./languages/tasl.tmLanguage-7f0a372b.mjs').then((r) => r.default),
    displayName: "Tasl",
    samplePath: "tasl.sample"
  },
  {
    id: "tcl",
    scopeName: "source.tcl",
    path: "tcl.tmLanguage.json",
    import: () => import('./languages/tcl.tmLanguage-c8c905c3.mjs').then((r) => r.default),
    displayName: "Tcl"
  },
  {
    id: "tex",
    scopeName: "text.tex",
    path: "tex.tmLanguage.json",
    import: () => import('./languages/tex.tmLanguage-6bcf6d22.mjs').then((r) => r.default),
    displayName: "TeX",
    embeddedLangs: ["r"]
  },
  {
    id: "toml",
    scopeName: "source.toml",
    path: "toml.tmLanguage.json",
    import: () => import('./languages/toml.tmLanguage-1b8531c7.mjs').then((r) => r.default),
    displayName: "TOML"
  },
  {
    id: "tsx",
    scopeName: "source.tsx",
    path: "tsx.tmLanguage.json",
    import: () => import('./languages/tsx.tmLanguage-267e2f5a.mjs').then((r) => r.default),
    displayName: "TSX",
    samplePath: "tsx.sample"
  },
  {
    id: "turtle",
    scopeName: "source.turtle",
    path: "turtle.tmLanguage.json",
    import: () => import('./languages/turtle.tmLanguage-030a353f.mjs').then((r) => r.default),
    displayName: "Turtle",
    samplePath: "turtle.sample"
  },
  {
    id: "twig",
    scopeName: "text.html.twig",
    path: "twig.tmLanguage.json",
    import: () => import('./languages/twig.tmLanguage-b8077558.mjs').then((r) => r.default),
    displayName: "Twig",
    embeddedLangs: ["css", "javascript", "php", "python", "ruby"]
  },
  {
    id: "typescript",
    scopeName: "source.ts",
    path: "typescript.tmLanguage.json",
    import: () => import('./languages/typescript.tmLanguage-de4b3b68.mjs').then((r) => r.default),
    displayName: "TypeScript",
    aliases: ["ts"]
  },
  {
    id: "v",
    scopeName: "source.v",
    path: "v.tmLanguage.json",
    import: () => import('./languages/v.tmLanguage-53fdea6f.mjs').then((r) => r.default),
    displayName: "V",
    samplePath: "v.sample"
  },
  {
    id: "vb",
    scopeName: "source.asp.vb.net",
    path: "vb.tmLanguage.json",
    import: () => import('./languages/vb.tmLanguage-a3ae732c.mjs').then((r) => r.default),
    displayName: "Visual Basic",
    aliases: ["cmd"]
  },
  {
    id: "verilog",
    scopeName: "source.verilog",
    path: "verilog.tmLanguage.json",
    import: () => import('./languages/verilog.tmLanguage-c4c95c8d.mjs').then((r) => r.default),
    displayName: "Verilog"
  },
  {
    id: "vhdl",
    scopeName: "source.vhdl",
    path: "vhdl.tmLanguage.json",
    import: () => import('./languages/vhdl.tmLanguage-f7adf5df.mjs').then((r) => r.default),
    displayName: "VHDL"
  },
  {
    id: "viml",
    scopeName: "source.viml",
    path: "viml.tmLanguage.json",
    import: () => import('./languages/viml.tmLanguage-7f1108c7.mjs').then((r) => r.default),
    displayName: "Vim Script",
    aliases: ["vim", "vimscript"]
  },
  {
    id: "vue-html",
    scopeName: "text.html.vue-html",
    path: "vue-html.tmLanguage.json",
    import: () => import('./languages/vue-html.tmLanguage-5594a20c.mjs').then((r) => r.default),
    displayName: "Vue HTML",
    embeddedLangs: ["vue", "javascript"]
  },
  {
    id: "vue",
    scopeName: "source.vue",
    path: "vue.tmLanguage.json",
    import: () => import('./languages/vue.tmLanguage-d5fd1824.mjs').then((r) => r.default),
    displayName: "Vue",
    embeddedLangs: ["html", "markdown", "pug", "stylus", "sass", "css", "scss", "less", "javascript", "typescript", "jsx", "tsx", "json", "jsonc", "json5", "yaml", "toml", "graphql"]
  },
  {
    id: "vyper",
    scopeName: "source.vyper",
    path: "vyper.tmLanguage.json",
    import: () => import('./languages/vyper.tmLanguage-e575ccf0.mjs').then((r) => r.default),
    displayName: "Vyper",
    samplePath: "vyper.sample",
    aliases: ["vy"]
  },
  {
    id: "wasm",
    scopeName: "source.wat",
    path: "wasm.tmLanguage.json",
    import: () => import('./languages/wasm.tmLanguage-54c35f12.mjs').then((r) => r.default),
    displayName: "WebAssembly"
  },
  {
    id: "wenyan",
    scopeName: "source.wenyan",
    path: "wenyan.tmLanguage.json",
    import: () => import('./languages/wenyan.tmLanguage-7d801efd.mjs').then((r) => r.default),
    displayName: "Wenyan",
    aliases: ["\u6587\u8A00"]
  },
  {
    id: "wgsl",
    scopeName: "source.wgsl",
    path: "wgsl.tmLanguage.json",
    import: () => import('./languages/wgsl.tmLanguage-06067c64.mjs').then((r) => r.default),
    displayName: "WGSL",
    samplePath: "wgsl.sample"
  },
  {
    id: "wolfram",
    scopeName: "source.wolfram",
    path: "wolfram.tmLanguage.json",
    import: () => import('./languages/wolfram.tmLanguage-e933012c.mjs').then((r) => r.default),
    displayName: "Wolfram",
    samplePath: "wolfram.sample"
  },
  {
    id: "xml",
    scopeName: "text.xml",
    path: "xml.tmLanguage.json",
    import: () => import('./languages/xml.tmLanguage-42b5ff0e.mjs').then((r) => r.default),
    displayName: "XML",
    embeddedLangs: ["java"]
  },
  {
    id: "xsl",
    scopeName: "text.xml.xsl",
    path: "xsl.tmLanguage.json",
    import: () => import('./languages/xsl.tmLanguage-b431c449.mjs').then((r) => r.default),
    displayName: "XSL",
    embeddedLangs: ["xml"]
  },
  {
    id: "yaml",
    scopeName: "source.yaml",
    path: "yaml.tmLanguage.json",
    import: () => import('./languages/yaml.tmLanguage-875d6de7.mjs').then((r) => r.default),
    displayName: "YAML",
    aliases: ["yml"]
  },
  {
    id: "zenscript",
    scopeName: "source.zenscript",
    path: "zenscript.tmLanguage.json",
    import: () => import('./languages/zenscript.tmLanguage-46b17e39.mjs').then((r) => r.default),
    displayName: "ZenScript",
    samplePath: "zenscript.sample"
  },
  {
    id: "zig",
    scopeName: "source.zig",
    path: "zig.tmLanguage.json",
    import: () => import('./languages/zig.tmLanguage-f1960962.mjs').then((r) => r.default),
    displayName: "zig",
    samplePath: "zig.sample"
  }
];

var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
  FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
  FontStyle2[FontStyle2["None"] = 0] = "None";
  FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
  FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
  FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
  return FontStyle2;
})(FontStyle || {});
class StackElementMetadata {
  static toBinaryStr(metadata) {
    let r = metadata.toString(2);
    while (r.length < 32) {
      r = "0" + r;
    }
    return r;
  }
  static printMetadata(metadata) {
    let languageId = StackElementMetadata.getLanguageId(metadata);
    let tokenType = StackElementMetadata.getTokenType(metadata);
    let fontStyle = StackElementMetadata.getFontStyle(metadata);
    let foreground = StackElementMetadata.getForeground(metadata);
    let background = StackElementMetadata.getBackground(metadata);
    console.log({
      languageId,
      tokenType,
      fontStyle,
      foreground,
      background
    });
  }
  static getLanguageId(metadata) {
    return (metadata & 255 /* LANGUAGEID_MASK */) >>> 0 /* LANGUAGEID_OFFSET */;
  }
  static getTokenType(metadata) {
    return (metadata & 768 /* TOKEN_TYPE_MASK */) >>> 8 /* TOKEN_TYPE_OFFSET */;
  }
  static getFontStyle(metadata) {
    return (metadata & 14336 /* FONT_STYLE_MASK */) >>> 11 /* FONT_STYLE_OFFSET */;
  }
  static getForeground(metadata) {
    return (metadata & 8372224 /* FOREGROUND_MASK */) >>> 15 /* FOREGROUND_OFFSET */;
  }
  static getBackground(metadata) {
    return (metadata & 4286578688 /* BACKGROUND_MASK */) >>> 24 /* BACKGROUND_OFFSET */;
  }
  static containsBalancedBrackets(metadata) {
    return (metadata & 1024 /* BALANCED_BRACKETS_MASK */) !== 0;
  }
  static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
    let _languageId = StackElementMetadata.getLanguageId(metadata);
    let _tokenType = StackElementMetadata.getTokenType(metadata);
    let _fontStyle = StackElementMetadata.getFontStyle(metadata);
    let _foreground = StackElementMetadata.getForeground(metadata);
    let _background = StackElementMetadata.getBackground(metadata);
    let _containsBalancedBracketsBit = StackElementMetadata.containsBalancedBrackets(
      metadata
    ) ? 1 : 0;
    if (languageId !== 0) {
      _languageId = languageId;
    }
    if (tokenType !== 0 /* Other */) {
      _tokenType = tokenType === 8 /* MetaEmbedded */ ? 0 /* Other */ : tokenType;
    }
    if (fontStyle !== -1 /* NotSet */) {
      _fontStyle = fontStyle;
    }
    if (foreground !== 0) {
      _foreground = foreground;
    }
    if (background !== 0) {
      _background = background;
    }
    return (_languageId << 0 /* LANGUAGEID_OFFSET */ | _tokenType << 8 /* TOKEN_TYPE_OFFSET */ | _fontStyle << 11 /* FONT_STYLE_OFFSET */ | _containsBalancedBracketsBit << 10 /* BALANCED_BRACKETS_OFFSET */ | _foreground << 15 /* FOREGROUND_OFFSET */ | _background << 24 /* BACKGROUND_OFFSET */) >>> 0;
  }
}

class Resolver {
  constructor(onigLibPromise, onigLibName) {
    this.languagesPath = "languages/";
    this.languageMap = {};
    this.scopeToLangMap = {};
    this._onigLibPromise = onigLibPromise;
    this._onigLibName = onigLibName;
  }
  get onigLib() {
    return this._onigLibPromise;
  }
  getOnigLibName() {
    return this._onigLibName;
  }
  getLangRegistration(langIdOrAlias) {
    return this.languageMap[langIdOrAlias];
  }
  async loadGrammar(scopeName) {
    const lang = this.scopeToLangMap[scopeName];
    if (!lang) {
      return null;
    }
    if (lang.grammar) {
      return lang.grammar;
    }
    if (lang.import) {
      lang.grammar = await lang.import();
      return lang.grammar;
    }
  }
  addLanguage(l) {
    this.languageMap[l.id] = l;
    if (l.aliases) {
      l.aliases.forEach((a) => {
        this.languageMap[a] = l;
      });
    }
    this.scopeToLangMap[l.scopeName] = l;
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var main$1 = {exports: {}};

(function (module, exports) {
	!function(e,t){module.exports=t();}(commonjsGlobal,(function(){return (()=>{var e={350:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UseOnigurumaFindOptions=t.DebugFlags=void 0,t.DebugFlags={InDebugMode:"undefined"!=typeof process&&!!process.env.VSCODE_TEXTMATE_DEBUG},t.UseOnigurumaFindOptions=!1;},36:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.toOptionalTokenType=t.EncodedTokenAttributes=void 0,(n=t.EncodedTokenAttributes||(t.EncodedTokenAttributes={})).toBinaryStr=function(e){let t=e.toString(2);for(;t.length<32;)t="0"+t;return t},n.print=function(e){const t=n.getLanguageId(e),s=n.getTokenType(e),r=n.getFontStyle(e),i=n.getForeground(e),o=n.getBackground(e);console.log({languageId:t,tokenType:s,fontStyle:r,foreground:i,background:o});},n.getLanguageId=function(e){return (255&e)>>>0},n.getTokenType=function(e){return (768&e)>>>8},n.containsBalancedBrackets=function(e){return 0!=(1024&e)},n.getFontStyle=function(e){return (30720&e)>>>11},n.getForeground=function(e){return (16744448&e)>>>15},n.getBackground=function(e){return (4278190080&e)>>>24},n.set=function(e,t,s,r,i,o,c){let a=n.getLanguageId(e),l=n.getTokenType(e),u=n.containsBalancedBrackets(e)?1:0,h=n.getFontStyle(e),p=n.getForeground(e),d=n.getBackground(e);return 0!==t&&(a=t),8!==s&&(l=s),null!==r&&(u=r?1:0),-1!==i&&(h=i),0!==o&&(p=o),0!==c&&(d=c),(a<<0|l<<8|u<<10|h<<11|p<<15|d<<24)>>>0},t.toOptionalTokenType=function(e){return e};},996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BasicScopeAttributesProvider=t.BasicScopeAttributes=void 0;const s=n(878);class r{constructor(e,t){this.languageId=e,this.tokenType=t;}}t.BasicScopeAttributes=r;class i{constructor(e,t){this._getBasicScopeAttributes=new s.CachedFn((e=>{const t=this._scopeToLanguage(e),n=this._toStandardTokenType(e);return new r(t,n)})),this._defaultAttributes=new r(e,8),this._embeddedLanguagesMatcher=new o(Object.entries(t||{}));}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(e){return null===e?i._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(e)}_scopeToLanguage(e){return this._embeddedLanguagesMatcher.match(e)||0}_toStandardTokenType(e){const t=e.match(i.STANDARD_TOKEN_TYPE_REGEXP);if(!t)return 8;switch(t[1]){case"comment":return 1;case"string":return 2;case"regex":return 3;case"meta.embedded":return 0}throw new Error("Unexpected match for standard token type!")}}t.BasicScopeAttributesProvider=i,i._NULL_SCOPE_METADATA=new r(0,0),i.STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/;class o{constructor(e){if(0===e.length)this.values=null,this.scopesRegExp=null;else {this.values=new Map(e);const t=e.map((([e,t])=>s.escapeRegExpCharacters(e)));t.sort(),t.reverse(),this.scopesRegExp=new RegExp(`^((${t.join(")|(")}))($|\\.)`,"");}}match(e){if(!this.scopesRegExp)return;const t=e.match(this.scopesRegExp);return t?this.values.get(t[1]):void 0}}},947:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LineTokens=t.BalancedBracketSelectors=t.StateStack=t.AttributedScopeStack=t.Grammar=t.createGrammar=void 0;const s=n(350),r=n(36),i=n(736),o=n(44),c=n(792),a=n(583),l=n(878),u=n(996),h=n(47);function p(e,t,n,s,r){const o=i.createMatchers(t,d),a=c.RuleFactory.getCompiledRuleId(n,s,r.repository);for(const n of o)e.push({debugSelector:t,matcher:n.matcher,ruleId:a,grammar:r,priority:n.priority});}function d(e,t){if(t.length<e.length)return !1;let n=0;return e.every((e=>{for(let s=n;s<t.length;s++)if(f(t[s],e))return n=s+1,!0;return !1}))}function f(e,t){if(!e)return !1;if(e===t)return !0;const n=t.length;return e.length>n&&e.substr(0,n)===t&&"."===e[n]}t.createGrammar=function(e,t,n,s,r,i,o,c){return new g(e,t,n,s,r,i,o,c)};class g{constructor(e,t,n,s,r,o,c,a){if(this._rootScopeName=e,this.balancedBracketSelectors=o,this._onigLib=a,this._basicScopeAttributesProvider=new u.BasicScopeAttributesProvider(n,s),this._rootId=-1,this._lastRuleId=0,this._ruleId2desc=[null],this._includedGrammars={},this._grammarRepository=c,this._grammar=m(t,null),this._injections=null,this._tokenTypeMatchers=[],r)for(const e of Object.keys(r)){const t=i.createMatchers(e,d);for(const n of t)this._tokenTypeMatchers.push({matcher:n.matcher,type:r[e]});}}get themeProvider(){return this._grammarRepository}dispose(){for(const e of this._ruleId2desc)e&&e.dispose();}createOnigScanner(e){return this._onigLib.createOnigScanner(e)}createOnigString(e){return this._onigLib.createOnigString(e)}getMetadataForScope(e){return this._basicScopeAttributesProvider.getBasicScopeAttributes(e)}_collectInjections(){const e=[],t=this._rootScopeName,n=(e=>e===this._rootScopeName?this._grammar:this.getExternalGrammar(e))(t);if(n){const s=n.injections;if(s)for(let t in s)p(e,t,s[t],this,n);const r=this._grammarRepository.injections(t);r&&r.forEach((t=>{const n=this.getExternalGrammar(t);if(n){const t=n.injectionSelector;t&&p(e,t,n,this,n);}}));}return e.sort(((e,t)=>e.priority-t.priority)),e}getInjections(){if(null===this._injections&&(this._injections=this._collectInjections(),s.DebugFlags.InDebugMode&&this._injections.length>0)){console.log(`Grammar ${this._rootScopeName} contains the following injections:`);for(const e of this._injections)console.log(`  - ${e.debugSelector}`);}return this._injections}registerRule(e){const t=++this._lastRuleId,n=e(c.ruleIdFromNumber(t));return this._ruleId2desc[t]=n,n}getRule(e){return this._ruleId2desc[c.ruleIdToNumber(e)]}getExternalGrammar(e,t){if(this._includedGrammars[e])return this._includedGrammars[e];if(this._grammarRepository){const n=this._grammarRepository.lookup(e);if(n)return this._includedGrammars[e]=m(n,t&&t.$base),this._includedGrammars[e]}}tokenizeLine(e,t,n=0){const s=this._tokenize(e,t,!1,n);return {tokens:s.lineTokens.getResult(s.ruleStack,s.lineLength),ruleStack:s.ruleStack,stoppedEarly:s.stoppedEarly}}tokenizeLine2(e,t,n=0){const s=this._tokenize(e,t,!0,n);return {tokens:s.lineTokens.getBinaryResult(s.ruleStack,s.lineLength),ruleStack:s.ruleStack,stoppedEarly:s.stoppedEarly}}_tokenize(e,t,n,s){let i;if(-1===this._rootId&&(this._rootId=c.RuleFactory.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository)),t&&t!==b.NULL)i=!1,t.reset();else {i=!0;const e=this._basicScopeAttributesProvider.getDefaultAttributes(),n=this.themeProvider.getDefaults(),s=r.EncodedTokenAttributes.set(0,e.languageId,e.tokenType,null,n.fontStyle,n.foregroundId,n.backgroundId),o=this.getRule(this._rootId).getName(null,null);let c;c=o?_.createRootAndLookUpScopeName(o,s,this):_.createRoot("unknown",s),t=new b(null,this._rootId,-1,-1,!1,null,c,c);}e+="\n";const a=this.createOnigString(e),l=a.content.length,u=new y(n,e,this._tokenTypeMatchers,this.balancedBracketSelectors),p=h._tokenizeString(this,a,i,0,t,u,!0,s);return o.disposeOnigString(a),{lineLength:l,lineTokens:u,ruleStack:p.stack,stoppedEarly:p.stoppedEarly}}}function m(e,t){return (e=l.clone(e)).repository=e.repository||{},e.repository.$self={$vscodeTextmateLocation:e.$vscodeTextmateLocation,patterns:e.patterns,name:e.scopeName},e.repository.$base=t||e.repository.$self,e}t.Grammar=g;class _{constructor(e,t,n){this.parent=e,this.scopePath=t,this.tokenAttributes=n;}static createRoot(e,t){return new _(null,new a.ScopeStack(null,e),t)}static createRootAndLookUpScopeName(e,t,n){const s=n.getMetadataForScope(e),r=new a.ScopeStack(null,e),i=n.themeProvider.themeMatch(r),o=_.mergeAttributes(t,s,i);return new _(null,r,o)}get scopeName(){return this.scopePath.scopeName}equals(e){return _._equals(this,e)}static _equals(e,t){for(;;){if(e===t)return !0;if(!e&&!t)return !0;if(!e||!t)return !1;if(e.scopeName!==t.scopeName||e.tokenAttributes!==t.tokenAttributes)return !1;e=e.parent,t=t.parent;}}static mergeAttributes(e,t,n){let s=-1,i=0,o=0;return null!==n&&(s=n.fontStyle,i=n.foregroundId,o=n.backgroundId),r.EncodedTokenAttributes.set(e,t.languageId,t.tokenType,null,s,i,o)}pushAttributed(e,t){if(null===e)return this;if(-1===e.indexOf(" "))return _._pushAttributed(this,e,t);const n=e.split(/ /g);let s=this;for(const e of n)s=_._pushAttributed(s,e,t);return s}static _pushAttributed(e,t,n){const s=n.getMetadataForScope(t),r=e.scopePath.push(t),i=n.themeProvider.themeMatch(r),o=_.mergeAttributes(e.tokenAttributes,s,i);return new _(e,r,o)}getScopeNames(){return this.scopePath.getSegments()}}t.AttributedScopeStack=_;class b{constructor(e,t,n,s,r,i,o,c){this.parent=e,this.ruleId=t,this.beginRuleCapturedEOL=r,this.endRule=i,this.nameScopesList=o,this.contentNameScopesList=c,this._stackElementBrand=void 0,this.depth=this.parent?this.parent.depth+1:1,this._enterPos=n,this._anchorPos=s;}equals(e){return null!==e&&b._equals(this,e)}static _equals(e,t){return e===t||!!this._structuralEquals(e,t)&&e.contentNameScopesList.equals(t.contentNameScopesList)}static _structuralEquals(e,t){for(;;){if(e===t)return !0;if(!e&&!t)return !0;if(!e||!t)return !1;if(e.depth!==t.depth||e.ruleId!==t.ruleId||e.endRule!==t.endRule)return !1;e=e.parent,t=t.parent;}}clone(){return this}static _reset(e){for(;e;)e._enterPos=-1,e._anchorPos=-1,e=e.parent;}reset(){b._reset(this);}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,t,n,s,r,i,o){return new b(this,e,t,n,s,r,i,o)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){const e=[];return this._writeString(e,0),"["+e.join(",")+"]"}_writeString(e,t){return this.parent&&(t=this.parent._writeString(e,t)),e[t++]=`(${this.ruleId}, TODO-${this.nameScopesList}, TODO-${this.contentNameScopesList})`,t}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new b(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){let t=this;for(;t&&t._enterPos===e._enterPos;){if(t.ruleId===e.ruleId)return !0;t=t.parent;}return !1}}t.StateStack=b,b.NULL=new b(null,0,0,0,!1,null,null,null),t.BalancedBracketSelectors=class{constructor(e,t){this.allowAny=!1,this.balancedBracketScopes=e.flatMap((e=>"*"===e?(this.allowAny=!0,[]):i.createMatchers(e,d).map((e=>e.matcher)))),this.unbalancedBracketScopes=t.flatMap((e=>i.createMatchers(e,d).map((e=>e.matcher))));}get matchesAlways(){return this.allowAny&&0===this.unbalancedBracketScopes.length}get matchesNever(){return 0===this.balancedBracketScopes.length&&!this.allowAny}match(e){for(const t of this.unbalancedBracketScopes)if(t(e))return !1;for(const t of this.balancedBracketScopes)if(t(e))return !0;return this.allowAny}};class y{constructor(e,t,n,r){this.balancedBracketSelectors=r,this._emitBinaryTokens=e,this._tokenTypeOverrides=n,s.DebugFlags.InDebugMode?this._lineText=t:this._lineText=null,this._tokens=[],this._binaryTokens=[],this._lastTokenEndIndex=0;}produce(e,t){this.produceFromScopes(e.contentNameScopesList,t);}produceFromScopes(e,t){if(this._lastTokenEndIndex>=t)return;if(this._emitBinaryTokens){let n=e.tokenAttributes,i=!1;if(this.balancedBracketSelectors?.matchesAlways&&(i=!0),this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever){const t=e.getScopeNames();for(const e of this._tokenTypeOverrides)e.matcher(t)&&(n=r.EncodedTokenAttributes.set(n,0,r.toOptionalTokenType(e.type),null,-1,0,0));this.balancedBracketSelectors&&(i=this.balancedBracketSelectors.match(t));}if(i&&(n=r.EncodedTokenAttributes.set(n,0,8,i,-1,0,0)),this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===n)return void(this._lastTokenEndIndex=t);if(s.DebugFlags.InDebugMode){const n=e.getScopeNames();console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,t).replace(/\n$/,"\\n")+"|");for(let e=0;e<n.length;e++)console.log("      * "+n[e]);}return this._binaryTokens.push(this._lastTokenEndIndex),this._binaryTokens.push(n),void(this._lastTokenEndIndex=t)}const n=e.getScopeNames();if(s.DebugFlags.InDebugMode){console.log("  token: |"+this._lineText.substring(this._lastTokenEndIndex,t).replace(/\n$/,"\\n")+"|");for(let e=0;e<n.length;e++)console.log("      * "+n[e]);}this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:t,scopes:n}),this._lastTokenEndIndex=t;}getResult(e,t){return this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===t-1&&this._tokens.pop(),0===this._tokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._tokens[this._tokens.length-1].startIndex=0),this._tokens}getBinaryResult(e,t){this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===t-1&&(this._binaryTokens.pop(),this._binaryTokens.pop()),0===this._binaryTokens.length&&(this._lastTokenEndIndex=-1,this.produce(e,t),this._binaryTokens[this._binaryTokens.length-2]=0);const n=new Uint32Array(this._binaryTokens.length);for(let e=0,t=this._binaryTokens.length;e<t;e++)n[e]=this._binaryTokens[e];return n}}t.LineTokens=y;},965:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseInclude=t.TopLevelRepositoryReference=t.TopLevelReference=t.RelativeReference=t.SelfReference=t.BaseReference=t.ScopeDependencyProcessor=t.ExternalReferenceCollector=t.TopLevelRepositoryRuleReference=t.TopLevelRuleReference=void 0;const s=n(878);class r{constructor(e){this.scopeName=e;}toKey(){return this.scopeName}}t.TopLevelRuleReference=r;class i{constructor(e,t){this.scopeName=e,this.ruleName=t;}toKey(){return `${this.scopeName}#${this.ruleName}`}}t.TopLevelRepositoryRuleReference=i;class o{constructor(){this._references=[],this._seenReferenceKeys=new Set,this.visitedRule=new Set;}get references(){return this._references}add(e){const t=e.toKey();this._seenReferenceKeys.has(t)||(this._seenReferenceKeys.add(t),this._references.push(e));}}function c(e,t,n,s){const i=n.lookup(e.scopeName);if(!i){if(e.scopeName===t)throw new Error(`No grammar provided for <${t}>`);return}const o=n.lookup(t);e instanceof r?l({baseGrammar:o,selfGrammar:i},s):a(e.ruleName,{baseGrammar:o,selfGrammar:i,repository:i.repository},s);const c=n.injections(e.scopeName);if(c)for(const e of c)s.add(new r(e));}function a(e,t,n){t.repository&&t.repository[e]&&u([t.repository[e]],t,n);}function l(e,t){e.selfGrammar.patterns&&Array.isArray(e.selfGrammar.patterns)&&u(e.selfGrammar.patterns,{...e,repository:e.selfGrammar.repository},t),e.selfGrammar.injections&&u(Object.values(e.selfGrammar.injections),{...e,repository:e.selfGrammar.repository},t);}function u(e,t,n){for(const o of e){if(n.visitedRule.has(o))continue;n.visitedRule.add(o);const e=o.repository?s.mergeObjects({},t.repository,o.repository):t.repository;Array.isArray(o.patterns)&&u(o.patterns,{...t,repository:e},n);const c=o.include;if(!c)continue;const h=m(c);switch(h.kind){case 0:l({...t,selfGrammar:t.baseGrammar},n);break;case 1:l(t,n);break;case 2:a(h.ruleName,{...t,repository:e},n);break;case 3:case 4:const s=h.scopeName===t.selfGrammar.scopeName?t.selfGrammar:h.scopeName===t.baseGrammar.scopeName?t.baseGrammar:void 0;if(s){const r={baseGrammar:t.baseGrammar,selfGrammar:s,repository:e};4===h.kind?a(h.ruleName,r,n):l(r,n);}else 4===h.kind?n.add(new i(h.scopeName,h.ruleName)):n.add(new r(h.scopeName));}}}t.ExternalReferenceCollector=o,t.ScopeDependencyProcessor=class{constructor(e,t){this.repo=e,this.initialScopeName=t,this.seenFullScopeRequests=new Set,this.seenPartialScopeRequests=new Set,this.seenFullScopeRequests.add(this.initialScopeName),this.Q=[new r(this.initialScopeName)];}processQueue(){const e=this.Q;this.Q=[];const t=new o;for(const n of e)c(n,this.initialScopeName,this.repo,t);for(const e of t.references)if(e instanceof r){if(this.seenFullScopeRequests.has(e.scopeName))continue;this.seenFullScopeRequests.add(e.scopeName),this.Q.push(e);}else {if(this.seenFullScopeRequests.has(e.scopeName))continue;if(this.seenPartialScopeRequests.has(e.toKey()))continue;this.seenPartialScopeRequests.add(e.toKey()),this.Q.push(e);}}};class h{constructor(){this.kind=0;}}t.BaseReference=h;class p{constructor(){this.kind=1;}}t.SelfReference=p;class d{constructor(e){this.ruleName=e,this.kind=2;}}t.RelativeReference=d;class f{constructor(e){this.scopeName=e,this.kind=3;}}t.TopLevelReference=f;class g{constructor(e,t){this.scopeName=e,this.ruleName=t,this.kind=4;}}function m(e){if("$base"===e)return new h;if("$self"===e)return new p;const t=e.indexOf("#");if(-1===t)return new f(e);if(0===t)return new d(e.substring(1));{const n=e.substring(0,t),s=e.substring(t+1);return new g(n,s)}}t.TopLevelRepositoryReference=g,t.parseInclude=m;},391:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}});}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n];}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n);};Object.defineProperty(t,"__esModule",{value:!0}),r(n(947),t);},47:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LocalStackElement=t._tokenizeString=void 0;const s=n(350),r=n(44),i=n(792),o=n(878);class c{constructor(e,t){this.stack=e,this.stoppedEarly=t;}}function a(e,t,n,r,a,h,d,f){const g=t.content.length;let m=!1,_=-1;if(d){const o=function(e,t,n,r,o,c){let a=o.beginRuleCapturedEOL?0:-1;const l=[];for(let t=o;t;t=t.pop()){const n=t.getRule(e);n instanceof i.BeginWhileRule&&l.push({rule:n,stack:t});}for(let h=l.pop();h;h=l.pop()){const{ruleScanner:l,findOptions:d}=u(h.rule,e,h.stack.endRule,n,r===a),f=l.findNextMatchSync(t,r,d);if(s.DebugFlags.InDebugMode&&(console.log("  scanning for while rule"),console.log(l.toString())),!f){s.DebugFlags.InDebugMode&&console.log("  popping "+h.rule.debugName+" - "+h.rule.debugWhileRegExp),o=h.stack.pop();break}if(f.ruleId!==i.whileRuleId){o=h.stack.pop();break}f.captureIndices&&f.captureIndices.length&&(c.produce(h.stack,f.captureIndices[0].start),p(e,t,n,h.stack,c,h.rule.whileCaptures,f.captureIndices),c.produce(h.stack,f.captureIndices[0].end),a=f.captureIndices[0].end,f.captureIndices[0].end>r&&(r=f.captureIndices[0].end,n=!1));}return {stack:o,linePos:r,anchorPosition:a,isFirstLine:n}}(e,t,n,r,a,h);a=o.stack,r=o.linePos,n=o.isFirstLine,_=o.anchorPosition;}const b=Date.now();for(;!m;){if(0!==f&&Date.now()-b>f)return new c(a,!0);y();}return new c(a,!1);function y(){s.DebugFlags.InDebugMode&&(console.log(""),console.log(`@@scanNext ${r}: |${t.content.substr(r).replace(/\n$/,"\\n")}|`));const c=function(e,t,n,r,i,c){const a=function(e,t,n,r,i,c){const a=i.getRule(e),{ruleScanner:u,findOptions:h}=l(a,e,i.endRule,n,r===c);let p=0;s.DebugFlags.InDebugMode&&(p=o.performanceNow());const d=u.findNextMatchSync(t,r,h);if(s.DebugFlags.InDebugMode){const e=o.performanceNow()-p;e>5&&console.warn(`Rule ${a.debugName} (${a.id}) matching took ${e} against '${t}'`),console.log(`  scanning for (linePos: ${r}, anchorPosition: ${c})`),console.log(u.toString()),d&&console.log(`matched rule id: ${d.ruleId} from ${d.captureIndices[0].start} to ${d.captureIndices[0].end}`);}return d?{captureIndices:d.captureIndices,matchedRuleId:d.ruleId}:null}(e,t,n,r,i,c),u=e.getInjections();if(0===u.length)return a;const h=function(e,t,n,r,i,o,c){let a,u=Number.MAX_VALUE,h=null,p=0;const d=o.contentNameScopesList.getScopeNames();for(let o=0,f=e.length;o<f;o++){const f=e[o];if(!f.matcher(d))continue;const g=t.getRule(f.ruleId),{ruleScanner:m,findOptions:_}=l(g,t,null,r,i===c),b=m.findNextMatchSync(n,i,_);if(!b)continue;s.DebugFlags.InDebugMode&&(console.log(`  matched injection: ${f.debugSelector}`),console.log(m.toString()));const y=b.captureIndices[0].start;if(!(y>=u)&&(u=y,h=b.captureIndices,a=b.ruleId,p=f.priority,u===i))break}return h?{priorityMatch:-1===p,captureIndices:h,matchedRuleId:a}:null}(u,e,t,n,r,i,c);if(!h)return a;if(!a)return h;const p=a.captureIndices[0].start,d=h.captureIndices[0].start;return d<p||h.priorityMatch&&d===p?h:a}(e,t,n,r,a,_);if(!c)return s.DebugFlags.InDebugMode&&console.log("  no more matches."),h.produce(a,g),void(m=!0);const u=c.captureIndices,d=c.matchedRuleId,f=!!(u&&u.length>0)&&u[0].end>r;if(d===i.endRuleId){const i=a.getRule(e);s.DebugFlags.InDebugMode&&console.log("  popping "+i.debugName+" - "+i.debugEndRegExp),h.produce(a,u[0].start),a=a.withContentNameScopesList(a.nameScopesList),p(e,t,n,a,h,i.endCaptures,u),h.produce(a,u[0].end);const o=a;if(a=a.parent,_=o.getAnchorPos(),!f&&o.getEnterPos()===r)return s.DebugFlags.InDebugMode&&console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"),a=o,h.produce(a,g),void(m=!0)}else {const o=e.getRule(d);h.produce(a,u[0].start);const c=a,l=o.getName(t.content,u),b=a.contentNameScopesList.pushAttributed(l,e);if(a=a.push(d,r,_,u[0].end===g,null,b,b),o instanceof i.BeginEndRule){const r=o;s.DebugFlags.InDebugMode&&console.log("  pushing "+r.debugName+" - "+r.debugBeginRegExp),p(e,t,n,a,h,r.beginCaptures,u),h.produce(a,u[0].end),_=u[0].end;const i=r.getContentName(t.content,u),l=b.pushAttributed(i,e);if(a=a.withContentNameScopesList(l),r.endHasBackReferences&&(a=a.withEndRule(r.getEndWithResolvedBackReferences(t.content,u))),!f&&c.hasSameRuleAs(a))return s.DebugFlags.InDebugMode&&console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),a=a.pop(),h.produce(a,g),void(m=!0)}else if(o instanceof i.BeginWhileRule){const r=o;s.DebugFlags.InDebugMode&&console.log("  pushing "+r.debugName),p(e,t,n,a,h,r.beginCaptures,u),h.produce(a,u[0].end),_=u[0].end;const i=r.getContentName(t.content,u),l=b.pushAttributed(i,e);if(a=a.withContentNameScopesList(l),r.whileHasBackReferences&&(a=a.withEndRule(r.getWhileWithResolvedBackReferences(t.content,u))),!f&&c.hasSameRuleAs(a))return s.DebugFlags.InDebugMode&&console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"),a=a.pop(),h.produce(a,g),void(m=!0)}else {const r=o;if(s.DebugFlags.InDebugMode&&console.log("  matched "+r.debugName+" - "+r.debugMatchRegExp),p(e,t,n,a,h,r.captures,u),h.produce(a,u[0].end),a=a.pop(),!f)return s.DebugFlags.InDebugMode&&console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"),a=a.safePop(),h.produce(a,g),void(m=!0)}}u[0].end>r&&(r=u[0].end,n=!1);}}function l(e,t,n,r,i){return s.UseOnigurumaFindOptions?{ruleScanner:e.compile(t,n),findOptions:h(r,i)}:{ruleScanner:e.compileAG(t,n,r,i),findOptions:0}}function u(e,t,n,r,i){return s.UseOnigurumaFindOptions?{ruleScanner:e.compileWhile(t,n),findOptions:h(r,i)}:{ruleScanner:e.compileWhileAG(t,n,r,i),findOptions:0}}function h(e,t){let n=0;return e||(n|=1),t||(n|=4),n}function p(e,t,n,s,i,o,c){if(0===o.length)return;const l=t.content,u=Math.min(o.length,c.length),h=[],p=c[0].end;for(let t=0;t<u;t++){const u=o[t];if(null===u)continue;const f=c[t];if(0===f.length)continue;if(f.start>p)break;for(;h.length>0&&h[h.length-1].endPos<=f.start;)i.produceFromScopes(h[h.length-1].scopes,h[h.length-1].endPos),h.pop();if(h.length>0?i.produceFromScopes(h[h.length-1].scopes,f.start):i.produce(s,f.start),u.retokenizeCapturedWithRuleId){const t=u.getName(l,c),o=s.contentNameScopesList.pushAttributed(t,e),h=u.getContentName(l,c),p=o.pushAttributed(h,e),d=s.push(u.retokenizeCapturedWithRuleId,f.start,-1,!1,null,o,p),g=e.createOnigString(l.substring(0,f.end));a(e,g,n&&0===f.start,f.start,d,i,!1,0),r.disposeOnigString(g);continue}const g=u.getName(l,c);if(null!==g){const t=(h.length>0?h[h.length-1].scopes:s.contentNameScopesList).pushAttributed(g,e);h.push(new d(t,f.end));}}for(;h.length>0;)i.produceFromScopes(h[h.length-1].scopes,h[h.length-1].endPos),h.pop();}t._tokenizeString=a;class d{constructor(e,t){this.scopes=e,this.endPos=t;}}t.LocalStackElement=d;},974:(e,t)=>{function n(e,t){throw new Error("Near offset "+e.pos+": "+t+" ~~~"+e.source.substr(e.pos,50)+"~~~")}Object.defineProperty(t,"__esModule",{value:!0}),t.parseJSON=void 0,t.parseJSON=function(e,t,o){let c=new s(e),a=new r,l=0,u=null,h=[],p=[];function d(){h.push(l),p.push(u);}function f(){l=h.pop(),u=p.pop();}function g(e){n(c,e);}for(;i(c,a);){if(0===l){if(null!==u&&g("too many constructs in root"),3===a.type){u={},o&&(u.$vscodeTextmateLocation=a.toLocation(t)),d(),l=1;continue}if(2===a.type){u=[],d(),l=4;continue}g("unexpected token in root");}if(2===l){if(5===a.type){f();continue}if(7===a.type){l=3;continue}g("expected , or }");}if(1===l||3===l){if(1===l&&5===a.type){f();continue}if(1===a.type){let e=a.value;if(i(c,a)&&6===a.type||g("expected colon"),i(c,a)||g("expected value"),l=2,1===a.type){u[e]=a.value;continue}if(8===a.type){u[e]=null;continue}if(9===a.type){u[e]=!0;continue}if(10===a.type){u[e]=!1;continue}if(11===a.type){u[e]=parseFloat(a.value);continue}if(2===a.type){let t=[];u[e]=t,d(),l=4,u=t;continue}if(3===a.type){let n={};o&&(n.$vscodeTextmateLocation=a.toLocation(t)),u[e]=n,d(),l=1,u=n;continue}}g("unexpected token in dict");}if(5===l){if(4===a.type){f();continue}if(7===a.type){l=6;continue}g("expected , or ]");}if(4===l||6===l){if(4===l&&4===a.type){f();continue}if(l=5,1===a.type){u.push(a.value);continue}if(8===a.type){u.push(null);continue}if(9===a.type){u.push(!0);continue}if(10===a.type){u.push(!1);continue}if(11===a.type){u.push(parseFloat(a.value));continue}if(2===a.type){let e=[];u.push(e),d(),l=4,u=e;continue}if(3===a.type){let e={};o&&(e.$vscodeTextmateLocation=a.toLocation(t)),u.push(e),d(),l=1,u=e;continue}g("unexpected token in array");}g("unknown state");}return 0!==p.length&&g("unclosed constructs"),u};class s{constructor(e){this.source=e,this.pos=0,this.len=e.length,this.line=1,this.char=0;}}class r{constructor(){this.value=null,this.type=0,this.offset=-1,this.len=-1,this.line=-1,this.char=-1;}toLocation(e){return {filename:e,line:this.line,char:this.char}}}function i(e,t){t.value=null,t.type=0,t.offset=-1,t.len=-1,t.line=-1,t.char=-1;let s,r=e.source,i=e.pos,o=e.len,c=e.line,a=e.char;for(;;){if(i>=o)return !1;if(s=r.charCodeAt(i),32!==s&&9!==s&&13!==s){if(10!==s)break;i++,c++,a=0;}else i++,a++;}if(t.offset=i,t.line=c,t.char=a,34===s){for(t.type=1,i++,a++;;){if(i>=o)return !1;if(s=r.charCodeAt(i),i++,a++,92!==s){if(34===s)break}else i++,a++;}t.value=r.substring(t.offset+1,i-1).replace(/\\u([0-9A-Fa-f]{4})/g,((e,t)=>String.fromCodePoint(parseInt(t,16)))).replace(/\\(.)/g,((t,s)=>{switch(s){case'"':return '"';case"\\":return "\\";case"/":return "/";case"b":return "\b";case"f":return "\f";case"n":return "\n";case"r":return "\r";case"t":return "\t";default:n(e,"invalid escape sequence");}throw new Error("unreachable")}));}else if(91===s)t.type=2,i++,a++;else if(123===s)t.type=3,i++,a++;else if(93===s)t.type=4,i++,a++;else if(125===s)t.type=5,i++,a++;else if(58===s)t.type=6,i++,a++;else if(44===s)t.type=7,i++,a++;else if(110===s){if(t.type=8,i++,a++,s=r.charCodeAt(i),117!==s)return !1;if(i++,a++,s=r.charCodeAt(i),108!==s)return !1;if(i++,a++,s=r.charCodeAt(i),108!==s)return !1;i++,a++;}else if(116===s){if(t.type=9,i++,a++,s=r.charCodeAt(i),114!==s)return !1;if(i++,a++,s=r.charCodeAt(i),117!==s)return !1;if(i++,a++,s=r.charCodeAt(i),101!==s)return !1;i++,a++;}else if(102===s){if(t.type=10,i++,a++,s=r.charCodeAt(i),97!==s)return !1;if(i++,a++,s=r.charCodeAt(i),108!==s)return !1;if(i++,a++,s=r.charCodeAt(i),115!==s)return !1;if(i++,a++,s=r.charCodeAt(i),101!==s)return !1;i++,a++;}else for(t.type=11;;){if(i>=o)return !1;if(s=r.charCodeAt(i),!(46===s||s>=48&&s<=57||101===s||69===s||45===s||43===s))break;i++,a++;}return t.len=i-t.offset,null===t.value&&(t.value=r.substr(t.offset,t.len)),e.pos=i,e.line=c,e.char=a,!0}},787:function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){void 0===s&&(s=n),Object.defineProperty(e,s,{enumerable:!0,get:function(){return t[n]}});}:function(e,t,n,s){void 0===s&&(s=n),e[s]=t[n];}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n);};Object.defineProperty(t,"__esModule",{value:!0}),t.parseRawGrammar=t.INITIAL=t.Registry=void 0;const i=n(391),o=n(50),c=n(652),a=n(583),l=n(965);r(n(44),t),t.Registry=class{constructor(e){this._options=e,this._syncRegistry=new c.SyncRegistry(a.Theme.createFromRawTheme(e.theme,e.colorMap),e.onigLib),this._ensureGrammarCache=new Map;}dispose(){this._syncRegistry.dispose();}setTheme(e,t){this._syncRegistry.setTheme(a.Theme.createFromRawTheme(e,t));}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(e,t,n){return this.loadGrammarWithConfiguration(e,t,{embeddedLanguages:n})}loadGrammarWithConfiguration(e,t,n){return this._loadGrammar(e,t,n.embeddedLanguages,n.tokenTypes,new i.BalancedBracketSelectors(n.balancedBracketSelectors||[],n.unbalancedBracketSelectors||[]))}loadGrammar(e){return this._loadGrammar(e,0,null,null,null)}async _loadGrammar(e,t,n,s,r){const i=new l.ScopeDependencyProcessor(this._syncRegistry,e);for(;i.Q.length>0;)await Promise.all(i.Q.map((e=>this._loadSingleGrammar(e.scopeName)))),i.processQueue();return this._grammarForScopeName(e,t,n,s,r)}async _loadSingleGrammar(e){return this._ensureGrammarCache.has(e)||this._ensureGrammarCache.set(e,this._doLoadSingleGrammar(e)),this._ensureGrammarCache.get(e)}async _doLoadSingleGrammar(e){const t=await this._options.loadGrammar(e);if(t){const n="function"==typeof this._options.getInjections?this._options.getInjections(e):void 0;this._syncRegistry.addGrammar(t,n);}}async addGrammar(e,t=[],n=0,s=null){return this._syncRegistry.addGrammar(e,t),await this._grammarForScopeName(e.scopeName,n,s)}_grammarForScopeName(e,t=0,n=null,s=null,r=null){return this._syncRegistry.grammarForScopeName(e,t,n,s,r)}},t.INITIAL=i.StateStack.NULL,t.parseRawGrammar=o.parseRawGrammar;},736:(e,t)=>{function n(e){return !!e&&!!e.match(/[\w\.:]+/)}Object.defineProperty(t,"__esModule",{value:!0}),t.createMatchers=void 0,t.createMatchers=function(e,t){const s=[],r=function(e){let t=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g,n=t.exec(e);return {next:()=>{if(!n)return null;const s=n[0];return n=t.exec(e),s}}}(e);let i=r.next();for(;null!==i;){let e=0;if(2===i.length&&":"===i.charAt(1)){switch(i.charAt(0)){case"R":e=1;break;case"L":e=-1;break;default:console.log(`Unknown priority ${i} in scope selector`);}i=r.next();}let t=c();if(s.push({matcher:t,priority:e}),","!==i)break;i=r.next();}return s;function o(){if("-"===i){i=r.next();const e=o();return t=>!!e&&!e(t)}if("("===i){i=r.next();const e=function(){const e=[];let t=c();for(;t&&(e.push(t),"|"===i||","===i);){do{i=r.next();}while("|"===i||","===i);t=c();}return t=>e.some((e=>e(t)))}();return ")"===i&&(i=r.next()),e}if(n(i)){const e=[];do{e.push(i),i=r.next();}while(n(i));return n=>t(e,n)}return null}function c(){const e=[];let t=o();for(;t;)e.push(t),t=o();return t=>e.every((e=>e(t)))}};},44:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.disposeOnigString=void 0,t.disposeOnigString=function(e){"function"==typeof e.dispose&&e.dispose();};},50:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.parseRawGrammar=void 0;const s=n(69),r=n(350),i=n(974);t.parseRawGrammar=function(e,t=null){return null!==t&&/\.json$/.test(t)?(n=e,o=t,r.DebugFlags.InDebugMode?i.parseJSON(n,o,!0):JSON.parse(n)):function(e,t){return r.DebugFlags.InDebugMode?s.parseWithLocation(e,t,"$vscodeTextmateLocation"):s.parsePLIST(e)}(e,t);var n,o;};},69:(e,t)=>{function n(e,t,n){const s=e.length;let r=0,i=1,o=0;function c(t){if(null===n)r+=t;else for(;t>0;)10===e.charCodeAt(r)?(r++,i++,o=0):(r++,o++),t--;}function a(e){null===n?r=e:c(e-r);}function l(){for(;r<s;){let t=e.charCodeAt(r);if(32!==t&&9!==t&&13!==t&&10!==t)break;c(1);}}function u(t){return e.substr(r,t.length)===t&&(c(t.length),!0)}function h(t){let n=e.indexOf(t,r);a(-1!==n?n+t.length:s);}function p(t){let n=e.indexOf(t,r);if(-1!==n){let s=e.substring(r,n);return a(n+t.length),s}{let t=e.substr(r);return a(s),t}}s>0&&65279===e.charCodeAt(0)&&(r=1);let d=0,f=null,g=[],m=[],_=null;function b(e,t){g.push(d),m.push(f),d=e,f=t;}function y(){if(0===g.length)return S("illegal state stack");d=g.pop(),f=m.pop();}function S(t){throw new Error("Near offset "+r+": "+t+" ~~~"+e.substr(r,50)+"~~~")}const k=function(){if(null===_)return S("missing <key>");let e={};null!==n&&(e[n]={filename:t,line:i,char:o}),f[_]=e,_=null,b(1,e);},C=function(){if(null===_)return S("missing <key>");let e=[];f[_]=e,_=null,b(2,e);},R=function(){let e={};null!==n&&(e[n]={filename:t,line:i,char:o}),f.push(e),b(1,e);},A=function(){let e=[];f.push(e),b(2,e);};function w(){if(1!==d)return S("unexpected </dict>");y();}function P(){return 1===d||2!==d?S("unexpected </array>"):void y()}function I(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null;}else 2===d?f.push(e):f=e;}function v(e){if(isNaN(e))return S("cannot parse float");if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null;}else 2===d?f.push(e):f=e;}function N(e){if(isNaN(e))return S("cannot parse integer");if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null;}else 2===d?f.push(e):f=e;}function T(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null;}else 2===d?f.push(e):f=e;}function x(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null;}else 2===d?f.push(e):f=e;}function G(e){if(1===d){if(null===_)return S("missing <key>");f[_]=e,_=null;}else 2===d?f.push(e):f=e;}function E(){let e=p(">"),t=!1;return 47===e.charCodeAt(e.length-1)&&(t=!0,e=e.substring(0,e.length-1)),{name:e.trim(),isClosed:t}}function L(e){if(e.isClosed)return "";let t=p("</");return h(">"),t.replace(/&#([0-9]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,10))})).replace(/&#x([0-9a-f]+);/g,(function(e,t){return String.fromCodePoint(parseInt(t,16))})).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g,(function(e){switch(e){case"&amp;":return "&";case"&lt;":return "<";case"&gt;":return ">";case"&quot;":return '"';case"&apos;":return "'"}return e}))}for(;r<s&&(l(),!(r>=s));){const a=e.charCodeAt(r);if(c(1),60!==a)return S("expected <");if(r>=s)return S("unexpected end of input");const p=e.charCodeAt(r);if(63===p){c(1),h("?>");continue}if(33===p){if(c(1),u("--")){h("--\x3e");continue}h(">");continue}if(47===p){if(c(1),l(),u("plist")){h(">");continue}if(u("dict")){h(">"),w();continue}if(u("array")){h(">"),P();continue}return S("unexpected closed tag")}let g=E();switch(g.name){case"dict":1===d?k():2===d?R():(f={},null!==n&&(f[n]={filename:t,line:i,char:o}),b(1,f)),g.isClosed&&w();continue;case"array":1===d?C():2===d?A():(f=[],b(2,f)),g.isClosed&&P();continue;case"key":M=L(g),1!==d?S("unexpected <key>"):null!==_?S("too many <key>"):_=M;continue;case"string":I(L(g));continue;case"real":v(parseFloat(L(g)));continue;case"integer":N(parseInt(L(g),10));continue;case"date":T(new Date(L(g)));continue;case"data":x(L(g));continue;case"true":L(g),G(!0);continue;case"false":L(g),G(!1);continue}if(!/^plist/.test(g.name))return S("unexpected opened tag "+g.name)}var M;return f}Object.defineProperty(t,"__esModule",{value:!0}),t.parsePLIST=t.parseWithLocation=void 0,t.parseWithLocation=function(e,t,s){return n(e,t,s)},t.parsePLIST=function(e){return n(e,null,null)};},652:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SyncRegistry=void 0;const s=n(391);t.SyncRegistry=class{constructor(e,t){this._onigLibPromise=t,this._grammars=new Map,this._rawGrammars=new Map,this._injectionGrammars=new Map,this._theme=e;}dispose(){for(const e of this._grammars.values())e.dispose();}setTheme(e){this._theme=e;}getColorMap(){return this._theme.getColorMap()}addGrammar(e,t){this._rawGrammars.set(e.scopeName,e),t&&this._injectionGrammars.set(e.scopeName,t);}lookup(e){return this._rawGrammars.get(e)}injections(e){return this._injectionGrammars.get(e)}getDefaults(){return this._theme.getDefaults()}themeMatch(e){return this._theme.match(e)}async grammarForScopeName(e,t,n,r,i){if(!this._grammars.has(e)){let o=this._rawGrammars.get(e);if(!o)return null;this._grammars.set(e,s.createGrammar(e,o,t,n,r,i,this,await this._onigLibPromise));}return this._grammars.get(e)}};},792:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CompiledRule=t.RegExpSourceList=t.RegExpSource=t.RuleFactory=t.BeginWhileRule=t.BeginEndRule=t.IncludeOnlyRule=t.MatchRule=t.CaptureRule=t.Rule=t.ruleIdToNumber=t.ruleIdFromNumber=t.whileRuleId=t.endRuleId=void 0;const s=n(878),r=n(965),i=/\\(\d+)/,o=/\\(\d+)/g;t.endRuleId=-1,t.whileRuleId=-2,t.ruleIdFromNumber=function(e){return e},t.ruleIdToNumber=function(e){return e};class c{constructor(e,t,n,r){this.$location=e,this.id=t,this._name=n||null,this._nameIsCapturing=s.RegexSource.hasCaptures(this._name),this._contentName=r||null,this._contentNameIsCapturing=s.RegexSource.hasCaptures(this._contentName);}get debugName(){const e=this.$location?`${s.basename(this.$location.filename)}:${this.$location.line}`:"unknown";return `${this.constructor.name}#${this.id} @ ${e}`}getName(e,t){return this._nameIsCapturing&&null!==this._name&&null!==e&&null!==t?s.RegexSource.replaceCaptures(this._name,e,t):this._name}getContentName(e,t){return this._contentNameIsCapturing&&null!==this._contentName?s.RegexSource.replaceCaptures(this._contentName,e,t):this._contentName}}t.Rule=c;class a extends c{constructor(e,t,n,s,r){super(e,t,n,s),this.retokenizeCapturedWithRuleId=r;}dispose(){}collectPatterns(e,t){throw new Error("Not supported!")}compile(e,t){throw new Error("Not supported!")}compileAG(e,t,n,s){throw new Error("Not supported!")}}t.CaptureRule=a;class l extends c{constructor(e,t,n,s,r){super(e,t,n,null),this._match=new f(s,this.id),this.captures=r,this._cachedCompiledPatterns=null;}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);}get debugMatchRegExp(){return `${this._match.source}`}collectPatterns(e,t){t.push(this._match);}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e).compileAG(e,n,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new g,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}t.MatchRule=l;class u extends c{constructor(e,t,n,s,r){super(e,t,n,s),this.patterns=r.patterns,this.hasMissingPatterns=r.hasMissingPatterns,this._cachedCompiledPatterns=null;}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);}collectPatterns(e,t){for(const n of this.patterns)e.getRule(n).collectPatterns(e,t);}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e).compileAG(e,n,s)}_getCachedCompiledPatterns(e){return this._cachedCompiledPatterns||(this._cachedCompiledPatterns=new g,this.collectPatterns(e,this._cachedCompiledPatterns)),this._cachedCompiledPatterns}}t.IncludeOnlyRule=u;class h extends c{constructor(e,t,n,s,r,i,o,c,a,l){super(e,t,n,s),this._begin=new f(r,this.id),this.beginCaptures=i,this._end=new f(o||"￿",-1),this.endHasBackReferences=this._end.hasBackReferences,this.endCaptures=c,this.applyEndPatternLast=a||!1,this.patterns=l.patterns,this.hasMissingPatterns=l.hasMissingPatterns,this._cachedCompiledPatterns=null;}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null);}get debugBeginRegExp(){return `${this._begin.source}`}get debugEndRegExp(){return `${this._end.source}`}getEndWithResolvedBackReferences(e,t){return this._end.resolveBackReferences(e,t)}collectPatterns(e,t){t.push(this._begin);}compile(e,t){return this._getCachedCompiledPatterns(e,t).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e,t).compileAG(e,n,s)}_getCachedCompiledPatterns(e,t){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new g;for(const t of this.patterns)e.getRule(t).collectPatterns(e,this._cachedCompiledPatterns);this.applyEndPatternLast?this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end):this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end);}return this._end.hasBackReferences&&(this.applyEndPatternLast?this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,t):this._cachedCompiledPatterns.setSource(0,t)),this._cachedCompiledPatterns}}t.BeginEndRule=h;class p extends c{constructor(e,n,s,r,i,o,c,a,l){super(e,n,s,r),this._begin=new f(i,this.id),this.beginCaptures=o,this.whileCaptures=a,this._while=new f(c,t.whileRuleId),this.whileHasBackReferences=this._while.hasBackReferences,this.patterns=l.patterns,this.hasMissingPatterns=l.hasMissingPatterns,this._cachedCompiledPatterns=null,this._cachedCompiledWhilePatterns=null;}dispose(){this._cachedCompiledPatterns&&(this._cachedCompiledPatterns.dispose(),this._cachedCompiledPatterns=null),this._cachedCompiledWhilePatterns&&(this._cachedCompiledWhilePatterns.dispose(),this._cachedCompiledWhilePatterns=null);}get debugBeginRegExp(){return `${this._begin.source}`}get debugWhileRegExp(){return `${this._while.source}`}getWhileWithResolvedBackReferences(e,t){return this._while.resolveBackReferences(e,t)}collectPatterns(e,t){t.push(this._begin);}compile(e,t){return this._getCachedCompiledPatterns(e).compile(e)}compileAG(e,t,n,s){return this._getCachedCompiledPatterns(e).compileAG(e,n,s)}_getCachedCompiledPatterns(e){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new g;for(const t of this.patterns)e.getRule(t).collectPatterns(e,this._cachedCompiledPatterns);}return this._cachedCompiledPatterns}compileWhile(e,t){return this._getCachedCompiledWhilePatterns(e,t).compile(e)}compileWhileAG(e,t,n,s){return this._getCachedCompiledWhilePatterns(e,t).compileAG(e,n,s)}_getCachedCompiledWhilePatterns(e,t){return this._cachedCompiledWhilePatterns||(this._cachedCompiledWhilePatterns=new g,this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while)),this._while.hasBackReferences&&this._cachedCompiledWhilePatterns.setSource(0,t||"￿"),this._cachedCompiledWhilePatterns}}t.BeginWhileRule=p;class d{static createCaptureRule(e,t,n,s,r){return e.registerRule((e=>new a(t,e,n,s,r)))}static getCompiledRuleId(e,t,n){return e.id||t.registerRule((r=>{if(e.id=r,e.match)return new l(e.$vscodeTextmateLocation,e.id,e.name,e.match,d._compileCaptures(e.captures,t,n));if(void 0===e.begin){e.repository&&(n=s.mergeObjects({},n,e.repository));let r=e.patterns;return void 0===r&&e.include&&(r=[{include:e.include}]),new u(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,d._compilePatterns(r,t,n))}return e.while?new p(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,d._compileCaptures(e.beginCaptures||e.captures,t,n),e.while,d._compileCaptures(e.whileCaptures||e.captures,t,n),d._compilePatterns(e.patterns,t,n)):new h(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,d._compileCaptures(e.beginCaptures||e.captures,t,n),e.end,d._compileCaptures(e.endCaptures||e.captures,t,n),e.applyEndPatternLast,d._compilePatterns(e.patterns,t,n))})),e.id}static _compileCaptures(e,t,n){let s=[];if(e){let r=0;for(const t in e){if("$vscodeTextmateLocation"===t)continue;const e=parseInt(t,10);e>r&&(r=e);}for(let e=0;e<=r;e++)s[e]=null;for(const r in e){if("$vscodeTextmateLocation"===r)continue;const i=parseInt(r,10);let o=0;e[r].patterns&&(o=d.getCompiledRuleId(e[r],t,n)),s[i]=d.createCaptureRule(t,e[r].$vscodeTextmateLocation,e[r].name,e[r].contentName,o);}}return s}static _compilePatterns(e,t,n){let s=[];if(e)for(let i=0,o=e.length;i<o;i++){const o=e[i];let c=-1;if(o.include){const e=r.parseInclude(o.include);switch(e.kind){case 0:case 1:c=d.getCompiledRuleId(n[o.include],t,n);break;case 2:let s=n[e.ruleName];s&&(c=d.getCompiledRuleId(s,t,n));break;case 3:case 4:const r=e.scopeName,i=4===e.kind?e.ruleName:null,a=t.getExternalGrammar(r,n);if(a)if(i){let e=a.repository[i];e&&(c=d.getCompiledRuleId(e,t,a.repository));}else c=d.getCompiledRuleId(a.repository.$self,t,a.repository);}}else c=d.getCompiledRuleId(o,t,n);if(-1!==c){const e=t.getRule(c);let n=!1;if((e instanceof u||e instanceof h||e instanceof p)&&e.hasMissingPatterns&&0===e.patterns.length&&(n=!0),n)continue;s.push(c);}}return {patterns:s,hasMissingPatterns:(e?e.length:0)!==s.length}}}t.RuleFactory=d;class f{constructor(e,t){if(e){const t=e.length;let n=0,s=[],r=!1;for(let i=0;i<t;i++)if("\\"===e.charAt(i)&&i+1<t){const t=e.charAt(i+1);"z"===t?(s.push(e.substring(n,i)),s.push("$(?!\\n)(?<!\\n)"),n=i+2):"A"!==t&&"G"!==t||(r=!0),i++;}this.hasAnchor=r,0===n?this.source=e:(s.push(e.substring(n,t)),this.source=s.join(""));}else this.hasAnchor=!1,this.source=e;this.hasAnchor?this._anchorCache=this._buildAnchorCache():this._anchorCache=null,this.ruleId=t,this.hasBackReferences=i.test(this.source);}clone(){return new f(this.source,this.ruleId)}setSource(e){this.source!==e&&(this.source=e,this.hasAnchor&&(this._anchorCache=this._buildAnchorCache()));}resolveBackReferences(e,t){let n=t.map((t=>e.substring(t.start,t.end)));return o.lastIndex=0,this.source.replace(o,((e,t)=>s.escapeRegExpCharacters(n[parseInt(t,10)]||"")))}_buildAnchorCache(){let e,t,n,s,r=[],i=[],o=[],c=[];for(e=0,t=this.source.length;e<t;e++)n=this.source.charAt(e),r[e]=n,i[e]=n,o[e]=n,c[e]=n,"\\"===n&&e+1<t&&(s=this.source.charAt(e+1),"A"===s?(r[e+1]="￿",i[e+1]="￿",o[e+1]="A",c[e+1]="A"):"G"===s?(r[e+1]="￿",i[e+1]="G",o[e+1]="￿",c[e+1]="G"):(r[e+1]=s,i[e+1]=s,o[e+1]=s,c[e+1]=s),e++);return {A0_G0:r.join(""),A0_G1:i.join(""),A1_G0:o.join(""),A1_G1:c.join("")}}resolveAnchors(e,t){return this.hasAnchor&&this._anchorCache?e?t?this._anchorCache.A1_G1:this._anchorCache.A1_G0:t?this._anchorCache.A0_G1:this._anchorCache.A0_G0:this.source}}t.RegExpSource=f;class g{constructor(){this._items=[],this._hasAnchors=!1,this._cached=null,this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null};}dispose(){this._disposeCaches();}_disposeCaches(){this._cached&&(this._cached.dispose(),this._cached=null),this._anchorCache.A0_G0&&(this._anchorCache.A0_G0.dispose(),this._anchorCache.A0_G0=null),this._anchorCache.A0_G1&&(this._anchorCache.A0_G1.dispose(),this._anchorCache.A0_G1=null),this._anchorCache.A1_G0&&(this._anchorCache.A1_G0.dispose(),this._anchorCache.A1_G0=null),this._anchorCache.A1_G1&&(this._anchorCache.A1_G1.dispose(),this._anchorCache.A1_G1=null);}push(e){this._items.push(e),this._hasAnchors=this._hasAnchors||e.hasAnchor;}unshift(e){this._items.unshift(e),this._hasAnchors=this._hasAnchors||e.hasAnchor;}length(){return this._items.length}setSource(e,t){this._items[e].source!==t&&(this._disposeCaches(),this._items[e].setSource(t));}compile(e){if(!this._cached){let t=this._items.map((e=>e.source));this._cached=new m(e,t,this._items.map((e=>e.ruleId)));}return this._cached}compileAG(e,t,n){return this._hasAnchors?t?n?(this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G1):(this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A1_G0):n?(this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G1):(this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(e,t,n)),this._anchorCache.A0_G0):this.compile(e)}_resolveAnchors(e,t,n){let s=this._items.map((e=>e.resolveAnchors(t,n)));return new m(e,s,this._items.map((e=>e.ruleId)))}}t.RegExpSourceList=g;class m{constructor(e,t,n){this.regExps=t,this.rules=n,this.scanner=e.createOnigScanner(t);}dispose(){"function"==typeof this.scanner.dispose&&this.scanner.dispose();}toString(){const e=[];for(let t=0,n=this.rules.length;t<n;t++)e.push("   - "+this.rules[t]+": "+this.regExps[t]);return e.join("\n")}findNextMatchSync(e,t,n){const s=this.scanner.findNextMatchSync(e,t,n);return s?{ruleId:this.rules[s.index],captureIndices:s.captureIndices}:null}}t.CompiledRule=m;},583:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeTrieElement=t.ThemeTrieElementRule=t.ColorMap=t.fontStyleToString=t.ParsedThemeRule=t.parseTheme=t.StyleAttributes=t.ScopeStack=t.Theme=void 0;const s=n(878);class r{constructor(e,t,n){this._colorMap=e,this._defaults=t,this._root=n,this._cachedMatchRoot=new s.CachedFn((e=>this._root.match(e)));}static createFromRawTheme(e,t){return this.createFromParsedTheme(a(e),t)}static createFromParsedTheme(e,t){return function(e,t){e.sort(((e,t)=>{let n=s.strcmp(e.scope,t.scope);return 0!==n?n:(n=s.strArrCmp(e.parentScopes,t.parentScopes),0!==n?n:e.index-t.index)}));let n=0,i="#000000",o="#ffffff";for(;e.length>=1&&""===e[0].scope;){let t=e.shift();-1!==t.fontStyle&&(n=t.fontStyle),null!==t.foreground&&(i=t.foreground),null!==t.background&&(o=t.background);}let a=new u(t),l=new c(n,a.getId(i),a.getId(o)),d=new p(new h(0,null,-1,0,0),[]);for(let t=0,n=e.length;t<n;t++){let n=e[t];d.insert(0,n.scope,n.parentScopes,n.fontStyle,a.getId(n.foreground),a.getId(n.background));}return new r(a,l,d)}(e,t)}getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(e){if(null===e)return this._defaults;const t=e.scopeName,n=this._cachedMatchRoot.get(t).find((t=>function(e,t){if(null===t)return !0;let n=0,s=t[n];for(;e;){if(o(e.scopeName,s)){if(n++,n===t.length)return !0;s=t[n];}e=e.parent;}return !1}(e.parent,t.parentScopes)));return n?new c(n.fontStyle,n.foreground,n.background):null}}t.Theme=r;class i{constructor(e,t){this.parent=e,this.scopeName=t;}static from(...e){let t=null;for(let n=0;n<e.length;n++)t=new i(t,e[n]);return t}push(e){return new i(this,e)}getSegments(){let e=this;const t=[];for(;e;)t.push(e.scopeName),e=e.parent;return t.reverse(),t}toString(){return this.getSegments().join(" ")}}function o(e,t){return t===e||e.startsWith(t)&&"."===e[t.length]}t.ScopeStack=i;class c{constructor(e,t,n){this.fontStyle=e,this.foregroundId=t,this.backgroundId=n;}}function a(e){if(!e)return [];if(!e.settings||!Array.isArray(e.settings))return [];let t=e.settings,n=[],r=0;for(let e=0,i=t.length;e<i;e++){let i,o=t[e];if(!o.settings)continue;if("string"==typeof o.scope){let e=o.scope;e=e.replace(/^[,]+/,""),e=e.replace(/[,]+$/,""),i=e.split(",");}else i=Array.isArray(o.scope)?o.scope:[""];let c=-1;if("string"==typeof o.settings.fontStyle){c=0;let e=o.settings.fontStyle.split(" ");for(let t=0,n=e.length;t<n;t++)switch(e[t]){case"italic":c|=1;break;case"bold":c|=2;break;case"underline":c|=4;break;case"strikethrough":c|=8;}}let a=null;"string"==typeof o.settings.foreground&&s.isValidHexColor(o.settings.foreground)&&(a=o.settings.foreground);let u=null;"string"==typeof o.settings.background&&s.isValidHexColor(o.settings.background)&&(u=o.settings.background);for(let t=0,s=i.length;t<s;t++){let s=i[t].trim().split(" "),o=s[s.length-1],h=null;s.length>1&&(h=s.slice(0,s.length-1),h.reverse()),n[r++]=new l(o,h,e,c,a,u);}}return n}t.StyleAttributes=c,t.parseTheme=a;class l{constructor(e,t,n,s,r,i){this.scope=e,this.parentScopes=t,this.index=n,this.fontStyle=s,this.foreground=r,this.background=i;}}t.ParsedThemeRule=l,t.fontStyleToString=function(e){if(-1===e)return "not set";let t="";return 1&e&&(t+="italic "),2&e&&(t+="bold "),4&e&&(t+="underline "),8&e&&(t+="strikethrough "),""===t&&(t="none"),t.trim()};class u{constructor(e){if(this._lastColorId=0,this._id2color=[],this._color2id=Object.create(null),Array.isArray(e)){this._isFrozen=!0;for(let t=0,n=e.length;t<n;t++)this._color2id[e[t]]=t,this._id2color[t]=e[t];}else this._isFrozen=!1;}getId(e){if(null===e)return 0;e=e.toUpperCase();let t=this._color2id[e];if(t)return t;if(this._isFrozen)throw new Error(`Missing color in color map - ${e}`);return t=++this._lastColorId,this._color2id[e]=t,this._id2color[t]=e,t}getColorMap(){return this._id2color.slice(0)}}t.ColorMap=u;class h{constructor(e,t,n,s,r){this.scopeDepth=e,this.parentScopes=t,this.fontStyle=n,this.foreground=s,this.background=r;}clone(){return new h(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(e){let t=[];for(let n=0,s=e.length;n<s;n++)t[n]=e[n].clone();return t}acceptOverwrite(e,t,n,s){this.scopeDepth>e?console.log("how did this happen?"):this.scopeDepth=e,-1!==t&&(this.fontStyle=t),0!==n&&(this.foreground=n),0!==s&&(this.background=s);}}t.ThemeTrieElementRule=h;class p{constructor(e,t=[],n={}){this._mainRule=e,this._children=n,this._rulesWithParentScopes=t;}static _sortBySpecificity(e){return 1===e.length||e.sort(this._cmpBySpecificity),e}static _cmpBySpecificity(e,t){if(e.scopeDepth===t.scopeDepth){const n=e.parentScopes,s=t.parentScopes;let r=null===n?0:n.length,i=null===s?0:s.length;if(r===i)for(let e=0;e<r;e++){const t=n[e].length,r=s[e].length;if(t!==r)return r-t}return i-r}return t.scopeDepth-e.scopeDepth}match(e){if(""===e)return p._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));let t,n,s=e.indexOf(".");return -1===s?(t=e,n=""):(t=e.substring(0,s),n=e.substring(s+1)),this._children.hasOwnProperty(t)?this._children[t].match(n):p._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes))}insert(e,t,n,s,r,i){if(""===t)return void this._doInsertHere(e,n,s,r,i);let o,c,a,l=t.indexOf(".");-1===l?(o=t,c=""):(o=t.substring(0,l),c=t.substring(l+1)),this._children.hasOwnProperty(o)?a=this._children[o]:(a=new p(this._mainRule.clone(),h.cloneArr(this._rulesWithParentScopes)),this._children[o]=a),a.insert(e+1,c,n,s,r,i);}_doInsertHere(e,t,n,r,i){if(null!==t){for(let o=0,c=this._rulesWithParentScopes.length;o<c;o++){let c=this._rulesWithParentScopes[o];if(0===s.strArrCmp(c.parentScopes,t))return void c.acceptOverwrite(e,n,r,i)}-1===n&&(n=this._mainRule.fontStyle),0===r&&(r=this._mainRule.foreground),0===i&&(i=this._mainRule.background),this._rulesWithParentScopes.push(new h(e,t,n,r,i));}else this._mainRule.acceptOverwrite(e,n,r,i);}}t.ThemeTrieElement=p;},878:(e,t)=>{function n(e){return Array.isArray(e)?function(e){let t=[];for(let s=0,r=e.length;s<r;s++)t[s]=n(e[s]);return t}(e):"object"==typeof e?function(e){let t={};for(let s in e)t[s]=n(e[s]);return t}(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.performanceNow=t.CachedFn=t.escapeRegExpCharacters=t.isValidHexColor=t.strArrCmp=t.strcmp=t.RegexSource=t.basename=t.mergeObjects=t.clone=void 0,t.clone=function(e){return n(e)},t.mergeObjects=function(e,...t){return t.forEach((t=>{for(let n in t)e[n]=t[n];})),e},t.basename=function e(t){const n=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return 0===n?t:~n==t.length-1?e(t.substring(0,t.length-1)):t.substr(1+~n)};let s=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;function r(e,t){return e<t?-1:e>t?1:0}t.RegexSource=class{static hasCaptures(e){return null!==e&&(s.lastIndex=0,s.test(e))}static replaceCaptures(e,t,n){return e.replace(s,((e,s,r,i)=>{let o=n[parseInt(s||r,10)];if(!o)return e;{let e=t.substring(o.start,o.end);for(;"."===e[0];)e=e.substring(1);switch(i){case"downcase":return e.toLowerCase();case"upcase":return e.toUpperCase();default:return e}}}))}},t.strcmp=r,t.strArrCmp=function(e,t){if(null===e&&null===t)return 0;if(!e)return -1;if(!t)return 1;let n=e.length,s=t.length;if(n===s){for(let s=0;s<n;s++){let n=r(e[s],t[s]);if(0!==n)return n}return 0}return n-s},t.isValidHexColor=function(e){return !!(/^#[0-9a-f]{6}$/i.test(e)||/^#[0-9a-f]{8}$/i.test(e)||/^#[0-9a-f]{3}$/i.test(e)||/^#[0-9a-f]{4}$/i.test(e))},t.escapeRegExpCharacters=function(e){return e.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&")},t.CachedFn=class{constructor(e){this.fn=e,this.cache=new Map;}get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.fn(e);return this.cache.set(e,t),t}},t.performanceNow="undefined"==typeof performance?function(){return Date.now()}:function(){return performance.now()};}},t={};return function n(s){var r=t[s];if(void 0!==r)return r.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}(787)})()}));
	
} (main$1));

var mainExports$1 = main$1.exports;

function tokenizeWithTheme(theme, colorMap, fileContents, grammar, options) {
  let lines = fileContents.split(/\r\n|\r|\n/);
  let ruleStack = mainExports$1.INITIAL;
  let actual = [];
  let final = [];
  for (let i = 0, len = lines.length; i < len; i++) {
    let line = lines[i];
    if (line === "") {
      actual = [];
      final.push([]);
      continue;
    }
    let resultWithScopes;
    let tokensWithScopes;
    let tokensWithScopesIndex;
    if (options.includeExplanation) {
      resultWithScopes = grammar.tokenizeLine(line, ruleStack);
      tokensWithScopes = resultWithScopes.tokens;
      tokensWithScopesIndex = 0;
    }
    let result = grammar.tokenizeLine2(line, ruleStack);
    let tokensLength = result.tokens.length / 2;
    for (let j = 0; j < tokensLength; j++) {
      let startIndex = result.tokens[2 * j];
      let nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
      if (startIndex === nextStartIndex) {
        continue;
      }
      let metadata = result.tokens[2 * j + 1];
      let foreground = StackElementMetadata.getForeground(metadata);
      let foregroundColor = colorMap[foreground];
      let fontStyle = StackElementMetadata.getFontStyle(metadata);
      let explanation = [];
      if (options.includeExplanation) {
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          let tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          let tokenWithScopesText = line.substring(
            tokenWithScopes.startIndex,
            tokenWithScopes.endIndex
          );
          offset += tokenWithScopesText.length;
          explanation.push({
            content: tokenWithScopesText,
            scopes: explainThemeScopes(theme, tokenWithScopes.scopes)
          });
          tokensWithScopesIndex++;
        }
      }
      actual.push({
        content: line.substring(startIndex, nextStartIndex),
        color: foregroundColor,
        fontStyle,
        explanation
      });
    }
    final.push(actual);
    actual = [];
    ruleStack = result.ruleStack;
  }
  return final;
}
function explainThemeScopes(theme, scopes) {
  let result = [];
  for (let i = 0, len = scopes.length; i < len; i++) {
    let parentScopes = scopes.slice(0, i);
    let scope = scopes[i];
    result[i] = {
      scopeName: scope,
      themeMatches: explainThemeScope(theme, scope, parentScopes)
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  let selectorPrefix = selector + ".";
  if (selector === scope || scope.substring(0, selectorPrefix.length) === selectorPrefix) {
    return true;
  }
  return false;
}
function matches(selector, selectorParentScopes, scope, parentScopes) {
  if (!matchesOne(selector, scope)) {
    return false;
  }
  let selectorParentIndex = selectorParentScopes.length - 1;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectorParentScopes[selectorParentIndex], parentScopes[parentIndex])) {
      selectorParentIndex--;
    }
    parentIndex--;
  }
  if (selectorParentIndex === -1) {
    return true;
  }
  return false;
}
function explainThemeScope(theme, scope, parentScopes) {
  let result = [], resultLen = 0;
  for (let i = 0, len = theme.settings.length; i < len; i++) {
    let setting = theme.settings[i];
    let selectors;
    if (typeof setting.scope === "string") {
      selectors = setting.scope.split(/,/).map((scope2) => scope2.trim());
    } else if (Array.isArray(setting.scope)) {
      selectors = setting.scope;
    } else {
      continue;
    }
    for (let j = 0, lenJ = selectors.length; j < lenJ; j++) {
      let rawSelector = selectors[j];
      let rawSelectorPieces = rawSelector.split(/ /);
      let selector = rawSelectorPieces[rawSelectorPieces.length - 1];
      let selectorParentScopes = rawSelectorPieces.slice(0, rawSelectorPieces.length - 1);
      if (matches(selector, selectorParentScopes, scope, parentScopes)) {
        result[resultLen++] = setting;
        j = lenJ;
      }
    }
  }
  return result;
}

// src/colors.ts
var namedColors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];

// src/decorations.ts
var decorations = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  9: "strikethrough"
};

// src/parser.ts
function findSequence(value, position) {
  const nextEscape = value.indexOf("\x1B", position);
  if (nextEscape !== -1) {
    if (value[nextEscape + 1] === "[") {
      const nextClose = value.indexOf("m", nextEscape);
      return {
        sequence: value.substring(nextEscape + 2, nextClose).split(";"),
        startPosition: nextEscape,
        position: nextClose + 1
      };
    }
  }
  return {
    position: value.length
  };
}
function parseColor(sequence) {
  const colorMode = sequence.shift();
  if (colorMode === "2") {
    const rgb = sequence.splice(0, 3).map((x) => Number.parseInt(x));
    if (rgb.length !== 3 || rgb.some((x) => Number.isNaN(x)))
      return;
    return {
      type: "rgb",
      rgb
    };
  } else if (colorMode === "5") {
    const index = sequence.shift();
    if (index) {
      return { type: "table", index: Number(index) };
    }
  }
}
function parseSequence(sequence) {
  const commands = [];
  while (sequence.length > 0) {
    const code = sequence.shift();
    if (!code)
      continue;
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt))
      continue;
    if (codeInt === 0) {
      commands.push({ type: "resetAll" });
    } else if (codeInt <= 9) {
      const decoration = decorations[codeInt];
      if (decoration) {
        commands.push({
          type: "setDecoration",
          value: decorations[codeInt]
        });
      }
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
      }
    } else if (codeInt <= 37) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 30] }
      });
    } else if (codeInt === 38) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setForegroundColor",
          value: color
        });
      }
    } else if (codeInt === 39) {
      commands.push({
        type: "resetForegroundColor"
      });
    } else if (codeInt <= 47) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 40] }
      });
    } else if (codeInt === 48) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setBackgroundColor",
          value: color
        });
      }
    } else if (codeInt === 49) {
      commands.push({
        type: "resetBackgroundColor"
      });
    } else if (codeInt >= 90 && codeInt <= 97) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 90 + 8] }
      });
    } else if (codeInt >= 100 && codeInt <= 107) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 100 + 8] }
      });
    }
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return {
    parse(value) {
      const tokens = [];
      let position = 0;
      do {
        const findResult = findSequence(value, position);
        const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
        if (text.length > 0) {
          tokens.push({
            value: text,
            foreground,
            background,
            decorations: new Set(decorations2)
          });
        }
        if (findResult.sequence) {
          const commands = parseSequence(findResult.sequence);
          for (const styleToken of commands) {
            if (styleToken.type === "resetAll") {
              foreground = null;
              background = null;
              decorations2.clear();
            } else if (styleToken.type === "resetForegroundColor") {
              foreground = null;
            } else if (styleToken.type === "resetBackgroundColor") {
              background = null;
            } else if (styleToken.type === "resetDecoration") {
              decorations2.delete(styleToken.value);
            }
          }
          for (const styleToken of commands) {
            if (styleToken.type === "setForegroundColor") {
              foreground = styleToken.value;
            } else if (styleToken.type === "setBackgroundColor") {
              background = styleToken.value;
            } else if (styleToken.type === "setDecoration") {
              decorations2.add(styleToken.value);
            }
          }
        }
        position = findResult.position;
      } while (position < value.length);
      return tokens;
    }
  };
}

// src/palette.ts
var defaultNamedColorsMap = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
  function namedColor(name) {
    return namedColorsMap[name];
  }
  function rgbColor(rgb) {
    return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) {
      return colorTable;
    }
    colorTable = [];
    for (let i = 0; i < namedColors.length; i++) {
      colorTable.push(namedColor(namedColors[i]));
    }
    let levels = [0, 95, 135, 175, 215, 255];
    for (let r = 0; r < 6; r++) {
      for (let g = 0; g < 6; g++) {
        for (let b = 0; b < 6; b++) {
          colorTable.push(rgbColor([levels[r], levels[g], levels[b]]));
        }
      }
    }
    let level = 8;
    for (let i = 0; i < 24; i++, level += 10) {
      colorTable.push(rgbColor([level, level, level]));
    }
    return colorTable;
  }
  function tableColor(index) {
    return getColorTable()[index];
  }
  function value(color) {
    switch (color.type) {
      case "named":
        return namedColor(color.name);
      case "rgb":
        return rgbColor(color.rgb);
      case "table":
        return tableColor(color.index);
    }
  }
  return {
    value
  };
}

function tokenizeAnsiWithTheme(theme, fileContents) {
  const lines = fileContents.split(/\r?\n/);
  const colorPalette = createColorPalette(
    Object.fromEntries(
      namedColors.map((name) => [
        name,
        theme.colors[`terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`]
      ])
    )
  );
  const parser = createAnsiSequenceParser();
  return lines.map(
    (line) => parser.parse(line).map((token) => {
      let color;
      if (token.decorations.has("reverse")) {
        color = token.background ? colorPalette.value(token.background) : theme.bg;
      } else {
        color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
      }
      if (token.decorations.has("dim")) {
        color = dimColor(color);
      }
      let fontStyle = FontStyle.None;
      if (token.decorations.has("bold")) {
        fontStyle |= FontStyle.Bold;
      }
      if (token.decorations.has("italic")) {
        fontStyle |= FontStyle.Italic;
      }
      if (token.decorations.has("underline")) {
        fontStyle |= FontStyle.Underline;
      }
      return {
        content: token.value,
        color,
        fontStyle
      };
    })
  );
}
function dimColor(color) {
  const hexMatch = color.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (hexMatch) {
    if (hexMatch[3]) {
      const alpha = Math.round(Number.parseInt(hexMatch[3], 16) / 2).toString(16).padStart(2, "0");
      return `#${hexMatch[1]}${hexMatch[2]}${alpha}`;
    } else if (hexMatch[2]) {
      return `#${hexMatch[1]}${hexMatch[2]}80`;
    } else {
      return `#${Array.from(hexMatch[1]).map((x) => `${x}${x}`).join("")}80`;
    }
  }
  const cssVarMatch = color.match(/var\((--shiki-color-ansi-[\w-]+)\)/);
  if (cssVarMatch) {
    return `var(${cssVarMatch[1]}-dim)`;
  }
  return color;
}

function groupBy(elements, keyGetter) {
  const map = /* @__PURE__ */ new Map();
  for (const element of elements) {
    const key = keyGetter(element);
    if (map.has(key)) {
      const group = map.get(key);
      group.push(element);
    } else {
      map.set(key, [element]);
    }
  }
  return map;
}

const defaultElements = {
  pre({ className, style, children }) {
    return `<pre class="${className}" style="${style}" tabindex="0">${children}</pre>`;
  },
  code({ children }) {
    return `<code>${children}</code>`;
  },
  line({ className, children }) {
    return `<span class="${className}">${children}</span>`;
  },
  token({ style, children }) {
    return `<span style="${style}">${children}</span>`;
  }
};
function renderToHtml(lines, options = {}) {
  const bg = options.bg || "#fff";
  const optionsByLineNumber = groupBy(options.lineOptions ?? [], (option) => option.line);
  const userElements = options.elements || {};
  function h(type = "", props = {}, children) {
    const element = userElements[type] || defaultElements[type];
    if (element) {
      children = children.filter(Boolean);
      return element({
        ...props,
        children: type === "code" ? children.join("\n") : children.join("")
      });
    }
    return "";
  }
  return h(
    "pre",
    { className: "shiki " + (options.themeName || ""), style: `background-color: ${bg}` },
    [
      options.langId ? `<div class="language-id">${options.langId}</div>` : "",
      h(
        "code",
        {},
        lines.map((line, index) => {
          const lineNumber = index + 1;
          const lineOptions = optionsByLineNumber.get(lineNumber) ?? [];
          const lineClasses = getLineClasses(lineOptions).join(" ");
          return h(
            "line",
            {
              className: lineClasses,
              lines,
              line,
              index
            },
            line.map((token, index2) => {
              const cssDeclarations = [`color: ${token.color || options.fg}`];
              if (token.fontStyle & FontStyle.Italic) {
                cssDeclarations.push("font-style: italic");
              }
              if (token.fontStyle & FontStyle.Bold) {
                cssDeclarations.push("font-weight: bold");
              }
              if (token.fontStyle & FontStyle.Underline) {
                cssDeclarations.push("text-decoration: underline");
              }
              return h(
                "token",
                {
                  style: cssDeclarations.join("; "),
                  tokens: line,
                  token,
                  index: index2
                },
                [escapeHtml(token.content)]
              );
            })
          );
        })
      )
    ]
  );
}
const htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function escapeHtml(html) {
  return html.replace(/[&<>"']/g, (chr) => htmlEscapes[chr]);
}
function getLineClasses(lineOptions) {
  const lineClasses = /* @__PURE__ */ new Set(["line"]);
  for (const lineOption of lineOptions) {
    for (const lineClass of lineOption.classes ?? []) {
      lineClasses.add(lineClass);
    }
  }
  return Array.from(lineClasses);
}

var main = {exports: {}};

(function (module, exports) {
	!function(t,n){module.exports=n();}(commonjsGlobal,(()=>{return t={770:function(t,n,e){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.setDefaultDebugCall=n.createOnigScanner=n.createOnigString=n.loadWASM=n.OnigScanner=n.OnigString=void 0;const i=r(e(418));let o=null,a=!1;class f{static _utf8ByteLength(t){let n=0;for(let e=0,r=t.length;e<r;e++){const i=t.charCodeAt(e);let o=i,a=!1;if(i>=55296&&i<=56319&&e+1<r){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(o=65536+(i-55296<<10)|n-56320,a=!0);}n+=o<=127?1:o<=2047?2:o<=65535?3:4,a&&e++;}return n}constructor(t){const n=t.length,e=f._utf8ByteLength(t),r=e!==n,i=r?new Uint32Array(n+1):null;r&&(i[n]=e);const o=r?new Uint32Array(e+1):null;r&&(o[e]=n);const a=new Uint8Array(e);let s=0;for(let e=0;e<n;e++){const f=t.charCodeAt(e);let u=f,c=!1;if(f>=55296&&f<=56319&&e+1<n){const n=t.charCodeAt(e+1);n>=56320&&n<=57343&&(u=65536+(f-55296<<10)|n-56320,c=!0);}r&&(i[e]=s,c&&(i[e+1]=s),u<=127?o[s+0]=e:u<=2047?(o[s+0]=e,o[s+1]=e):u<=65535?(o[s+0]=e,o[s+1]=e,o[s+2]=e):(o[s+0]=e,o[s+1]=e,o[s+2]=e,o[s+3]=e)),u<=127?a[s++]=u:u<=2047?(a[s++]=192|(1984&u)>>>6,a[s++]=128|(63&u)>>>0):u<=65535?(a[s++]=224|(61440&u)>>>12,a[s++]=128|(4032&u)>>>6,a[s++]=128|(63&u)>>>0):(a[s++]=240|(1835008&u)>>>18,a[s++]=128|(258048&u)>>>12,a[s++]=128|(4032&u)>>>6,a[s++]=128|(63&u)>>>0),c&&e++;}this.utf16Length=n,this.utf8Length=e,this.utf16Value=t,this.utf8Value=a,this.utf16OffsetToUtf8=i,this.utf8OffsetToUtf16=o;}createString(t){const n=t._omalloc(this.utf8Length);return t.HEAPU8.set(this.utf8Value,n),n}}class s{constructor(t){if(this.id=++s.LAST_ID,!o)throw new Error("Must invoke loadWASM first.");this._onigBinding=o,this.content=t;const n=new f(t);this.utf16Length=n.utf16Length,this.utf8Length=n.utf8Length,this.utf16OffsetToUtf8=n.utf16OffsetToUtf8,this.utf8OffsetToUtf16=n.utf8OffsetToUtf16,this.utf8Length<1e4&&!s._sharedPtrInUse?(s._sharedPtr||(s._sharedPtr=o._omalloc(1e4)),s._sharedPtrInUse=!0,o.HEAPU8.set(n.utf8Value,s._sharedPtr),this.ptr=s._sharedPtr):this.ptr=n.createString(o);}convertUtf8OffsetToUtf16(t){return this.utf8OffsetToUtf16?t<0?0:t>this.utf8Length?this.utf16Length:this.utf8OffsetToUtf16[t]:t}convertUtf16OffsetToUtf8(t){return this.utf16OffsetToUtf8?t<0?0:t>this.utf16Length?this.utf8Length:this.utf16OffsetToUtf8[t]:t}dispose(){this.ptr===s._sharedPtr?s._sharedPtrInUse=!1:this._onigBinding._ofree(this.ptr);}}n.OnigString=s,s.LAST_ID=0,s._sharedPtr=0,s._sharedPtrInUse=!1;class u{constructor(t){if(!o)throw new Error("Must invoke loadWASM first.");const n=[],e=[];for(let r=0,i=t.length;r<i;r++){const i=new f(t[r]);n[r]=i.createString(o),e[r]=i.utf8Length;}const r=o._omalloc(4*t.length);o.HEAPU32.set(n,r/4);const i=o._omalloc(4*t.length);o.HEAPU32.set(e,i/4);const a=o._createOnigScanner(r,i,t.length);for(let e=0,r=t.length;e<r;e++)o._ofree(n[e]);o._ofree(i),o._ofree(r),0===a&&function(t){throw new Error(t.UTF8ToString(t._getLastOnigError()))}(o),this._onigBinding=o,this._ptr=a;}dispose(){this._onigBinding._freeOnigScanner(this._ptr);}findNextMatchSync(t,n,e){let r=a,i=0;if("number"==typeof e?(8&e&&(r=!0),i=e):"boolean"==typeof e&&(r=e),"string"==typeof t){t=new s(t);const e=this._findNextMatchSync(t,n,r,i);return t.dispose(),e}return this._findNextMatchSync(t,n,r,i)}_findNextMatchSync(t,n,e,r){const i=this._onigBinding;let o;if(o=e?i._findNextOnigScannerMatchDbg(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),r):i._findNextOnigScannerMatch(this._ptr,t.id,t.ptr,t.utf8Length,t.convertUtf16OffsetToUtf8(n),r),0===o)return null;const a=i.HEAPU32;let f=o/4;const s=a[f++],u=a[f++];let c=[];for(let n=0;n<u;n++){const e=t.convertUtf8OffsetToUtf16(a[f++]),r=t.convertUtf8OffsetToUtf16(a[f++]);c[n]={start:e,end:r,length:r-e};}return {index:s,captureIndices:c}}}n.OnigScanner=u;let c=!1,l=null;n.loadWASM=function(t){if(c)return l;let n,e,r,a;if(c=!0,function(t){return "function"==typeof t.instantiator}(t))n=t.instantiator,e=t.print;else {let r;!function(t){return void 0!==t.data}(t)?r=t:(r=t.data,e=t.print),n=function(t){return "undefined"!=typeof Response&&t instanceof Response}(r)?"function"==typeof WebAssembly.instantiateStreaming?function(t){return n=>WebAssembly.instantiateStreaming(t,n)}(r):function(t){return async n=>{const e=await t.arrayBuffer();return WebAssembly.instantiate(e,n)}}(r):function(t){return n=>WebAssembly.instantiate(t,n)}(r);}return l=new Promise(((t,n)=>{r=t,a=n;})),function(t,n,e,r){(0, i.default)({print:n,instantiateWasm:(n,e)=>{if("undefined"==typeof performance){const t=()=>Date.now();n.env.emscripten_get_now=t,n.wasi_snapshot_preview1.emscripten_get_now=t;}return t(n).then((t=>e(t.instance)),r),{}}}).then((t=>{o=t,e();}));}(n,e,r,a),l},n.createOnigString=function(t){return new s(t)},n.createOnigScanner=function(t){return new u(t)},n.setDefaultDebugCall=function(t){a=t;};},418:t=>{var n=("undefined"!=typeof document&&document.currentScript&&document.currentScript.src,function(t){var n,e,r=void 0!==(t=t||{})?t:{};r.ready=new Promise((function(t,r){n=t,e=r;}));var i,o=Object.assign({},r),s=!1,c="";function l(t){return r.locateFile?r.locateFile(t,c):c+t}(i=function(t){let n;return "function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(n=read(t,"binary"),m("object"==typeof n),n)},"undefined"!=typeof scriptArgs?scriptArgs:void 0!==arguments&&(arguments),"undefined"!=typeof onig_print&&("undefined"==typeof console&&(console={}),console.log=onig_print,console.warn=console.error="undefined"!=typeof printErr?printErr:onig_print));var h,p,d=r.print||console.log.bind(console),g=r.printErr||console.warn.bind(console);Object.assign(r,o),o=null,r.arguments&&(r.arguments),r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(h=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&k("no native wasm support detected");var _=!1;function m(t,n){t||k(n);}var y,w,S,v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function A(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&v)return v.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var f=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|f<<6|s:(7&a)<<18|f<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else {var u=a-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u);}}else o+=String.fromCharCode((31&a)<<6|f);}else o+=String.fromCharCode(a);}return o}function b(t,n){return t?A(w,t,n):""}function O(t){y=t,r.HEAP8=new Int8Array(t),r.HEAP16=new Int16Array(t),r.HEAP32=new Int32Array(t),r.HEAPU8=w=new Uint8Array(t),r.HEAPU16=new Uint16Array(t),r.HEAPU32=S=new Uint32Array(t),r.HEAPF32=new Float32Array(t),r.HEAPF64=new Float64Array(t);}r.INITIAL_MEMORY;var U=[],P=[],R=[];function x(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)M(r.preRun.shift());G(U);}function T(){G(P);}function E(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)I(r.postRun.shift());G(R);}function M(t){U.unshift(t);}function L(t){P.unshift(t);}function I(t){R.unshift(t);}var W=0,C=null;function N(t){W++,r.monitorRunDependencies&&r.monitorRunDependencies(W);}function j(t){if(W--,r.monitorRunDependencies&&r.monitorRunDependencies(W),0==W&&(C)){var n=C;C=null,n();}}function k(t){r.onAbort&&r.onAbort(t),g(t="Aborted("+t+")"),_=!0,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw e(n),n}var B,H,F="data:application/octet-stream;base64,";function V(t){return t.startsWith(F)}function z(t){try{if(t==B&&h)return new Uint8Array(h);if(i)return i(t);throw "both async and sync fetching of the wasm failed"}catch(t){k(t);}}function q(){return h||!s||"function"!=typeof fetch?Promise.resolve().then((function(){return z(B)})):fetch(B,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw "failed to load wasm binary file at '"+B+"'";return t.arrayBuffer()})).catch((function(){return z(B)}))}function Y(){var t={env:nt,wasi_snapshot_preview1:nt};function n(t,n){var e=t.exports;r.asm=e,O((p=r.asm.memory).buffer),r.asm.__indirect_function_table,L(r.asm.__wasm_call_ctors),j();}function i(t){n(t.instance);}function o(n){return q().then((function(n){return WebAssembly.instantiate(n,t)})).then((function(t){return t})).then(n,(function(t){g("failed to asynchronously prepare wasm: "+t),k(t);}))}if(N(),r.instantiateWasm)try{return r.instantiateWasm(t,n)}catch(t){g("Module.instantiateWasm callback failed with error: "+t),e(t);}return (h||"function"!=typeof WebAssembly.instantiateStreaming||V(B)||"function"!=typeof fetch?o(i):fetch(B,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(i,(function(t){return g("wasm streaming compile failed: "+t),g("falling back to ArrayBuffer instantiation"),o(i)}))}))).catch(e),{}}function G(t){for(;t.length>0;)t.shift()(r);}function J(t,n,e){w.copyWithin(t,n,n+e);}function K(t){try{return p.grow(t-y.byteLength+65535>>>16),O(p.buffer),1}catch(t){}}function Q(t){var n,e=w.length,r=2147483648;if((t>>>=0)>r)return !1;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),K(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return !0}return !1}V(B="onig.wasm")||(B=l(B)),H="undefined"!=typeof dateNow?dateNow:()=>performance.now();var X=[null,[],[]];function Z(t,n){var e=X[t];0===n||10===n?((1===t?d:g)(A(e,0)),e.length=0):e.push(n);}function $(t,n,e,r){for(var i=0,o=0;o<e;o++){var a=S[n>>2],f=S[n+4>>2];n+=8;for(var s=0;s<f;s++)Z(t,w[a+s]);i+=f;}return S[r>>2]=i,0}var tt,nt={emscripten_get_now:H,emscripten_memcpy_big:J,emscripten_resize_heap:Q,fd_write:$};function et(t){function e(){tt||(tt=!0,r.calledRun=!0,_||(T(),n(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),E()));}W>0||(x(),W>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("");}),1),e();}),1)):e()));}if(Y(),r.___wasm_call_ctors=function(){return (r.___wasm_call_ctors=r.asm.__wasm_call_ctors).apply(null,arguments)},r.___errno_location=function(){return (r.___errno_location=r.asm.__errno_location).apply(null,arguments)},r._omalloc=function(){return (r._omalloc=r.asm.omalloc).apply(null,arguments)},r._ofree=function(){return (r._ofree=r.asm.ofree).apply(null,arguments)},r._getLastOnigError=function(){return (r._getLastOnigError=r.asm.getLastOnigError).apply(null,arguments)},r._createOnigScanner=function(){return (r._createOnigScanner=r.asm.createOnigScanner).apply(null,arguments)},r._freeOnigScanner=function(){return (r._freeOnigScanner=r.asm.freeOnigScanner).apply(null,arguments)},r._findNextOnigScannerMatch=function(){return (r._findNextOnigScannerMatch=r.asm.findNextOnigScannerMatch).apply(null,arguments)},r._findNextOnigScannerMatchDbg=function(){return (r._findNextOnigScannerMatchDbg=r.asm.findNextOnigScannerMatchDbg).apply(null,arguments)},r.stackSave=function(){return (r.stackSave=r.asm.stackSave).apply(null,arguments)},r.stackRestore=function(){return (r.stackRestore=r.asm.stackRestore).apply(null,arguments)},r.stackAlloc=function(){return (r.stackAlloc=r.asm.stackAlloc).apply(null,arguments)},r.dynCall_jiji=function(){return (r.dynCall_jiji=r.asm.dynCall_jiji).apply(null,arguments)},r.UTF8ToString=b,C=function t(){tt||et(),tt||(C=t);},r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return et(),t.ready});t.exports=n;}},n={},function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}(770);var t,n;})); 
} (main));

var mainExports = main.exports;

"process" in globalThis && typeof process !== "undefined" && typeof process.release !== "undefined" && process.release.name === "node";
"process" in globalThis && typeof process !== "undefined" && typeof process.release !== "undefined" && process.release.name === "bun";
let _onigurumaPromise = null;
async function getOniguruma() {
  if (!_onigurumaPromise) {
    _onigurumaPromise = import('./chunks/onig-56b7efa9.mjs').then((r) => mainExports.loadWASM({ instantiator: r.default })).then(() => {
      return {
        createOnigScanner(patterns) {
          return mainExports.createOnigScanner(patterns);
        },
        createOnigString(s) {
          return mainExports.createOnigString(s);
        }
      };
    });
  }
  return _onigurumaPromise;
}
function repairTheme(theme) {
  if (!theme.settings)
    theme.settings = [];
  if (theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope) {
    return;
  }
  theme.settings.unshift({
    settings: {
      foreground: theme.fg,
      background: theme.bg
    }
  });
}
function toShikiTheme(rawTheme) {
  const type = rawTheme.type || "dark";
  const shikiTheme = {
    name: rawTheme.name,
    type,
    ...rawTheme,
    ...getThemeDefaultColors(rawTheme)
  };
  if (rawTheme.include) {
    shikiTheme.include = rawTheme.include;
  }
  if (rawTheme.tokenColors) {
    shikiTheme.settings = rawTheme.tokenColors;
    delete shikiTheme.tokenColors;
  }
  repairTheme(shikiTheme);
  return shikiTheme;
}
const VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
const VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
function getThemeDefaultColors(theme) {
  let fg, bg;
  let settings = theme.settings ? theme.settings : theme.tokenColors;
  const globalSetting = settings ? settings.find((s) => {
    return !s.name && !s.scope;
  }) : void 0;
  if (globalSetting?.settings?.foreground) {
    fg = globalSetting.settings.foreground;
  }
  if (globalSetting?.settings?.background) {
    bg = globalSetting.settings.background;
  }
  if (!fg && theme?.colors?.["editor.foreground"]) {
    fg = theme.colors["editor.foreground"];
  }
  if (!bg && theme?.colors?.["editor.background"]) {
    bg = theme.colors["editor.background"];
  }
  if (!fg) {
    fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
  }
  if (!bg) {
    bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
  }
  return {
    fg,
    bg
  };
}

class Registry extends mainExports$1.Registry {
  constructor(_resolver) {
    super(_resolver);
    this._resolver = _resolver;
    this.themesPath = "themes/";
    this._resolvedThemes = {};
    this._resolvedGrammars = {};
    this._langGraph = /* @__PURE__ */ new Map();
    this._langMap = languages.reduce((acc, lang) => {
      acc[lang.id] = lang;
      return acc;
    }, {});
  }
  getTheme(theme) {
    if (typeof theme === "string") {
      return this._resolvedThemes[theme];
    } else {
      return theme;
    }
  }
  async loadTheme(theme) {
    if (typeof theme === "string") {
      const _imports = themesImports[theme];
      if (_imports) {
        return toShikiTheme(await _imports());
      } else {
        throw new Error("[shiki] failed to load theme " + theme);
      }
    } else {
      theme = toShikiTheme(theme);
      if (theme.name) {
        this._resolvedThemes[theme.name] = theme;
      }
      return theme;
    }
  }
  async loadThemes(themes) {
    return await Promise.all(themes.map((theme) => this.loadTheme(theme)));
  }
  getLoadedThemes() {
    return Object.keys(this._resolvedThemes);
  }
  getGrammar(name) {
    return this._resolvedGrammars[name];
  }
  async loadLanguage(lang) {
    const embeddedLanguages = lang.embeddedLangs?.reduce(async (acc, l, idx) => {
      if (!this.getLoadedLanguages().includes(l) && this._resolver.getLangRegistration(l)) {
        await this._resolver.loadGrammar(this._resolver.getLangRegistration(l).scopeName);
        acc[this._resolver.getLangRegistration(l).scopeName] = idx + 2;
        return acc;
      }
    }, {});
    const grammarConfig = {
      embeddedLanguages,
      balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    };
    const g = await this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
    this._resolvedGrammars[lang.id] = g;
    if (lang.aliases) {
      lang.aliases.forEach((la) => {
        this._resolvedGrammars[la] = g;
      });
    }
  }
  async loadLanguages(langs) {
    for (const lang of langs) {
      this.resolveEmbeddedLanguages(lang);
    }
    const langsGraphArray = Array.from(this._langGraph.values());
    for (const lang of langsGraphArray) {
      this._resolver.addLanguage(lang);
    }
    for (const lang of langsGraphArray) {
      await this.loadLanguage(lang);
    }
  }
  getLoadedLanguages() {
    return Object.keys(this._resolvedGrammars);
  }
  resolveEmbeddedLanguages(lang) {
    if (!this._langGraph.has(lang.id)) {
      this._langGraph.set(lang.id, lang);
    }
    if (lang.embeddedLangs) {
      for (const embeddedLang of lang.embeddedLangs) {
        this._langGraph.set(embeddedLang, this._langMap[embeddedLang]);
      }
    }
  }
}

function resolveLang(lang) {
  return typeof lang === "string" ? languages.find((l) => l.id === lang || l.aliases?.includes(lang)) : lang;
}
function resolveOptions(options) {
  let _languages = languages;
  let _themes = options.themes || [];
  if (options.langs) {
    _languages = options.langs.map(resolveLang);
  }
  if (options.theme) {
    _themes.unshift(options.theme);
  }
  if (!_themes.length) {
    _themes = ["nord"];
  }
  return { _languages, _themes };
}
function generateDefaultColorReplacements() {
  const replacements = {
    "#000001": "var(--shiki-color-text)",
    "#000002": "var(--shiki-color-background)",
    "#000004": "var(--shiki-token-constant)",
    "#000005": "var(--shiki-token-string)",
    "#000006": "var(--shiki-token-comment)",
    "#000007": "var(--shiki-token-keyword)",
    "#000008": "var(--shiki-token-parameter)",
    "#000009": "var(--shiki-token-function)",
    "#000010": "var(--shiki-token-string-expression)",
    "#000011": "var(--shiki-token-punctuation)",
    "#000012": "var(--shiki-token-link)"
  };
  for (let i = 0; i < namedColors.length; i++) {
    const code = `#A${i.toString().padStart(5, "0")}`;
    const colorNameKebab = namedColors[i].replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    replacements[code] = `var(--shiki-color-ansi-${colorNameKebab})`;
  }
  return replacements;
}
async function getHighlighter(options) {
  const { _languages, _themes } = resolveOptions(options);
  const _resolver = new Resolver(getOniguruma(), "vscode-oniguruma");
  const _registry = new Registry(_resolver);
  if (options.paths?.themes) {
    _registry.themesPath = options.paths.themes.endsWith("/") ? options.paths.themes : options.paths.themes + "/";
  }
  if (options.paths?.languages) {
    _resolver.languagesPath = options.paths.languages.endsWith("/") ? options.paths.languages : options.paths.languages + "/";
  }
  const themes = await _registry.loadThemes(_themes);
  const _defaultTheme = themes[0];
  let _currentTheme;
  await _registry.loadLanguages(_languages);
  let COLOR_REPLACEMENTS = generateDefaultColorReplacements();
  function setColorReplacements(map) {
    COLOR_REPLACEMENTS = map;
  }
  function fixCssVariablesTheme(theme, colorMap) {
    theme.bg = COLOR_REPLACEMENTS[theme.bg] || theme.bg;
    theme.fg = COLOR_REPLACEMENTS[theme.fg] || theme.fg;
    Object.entries(theme.colors).forEach(([key, value]) => {
      theme.colors[key] = COLOR_REPLACEMENTS[value] || value;
    });
    colorMap.forEach((val, i) => {
      colorMap[i] = COLOR_REPLACEMENTS[val] || val;
    });
  }
  function getTheme(theme) {
    const _theme = theme ? _registry.getTheme(theme) : _defaultTheme;
    if (!_theme) {
      throw Error(`No theme registration for ${theme}`);
    }
    if (!_currentTheme || _currentTheme.name !== _theme.name) {
      _registry.setTheme(_theme);
      _currentTheme = _theme;
    }
    const _colorMap = _registry.getColorMap();
    if (_theme.type === "css") {
      fixCssVariablesTheme(_theme, _colorMap);
    }
    return { _theme, _colorMap };
  }
  function getGrammar(lang) {
    const _grammar = _registry.getGrammar(lang);
    if (!_grammar) {
      throw Error(`No language registration for ${lang}`);
    }
    return { _grammar };
  }
  function codeToThemedTokens(code, lang = "text", theme, options2 = { includeExplanation: true }) {
    if (isPlaintext(lang)) {
      const lines = code.split(/\r\n|\r|\n/);
      return [...lines.map((line) => [{ content: line }])];
    }
    const { _grammar } = getGrammar(lang);
    const { _theme, _colorMap } = getTheme(theme);
    return tokenizeWithTheme(_theme, _colorMap, code, _grammar, options2);
  }
  function ansiToThemedTokens(ansi, theme) {
    const { _theme } = getTheme(theme);
    return tokenizeAnsiWithTheme(_theme, ansi);
  }
  function codeToHtml(code, arg1 = "text", arg2) {
    let options2;
    if (typeof arg1 === "object") {
      options2 = arg1;
    } else {
      options2 = {
        lang: arg1,
        theme: arg2
      };
    }
    const tokens = codeToThemedTokens(code, options2.lang, options2.theme, {
      includeExplanation: false
    });
    const { _theme } = getTheme(options2.theme);
    return renderToHtml(tokens, {
      fg: _theme.fg,
      bg: _theme.bg,
      lineOptions: options2?.lineOptions,
      themeName: _theme.name
    });
  }
  function ansiToHtml(ansi, options2) {
    const tokens = ansiToThemedTokens(ansi, options2?.theme);
    const { _theme } = getTheme(options2?.theme);
    return renderToHtml(tokens, {
      fg: _theme.fg,
      bg: _theme.bg,
      lineOptions: options2?.lineOptions,
      themeName: _theme.name
    });
  }
  async function loadTheme(theme) {
    await _registry.loadTheme(theme);
  }
  async function loadLanguage(lang) {
    const _lang = resolveLang(lang);
    _resolver.addLanguage(_lang);
    await _registry.loadLanguage(_lang);
  }
  function getLoadedThemes() {
    return _registry.getLoadedThemes();
  }
  function getLoadedLanguages() {
    return _registry.getLoadedLanguages();
  }
  function getBackgroundColor(theme) {
    const { _theme } = getTheme(theme);
    return _theme.bg;
  }
  function getForegroundColor(theme) {
    const { _theme } = getTheme(theme);
    return _theme.fg;
  }
  return {
    codeToThemedTokens,
    codeToHtml,
    ansiToThemedTokens,
    ansiToHtml,
    getTheme: (theme) => {
      return getTheme(theme)._theme;
    },
    loadTheme,
    loadLanguage,
    getBackgroundColor,
    getForegroundColor,
    getLoadedThemes,
    getLoadedLanguages,
    setColorReplacements
  };
}
function isPlaintext(lang) {
  return !lang || ["plaintext", "txt", "text"].includes(lang);
}

export { languages as BUNDLED_LANGUAGES, themes as BUNDLED_THEMES, FontStyle, getHighlighter, renderToHtml, toShikiTheme };
