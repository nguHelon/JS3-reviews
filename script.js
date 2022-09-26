// getting the info variables
const person = document.querySelector(".name h1");
const rating = document.querySelector(".name span");
const job = document.querySelector(".job p");
const review = document.querySelector(".para p");
const img = document.querySelector(".img img");

// actions button
const actions = Array.from(document.querySelectorAll(".actions button"));
console.log(actions)
// array of reviews
const reviews = [
    {
        rating: "satisfied",
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        rating: "very satisfied",
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        rating: "Not bad",
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        rating: "amazing",
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// counter variable
let counter = 0;



// next and previous functionality
actions.forEach((button) => {
    button.addEventListener("click", () => {

        //check if its next button
        if (button.classList.contains("next")) {
            counter++;
            if (counter > reviews.length - 1) {
                counter = 0;
            }
            showReview(reviews);
            console.log(counter);

            //check if its prev button
        } else if (button.classList.contains("prev")) {
            counter--;
            if (counter < 0) {
                counter = reviews.length - 1;
            }
            showReview(reviews);
            console.log(counter);
        }
    })
})

document.querySelector(".randomise").addEventListener("click", () => {
    counter = Math.floor(Math.random() * reviews.length);
    showReview(reviews);
    console.log(counter);
})

let showReview = (reviews) => {
    person.innerText = reviews[counter].name;
    job.innerText = reviews[counter].job;
    rating.innerText = reviews[counter].rating;
    review.innerText = reviews[counter].text;
    img.setAttribute("src", reviews[counter].img);
}