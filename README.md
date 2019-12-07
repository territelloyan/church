## Video Kiosk
A simple video kiosk application.

### Data structure

Data for each organization is organized in `data.json`. Each organization is an object within a `missions` array. 

```javascript
{
    "missions": [
        { 
            "id": 1,
            "content": {
                "name": "String name",
                "desc": "String short description",
                "longDesc": "String long description,
                "support": "String support requests",
                "img": "Absolute image URL",
                "vid": "Valid YouTube video ID",
            },
        },
        { 
            "id": 2,
            "content": { ... }
        },
    ]
}
```

Add additional organizations by pushing new objects to the array. Elements will be added to the main menu when the page loads.

### Cards
Individual screens are built using the `Card` constructor called when an organization is selected. The matching object is used to populate each quadrant of the mission display.

### YouTube API
The [YouTube iFrame API](https://developers.google.com/youtube/iframe_api_reference) is used to display the video. Each object's `vid` parameter has a valid YouTube video ID. The ID is used to asynchronously load an iFrame using the API. Loading is handled by `Promises`.