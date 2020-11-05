# **pig_dice**
Updated: 2020-11-05
## **Project Description**
This project allows a user (or 2 users using the same computer) to play a simple dice game called "Pig".  Each players tries to be the first to reach a score of 100 and win the game.
## **Required for Use**
A browser that can run HTML5 is required.
## **Installation Instructions**
**Option 1** (live webpage)
1) Follow the link below to access the live version of this webpage.
https://rmgit-it.github.io/pig_dice/
**Option 2** (direct download)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/RMGit-it/pig_dice
2) Download a .zip copy the repository by clicking on the large green "Code" button near the upper right corner of the screen.
3) Right click the .zip file and extract(unzip) it's contents.
4) Open the unzipped folder and launch the file named "index.html".  If the file does not automatically launch using your default web browser, you can right click on the file and choose which application you would like to open the index.html file with.

**Option 3** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

<code>git clone https://github.com/RMGit-it/pig_dice</code>
3) Once the project has finished downloading, navigate to the root directory of the project in the terminal/console, and type <code>code .</code> and then hit return/enter.

The project should automatically launch using your default application(s).
## **Usage / Examples (Game Rules)**
The goal of the game is to be the first player to have a score of at least 100.  Each player takes turns rolling a die (pressing the "Roll" button), which will give them a random value between 1 and 6.  If the die rolls 2-6, that value is added to their "Turn Total".  At any time, the player can choose to hold (press the "Hold" button).  Holding will end their turn and add the Turn Total to their score. If the player rolls a 1, then their Turn Total returns to 0, nothing is added to their score, and their turn ends.
## **Planned Features**
Possible feature: Option to play agains a computer oponent.
## **Specs**
| Description p1Roll();

Test: "It will generate a random number as output between 1-6"
Expect: ((p1Roll).click).toEqual("1-6");

Test: "It will store output number as element in array1"
Expect: ((p1Roll).click).toEqual([3, 2, 5]);

Test: "It will push the sum of elements in array1 to subtotal"
Expect: ((p1Roll).click).toEqual(array1 = [3, 2, 5]) subtotal = "10"

Test: "It will add the subtotal to total"
Expect ((p1Roll).click).toEqual(total = subtotal + total);

Test: "It will change subtotal to an empty array when current roll is equal to 1"
Expect: (((p1Roll).click)=1)).toEqual(array1=[]);

| Description p1Hold();

Test: "It will add total to score"
Expect: ((p1Hold).click).toEqual(score = score + total);

Test: "It will hide buttons for player one after clicking hold, show player two buttons and vice versa"
Expect: ((p1Hold).click).toEqual(show p2Roll and P2Hold buttons) and (hide p1Roll and p1Hold buttons);

| Description p2Roll();

Test: "It will generate a random number as output between 1-6"
Expect: ((p2Roll).click).toEqual("1-6");

Test: "It will store output number as element in array1"
Expect: ((p2Roll).click).toEqual([3, 2, 5]);

Test: "It will push the sum of elements in array1 to subtotal"
Expect: ((p2Roll).click).toEqual(array1 = [3, 2, 5]) subtotal = "10"

Test: "It will add the subtotal to total"
Expect ((p2Roll).click).toEqual(total = subtotal + total);

Test: "It will change subtotal to an empty array when current roll is equal to 1"
Expect: (((p2Roll).click)=1)).toEqual(array1=[]);

| Description p2Hold();

Test: "It will add total to score"
Expect: ((p2Hold).click).toEqual(score = score + total);

Test: "It will hide buttons for player one after clicking hold, show player two buttons and vice versa"
Expect: ((p2Hold).click).toEqual(show p1Roll and P1Hold buttons) and (hide p1Roll and p1Hold buttons);

## **Known Bugs**
You must refresh the page to start a new game.
## **Technology Used**
* HTML
* JavaScript
* Bootstrap
* jQuery
* CSS
## **Authors and Contributors**
Co-Authored-By: Randel Moore
Co-Authored-By: Harrison Strand (https://github.com/HarrisonStrand/)
Initial Start Date: 2020-11-04
## **Contact**
email@email.com
## **License**

GPLv3

Randel Moore © 2020
