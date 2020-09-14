# _Galactic Age Calculator_

#### _Exercise in building development environments with npm and test driven development, September 4, 2020_

#### By _Forrest Reiland_

## Description 

_This application allows a user to input their age (in years) and their race. It then calculates their age in solar orbits on Mercury, Venus, Mars, and Jupiter. Additionally it calculates a users life expectatncy on each planet and how many years on that planet they have to live. Finally, if a users input age is greater than the life expectancy for their demographic, it returns the number of years that they have gone over the average life expectancy for their demographic._

## Specifications

* #### **Spec**:  The program takes in the users age, and race and returns a keyInfo object.
  * #### **Input**: 25 and hispanic.
  * #### **Output**: userInfo (age:25, race: hispanic)

* #### **Spec**:  The program calculates age in Mercury years.
  * #### **Input**: 25 years
  * #### **Output**: 104.17 years

* #### **Spec**:  The program calculates age in Venus years.
  * #### **Input**: 25 years
  * #### **Output**: 40.32 years

* #### **Spec**:  The program calculates age in Mars years.
  * #### **Input**: 25 years
  * #### **Output**: 13.29 years

* #### **Spec**:  The program calculates age in Jupiter years.
  * #### **Input**: 25 years
  * #### **Output**: 2.11 years

* #### **Spec**:  The program calculates life expectancy in Earth years based on demographic data compiled by the CDC.
  * #### **Input**: 'hispanic'
  * #### **Output**: 82 years

* #### **Spec**:  A method calculates how many years a user has left to live based on life expectancy.
  * #### **Input**: 25, 'hispanic'
  * #### **Output**: 57 years.

* #### **Spec**:  A function returns the years that a user has exceeded their life expectancy.
  * #### **Input**: 89, 'hispanic'
  * #### **Output**: 7.

## Setup / Installation Instructions

* _Clone this repository_
* _Open the file directory_
* _Drag the index.html file into the browswer of your choice._

## Known Bugs

_No known bugs for this program_

## Support and Contact Information

_If you encounter any problems with this software, or would like to contribute, please contact me at freiland@email.arizona.edu_

## Technologies Used

* HTML
* CSS and Bootstrap
* JavaScript and JQuery
* Markdown 
* node package manager
* Jest
* Babel 

## License 

Copyright (c) 2020 Forrest Reiland

This software is licensed under the MIT license.