export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existing) {
        return cartItems.map(item =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existing = cartItems.find(item => item.id === itemToRemove.id);

    if (existing.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id);
    }

    return cartItems.map(item =>
        item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
    );
};
