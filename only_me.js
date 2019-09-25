/**
 * Created by brugnara on 25/09/19,
 * @ daniele@brugnara.me
 */

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
