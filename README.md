# Custom Post Type Layouts in Gutenberg

Just a simple demonstration of how you might approach this in a sane way.

Conceptually, we are registering a custom post type with a template that only allows for one bloc -- our custom one.

The custom block holds our custom layout. Available blocks and template locking can be modified in `src/edit.js`.

The block is hidden from the inserter using `supports` in `src/block.js`.

## References

[WordPress Gutenberg Handbook: Templates](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-templates/)

[@wordpress/block-editor: InnerBlocks source (Great README.md)](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks)

[Parcel.JS](https://parceljs.org)
