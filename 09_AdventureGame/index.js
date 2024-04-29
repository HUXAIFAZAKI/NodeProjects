import inquirer from "inquirer";
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
const enemyMaxHealth = 100;
const enemyAttackDamage = 25;
let health = 100;
const attackDamage = 50;
let numHealthPotions = 3;
const healthPotionsHealAmount = 30;
const healthPotionsDropChance = 50;
let isRunning = true;
console.clear();
console.log("++++++++++++++++++++++++++++++++");
console.log("Welcome to Dungeon Adventure Game");
console.log("++++++++++++++++++++++++++++++++");
GAME: while (isRunning) {
    let enemyHealth = Math.floor(Math.random() * (enemyMaxHealth - 25 + 1)) + 10;
    let enemy = enemies[Math.floor(Math.random() * (4))];
    console.log(`\n${enemy} spawned with ${enemyHealth} Health`);
    while (enemyHealth > 0) {
        console.log(`\nYour HP : ${health}`);
        console.log(`${enemy} HP : ${enemyHealth}`);
        const answer = await inquirer.prompt([
            {
                name: "userAction",
                type: "list",
                choices: ['Attack', 'Drink Health Potion', 'Run'],
                message: "What would you like to do : ",
            }
        ]);
        if (answer.userAction === 'Attack') {
            let damageDealt = Math.floor(Math.random() * (attackDamage - 10));
            let damageTaken = Math.floor(Math.random() * (enemyAttackDamage));
            enemyHealth -= damageDealt;
            health -= damageTaken;
            console.log(`\nYou attacked ${enemy} with ${damageDealt}`);
            console.log(`${enemy} attacked you with ${damageTaken}`);
            if (health < 1) {
                console.log(`\nYou have taken alot of damage from ${enemy}`);
                break;
            }
        }
        else if (answer.userAction === 'Drink Health Potion') {
            if (numHealthPotions > 0) {
                health += healthPotionsHealAmount;
                numHealthPotions--;
                console.log(`You drink health potion. You got healed by ${healthPotionsHealAmount}
                            \nYou Now Have ${health} Health
                            \nYou have ${numHealthPotions} left.`);
            }
            if (numHealthPotions === 0) {
                console.log("You got no health potions. Defeat your enemy for a chance to get health potion.");
            }
        }
        else if (answer.userAction === 'Run') {
            console.log(`You Ran Away from ${enemy}`);
            continue GAME;
        }
        else {
            console.log("Please select a valid Choice");
        }
    }
    if (health < 1) {
        console.log("\nYour Dead");
        break;
    }
    console.log("-----------------------------------------");
    console.log(`${enemy} have been defeated!`);
    console.log(`You have ${health} Health left`);
    if (Math.floor(Math.random() * 10) < healthPotionsDropChance) {
        numHealthPotions++;
        console.log(`${enemy} dropped a Health Potion`);
        console.log(`You now have ${numHealthPotions} Potions`);
    }
    console.log("-----------------------------------------");
    console.log("What would you like to do now?");
    const answer = await inquirer.prompt([
        {
            name: "userAction",
            type: "list",
            choices: ['Continue Fighting', 'Exit Dungeoun'],
            message: "What would you like to do : ",
        }
    ]);
    if (answer.userAction === 'Continue Fighting') {
        console.log("Continue your adventure in dungeoun!");
    }
    else if (answer.userAction === 'Exit Dungeoun') {
        console.log("You exit the Dungeoun Successfully");
        break;
    }
}
