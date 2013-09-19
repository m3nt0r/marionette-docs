marionette-docs (UNOFFICIAL) 
============================

Backbone Marionette documentation as GitHub Pages project

I've found the browsing through /docs a bit awkward and as far as i know
there is no current official documentation website. I saw all the .md files 
and thought that i should be able to run them through Jekyll and get something
acceptable. 

Fortunately i was right and with just minor changes (frontmatter,date-prefix) i
was able to use the files 1:1.

I did this just for personal use and i am not affiliated in any way. I hope they 
will forgive me using the logo, but otherwise it would have looked a bit boring.

Enjoy! 

### Known Issues

The "Documentation Index" segment on every page is not from me and is, including the
anchors, part of the source files. However, those links don't work as they're not
understood by the gh-pages renderer. I could manually fix them but that would make
updating harder. I thought about resolving the links via Javascript via jQuery, but 
that is unreliable as the titles and related anchors are inconsitently formatted/named.

If you have an idea how to fix this, ping me. :)
