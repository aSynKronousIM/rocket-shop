Template.cartShow.helpers({
    cart: function() {
        currentCart = Carts.getCart(userKey);
        return Carts.getCart(userKey);
    }
});

Template.cartShow.events({
    "click .remove-from-cart": function(e) {
        e.preventDefault();
        removeFromCart(this.sku, function(err, res) {
            if (err) {
                console.log(err);
            } else {
                // Any items left?
                if (cart.items.length === 0) {
                    Router.go("homeIndex");
                }
            }
        })
    },

    "change .item-qty": function(e) {
        var newQty = parseInt($(e.currentTarget).val());
        var name = this.name;

        if (newQty === 0) {
            removeFromCart(this.sku);
        } else {
            this.quantity = parseInt(newQty);
            saveCart(currentCart, function(err, res) {
                if (err) {
                    console.log(err);
                } else {
                    alert(name + " updated");
                }
            });

            // just to be sure
            $(e.currentTarget).val(newQty);
        }
    }
});

