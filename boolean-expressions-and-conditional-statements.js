/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');


console.log(`You are the young apprentice of the healer living in a small village. 
  The king of your village is gravely ill. 
  The village healer has tried everything that she knows, but his illness is beyond her skills.
  Brave soldiers of the village have already been sent for help, but they have not returned nor sent any messages of their whereabouts. 
  The healer asks you to set out to seek help, you are her last resort.`);

  const beginAdventure = readline.question("Do agree to help the king? yes or no"); 
  

  if (beginAdventure === "no"){
      console.log (`Foolish! Your king dies an slow and painful death.
         Your village is plundered and everyone dies in vain.
         In the afterlife, the ghost of the healer shakes her head in dissapointment\;
         she should have listened to everyone and picked a different apprentice.`); 
         
         return 

      } else if (beginAdventure === "yes") {
      console.log (`The healer is so grateful you agreed to help the  king! 
        You say goodbye to your only family, a stray cat named Pinecone and you set out on your way!`);
        console.log (`You need to decide which way to go, towards the moutains, or towards the valley.`);
      }
        const mountainOrValley = readline.question(`Which way do you choose to go?`);

          if (mountainOrValley === "mountains") {
            console.log (`You head towards the mountains. The smell of the moutain pines remind you of your beloved cat Pinecone.`);
              console.log(`Along the way to the mountains, you see a sign for a village two miles off the path towards the moutain.
                Should you contine to the mountain as planned, or should you head towards the village instead?`);

                const mountainOrVillage = readline.question(`Which way do you choose to go?`);
                  if(mountainOrVillage === "mountains") {
                    console.log(`We keep going towards the mountain. 
                     Although you do start to wonder if that village would have been helpful to stop into. 
                     Maybe they had a village healer to chat with... `);
                  } else if (mountainOrVillage === "valley"){ 
                      console.log (`Oh bummer. You walk all that way and find out that it is a lepers village.
                        You are infected with leprosy and are now live in this village. Wait...
                        You see the brave soldiers that had left for help and were never heard from. 
                        You give a little wave to them. Hey guys!`);
                        return
                  }
          } else if (mountainOrValley === "valley"){
              console.log(`Oh dang, this valley was plaqued with a drought.
                You run out of water and dry up into a crisp. 
                One thousand years later archeologists find your crusty bones and wonder
                what you were doing so far from your village. 
                A research team is presenting their findings at a conference in Cleveland next week.`);

                return
          }
  



/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/