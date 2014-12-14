Summernote for AutoForm
=======================

Add WYSIWYG editor to your Meteor app.

###Usage###

1) Install `meteor add mpowaga:autoform-summernote`

2) Create schema

```
var BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Yet another poem",
    autoform: {
      afFieldInput: {
        type: 'summernote',
        class: 'editor' // optional
        // summernote options goes here
      }
    }
  }
});
```

3) Attach schema to your collection `Books.attachSchema(BookSchema)`

4) Generate the form with `{{> quickform}}` or `{{#autoform}}`

```
{{> quickForm collection="Books" type="insert"}}
```

**Note:** Summernote may not be working well if you are using other bootstrap dependency than `twbs:bootstrap`. To solve this simply remove your current bootstrap package and install `twbs:bootstrap` (see [this](https://github.com/mpowaga/meteor-autoform-summernote/issues/1) issue).

###Summernote options###

Supported options: `height minHeight maxHeight focus toolbar airPopover`. Read more about them [here](http://hackerwins.github.io/summernote/features.html#api).
