export function getNext15MinuteTimes() {
    const now = new Date();
    const currentMinutes = now.getMinutes();
    const minutesToAdd = currentMinutes % 15 === 0 ? 15 : 15 - (currentMinutes % 15);
    const next15Minutes = new Date(now.getTime() + minutesToAdd * 60000);
    const next30Minutes = new Date(next15Minutes.getTime() + 15 * 60000);
  
    const nearestFutureTime = next15Minutes.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const nextFutureTime = next30Minutes.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  
    return { nearestFutureTime, nextFutureTime };
  }