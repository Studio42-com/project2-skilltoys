ERD: https://lucid.app/lucidchart/8ea4dfd4-6f75-403a-b274-bb5cb431a06e/edit?invitationId=inv_da2006da-e84b-4278-a1c2-dfca6e86f0c2

Trello: https://trello.com/b/C3lDdGi1/project-2-management

Additional work notes in "files to read" and ProjectDocs directories.

Objective: Basic "proof of concept" for an international database of yoyos. The main purpose is for historical and maintenance purposes. With an unknown number of active, or at least living players, and unknown how large any collections are, a open community accessible database would theoretically allow for users to individually add as many yoyos as they feel like making an effort. With thousands of yoyos available, it's too much work for an indivudual or group to handle. In addition, it would be impossible for anyone to have a complete listing. While this database could never be complete, mininimal efforts would keep the database reasonable current. The larger skill toy retailers typically do not receive more than a dozen new models at a time, so some of the input could be offloaded to their people who update their inventory for their web storefront. During the course of this project, I think at least 6 or more new models have hit the market.

1: The historical portion is simply the inclusion of the yoyo into the database. Many yoyos do not have long production lives. Some yoyos were not made in big quantities. Some yoyos are made by small companies and their products would be lost to time if not included. There is no "weighting" in this database as far as importance. I currently have quite a few small run and/or small company yoyos. Due to lack of widespread distribution, these types of items are easily lost.

2: The maintenance element is to provide a consolidated single reference point that will quickly and provide users with information regarding specific yoyos. Key information will include bearing size, bearing type, axle type and response pad, to name a few things. A good practical example would be "I lost the set screw that came with the yoyo and I need to get a replacement axle". Similarly would be "I need a new bearing and I don't know what size I need". Another common question would be "What response pad sizes do I need?" as well as "Can I silicone this yoyo".

Goals: 
    Make a bare-bones database and interface.
        Status:Accomplished. It even includes a photo link.
        A yoyo will be added with a photo during presentation.
    Authentication: Basic authenticaton using Google's OAuth.
        Status: Basic authentication achieved.
    Add Reviews
        Status: Reviews can be added and removed.
        A review will be added and removed during presentation.
    Allow for users/companies add in new companies that will populate a select menu.
        Status: Working but needs to be sorted alphabetically.
            Sub-Goal: Working through display issues.
        I will add a small brand during presentation.
    Due to new bearings being introduced, the ability of users to add to this and populate a select menu.
        Status: For "control" purposes, no direct link is offered but functionality can be proven.
        I will add a bearing type during presentation to provde functionality.

Icebox items:
    Rather than present users with an unsorted list, the goal would be to have a list sorted by company and then by model.
    Further refinement: User can search by various attributes via a page that can help users find yoyos. The initial concept would be "search by company" and/or "search by model name". Other logical searches could be diameter range, width range, weight range and even gap.
        Some users have preferences when it comes to certain specs. "I'm looking for yoyos with a diameter of 56mm and a weight of no more than 66 grams" are rather popular competition requirements.

    Add responsive/unresponsive

    Make the 1A/2A/3A/4A/5A choices behave in inclusive/exlusive manner:
            2A and 4A are specific and would block the 4 other styles.
            1A,3A and 5A all use the same general type of yoyo, but some are not optimized for all styles of play.

    Ability to make significant and small changes. One idea is to limit changes to the photo, while an alternate solution is "you can change anything", and the page would populate itself with the values from the object and any non-altered and altered data be pushed back to the object, facilitating the update. The reason behind this is to correct mistakes.

    A field to add colors to the yoyo. This would include things like solids and colorways. This would be done on a per yoyo basis. Yoyos often will have different runs, with a different color/colors and/or colors/colorways per run. For example: One Drop typically does solids with their first run, along with 3-4 colorways. Later runs will include different colorways. CLYW does not always do their Claireview Station and/or 28 Stories with their yoyos these days. YYF may do aqua,red and blue for many yoyos, but there's no guarantee. I have multiples of several yoyos. It's better to add colors than to add another entry because of a color.

    Better implementation of security. There needs to be levels of authorization. For a prototype, basic is sufficient.