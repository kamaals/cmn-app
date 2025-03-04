import { GameType } from "@/lib/types";
import { v4 } from "uuid";

export const GAMES: Array<GameType> = [
  {
    name: "Festing Fox",
    description:
      "Tucked away in their cozy little coop, a brood of hens relax blissfully unaware of the danger lurking right outside. Staring in, the hungriest of foxes lays in wait, planning his attack. Guided by his stomach and the promise of dinner, you can join the him in this achingly gorgeous game that will transport you inside the hen house and keep you entertained with simple, yet enjoyable mechanics.",
    code: "feastingfox",
    icon: "images/game-icon/feasting_fox.png",
    categoryIds: [0, 2],
    id: v4(),
  },
  {
    name: "Book Of Inferno",
    description:
      "It’s just another day in the life of Anna the Explorer, where a trio of demons have started crossing over into our realm to take over our world and end life as we know it forever. No biggie. Equipped with a powerful armour and lots of Red Bull, Anna heads into the abyss of darkness while channelling her inner demon huntress. Guided by the Book of Inferno to track down her targets, she’s taking on her most intimidating enemies so far: The Lord of Hell, The Lady of Hell, and the Commander of Hell.But there are even greater dangers lurking inside the fires of hell. Will Anna be able to outsmart the twisted logic of the Inferno?",
    code: "bookofinferno94",
    icon: "images/game-icon/book_of_inferno_logo.png",
    categoryIds: [0, 1],
    id: v4(),
  },
  {
    name: "Warp Wreckers",
    description:
      "On a planet far, far away, the world’s top scientists are fighting against the clock to develop robots for the next ‘astrocalypse’. The biggest and most important project is constructing The Destroyer, but it’s not quite finished. Instead, this state-of-the-art facility is packed with cute and colourful robots who don’t realise they’ve been cloned, so when they come face to face with themselves they get confused and explode… which creates an energy orb that activates the booster in the cluster bomb! When everything on the reels has been eliminated, it opens up a portal to another dimension where The Destroyer has already been completed. But it needs the energy of 4 power orbs to activate it, sending you into a time loop of fun. Expect volatile warp crystals, an endless supply of neurotic blow-bots, and wild energy Power Glyphs™. You’ll need them all to power up the warp portals that transport you to the elusive Free Spins dimension, the only place to fully power The Destroyer and clear the board with epic wins!",
    code: "warpwreckers",
    icon: "images/game-icon/warp_wreckers_powerglyph_logo.png",
    categoryIds: [0, 2, 1],
    id: v4(),
  },
  {
    name: "Reno 7's",
    description:
      "Who doesn’t have a road trip in the US on their bucket list? Imagine you’ve invited your best friends along for the trip of a lifetime. As you’re cruising down the highway together, wind in your faces and the landscape of Nevada rolling out around you, there’s nothing but blue skies and free time ahead. Driving by a road sign that says ‘7 Miles to Reno’, you feel the pull of the lucky 7s calling your name. Why not enjoy a weekend at this popular gambler’s resort? And as you pull into the city, you notice a Fortune Wheel stacked with 7s. This might just be your lucky day.",
    code: "renosevens",
    icon: "images/game-icon/renoseverns_logo_one_line_shadow.png",
    categoryIds: [0, 2],
    id: v4(),
  },
  {
    name: "Scatter Monsters",
    description:
      "Do you love festivals or think they’re hell on Earth? Well, this festival is hell. Literally. A warm welcome to Scatterbury, where monsters from all over the world meet up for a legendary 5-day festival. Scatto, as it’s commonly known in the Underworld, started as a simple event in 1974 with 1,500 visitors. It’s grown year by year and now attracts more than 200,000 culture-loving monsters each year. Party with zombies, demons, and vampires while you match symbols and fill the Soul Meters with unsuspecting souls. And if you fill the Demon meter you get access to the VIP room in hell, where you can mingle with Satan and other superstars. Maybe you’ll even get his autograph?",
    code: "scattermonsters",
    icon: "images/game-icon/scatter-monster-logo.png",
    categoryIds: [0, 1],
    id: v4(),
  },
];
