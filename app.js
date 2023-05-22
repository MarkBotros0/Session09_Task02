var numberOfItems = 0;

function increment() {
    numberOfItems++
    $(".numberOfItems").text(numberOfItems);
    $(".price").text(`$${numberOfItems * 120}`);
}

function decrement() {
    if (numberOfItems != 1) {
        numberOfItems--
        $(".numberOfItems").text(numberOfItems);
        $(".price").text(`$${numberOfItems * 120}`);
    } else if (numberOfItems == 1 && !$(".shopping-cart").hasClass(".d-none")) {
        $(".empty-shopping-cart").removeClass("d-none");
        $(".shopping-cart").addClass("d-none");
        $("header").addClass("d-none");
        $(".continue-shopping-footer").removeClass("d-none")
        $(".buy-now-footer").addClass("d-none")
        $(".add-to-basket").addClass("d-none")
        numberOfItems--
    }
    console.log(numberOfItems)
}

function openShoppingCart() {
    console.log("hello")
    if (numberOfItems == 0) {
        $(".empty-shopping-cart").removeClass("d-none");
        $(".home").addClass("d-none");
        $("header").addClass("d-none");
        $(".continue-shopping-footer").removeClass("d-none")
        $(".add-to-basket").addClass("d-none")
    } else {
        $(".shopping-cart").removeClass("d-none");
        $(".home").addClass("d-none");
        $("header").addClass("d-none");
        $(".buy-now-footer").removeClass("d-none")
        $(".plus-minus-footer").addClass("d-none")
    }

}

function closeShoppingCart() {
    console.log("close")
    $(".shopping-cart").addClass("d-none");
    $(".empty-shopping-cart").addClass("d-none");
    $(".home").removeClass("d-none");
    $("header").removeClass("d-none");
    $(".continue-shopping-footer").addClass("d-none")
    $(".add-to-basket").removeClass("d-none")
    $(".buy-now-footer").addClass("d-none")
}

function addToBasket() {
    console.log("add")
    $(".add-to-basket").addClass("d-none");
    $(".plus-minus-footer").removeClass("d-none");
    numberOfItems++
    $(".numberOfItems").text(numberOfItems);
    $(".price").text(`$${numberOfItems * 120}`);
}

function changeColor(e) {
    console.log(e.id)
    $(".dot").removeClass("active")
    $(`.${e.id}`).addClass("active")
}
function changeSize(e) {
    console.log(e.id)
    $(".sizes").removeClass("active-size")
    $(`.${e.id}`).addClass("active-size")
}


$(document).ready(function () {

    $(".numberOfItems").text(numberOfItems);
    $("#price").text(`$${numberOfItems * 120}`);
    $(".price").text(`$${numberOfItems * 120}`);

    $(".increment-btn").on("click", function () {
        increment()
    })
    $(".dectrement-btn").on("click", function () {
        decrement()
    })
    $("#shoppingCart-btn").on("click", function () {
        openShoppingCart();
    });
    $(".close-btn").on("click", function () {
        closeShoppingCart();
    });
    $(".add-to-basket").on("click", function () {
        addToBasket();
    });
    $(".continue-shopping-footer").on("click", function () {
        closeShoppingCart();
    });
    $(".dot").on("click", function () {
        changeColor(this);
    });
    $(".sizes").on("click", function () {
        changeSize(this);
    });






    $(".owl-carousel").owlCarousel({

        navigation: false, // Show next and prev buttons
        dots: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });
});
