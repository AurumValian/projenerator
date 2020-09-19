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
