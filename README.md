# Strava bulk privacy edit
> 25/09/19

Do you have plenty of activity and you want to change the privacy settings for all of them?
Than this little script will help you.

## How does it work?

If you go to the Strava page: `https://www.strava.com/athlete/training`, you will se all
your activities, grouped in pages of 20 activities each. Each row is an activity and you can
easily click the `edit` button, then change the privacy settings and finally `Save`.
This is easy, but what if you have plenty of activities? Then I suggest you to use this little
script.

## Ok, but how?

If you are using Chrome, then just right-click on the page, then click, in the menu that appears,
`Inspect` (it should be the last voice). A new fancy full-of-stuff panel will open then.
Now click the `Console` tab in that panel and just copy-and-paste this code:


```js
document
  .querySelectorAll('.training-activity-row')
  .forEach(row => {
    // clicking "Edit" link
    row
      .querySelector('.quick-edit')
      .click()

    // setting new value. Possible choices are:
    // everyone, followers_only, only_me
    row
      .querySelector('.visibility-select select')
      .value = 'only_me'

    // save!
    row
      .querySelector('.edit-actions')
      .querySelector('button')
      .click()
  })

```

As you can see, this code will do exactly what you can do by hand:

- clicks `Edit` link on each row (remember? Each row is an activity)
- changes the privacy value (change to whatever you want)
- clicks `Save`

In a second it will change 20 activity privacy settings. Now move to the next page and just redo.

Funny, huh?

## Does it work?

Yes. I changed the privacy for over 500 activities in seconds.

## Files in this project

Each file contains the right script able to change the privacy settings exactly to what the
file name says.

## Disclaimer

I have tested at time of writing and I will never be responsible to data loss or wrong usage
of this code. I'm sharing because sharing is caring.
