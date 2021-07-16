# Freshersworld

Special thanks to [Freshersworld](https://www.freshersworld.com) and [Government Job Onlie](https://www.governmentjobonline.in) for giving me a chance to design their website screen.

# Demo URL

Feeling happy to show demo on my site - [CLICK HERE FOR DEMO](https://freshersworld-skyhorse.rhcloud.com)

## Installation Procedure

1. git clone https://github.com/Prem2k17/freshersworld.git  
      (OR) 
   npm install freshersworld
1. cd freshersworld
1. npm install
1. npm install gulp -g
1. For running in Development mode - "gulp serve:dev"
1. For running in Production mode  - "gulp serve:prod"

## Optimizations Added In Production Mode

1. Cached all html pages once at start of application. [htmlTemplateCache.js](https://github.com/Prem2k17/freshersworld/tree/master/dist/htmlTemplateCache.js)

1. Compressed all application css files into single css file. [app.min.css](https://github.com/Prem2k17/freshersworld/blob/master/dist/styles/app.min.css)
1. Compressed all plugin css files into single css file. [vendor.min.css](https://github.com/Prem2k17/freshersworld/blob/master/dist/styles/vendor.min.css)

1. Compressed all application js files into single js file. [app.min.js](https://github.com/Prem2k17/freshersworld/blob/master/dist/scripts/app.min.js)
1. Compressed all plugin js files into single js file. [vendor.min.js](https://github.com/Prem2k17/freshersworld/blob/master/dist/scripts/vendor.min.js)

1. Cached all html resource files using MD5 hashcode versioning method. [index.html](https://github.com/Prem2k17/freshersworld/tree/master/dist/index.html)

1. Optimized all images before integration, Used Sprite images concept for image optimization.

1. Integrate GZIP compression on server level resources.

## Web Performance - Google Analytics Performance Test Report

This website scores performance test

    # 80% on mobile layout and 

    # 93% on desktop layouts
    
# Reference :
[click here to view Google speed test report](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Ffreshersworld-skyhorse.rhcloud.com%2Fhome&tab=mobile)



