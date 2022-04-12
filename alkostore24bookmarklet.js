javascript: (async () => { 
    const products = [{
        link: "https://alkostore24.com/fi/albani-mosaic-ipa.html",
        count: 4
    }, {
        link: "https://alkostore24.com/fi/darguner-pilsener-0-5.html",
        count: 2
    }, {
        link: "https://alkostore24.com/fi/speyburn-single-malt-10y.html",
        count: 5
    }, {
        link: "https://alkostore24.com/fi/antiche-terre-venete-amarone-075.html",
        count: 7
    }, {
        link: "https://alkostore24.com/fi/slots-pilsner.html",
        count: 28
    }, {
        link: "https://alkostore24.com/fi/aura-4-5.html",
        count: 23
    }];

    let errors = [];

    for await( const product of products){
        if(product.link && new URL(product.link).hostname === "alkostore24.com"){
            const res = await fetch(product.link, {mode: "no-cors"});
            if(res.ok){
                const doc = await res.text();
                const dummy = document.createElement(
                    'html'
                );
                dummy.innerHTML = doc;
    
                const available = dummy.querySelectorAll(".page-main .availability .instock").length > 0;
    
                if(available){
                    const form = dummy.getElementsByClassName("product-add-form")[0].getElementsByTagName("form")[0];
                    const actionUrl = form.action;
        
                    const product = actionUrl.split("/")[actionUrl.split("/").length - 2];
                    const formKey = "MOLaQjXY8NhaRN2c";
                    const qty = product.count;
        
                    const formData = new FormData();
                    formData.append('product', product);
                    formData.append('form_key', formKey);
                    formData.append('qty', qty);
        
                    const postRes = await fetch(actionUrl, {
                        method: "POST",
                        body: formData
                    });
                
                    console.log(postRes);
                }else{
                    errors.push("Product out of stock: " + product.link);
                }
            } else {
                errors.push("Link is not working: " + product.link);
            }
        }else{
            errors.push("Bad link:" + product.link);
        }
    }
    if(errors.length > 0){
        alert("These need your attention:\n" + errors.join("\n"));
    }
})();
