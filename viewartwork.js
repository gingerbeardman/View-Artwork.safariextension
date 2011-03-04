window.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
	var images = event.target.parentNode.getElementsByTagName('img');
	if (images.length != 0) {
		src = images[0].src;

		var image = src.replace(/34s|64s|126|174s/, '300x300');

	    var userInfo = {
	        name: event.target.nodeName,
			classname: event.target.className,
	        url: image
	    };

	} else {
	    var userInfo = {};
	}

    safari.self.tab.setContextMenuEventUserInfo(event, userInfo);
}
