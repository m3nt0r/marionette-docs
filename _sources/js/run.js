$(function(){
	
	var fancynames = {
		'itemview': 'ItemView',
		'compositeview': 'CompositeView',
		'collectionview': 'CollectionView',
		'approuter': 'AppRouter',
		'regionmanager': 'RegionManager',
		'templatecache': 'TemplateCache',
		'requestresponse': 'RequestResponse'
	};
	
	$('ul.docs > li > a').each(function(i, item) {
		var itemName = $(item).text().replace('Marionette.', '').toLowerCase();
		$(item).text(typeof fancynames[itemName] !== 'undefined' ? fancynames[itemName] : itemName);
	});
	
	var sortAlpha = function(a, b) {
		var upA = $(a).text().toUpperCase(), upB = $(b).text().toUpperCase();
		return (upA < upB) ? -1 : (upA > upB) ? 1 : 0;
	};
	
	$('header ul.docs > li').sort(sortAlpha).appendTo('header ul.docs');
	$('footer ul.docs > li').sort(sortAlpha).appendTo('footer ul.docs');
});