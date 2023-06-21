const salaryToHour = (salary?: number): number => {
  if (!salary) {
    return 0;
  }

  const weeks = salary * 12;
  const hours = weeks / 52;

  // limit to 2 decimal places
  const hourlyWage = hours / 40;
  return Math.round(hourlyWage * 100) / 100;
};

export { salaryToHour };
