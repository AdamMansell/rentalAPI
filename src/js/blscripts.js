export class keyInfo {
  constructor(age, race) {
    this.age = age;
    this.race = race;
  }

  mercuryYear () {
    let age = (this.age/.24) ;
    return Math.round(age);

  }

  venusYear () {
    let age = (this.age/.62) ;
    return Math.round(age);

  }

  marsYear () {
    let age = (this.age/1.88) ;
    return Math.round(age);

  }

  jupiterYear () {
    let age = (this.age/11.86) ;
    return Math.round(age);

  }

  timeOnEarth () {
    let age = this.age;
    
    let expectancy = raceExpect[this.race];
    let remain = expectancy - age;
    if (remain < 0) {
      
      let exceed = Math.round(age-expectancy); 
      return exceed;
    }
    
    return Math.round(remain);
  }

  timeOnMercury () {
    let age = (this.age/.24);
    let expectancy = mercuryExpect[this.race];
    let remain = expectancy - age;
    if (remain < 0) {
      let exceed = Math.round(age-expectancy); 
      return exceed;}
    
    return Math.round(remain);
  }

  timeOnVenus () {
    let age = (this.age/.62);
    let expectancy = venusExpect[this.race];
    let remain = expectancy - age;
    if (remain < 0) {
      let exceed = Math.round(age-expectancy); 
      return exceed;}
    
    return Math.round(remain);
  }

  timeOnMars () {
    let age = (this.age/1.88);
    let expectancy = marsExpect[this.race];
    let remain = expectancy - age;
    if (remain < 0) {
      let exceed = Math.round(age-expectancy); 
      return exceed;}
    
    return Math.round(remain);
  }

  timeOnJupiter () {
    let age = (this.age/11.86);
    let expectancy = jupiterExpect[this.race];
    let remain = expectancy - age;
    if (remain < 0) {
      let exceed = Math.round(age-expectancy); 
      return exceed;}
    
    return Math.round(remain);
  }
  

  //getArea() {
  //return this.side1 * this.side2;
  //}
}

export let raceExpect = {
  'Native American':75,
  'African American':75,
  'White American':79,
  'Hispanic American':82,
  'Asian American':86
};

export let mercuryExpect = {
  'Native American':(75/.24),
  'African American':(75/.24),
  'White American':(79/.24),
  'Hispanic American':(82/.24),
  'Asian American':(86/.24)
};

export let venusExpect = {
  'Native American':(75/.62),
  'African American':(75/.62),
  'White American':(79/.62),
  'Hispanic American':(82/.62),
  'Asian American':(86/.62)
};

export let marsExpect = {
  'Native American':(75/1.88),
  'African American':(75/1.88),
  'White American':(79/1.88),
  'Hispanic American':(82/1.88),
  'Asian American':(86/1.88)
};

export let jupiterExpect = {
  'Native American':(75/11.86),
  'African American':(75/11.86),
  'White American':(79/11.86),
  'Hispanic American':(82/11.86),
  'Asian American':(86/11.86)
};