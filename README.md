Project2: Skilltoys Database
Heroku Production Link: https://skilltoys.herokuapp.com/
ERD: https://lucid.app/lucidchart/8ea4dfd4-6f75-403a-b274-bb5cb431a06e/edit?invitationId=inv_da2006da-e84b-4278-a1c2-dfca6e86f0c2
Trello: https://trello.com/b/C3lDdGi1/project-2-management
GitHub Repository:
https://github.com/Studio42-com/project2-skilltoys

Additional work notes in "files to read" and ProjectDocs directories.
Informational Section: 
The yoyo is one of the oldest toys known to man. Only the doll is considered older. Proof of the existence of yoyos has been documented as paintings on Ancient Greek pottery that has been dated to earlier than 2500 BC. This toy has been played with by childen and adults of all ages and status, including kings and emperors. Even Napolean was painted playing with a “bandalore”, which is a yoyo that has the string tied to it.
In American between 1928 and 1932. Pedro Flores began making and selling yoyos based on a variation of a design from the Philipines. Rather than the string being tied to the axle, the string used a new design of being wrapped upon itself, thus facilitating the string being able to be looped around the axle and allowing the yoyo to “sleep”, or spin at the end of the string. Between 1930 and 1932, Pedro Flores sold his interest to Donald Duncan. This was the beginning of Duncan YoYos, a brand now owned by Flambeau, Inc an is still in business today, making a very wide variety of yoyos.
While Pedro Flores is credited with bringing the Yo-Yo to America, Duncan is credited with making yoyos popular world-wide. Duncan's innovations involved the creation of the butterfly shape by accidentally assembling a yoyo with the halves inside out. He also pioneered the use of a metal rod for the axle to reduce costs, as well as molded-plastic construction of the halves.
The transition to modern yoyo is the result of San Francisco dentist Tom Kuhn, who had been making his own yoyos since the 1970s. His most notable products are the No Jive 3-in-1, which is the first modular yoyo, and the Silver Bullet, which was the first metal yoyo. The big step-forward was the Silver Bullet-2, which was the first ball bearing yoyo. Yoyos featuring ball bearings is the basis for almost all modern yoyos.
In 2003, a player by the name of Johnny DelValle won the Bay Area Classic(regional), Worlds and US National yoyo contest with a vastly different play style that included not only complicated string configurations, it also put unresponsive yoyo play on the map as the new standard style of play.
Yoyo is currently categorized into 5 major play styles:
1A: This is what most people think of regarding yoyo. This is define as a single, wing-shape long spinning yoyo.
2A: This style of play requires 2 “modified shape” yoyos for looping-type tricks, using 1 yoyo per hand.
3A: This involves the use of 2 wing-shaped long spinning yoyos, 1 per hand, performing tricks where the yoyos interact with their own string and the string of the other yoyo.
4A: Offstring. This style has evolved to use an “oversized” yoyo that is NOT connected to the string, hence the term off-string. The string is wound up onto the yoyo, the yoyo is thrown and launched ito the air and then tricks are performed with the yoyo and string until recalled by the player and the process repeats. This style is derived from the diabolo, which itself is a modern variation of the chinese yoyo.
5A: Using a single wing-shape long-spinning yoyo, the string is connected to the yoyo, while the other end is connected to a counterweight, rather than attached to the player. Tricks are done while manipulating the counterweight, string and yoyo.
1A, 3A and 5A use the same equipment in a general sense. Some designs are stronger for some styles than others based on shape and weight distribution.
2A and 4A styles use yoyos designed for those styles of play.
We have mentioned the term “unresponsive” play, which means there must be something known as “responsive” play. In simple terms, responsive is short for “tug responsive”. Responsive yoyos come back when you tug on the string, with that small amount of slack creating a method of the yoyo wrapping the string up and returning to the player. Unresponsive yoyos will not return to the player using a tug. Responsive yoyos come back when the player uses what is known as a “bind return” that puts extra string into the gap. This extra string interacts with the response pad and then the yoyo returns. Unrespnsive play is due to the wide gap in the center of the yoyo. Unresponsive ball bearing yoyos are what makes the 1A, 3A and 5A divisions possible.
In contrast, 2A yoyos are responsive, which is necessary for looping. 4A yoyos tend to have a relatively narrow gap and if were strung up like the other yoyos, would be responsive. If it wasn't, it would be difficult to recall the yoyo. 
Currently, yoyos are made from a wide variety of plastics, metals and more materials. There has also been a resurgence in fixed axle yoyos made of wood.

Purpose:
With so many yoyos on the market and seemingly no end in sight for new models, there needs to be a way to keep track of things on basic level. We need a historical record noting the existence of certain yoyos, especially the old ones and those that are out of production. We also need a record of yoyos for ongoing maintenance should someone obtain a yoyo and need to keep it operating. The current problem with all existing databases is the controlling nature of those maintaining the databases, as well as not fixing malfunctioning databases. My project has already created a lot of “drama” and “uproar” in the yoyo community, which became so bad even the National YoYo Museum got someone to go fix their broken database.
This project is to be a simple implementation that will unfortunately lack some of the more advanced features I would like to implement later over time. The design is also intended to be adaptable. By adding, subtracting or changing fields, the database can either support a wider range of skill toys, or be used to create a new database for different skill toys. For example, the requirements for spin tops are drastically different than yoyos, so it may be better for spin tops to be completely separate.
Objective:
Basic "proof of concept" for an international database of yoyos. The main purpose is for historical and maintenance purposes. With an unknown number of active, or at least living players, and unknown how large any collections are, a open community-accessible database would theoretically allow for users to individually add as many yoyos as they feel like making an effort. With thousands of yoyos available, it's too much work for an individual or group to handle. In addition, it would be impossible for anyone to have a complete listing. While this database could never be complete, minimal efforts would keep the database reasonable current. The larger skill toy retailers typically do not receive more than a dozen new models at a time, so some of the input could be offloaded to their people who update their inventory for their web storefront. During the course of this project, I think at least 6 or more new models have hit the market. New items come in bumps here and there or trickle in.
1: The historical portion is simply the inclusion of the yoyo into the database. Many yoyos do not have long production lives. Some yoyos were not made in big quantities. Some yoyos are made by small companies and their products would be lost to time if not included. There is no "weighting" in this database as far as importance. I currently have quite a few small run and/or small company yoyos. Due to lack of widespread distribution, these types of items are easily lost.

2: The maintenance element is to provide a consolidated single reference point that will quickly and provide users with information regarding specific yoyos. Key information will include bearing size, bearing type, axle type and response pad, to name a few things. A good practical example would be "I lost the set screw that came with the yoyo and I need to get a replacement axle". Similarly would be "I need a new bearing and I don't know what size I need". Another common question would be "What response pad sizes do I need?" as well as "Can I silicone this yoyo". It is also not uncommon to buy a yoyo used and it being in a “some assembly required” condition. To relay 2 short personal experiences, I received a yoyo that was missing the axle and another yoyo that was missing a response pad. For the yoyo missing the axle, I actually called the company owner and got an answer. He also offered to send one but I said that was OK and I was happy to take care of this myself. The yoyo with the missing response pad was a simple solution as I pulled the other response pad and siliconed the yoyo.

Goals: 
    Make a bare-bones database and interface.
        Status:Accomplished. It even includes a photo link.
        A yoyo will be added with a photo during presentation.
    Authentication: Basic authentication using Google's OAuth.
        Status: Basic authentication achieved.
    Add Reviews
        Status: Reviews can be added and removed.
        A review will be added and removed during presentation.
    Allow for users/companies add in new companies that will populate a select menu.
        Status: Working
            Sub-Goal: Working through display issues.
        I will add a small brand during presentation.
    Due to new bearings being introduced, the ability of users to add to this and populate a select menu.
        Status: For "control" purposes, no direct link is offered but functionality can be proven.
        I will add a bearing type during presentation to provde functionality.

The index page. I initially wanted a different landing page, but for now, it takes us right to a listing of entries:

(image index-nogin)

When one passes Oauth, more functions open up:
(image-login)

To address that new companies come and go, it is better for users and/or small company owners to have an easy option to add their own company in and then they can add their products into the database:

(image addcompanies.jpg).

These company entries are used to populate the Company menu on form for adding new items:

(image additem)

Users who are not logged in can see item information. Authentication is only necessary to make additions or reviews:

(image viewitem.png)

Reviews can be added and removed:

(image reviews.png)

Because there are new bearings being either designed or discovered that are good for yoyos, it is important to have a method of easily adding in new bearings. This is a non-published link for the time being.

(image bearings.png)






Icebox items:
    Rather than present users with an unsorted list, the goal would be to have a list sorted by company and then by model.
    Further refinement: User can search by various attributes via a page that can help users find yoyos. The initial concept would be "search by company" and/or "search by model name". Other logical searches could be diameter range, width range, weight range and even gap.
        Some users have preferences when it comes to certain specs. "I'm looking for yoyos with a diameter of 56mm and a weight of no more than 66 grams" are rather popular competition requirements.

    Add responsive/unresponsive

    Make the 1A/2A/3A/4A/5A choices behave in inclusive/exclusive manner:
            2A and 4A are specific and would block the 4 other styles.
            1A,3A and 5A all use the same general type of yoyo, but some are not optimized for all styles of play.

    Ability to make significant and small changes. One idea is to limit changes to the photo, while an alternate solution is "you can change anything", and the page would populate itself with the values from the object and any non-altered and altered data be pushed back to the object, facilitating the update. The reason behind this is to correct mistakes.

    A field to add colors to the yoyo. This would include things like solids and colorways. This would be done on a per yoyo basis. Yoyos often will have different runs, with a different color/colors and/or colors/colorways per run. For example: One Drop typically does solids with their first run, along with 3-4 colorways. Later runs will include different colorways. CLYW does not always do their Claireview Station and/or 28 Stories with their yoyos these days. YYF may do aqua,red and blue for many yoyos, but there's no guarantee. I have multiples of several yoyos. It's better to add colors than to add another entry because of a color.

    Better implementation of security. There needs to be levels of authorization. For a prototype, basic is sufficient. Additions and reviews can only be added by authenticated users. All other users should be free to browse the database to find the information they need.
