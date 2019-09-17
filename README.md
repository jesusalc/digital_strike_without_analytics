# Global Digital Strike without Analytics
The Global Digital Strike Widget without Analytics static 
and Wordpress Plugin without the google Analytics for those who want 
to help but really want to keep their users privacy.


This is the version is based on snapshot from main 
site `digitalclimatestrike.net` from 2019 Sept 17th. 

From the site and with the analytics removed.

There is a folder with the WP Plugin 
Notice when you install the plugin update the location 
of the ./static/js/widget.js` location 
to a place where you uploaded it in your own host. 

There is also the static option so you just look at how the index.html is done 
and adapt the code your needs. 
Basically, for a static page all you need is to updload the files to your host
and add the part between before the end of the head in static pages: 
```
    <!-- DIGITAL KLIMA STRIKE START-->
    <!-- DIGITAL KLIMA STRIKE ENDS-->
```
that is between those lines. See index.html file as example. 

You can also check the demo.html for another example of a static page. 
