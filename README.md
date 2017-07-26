## Starter Project for Front-end Web Application Framework User

### How to use

- Run command `npm start` in your terminal.
- Uncomment following line for use framework
    - import { GoModule }  from 'go-module';
    - import { LibModule }  from 'lib-module';
    - GoModule.forRoot(),
    - LibModule.forRoot(),
- Start to use component.

### Source for your Production

- When your development finished. run command `grunt` in your terminal for copy final version of source to build folder.
- Copy all source in "build_qa" folder to use for testing or UAT phase.
- Copy all source in "build_prd" folder to use for production.

### How to use in RAD or Eclipse

- Create new project as Dynamic Web Project.
- Copy all source in "build_qa" or "build_prd" folder into WebContent folder.
- Export EAR normally for deployment.