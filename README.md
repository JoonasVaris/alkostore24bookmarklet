# Disclaimer

I'm in no shape of form affiliated with alkostore24.com
I just needed something like this for my own purposes.

This might already be broken or break tomorrow,
I have no intention on keeping this up to date or fix it if something breaks.

But you are free to copy this and use while it works.

# Usage

For adding large amounts of data to shopping cart in alkostore24.com

Requires a list of product urls and quatities.

1. Replace dummy data with your own in alkostore24bookmarklet.js
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
