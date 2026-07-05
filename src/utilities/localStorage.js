function getStoredReadBooks() {
    const storedBooks = localStorage.getItem("read-books");

    if (storedBooks) {
        return JSON.parse(storedBooks);
    }

    return [];
}
function saveReadBook(id) {
    const storedBooks =getStoredReadBooks();

    storedBooks.push(id);
 localStorage.setItem(
        "read-books",
        JSON.stringify(storedBooks)
    );
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

export { getStoredReadBooks, saveReadBook,saveWishlistBook};