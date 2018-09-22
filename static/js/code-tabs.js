
$('.tab-content').children('.tab-pane').each(function(idx, item) {
  var navTabs = $(this).closest('.code-tabs').children('.nav-tabs'),
      title = $(this).attr('title');
  // console.log(tabs_depth);
   navTabs.append('<li><a href="#">'+title+'</a></li');

});

$('.code-tabs ul.nav-tabs').each(function() {
  $(this).find("li:first").addClass('active');
})

$('.code-tabs .tab-content').each(function() {
  $(this).find("div:first").addClass('active');
});

$('.nav-tabs a').click(function(e){
  e.preventDefault();
  var tab = $(this).parent(),
      tabPanel = $(this).closest('.code-tabs'),
      tabPane = tabPanel.find('.tab-pane[title="' + e.target.text + '"]');

  tabPanel.find('.active').removeClass('active');
  tab.addClass('active');
  tabPane.addClass('active');

  var ctab = tabPane.find("li:first")[0];
  if (ctab != null && ctab.firstChild != null)
    ctab.firstChild.click();

  //console.log(tabPane.find("li:first")[0].firstChild);
});