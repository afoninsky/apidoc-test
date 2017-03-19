define({ "api": [  {    "type": "get",    "url": "/user/:id",    "title": "Request User information",    "name": "GetUser",    "group": "User",    "parameter": {      "fields": {        "Body": [          {            "group": "Body",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>User id passed by client</p>"          },          {            "group": "Body",            "type": "Number",            "optional": false,            "field": "arg",            "description": "<p>Any additional argument</p>"          },          {            "group": "Body",            "type": "String",            "optional": true,            "field": "email",            "defaultValue": "vasya@gmail.com",            "description": "<p>Optional email</p>"          }        ]      },      "examples": [        {          "title": "Body ",          "content": "{\n    \"id\": \"consectetur dolore tempor non magn\",\n    \"arg\": 91934642,\n    \"email\": \"Kattie.Konopelski22@gmail.com\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "value1",            "description": "<p>Some value returned</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "values2",            "description": "<p>Other value returned</p>"          }        ]      },      "examples": [        {          "title": "Example: ",          "content": "{\n    \"value1\": \"nostrud in nulla occaecat\",\n    \"values2\": -15482082\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "src/index.js",    "groupTitle": "User"  }] });
