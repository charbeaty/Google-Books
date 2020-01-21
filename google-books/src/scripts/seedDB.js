const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "The Dead Zone",
    author: "Stephen King",
    description: "Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems.",
    image: "https://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE728uv9DTyEx6T90sXRt01W7PFkC1Zv1OzZAj4UDaDefm1gns1joyqSHKPC5fDVxIt33yjpPWL3opBDv5dppji_8D-hpn-8dvMjRRCZ67BtsDVaMO36NRsHw1SXG019t7iQK3bO-",
    link: "https://books.google.com/books?id=ZbUACwAAQBAJ&newbks=1&newbks_redir=0&dq=The+dead+zone&source=gbs_navlinks_s"
  },
  {
    title: "The Punch Escrow",
    author: "Tal M. Klein",
    description: "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. And teleportation has become the ideal mode of transportation, offered exclusively by International Transport—the world’s most powerful corporation, in a world controlled by corporations. Joel Byram spends his days training artificial-intelligence engines to act more human and trying to salvage his deteriorating marriage. He’s pretty much an everyday twenty-second century guy with everyday problems—until he’s accidentally duplicated while teleporting.Now Joel must outsmart the shadowy organization that controls teleportation, outrun the religious sect out to destroy it, and find a way to get back to the woman he loves in a world that now has two of him.",
    image: "https://books.google.com/books/content?id=wns3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71K7aDEXmTTm0p_ygjwMhUHoEg-mQU3idYiwYFUZ_z-Tn5N6RDZ4gGDfyO0Pbk2wqt6BYaQzjAhWgBhdCD4IbiV-BRBrfjfINZvCRKbUKRc09Ecl755opMPMjVQUIk9v9P-EUT4",
    link: "https://books.google.com/books?id=wns3DwAAQBAJ&newbks=1&newbks_redir=0&dq=The+punch+escrow&source=gbs_navlinks_s"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "Harry Potter has never been the star of a Quidditch team, scoring points while riding a broom far above the ground. He knows no spells, has never helped to hatch a dragon, and has never worn a cloak of invisibility. All he knows is a miserable life with the Dursleys, his horrible aunt and uncle, and their abominable son, Dudley -- a great big swollen spoiled bully. Harry's room is a tiny closet at the foot of the stairs, and he hasn't had a birthday party in eleven years. But all that is about to change when a mysterious letter arrives by owl messenger: a letter with an invitation to an incredible place that Harry -- and anyone who reads about him -- will find unforgettable.",
    image: "https://books.google.com/books/content?id=gqX7rQEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70A835wg9vGtvWBGTAxE12z8Ksc7cpkj_QynQq6nWx3XdS61SWI3C36L7k11pv3yGACJsWcdK6xzQkExl3869X954RaXWEubzeI3v3hd16VvImdyuJ-CeJChI6Qsuq-cirYuVLV",
    link: "https://books.google.com/books?id=gqX7rQEACAAJ&dq=harry+potter+and+the+sorcerer%27s+stone&hl=en&newbks=1&newbks_redir=0&sa=X&ved=2ahUKEwi8lcH9zpXnAhXSXc0KHaJsA1kQ6AEwAHoECAMQAg"
  },
  {
    title: "Coraline",
    author: "Neil Gaiman",
    description: "In Coraline's family's new flat there's a locked door. On the other side is a brick wall—until Coraline unlocks the door . . . and finds a passage to another flat in another house just like her own. Only different. The food is better there. Books have pictures that writhe and crawl and shimmer. And there's another mother and father there who want Coraline to be their little girl. They want to change her and keep her with them. . . . Forever.",
    image: "https://books.google.com/books/content?id=pXlAY0XnrQUC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73-t5W_X5iXNJ81qzGbq2RXp_FNfV53yDBSqrd8yrEo3FXEZVlrXQt5rQ7-mkjCE6qLhoFNfsSceLeT70ViSs27IPeAQmqfD8a5LuHPSC-tIEvb0rB7eeUNMhhrwayepXKhiacp",
    link: "https://books.google.com/books?id=pXlAY0XnrQUC&newbks=1&newbks_redir=0&dq=coraline&source=gbs_navlinks_s"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    description: "When obsessed university student Victor Frankenstein finds the secret of animating dead flesh, he tries to create the first of a master race, stitching rotting corpses into a superhuman giant. Then the ghastly thing opens its hideous, soulless eyes and Frankenstein flees into the night, shrieking with horror-- Leaving a being who wants love and finds hate, wants friends and finds enemies, wants another and finds no one. Frankenstein is its father, mother, maker and living god, and Frankenstein has abandonded his own monster to a living hell of unutterable isolation. But now, unstoppable, the creature means to get revenge for having been born-- Not by killing its creator...but by destroying everything holds dear, and everyone Frankenstein loves...",
    image: "https://books.google.com/books/content?id=MwkYUxyipDwC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73oKI1d377xsUvDyriXmqsP44dNrhcsT0bAnIWAsnPOvpiRpNXOnqmGiGStpLGgH6bqy33fHpBILd_jQbT9T1EYwOP6wnwSy1TF0n6VRRGvkdo3rtjCGn7rNfKBf_Mr977ExA8g",
    link: "https://books.google.com/books?id=MwkYUxyipDwC&newbks=1&newbks_redir=0&dq=frankenstein&source=gbs_navlinks_s"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
    image: "https://books.google.com/books/content?id=iXn5U2IzVH0C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71T4Y4IGksPOzbEEbg7P3FHEmCzs1Zux-vqn4djFq1A5Vf8vlF_NmM8CklCli___XP4AWnDNfkJOKQQy05YVMpPL74OhAtLhJNkajmuO-BKwnz7APfYbIEqvWkyAZe6Opq4L7pT",
    link: "https://books.google.com/books?id=iXn5U2IzVH0C&newbks=1&newbks_redir=0&dq=the+great+gatsby+by+f.+scott+fitzgerald&source=gbs_navlinks_s"
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    author: "Trevor Noah",
    description: "Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man’s relationship with his fearless, rebellious, and fervently religious mother—his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life.",
    image: "https://books.google.com/books/content?id=N97UCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72PW5OiY7mxu7Gcdjg0lWbGVh2AnWMeYQ4cXWPtEII_U11grHnojVl1nMDqfA7Z8zDQ5JhEuu8AJ27PwKfcTh6eusaCEaNG7QBTM1nqlI56lCFtB9fIxFSoK5c8fKEYz4-NMaXx",
    link: "https://books.google.com/books?id=N97UCwAAQBAJ&newbks=1&newbks_redir=0&dq=born+a+crime+trevor+noah&source=gbs_navlinks_s"
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });