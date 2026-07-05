function getStoredReadBooks() {
    const storedBooks = localStorage.getItem("read-books");

    if (storedBooks) {
        return JSON.parse(storedBooks);
    }

    return [];
}
function saveReadBook(id) {
    const storedBooks = getStoredReadBooks();

    if (storedBooks.includes(id)) {
        alert("This book is already in the Read list.");
        return;
    }

    storedBooks.push(id);

    localStorage.setItem(
        "read-books",
        JSON.stringify(storedBooks)
    );

    alert("Book added to Read list.");
}


function saveWishlistBook(id) {
    const storedBooks = localStorage.getItem("wishlist-books");

    let wishlistBooks = [];

    if (storedBooks) {
        wishlistBooks = JSON.parse(storedBooks);
    }

    if (wishlistBooks.includes(id)) {
        alert("This book is already in the Wishlist.");
        return;
    }

    wishlistBooks.push(id);

    localStorage.setItem(
        "wishlist-books",
        JSON.stringify(wishlistBooks)
    );

    alert("Book added to Wishlist.");
}

function getStoredWishlistBooks() {
    const storedBooks = localStorage.getItem("wishlist-books");

    if (storedBooks) {
        return JSON.parse(storedBooks);
    }

    return [];
}



export {
    getStoredReadBooks,
    getStoredWishlistBooks,
    saveReadBook,
    saveWishlistBook
};