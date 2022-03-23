
# 🏘️ Homie 

Homie is an app focused on the search of living places for rent globally.
You can find the possibility of filtering these places by city, condition, category or bedrooms.

## 🖥️ technologies
React, MongoDB, Express, Node, Postman.
Some libraries like Mongoose, Axios, Bootstrap, AntDesign were also used during this process of 2 hard weeks of work at Ironhack Madrid.

### Screenshots


![homie-screenshot1](https://user-images.githubusercontent.com/95500908/159767471-448591d1-aec2-45d3-8d64-b19765540aa2.jpg)
![homie-screenshot2](https://user-images.githubusercontent.com/95500908/159767491-bdae3414-85c9-4972-9c14-4695d3399fb1.jpg)
![homie-screenshot3](https://user-images.githubusercontent.com/95500908/159767929-fe6138cd-e3ee-4ebe-a4d5-99347f228a1a.jpg)
![homie-screenshot4](https://user-images.githubusercontent.com/95500908/159767938-28ea0783-1600-42e7-b042-3773242e6195.jpg)

#### Endpoints


|Page                    |        Route                          |         Components  |
| :---                   |   :---:                               |            ---:         |
|HomePage.jsx            |      ‘/’                              |  Navigation, Carousel, HomeFilter, CityCard, Card, Footer|
|LivingPlaces.jsx        |      ‘/living-places/?city=Madrid’    |  Navigation, Homefilter, Card, Footer|
|LivingPlaceDetail       |      ‘/living-places/:_id’             |  Navigation, Carousel, Tabs, FormContact|
|Login.jsx               |      ‘/login’                         |  Navigation, FormLogin|
|Signup.jsx              |      ‘/signup’                        |  Navigation, FormSignup|
|Profile.jsx             |      ‘/profile’                       |  Navigation, MenuProfile, FormProfile|
|ProfileLivingPlaces.jsx |      ‘/profile/living-places’         |  Navigation, MenuProfile, TableLivingPlaces|
|ProfileMessages.jsx     |      ‘/profile/messages’              |  Navigation, MenuProfile, TableMessages|


##### Client .env variables needed
```
REACT_APP_API_URL=http://localhost:5005/api
```
