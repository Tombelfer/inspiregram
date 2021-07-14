import { defaultStories } from './instagram';
import { storageService } from './async-storage-service.js';
// import { utilitiesService } from './utilities.service.js';


const STORIES_KEY = 'iDB';

export const storiesService = {
    query,
    removeStory,
    getStoryById,
    // addReview,
    // removeReview
}


const gStories = defaultStories;


//getBooks()
function query() {
    return  [{
        // STORY #1
        "_id": "s101",
        "txt": "Fourth sprint be like:",
        "imgUrl": "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260", //Can be an array if decide to support multiple imgs
        "createdAt": 123543452,
        "by": {
          "_id": "u101",
          "fullname": "tombelfer2.0",
          "imgUrl": "https://pic.onlinewebfonts.com/svg/img_98061.png"
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
        "imgUrl": "https://images.pexels.com/photos/3801347/pexels-photo-3801347.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
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
      }]

}


function removeStory(bookId) {
    return storageService.remove(STORIES_KEY, bookId);
}

function getStoryById(bookId) {
    return storageService.get(STORIES_KEY, bookId);
}

function addReview(bookId, review) {
    review.id = utilitiesService.makeId();
    return getStoryById(bookId).then(book => {
        // return Promise.reject('ERROR GORNISHT')
        if (!book.reviews) book.reviews = [];
        book.reviews.push(review);
        return storageService.put(STORIES_KEY, book);
    })
}

function removeReview(bookId, reviewId) {
    return getStoryById(bookId)
        .then(book => {
            const reviewIdx = book.reviews.findIndex(review => review.id === reviewId);
            if (reviewIdx === -1) return Promise.reject('Failed to find the review!');
            book.reviews.splice(reviewIdx, 1);
            return storageService.put(STORIES_KEY, book);
        })
}