marionette-docs (UNOFFICIAL) 
============================

The Marionette documentation converted to a GitHub Pages project

### Motivation

I've found the browsing through /docs folder a bit awkward and as far as i know
there is no current official documentation website. I saw all the .md files 
and thought that i should be able to run them through Jekyll and get something
acceptable. Fortunately i was right and with just minor changes (frontmatter,date-prefix) 
i was able to use the files 1:1.

### Attribution

I did this just for personal use and i am not affiliated in any way. I hope they 
will forgive me using the logo, but otherwise it would have looked a bit boring.

### Known Issues

The "Documentation Index" segment on every page is not from me and is, including the
anchors, part of the source files. However, those links don't work as they're not
understood by the gh-pages renderer. I could manually fix them but that would make
updating harder. I thought about resolving the links via Javascript via jQuery, but 
that is unreliable as the titles and related anchors are inconsitently formatted/named.

**<?>** If you have another idea how to fix this with ease, ping me. :)

### Updating

As part of the jekyll convention i had to prefix the filenames with a date. Also, since
gh-pages does not support plugins, i had to add a tiny "front matter" header into every file
stating which layout to use ('default'). That's all. I intend to replace files and change 
the date prefix accordingly if an update is in order. 

### Extending

Here's some stuff that could be done to ease maintaining the repo.

- Finding a fix for the missing index anchors
- CI

### Developing

I am using grunt and bower via NPM to run build tasks and get the latest libs. If you want 
to work with them aswell, you have to run the following command inside the project root-folder.

```
$ npm install && bower install
```

This will get all the development packages you need so you can run the following tasks:

- `grunt js` to build and minify all javascript
- `grunt css` to build and minify all less files
- `grunt update` to clone marionette and recreate _posts
- `grunt build` to recreate _site for local dev
- `grunt server` to start a local webserver at port 4000
- `grunt watch` to run either js or css tasks if _sources changes

I think this covers more than enough tools for anyone wanting to improve this little project.

**Important Note** on "update": It's a bash on-liner for the most part and "works for me (tm)". Depending
on your system configuration that may not be the case. All paths are absolute, so there shouldn't 
be a problem but please be aware that this is quick n dirty. Use at your own risk. :)

### License

[MIT license](http://kb.mit-license.org/)
