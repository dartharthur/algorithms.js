/**
 * You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 
 * to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.
 * 
 * Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the 
 * number of stones in the heap.
 * 
 * For example, if there are 4 stones in the heap, then you will never win the game: 
 * no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.
 */
function canWinNim(n) {
  return (n % 4 !== 0);
}

/** naive solution */
function analyzeMeetings(meetings) {
  let i = 0;
  let mergedMeetings = [];
  let sortedMeetings = sortMeetings(meetings);

  while(sortedMeetings[i + 1]) {
   let meeting = mergeMeetings(sortedMeetings[i], sortedMeetings[i + 1]);
   if (meeting) {
     mergedMeetings.push(meeting);
     i += 2;
     if ((sortedMeetings.length - 1) - i === 0) mergedMeetings.push(sortedMeetings[i]);
   } else {
     mergedMeetings.push(sortedMeetings[i]);
     i += 1;
     if ((sortedMeetings.length - 1) - i === 0) mergedMeetings.push(sortedMeetings[i]);
   }
  }

  return mergedMeetings;
}

function mergeMeetings(first, second) {
  if (first.endTime >= second.startTime) {
    return { startTime: first.startTime, endTime: first.endTime > second.endTime ? first.endTime : second.endTime };
  }
}

function sortMeetings(meetings) {
  return meetings.sort((a, b) => {
    if (a.startTime > b.startTime) return 1;
    if (a .startTime < b.startTime) return -1;
    return 0;
  });
}