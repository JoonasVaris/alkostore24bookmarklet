# Disclaimer

I'm in no shape of form affiliated with alkostore24.com
I just needed something like this for my own purposes.

This might already be broken or break tomorrow,
I have no intention on keeping this up to date or fix it if something breaks.

But you are free to copy this and use while it works.

# Usage

For adding large amounts of data to shopping cart in alkostore24.com

Requires a list of product urls and quatities.

1. Replace dummy data with your own in alkostore24bookmarklet.js see example below
2. Retrieve formKey by adding a product to shopping cart and inspecting the request sent in the network panel
   Payload should look something like this:

```
product: <int>
qty: <int>
form_key: <string> // <-- copy this and replace "REPLACE_ME" in alkostore24bookmarklet.js
```

3. Create a [bookmarklet](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) with code,
4. Navigate to alkostore24.com and click bookmarklet
5. Refresh page
6. Shopping cart should now have your items!

# Example data forming

Export csv from group order with links and counts.
Place data in array.

```js
let a = [
  "https://alkostore24.com/fi/bushmills-original.html",
  2,
  "https://alkostore24.com/fi/glen-parker.html",
  1,
  "https://alkostore24.com/fi/glenmorangie-the-original-10y.html",
  1,
  "https://alkostore24.com/fi/kilbeggan.html",
  1,
  "https://alkostore24.com/fi/muirhead-s-silver-seal-16y.html",
  1,
  "https://alkostore24.com/fi/chill-out-shiraz-california.html",
  1,
  "https://alkostore24.com/fi/beats-the-devil-shiraz.html",
  1,
  "https://alkostore24.com/fi/jagermeister-bbq-sauce.html",
  2,
  "https://alkostore24.com/fi/jagermeister-sunglasses.html",
  1,
];
```

Iterate over array and populate products array with links and counts

```js
let products = [];
undefined;
a.forEach((e, i) => {
  let index = Math.floor(i / 2);
  if (i % 2 == 0) {
    products.push({ link: e, count: undefined });
  } else {
    products[index].count = e;
  }
});
```
