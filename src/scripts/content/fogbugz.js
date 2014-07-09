/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('#bugviewContainer', {}, function (elem) {
  var link, description,
    numElem = $('#bugviewContainer .ixBug a'),
    titleElem = $('.idTitleProjectAndArea .title'),
    projectElem = $('.idTitleProjectAndArea .subtitle a');

  description = titleElem.innerText;
  if (numElem !== null) {
    description = numElem.innerText + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'fogbugz',
    description: description,
    projectName: projectElem && projectElem.textContent
  });
  var div = createTag("div", "ixBug7");
  div.appendChild(link);
  $('#bugviewContainer .ixBug').appendChild(div);
});
