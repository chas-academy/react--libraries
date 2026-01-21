function compareEnergy(caloriesBurned, wattHoursUsed) {
  const caloriesToJoules = caloriesBurned * 4184; 
  const wattHoursToJoules = wattHoursUsed * 3600;

  if (caloriesToJoules === wattHoursToJoules) {
    return "Equal";
  }
  if (caloriesToJoules > wattHoursToJoules) {
    return "Workout"
  }

  return "Devices";
}