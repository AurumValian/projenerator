export const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}

export const randomProjectApi = async () => {
  try {
    const projectFetch = await fetch('https://api.publicapis.org/random')
    const projectData = await projectFetch.json()
    return projectData
  } catch (error) {
    console.log(error)
  }
}

export const persuasiveTopics = [
  { topic: "Should tattoos still be considered 'unprofessional?''", stances: ["Yes", "No"]},
  { topic: "Should zoos and animal theme parks (such as Sea World) be closed?", stances: ["Yes", "No"] },
  { topic: "Should it be okay to own exotic animals as pets?", stances: ["Yes", "No"] },
  { topic: "Should organ donation be optional or mandated for all?", stances: ["Optional", "Mandated"]},
  { topic: "Should prisoners have the right to vote?", stances: ["Yes", "No"]},
  { topic: "Should U.S. military funding be increased or decreased?", stances: ["Increased", "Decreased"]},
  { topic: "Should soda and candy be banned from school campuses?", stances: ["Yes", "No"] },
  { topic: "Should tobacco products be completely banned in America?", stances: ["Yes", "No"] },

  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] },
  // { topic: , stances: [] }
  { topic: "Should states have the ability to secede from the U.S.?", stances: ["Yes", "No"] }
]

export const audiences = [
  "Mothers",
  "World Travelers",
  "Moviegoers",
  "Hikers",
  "Scientists",
  "Video Game Players",
  "Foodies",
  "Music Lovers",
  "Basketball Fans",
  "Football Fans",
  "Baseball Fans",
  "Farmers",
  "Bakers",
  "People who ADORE the color yellow",
  "Bicyclists",
  "Racers",
  "Children",
  "Dog Lovers",
  "Cat Lovers",
  "Financial Advisors",
  "Doctors",
  "Board Game Enthusiasts",
  "Wildlife Photographers",
  "Car Buffs",
  "Stormchasers",
  "Urban Photographers",
  "Fashion Designers",
  "Linguists",
  "Artists",
  "Musicians",
  "Book Lovers",
  "Coin Collectors",
  "Stamp Collectors",
  "Animal Lovers",
  "Plant Lovers",
  "Military Families",
  "Party Planners",
  "Newlyweds",
  "Bartenders",
  "Historians",
  "Comedians",
  "Trivia Masters",
  "Knitters",
  "Politicians",
  "The Environmentally Conscious",
  "Students",
  "Dancers",
  "Mythologists",
  "Dinosaur Lovers",
  "Stargazers",
  "Influencers",
  "Fitness Coaches",
  "Professors",
  "Filmmakers",
  "Thespians"
]
