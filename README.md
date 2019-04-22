# Code example - Security module

Node.js api for Scrapp agile management tool application.

Code example for next projects, this repo has a collection of patterns and practices i will adopt for a personal coding style and can be my coding standar for Node.js scalable applications.

This repo collect a serie of patterns to build scalable Node.js applications, what is always based on the simplicity and less complex code structure for a low learning courve.

My structure design:

  Abuse of the modular system
  
  I want to abuse the modular system of the express applications, building high decoupled modules for any business context in the application, for this example, i build the security module for Scrapp application. The security module should have all this implementations inside of his self, as you can see, the database configuration is also included in the module, and yes, every module has a configuration for routing, controllers, database, orm and any library. Every module has his own errors too. This reduces the complexity of the larger applications, and any module can be extracted to deploy independently of the others in any moment (or this I want to archive).
