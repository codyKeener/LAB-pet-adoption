const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2020/10/18/20/43/dinosaur-5666127_1280.png",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2019/10/24/19/48/dinosaur-4575110_1280.png"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2020/12/16/04/16/dinosaur-5835666_1280.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2014/04/03/00/30/dinosaur-308503_1280.png"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/09/23/40/family-1582169_1280.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2020/03/08/18/20/dino-4913354_1280.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://cdn.pixabay.com/photo/2019/02/28/13/58/dog-4025991_1280.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_1280.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://media.istockphoto.com/id/1452916697/photo/closeup-shot-of-a-carnotaurus-dinosaur-toy-on-the-carpet-in-bright-light-with-a-blurred.jpg?s=2048x2048&w=is&k=20&c=i6VZHYV5BfIcB911wJLUSEWkfOYtelpR8z6oTdYBCXA="
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2020/12/14/11/18/cat-5830643_1280.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://cdn.pixabay.com/photo/2022/12/02/05/13/dog-7630252_1280.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://cdn.pixabay.com/photo/2015/11/16/20/39/cat-1046343_1280.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://cdn.pixabay.com/photo/2023/05/16/21/54/dinosaur-7998695_1280.jpg"
    }
  ];

//retrieve elements from the DOM
const cardContainer = document.querySelector("#card-container")
const catsButton = document.querySelector("#cats-btn")
const dogsButton = document.querySelector("#dogs-btn")
const dinosButton = document.querySelector("#dinos-btn")
const seeAllPetsButton = document.querySelector("#see-all-pets-btn")

//function that puts all of the objects from an array onto the DOM
const petCardsOnDom = (array) => {
  let domString = ""
  array.forEach(pet => {
    domString += 
    `<div class="card" style="width: 18rem;">
      <div class="card-header">
        <h2 class="pet-name">${pet.name}</h2>
      </div>
      <img src="${pet.imageUrl}" class="card-img-top" alt="picture of ${pet.name}">
      <div class="card-body">
        <p class="card-text" class="pet-color">${pet.color}</p>
        <p class="card-text" class="pet-special-skill">${pet.specialSkill}</p>
      </div>
      <div class="card-footer">
      <p class="pet-type ${pet.type}">${pet.type}</p>
      </div>
    </div>`
  })
  cardContainer.innerHTML = domString
}

//calling the function to have all pets show up on the DOM when the site first loads
petCardsOnDom(pets)

//function that filters an array of pets by pet type
const filterByPetType = (array, petType) => {
  const newArray = []
  array.forEach(pet => {
    if (pet.type === petType) {
      newArray.push(pet)
    }
  })
  return newArray
}

//event listeners for each of the buttons
catsButton.addEventListener("click", () => {
  const catArray = filterByPetType(pets, "cat")
  console.log(catArray)
  petCardsOnDom(catArray)
})
dogsButton.addEventListener("click", () => {
  const dogArray = filterByPetType(pets, "dog")
  console.log(dogArray)
  petCardsOnDom(dogArray)
})
dinosButton.addEventListener("click", () => {
  const dinoArray = filterByPetType(pets, "dino")
  console.log(dinoArray)
  petCardsOnDom(dinoArray)
})

seeAllPetsButton.addEventListener("click", () => {
  petCardsOnDom(pets)
})
