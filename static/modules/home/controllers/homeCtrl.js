'use strict';
(function ()
		{
angular.module('homeCtrl', [])
  .controller('homeCtrl', function ($scope) {
	  $scope.slides2 = [
	                {},
	                {},
	                {}           
	            ];

	            $scope.options2 = {
	                visible: 0,
	                perspective: 30,
	                startSlide: 1,
	                border: 0,
	                dir: 'ltr',
	                width: 300,
	                height: 460,
	                space: 125,
	                loop: true,
	                controls: true
	            };
    $scope.dataArray = [
      {
        src: '/temp-assets/emc.jpg',
        comments: 'Thanks for the fabulous support guys! Convey my best wishes and thanks to your team.',
        cmpname: 'EMC Corporation'
      },
      {
        src: '/temp-assets/tcs.jpg',
        comments: 'We collabrate with Freshersworld for our Graduate Engineer Trainee hiring and it was a wonderful experience.',
        cmpname: 'TATA Chemicals Ltd'
      },
      {
        src: '/temp-assets/Odessa.jpg',
        comments: 'I have had the pleasure of working with freshersworld.com for my tech and QA hiring processes.',
        cmpname: 'Odessa Technologies'
      }
    ];
    $scope.cardArray = [
      {
        "title": "Which <b class='yellow'>Resume Database Access Package</b> is Right for You?",
        "cards": [
          {
            "icon": "background: url(/temp-assets/sprite_new.png) -16px -534px no-repeat",
            "heading": "Jump Starter",
            "content": [
              {
                "data": "300 Resume / CV Access"
              }, {
                "data": "300 Emails / Call Letters"
              }, {
                "data": "30 Days Validity"
              }, {
                "data": "RPE Based Resumes"
              }, {
                "data": "Track Mail and Call Letter Response"
              }, {
                "data": "Sub-Location Based Search"
              }
            ],
            "cost": "₹2,000/-",
            "btnName": "Buy Now",
            "footerMessage": "Quick &Easy Online Payment",
            "specialoffers": false,
            "offerpercent": "",
            "offerdesc": "",

          },
          {
            "icon": "background: url(/temp-assets/sprite_new.png) -115px -534px no-repeat",
            "heading": "Economy",
            "content": [
              {
                "data": "<strike class='offer'>1000</strike> 1200 Resume / CV Access"
              }, {
                "data": "<strike class='offer'>1000</strike> 1200 Emails / Call Letters"
              }, {
                "data": "60 Days Validity"
              }, {
                "data": "RPE Based Resumes"
              }, {
                "data": "Track Mail and Call Letter Responses"
              }, {
                "data": "Sub-Location Based Search"
              }
            ],
            "cost": "₹5,000/-",
            "btnName": "Buy Now",
            "footerMessage": "Quick &Easy Online Payment",
            "specialoffers": true,
            "offerpercent": "20%",
            "offerdesc": "Additional 200 CVs & Email Credits",

          },
          {
            "icon": "background: url(/temp-assets/sprite_new.png) -64px -523px  no-repeat",
            "heading": "Prudent",
            "content": [
              {
                "data": "4000 Resume / CV Access"
              }, {
                "data": "4000 Emails / Call Letters"
              }, {
                "data": "120 Days Validity"
              }, {
                "data": "RPE Based Resumes"
              }, {
                "data": "Track Mail and Call Letter Responses"
              }, {
                "data": "Sub-Location Based Search"
              }
            ],
            "cost": "₹10,000/-",
            "btnName": "Buy Now",
            "footerMessage": "Quick &Easy Online Payment",
            "specialoffers": false,
            "offerpercent": "",
            "offerdesc": "",

          }
        ],
        "desc":"* For customized bulk recruitment, please contact admin at <b style='color:#23527c'>recruit@freshersworld.com</b>",
      },
      {
        "title": "Which <b class='yellow'>Hot Job Package</b> is Right for You?",
        "cards": [
          {
            "icon": "background: url(/temp-assets/sprite_new.png) -162px -542px  no-repeat",
            "heading": "Hot 1",
            "content": [
              {
                "data": "1 Paid Job"
              }, {
                "data": "Upto 100 Hot Profiles for Every Paid Jobs"
              }, {
                "data": "Download Contacts of All Applicants"
              }, {
                "data": "RPE Based Resumes"
              }, {
                "data": "Sens Emails / Call Letters to All Applicants"
              }, {
                "data": "30 Days Validity"
              }
            ],
            "cost": "₹1,500/-",
            "btnName": "Buy Now",
            "footerMessage": "Quick &Easy Online Payment",
            "specialoffers": false,
            "offerpercent": "",
            "offerdesc": "",

          },
          {
            "icon": "background: url(/temp-assets/sprite_new.png) -162px -542px   no-repeat",
            "heading": "Hot 5",
            "content": [
              {
                "data": "5 Paid Job"
              }, {
                "data": "Upto 100 Hot Profiles for Every Paid Jobs"
              }, {
                "data": "Download Contacts of All Applicants"
              }, {
                "data": "RPE Based Resumes"
              }, {
                "data": "Sens Emails / Call Letters to All Applicants"
              }, {
                "data": "90 Days Validity"
              }
            ],
            "cost": "₹7,000/-",
            "btnName": "Buy Now",
            "footerMessage": "Quick &Easy Online Payment",
            "specialoffers": true,
            "offerpercent": "Most Selling Package",
            "offerdesc": "(Preferred by 40% of recruiters)",

          },
          {
            "icon": "background: url(/temp-assets/sprite_new.png) -162px -542px   no-repeat",
            "heading": "Hot 10",
            "content": [
              {
                "data": "10 Paid Job"
              }, {
                "data": "Upto 100 Hot Profiles for Every Paid Jobs"
              }, {
                "data": "Download Contacts of All Applicants"
              }, {
                "data": "RPE Based Resumes"
              }, {
                "data": "Sens Emails / Call Letters to All Applicants"
              }, {
                "data": "180 Days Validity"
              }
            ],
            "cost": "₹13,000/-",
            "btnName": "Buy Now",
            "footerMessage": "Quick &Easy Online Payment",
            "specialoffers": false,
            "offerpercent": "",
            "offerdesc": "",

          }
        ],
        "desc":"",
      }
    ];



  });
})();