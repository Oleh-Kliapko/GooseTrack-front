export function getCurrentAndNextMinuteTime() {
    const now = new Date();
    const currentHour = now.getHours().toString().padStart(2, "0");
    const currentMinute = now.getMinutes().toString().padStart(2, "0");
    const nextMinute = (now.getMinutes() + 1) % 60;
    const nextHour = nextMinute === 0 ? (now.getHours() + 1) % 24 : now.getHours();
    const nextMinuteString = nextMinute.toString().padStart(2, "0");
    const nextHourString = nextHour.toString().padStart(2, "0");
    const currentTime = `${currentHour}:${currentMinute}`;
    const nextMinuteTime = `${nextHourString}:${nextMinuteString}`;
    return {
      currentTime,
      nextMinuteTime,
    };
  }