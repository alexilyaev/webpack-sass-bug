Webpack-Sass bug
=================

## Setup

```
npm install
```

## Run build

```
npm run build
```

## Webpack Build Issue

Running the build above hangs at 40%.

Under `public/styles/_layout.scss` there's one line that fails the build:

```
&:not('no-anim')
```

Chainging it to the following will pass the build:

```
&:not(no-anim)
```

I'm not sure if it's valid with the quotes (though it worked for me in my project), but I would definitely expect some error to be thrown.  
Later I understood that I should do `&:not([no-anim])`.

interesting enough, removing the `UglifyJsPlugin` plugin passes the build as well.

So, I'm not sure which one of these guys are failing, but it just took 3 hours of my time.
I have definitely expected to get some error, somewhere.

## Reference

I originally thought that my issue was related to this:  
https://github.com/jtangelder/sass-loader/issues/100#issuecomment-143749823
