

const productRender =(category, product) => {
  $("#mainContent").empty();
  $("#mainContent").append(`
        <div>
            <ul class="list-group">
                <li class="list-group-item" id="${category}">${product}</li>
                <li class="list-group-item" id="${category}">${product}</li>
                <li class="list-group-item" id="${category}">${product}</li>
                <li class="list-group-item" id="${category}">${product}</li>
                <li class="list-group-item" id="${category}">${product}</li>
            </ul>
        </div>
    `);
};


//navbar links
$("#electronics").on("click", (e) => {
    e.preventDefault();
    productRender(electronics, product);
});

$("#outdoors").on("click", (e) => {
    e.preventDefault();
    productRender(outdoors, product);
});

$("#automotive").on("click", (e) => {
    e.preventDefault();
    productRender(autmotive, product);
});

const electronics = () => {
    //placing electronic products
}

const outdoors = () => {
    //placing outdoor products
}

const autmotive = () => {
    //placing automotive products
}
