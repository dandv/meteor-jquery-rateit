# RateIt - a jQuery (star) rating plugin

[RateIt](http://rateit.codeplex.com/), an advanced, modern, clean jQuery plugin for mobile-friendly star rating controls.

## How to install 
1. `npm install -g meteorite` (if not already installed)
2. `mrt add jquery-rateit`
3. For the simplest invocation, have `<div class="rateit"></div>` in a template, and call `$('.rateit').rateit()` in its `.rendered()` event.

## Demo

* [Official demo](http://www.radioactivethinking.com/rateit/example/example.htm)
* [meteor demo](http://jquery-rateit.meteor.com)

## Documentation

http://rateit.codeplex.com/documentation

## Comparison with other rating plugins

I was looking for a star rating plugin to package for Meteor, and I've evaluated all the 11 jQuery rating plugins listed [here](http://www.enfew.com/5-best-jquery-star-rating-plugins-tutorials/). The winner was, by far, [RateIt](http://rateit.codeplex.com/).

> Fast, Progressive enhancement, touch support, customizable (just swap out the images, or change some CSS), Unobtrusive JavaScript (using HTML5 data-* attributes), RTL support, supports as many stars as you'd like, and also any step size.

> Minified size: 4.35KB (1.55KB when gzipped).

> Tested on: IE6-10, Chrome 7-22, Firefox 3.6-16, Opera 10.63-12  - using jQuery 1.6.2 - 1.8.2. Touch support test on iPad iOS 4.2.1-5

RateIt can optionally use the [HTML5 range input element](http://www.html5tutorial.info/html5-range.php) - perfect for this purpose. No lame `<li>` elements or radio buttons.

The others were clearly lesser, albeit more popular, solutions:

[Star Rating](http://www.fyneworks.com/jquery/star-rating/)

- [78 open issues](http://code.google.com/p/jquery-star-rating-plugin/issues/list)
- on Google Code, not on GitHub, which means little to no pull requests
- latest update 7 months ago

[Raty](https://github.com/wbotelhos/raty)

- somewhat slow development check the issues tab)
- no mention of browser compatibility or touch support
+ has test suite

[jquery.rating](https://github.com/ripter/jquery.rating)

- only 22 commits
- no touch support, browser compatibility listing or anything
- raty is clearly better

Anyway, none of these mentioned browser compatibility or touch support. RateIt does, and it also explains clearly why it's better and different from the others:

> Why is RateIt different

> Although it does the same job as the rest of the jQuery star rating plugins, the main difference is its simplicity.
Most plugins create an element for each (partial) star, be it a div with a star background, or an img tag. 
Each of these tags gets a hover event, and a click event. And on these hover/click events it has to go and talk to the other stars, telling them to change their state.

> So each star plugin does a lot of DOM alterations (adding the number of stars as elements), and adds lots of events (again the number of stars times 2). 

> RateIt uses basically three divs.

Oh, and the last RateIt update? **The day before I packaged this.**

## TODO

* Handlebars helper (like [`accounts-ui-unstyled`](https://github.com/meteor/meteor/tree/master/packages/accounts-ui-unstyled)) passing through options such as `min`, `max`, `step`, `readonly` etc.
* Mixin to automatically associate a rating with a document
