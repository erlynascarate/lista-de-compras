const { precacheAndRoute } = require('workbox-precaching')
const { setDefaultHandler } = require('workbox-routing')
const { StaleWhileRevalidate } = require('workbox-strategies')

precacheAndRoute(self.__WB_MANIFEST)

setDefaultHandler(new StaleWhileRevalidate())
