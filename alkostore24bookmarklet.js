javascript: (async () => { 
    const products = [
        {
            link: "https://alkostore24.com/fi/lahden-erikois-neipa.html",
            count: 44
        },
        {
            link: "https://alkostore24.com/fi/lahden-erikois-ipa.html",
            count: 1
        },
        {
            link: "https://alkostore24.com/fi/abro-brygmestarens-premium-gold.html",
            count: 6
        }
    ];

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
                    console.log("Product:", product.link);
                    console.log("Count:", product.count);
                    const form = dummy.getElementsByClassName("product-add-form")[0].getElementsByTagName("form")[0];
                    const actionUrl = form.action;
        
                    const productKey = actionUrl.split("/")[actionUrl.split("/").length - 2];
                    const formKey = "REPLACE_ME";
                    const qty = product.count;
        
                    const formData = new FormData();
                    formData.append('product', productKey);
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
