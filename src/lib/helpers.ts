export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

// Helper function to determine if Daylight Saving Time is in effect for a given date
function isDST(date: Date): boolean {
  const jan = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
  const jul = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== date.getTimezoneOffset(); // True if DST is in effect
}

export function getCurrentTimeInLosAngeles(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Los Angeles is in Pacific Time (UTC-8), but during Daylight Saving Time it's UTC-7
  const offsetLA = isDST(now) ? -7 : -8;
  now.setHours(now.getUTCHours() + offsetLA);

  return now;
}

export function formatTimeForLosAngeles(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // This will format the time in 12-hour format with AM/PM
    timeZone: "America/Los_Angeles",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. For simplicity, here I'm just appending "PST" or "PDT" depending on Daylight Saving Time.
  const timezoneSuffix = isDST(date) ? " PDT" : " PST";
  formattedTime += timezoneSuffix;

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


export function formatTag(tag: string) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}



export function customBack() {
  const homePage = "/";
  const previousURL = document.referrer;

  if (previousURL.includes(homePage)) {
      window.location.href = homePage;
  } else {
      history.back();
  }
}

// Make sure to expose this function globally if it's being called directly in inline event handlers
// window.customBack = customBack;
