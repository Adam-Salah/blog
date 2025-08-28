---
title: Carte de bus Montréal
author: Garutako
image: ../../images/transit_map.png
thumbnail: ../../transit_map.png
---

This app displays a real-time map of the Montréal Transport Society (STM) vehicle fleet. It was my first [Next.js](https://nextjs.org/) project and my introduction to [React](https://react.dev/) state management.  
&nbsp;  

The data I used comes from the [STM's open data APIs](https://www.stm.info/en/about/developers). Since the API allows 10,000 requests/day, I set poll rate to 10 seconds. This allows me to refresh data as often as possible without passing that threshold. The app then serves that data to the clients when requested. Currently, the client sends a request every 30 seconds, but this will be altered depending on performance. I might even use a different method to serve the data.  
&nbsp;

The most challenging part of working with this API was figuring out how to work with the [GTFS Real-Time](https://gtfs.org/documentation/realtime/reference/) specification. Transit companies all around the world use it to structure their API data to keep everything coherent between systems. Bus position data is encoded using Protocol Buffers (or Protobuf). The data structure is laid out in a [gtfs-realtime.proto](https://gtfs.org/documentation/realtime/proto/) file. For this project I chose to use the [gtfs-realtime-bindings](https://github.com/MobilityData/gtfs-realtime-bindings) library, which provides pre-generated JavaScript/TypeScript bindings for GTFS Realtime.  
&nbsp;

For the map, I used the [OpenLayers](https://openlayers.org/) library with [OpenStreetMap](https://www.openstreetmap.org) tiles as both technologies free and well documented, which is perfect for an introductory project like this one. I render marker directly on the map's canvas and use mouse events to detect interactions. The available data on a bus is displayed on a floating panel.  
&nbsp;

With the core of the application and it's basic UI finished, I am satisfied with this project. I do not have a server to host it on at the moment, so when I do I might revamp the project. I might also add more features such as displaying bus routes and schedules.
