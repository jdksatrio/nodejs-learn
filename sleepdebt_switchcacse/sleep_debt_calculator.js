const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 9;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 12;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 8;
      break;      
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') +getSleepHours('tuesday') +getSleepHours('wednesday') +getSleepHours('thursday') +getSleepHours('friday') +getSleepHours('saturday') +getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You\'ve got perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You\'ve got ' +(actualSleepHours-idealSleepHours) + ' hours more sleep than needed!');
  }  else {
      console.log('You\'re lacking ' +(idealSleepHours-actualSleepHours) + ' hours of sleep than needed!')
    }
  }

console.log('Actual sleep hours: ' +getActualSleepHours());
console.log('Ideal sleep hours: '+getIdealSleepHours());
calculateSleepDebt()
