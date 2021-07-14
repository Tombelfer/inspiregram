const story = [{
  // STORY #1
  "_id": "s101",
  "txt": "Fourth sprint be like:",
  "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/46058816_2278332059064487_9202437790728454144_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=0n0VHrqQgKYAX_rbnuR&edm=AP_V10EBAAAA&ccb=7-4&oh=30998cd690604a805c295db06d9019d8&oe=60F49CEC&_nc_sid=4f375e", //Can be an array if decide to support multiple imgs
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "tombelfer2.0",
    "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/175013050_297264278442137_6360191839371632299_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=xgCMTofPIc8AX-ixmYx&edm=AABBvjUBAAAA&ccb=7-4&oh=225a91bed9d72d664c88e517e28adbf4&oe=60F60DF7&_nc_sid=83d603"
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  "comments": [
    {
      "id": "c1001",
      "by": {
        "_id": "u102",
        "fullname": "omer1994",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "good one!",
      "likedBy": [
        {
          "_id": "u105",
          "fullname": "lucie.f",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
        }
      ]
    },
    {
      "id": "c1002",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "not good!",
    }
  ],
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "lucie.f",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  "tags": ["work", "art"]
},
////////////////////////////////////////////////////////////////////////////////////////////
// STORY #2
{
  "_id": "s102",
  "txt": "I am  Rita",
  "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/75207254_2550318245247414_52110981872690388_n.jpg?se=7&_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=jo_2L6EbPPwAX88jtMg&tn=hKQGjzOFVIaJ0tdR&edm=AABBvjUBAAAA&ccb=7-4&oh=38f70342dbd8565f949b1b005f625bda&oe=60F5EE06&_nc_sid=83d603",
  "createdAt": 123543452,
  "by": {
    "_id": "u102",
    "fullname": "rit_h",
    "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  ////////////////////////////////
  // COMMENTS ON PHOTO
  "comments": [
    {
      "id": "c1003",
      "by": {
        "_id": "u103",
        "fullname": "mike.bobi",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "good one!",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "lucie.f",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
        }
      ]
    },
    {
      "id": "c1004",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Beautiful!",
    }
  ],
  ////////////////////////////////
  // LIKES ON PHOTO
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "lucie.f",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u103",
      "fullname": "mike.bobi",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  // /////////////////////////////

  "tags": ["fun", "art", "work"]
},
////////////////////////////////////////////////////////////////////////////////////////////////
// STORY #3
{
  "_id": "s103",
  "txt": "Dayoff",
  "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/73150964_163410541414636_1349426391473170477_n.jpg?se=7&_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=FB744OirIWwAX9ocVKg&edm=AABBvjUBAAAA&ccb=7-4&oh=448e92c05eda15d30320c7de416e1be9&oe=60F55C42&_nc_sid=83d603",
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "tombelfer2.0",
    "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/175013050_297264278442137_6360191839371632299_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=xgCMTofPIc8AX-ixmYx&edm=AABBvjUBAAAA&ccb=7-4&oh=225a91bed9d72d664c88e517e28adbf4&oe=60F60DF7&_nc_sid=83d603",
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  ///////////////////////////////
  // COMMENTS ON PHOTO
  "comments": [
    {
      "id": "c1005",
      "by": {
        "_id": "u103",
        "fullname": "mike.bobi",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "The colors! Wow!",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "lucie.f",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
        }
      ]
    },
    {
      "id": "c1006",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Beautiful!",
    },
    {
      "id": "c1007",
      "by": {
        "_id": "u103",
        "fullname": "mike.bobi",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "good one!",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "lucie.f",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
        }
      ]
    }
  ],
  ///////////////////////////////
  // LIKES ON PHOTO
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "lucie.f",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u103",
      "fullname": "mike.bobi",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  // ////////////////////////////

  "tags": ["fun", "nature"]
},
////////////////////////////////////////////////////////////////////////////////////////////////
// STORY #4
{
  "_id": "s104",
  "txt": "Made by Tom belfer",
  "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/217512207_1847184512130853_8401744287316718880_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=E5BddniFij4AX8Lirmz&edm=AAeKFY8BAAAA&ccb=7-4&oh=364593bc553b20f701daaa809104d1f2&oe=60F662B8&_nc_sid=c982ba",
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "tombelfer2.0",
    "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/175013050_297264278442137_6360191839371632299_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=xgCMTofPIc8AX-ixmYx&edm=AABBvjUBAAAA&ccb=7-4&oh=225a91bed9d72d664c88e517e28adbf4&oe=60F60DF7&_nc_sid=83d603",
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "Tel Aviv"
  },
  ///////////////////////////////
  // COMMENTS ON PHOTO
  "comments": [
    {
      "id": "c1008",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Wow",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "lucie.f",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
        }
      ]
    },
    {
      "id": "c1009",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Liked it!",
    },
    {
      "id": "c1010",
      "by": {
        "_id": "u102",
        "fullname": "omer1994",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Amazing!!!",
    }
  ],
  ///////////////////////////////
  // LIKES ON PHOTO
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "lucie.f",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  // ////////////////////////////

  "tags": ["fun", "art"]
},
////////////////////////////////////////////////////////////////////////////////////////////////
// STORY #5
{
  "_id": "s104",
  "txt": "Miss India",
  "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/25013739_372374916535609_7194331273207218176_n.jpg?se=7&_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=-R-mg6Qny1gAX8z1pQ6&tn=hKQGjzOFVIaJ0tdR&edm=AABBvjUBAAAA&ccb=7-4&oh=fbadc0e726b39ebaf7cda3a850ab0e9a&oe=60F52AB6&_nc_sid=83d603",
  "createdAt": 123543452,
  "by": {
    "_id": "u101",
    "fullname": "tombelfer2.0",
    "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/175013050_297264278442137_6360191839371632299_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=xgCMTofPIc8AX-ixmYx&edm=AABBvjUBAAAA&ccb=7-4&oh=225a91bed9d72d664c88e517e28adbf4&oe=60F60DF7&_nc_sid=83d603",
  },
  "loc": {
    "lat": 11.11,
    "lng": 22.22,
    "name": "India"
  },
  ///////////////////////////////
  // COMMENTS ON PHOTO
  "comments": [
    {
      "id": "c1008",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Wow",
      "likedBy": [ // Optional
        {
          "_id": "u105",
          "fullname": "lucie.f",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
        }
      ]
    },
    {
      "id": "c1009",
      "by": {
        "_id": "u106",
        "fullname": "bardwest4",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Liked it!",
    },
    {
      "id": "c1010",
      "by": {
        "_id": "u102",
        "fullname": "omer1994",
        "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
      },
      "txt": "Amazing!!!",
    }
  ],
  ///////////////////////////////
  // LIKES ON PHOTO
  "likedBy": [
    {
      "_id": "u105",
      "fullname": "lucie.f",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  // ////////////////////////////

  "tags": ["fun", "travel"]
}
]

const user = {
  "_id": "u101",
  "fullname": "tombelfer2.0",
  "username": "Muko",
  "password": "mukmuk",
  "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/175013050_297264278442137_6360191839371632299_n.jpg?_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_ohc=xgCMTofPIc8AX-ixmYx&edm=AABBvjUBAAAA&ccb=7-4&oh=225a91bed9d72d664c88e517e28adbf4&oe=60F60DF7&_nc_sid=83d603",
  "createdAt": 123543452,
  "following": [
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u102",
      "fullname": "omer1994",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  "followers": [
    {
      "_id": "s102",
      "txt": "I am  Rita",
      "imgUrl": "https://instagram.fsdv1-2.fna.fbcdn.net/v/t51.2885-15/e35/75207254_2550318245247414_52110981872690388_n.jpg?se=7&_nc_ht=instagram.fsdv1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=jo_2L6EbPPwAX88jtMg&tn=hKQGjzOFVIaJ0tdR&edm=AABBvjUBAAAA&ccb=7-4&oh=38f70342dbd8565f949b1b005f625bda&oe=60F5EE06&_nc_sid=83d603",

    },
    {
      "_id": "u105",
      "fullname": "lucie.f",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u102",
      "fullname": "omer1994",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    },
    {
      "_id": "u106",
      "fullname": "bardwest4",
      "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
    }
  ],
  "savedStoryIds": ["s101", "s102"]
}