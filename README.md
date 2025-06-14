
# Project Title
AI Video Generation Backend built with Node.js and Express.js.

A mock backend for an AI video generation application built with Express.js, supporting marketing videos and real estate tours using pre-existing video files.

## API Reference

#### Generate Marketing Video

```http
  POST /api/marketing-video
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `prompt` | `string` | **Required**. Text prompt for the marketing video. |
| `image` | `file` | **Required**. Image file (PNG, JPG, JPEG) for the video generation. |


#### Generate Property Tour

```http
  POST /api/property-tour
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `address`      | `string` | **Required**.  
| `price`      | `number` | **Required**.|
| `bedrooms`      | `number` | **Required**.|
| `bathrooms`      | `number` | **Required**.|
| `squareFootage`      | `number` | **Required**. |
| `features`      | `string` | **Required**. |
| `tourStyle`      | `string` | **Required**. |


# Overview 
This backend simulates the Google Gemini Veo3 API for two use cases:

Marketing Video Generator: Accepts an image and prompt to return a mock video.

Real Estate Video Tour Generator: Processes property details to deliver a mock tour video.

## Demo
- clone project
- Run "npm install" to install dependecies.
- 'npm run start' to start the project locally on port 5000




