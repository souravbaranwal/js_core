// Open the html file in browser and go to the link provided.
// You can see the time of every video
// Use arrow function and array methods to calculate the total timing of the whole playlist.
// The final result should be in HH:MM:SS
let videoDurations = ['19:39', '10:44', '13:14', '23:27', '13:10', '17:22', '7:16', '18:02', '10:36', '11:19', '24:34', '5:09', '12:58'];

function totalDuration() {
    let videoDurationMinutes = videoDurations.map(elm => {
        let a = elm.split(':');
        let minutes = Number(a[0]) * 60 + Number(a[1]);
        return minutes;
    })
    let totalMinutes = videoDurationMinutes.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    return hours + ":" + minutes;
}

