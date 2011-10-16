function onComplete(feed)
{
    var temp = '<ul>';
    for(var i = 0; i < feed.items.length; i++) {
        var item = feed.items[i];
        var url = item.link;
        var title = item.title;
        temp +='<li>';
        temp +='<a class="ril" href="http://readitlaterlist.com/edit_process.php?url=' + url + '&title=' + title + '" target="readitlateriframe">ReadItLater!</a>' + '<h3 class="title">' + title + '</h3>';
        temp +='<div class="description">' + item.description + '</div>';
        temp +='</li>';
    }
    temp += '</ul>';
    jQuery('#news').append(temp);

    jQuery('#news').append('<iframe style="display:none;" src="" width="0" height="0" name="readitlateriframe"></iframe>');
} 

