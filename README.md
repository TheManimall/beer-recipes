### COAX TEST TASK

Tasks:
- get list of recipes on initial load, save them in redux store ( by using this url
https://api.punkapi.com/v2/beers?page=1 you will receive 25 recipes).
- amount of rendered recipes should be always 10!
- only 5 recipes should be visible on a screen.
- implement lazy scroll functionality - if user will scroll to the bottom of the list, first 5 recipes should be removed from
render and next 5 should be added. This way user will be able to see 5 new recipes but rendered amount will always
be 10!
- if there is no more recipes to show, you should make another API request to get another 25 recipes.
- implement multiple selection of recipes. User can select multiple recipes by clicking on recipe with mouse right
button. If user selected at least one recipe "Delete" button should appear somewhere.
- if user will click "Delete" button, selected items should be removed from rendered list. (but still 10 recipes should be
rendered, so you will need to render one more recipe at the end)
- user can deselect recipe if item will be clicked one more time
- user can go to single recipe page by clicking on recipe with mouse left button.
- you can use any router you want, but user should be able to go back with browser back button.
