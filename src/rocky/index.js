var rocky = require("rocky");

rocky.on("draw", function(event) {
  // Get the CanvasRenderingContext2D object
  var context = event.context;

  // Current date/time
  var time = new Date();

  // Months
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Day Week
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  // Days School
  var daysSchool = {
    Mo: "Mo.",
    Tu: "Tu",
    We: "We",
    Th: "Th",
    Fr: "Fr"
  };

  // Sunday - Saturday : 0 - 6
  switch (time.getDay()) {
    case 1:
      daysSchool.Mo = "[Mo]";
      break;
    case 2:
      daysSchool.Tu = "[Tu]";
      break;
    case 3:
      daysSchool.We = "[We]";
      break;
    case 4:
      daysSchool.Th = "[Th]";
      break;    
    case 5:
      daysSchool.Fr = "[Fr]";
      break;        
    default:
      break;
  }

  // Clear the screen
  context.clearRect(
    0,
    0,
    context.canvas.clientWidth,
    context.canvas.clientHeight
  );

  // Determine the width and height of the display
  var bounds = {
    width: context.canvas.unobstructedWidth,
    height: context.canvas.unobstructedHeight
  };

  var colors = {
    primary: "#000000",
    secondary: "#406e8e",
    secondary_light: "#ffffff"
  };

  var fonts = {
    smaller: "8px bold numbers Leco-numbers",
    small: "42px bold numbers Leco-numbers"
  };

  // Set font.
  context.font = fonts.smaller;

  // Line one.
  context.fillStyle = colors.secondary;
  context.fillRect(0, 0, bounds.width, bounds.height);

  // Set text Monday.
  context.fillStyle = colors.primary;
  context.fillText(daysSchool.Mo + " " + "Qld Soft / Redes", 0, bounds.height / 10 - 16);

  // Line two.
  context.fillStyle = colors.primary;
  context.fillRect(0, bounds.height / 10, bounds.width, bounds.height / 10);

  // Set text Tuesday.
  context.fillStyle = colors.secondary;
  context.fillText(daysSchool.Tu + " " +"Mobile / Prog BD", 0, (bounds.height / 10) * 2 - 16);

  // Line three.
  context.fillStyle = colors.secondary;
  context.fillRect(
    0,
    (bounds.height / 10) * 2,
    bounds.width,
    bounds.height / 10
  );

  // Set text Wednesday.
  context.fillStyle = colors.primary;
  context.fillText(daysSchool.We + " " + "Arq Comp / Qld Soft", 0, (bounds.height / 10) * 3 - 16);

  // Line four.
  context.fillStyle = colors.primary;
  context.fillRect(
    0,
    (bounds.height / 10) * 3,
    bounds.width,
    bounds.height / 10
  );

  // Set text Thursday.
  context.fillStyle = colors.secondary;
  context.fillText(daysSchool.Th + " " + "Redes / Web", 0, (bounds.height / 10) * 4 - 16);

  // line five.
  context.fillStyle = colors.secondary;
  context.fillRect(
    0,
    (bounds.height / 10) * 4,
    bounds.width,
    bounds.height / 10
  );

  // Set text Friday.
  context.fillStyle = colors.primary;
  context.fillText(daysSchool.Fr + " " + "Prog BD / Arq Comp", 0, (bounds.height / 10) * 5 - 16);

  // line six.
  context.fillStyle = colors.primary;
  context.fillRect(0, bounds.height / 2, bounds.width, bounds.height / 2);

  // Set the text color
  context.fillStyle = colors.secondary_light;

  // Center align the text
  context.textAlign = "center";

  context.fillText(
    days[time.getDay()] +
      ", " +
      time.getDate() +
      " " +
      months[time.getMonth()] +
      " " +
      time.getFullYear(),
    bounds.width / 2,
    (bounds.height / 4) * 2.1
  );

  // Set font.
  context.font = fonts.small;

  // Display the time, (hour and minute)
  context.fillText(
    (time.getHours() > 12 ? time.getHours() % 12 : time.getHours()) +
      ":" +
      (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()),
    bounds.width / 2,
    (bounds.height / 4) * 2.5,
    bounds.width
  );
});

rocky.on("minutechange", function(event) {
  // Display a message in the system logs
  console.log("Another minute with your Pebble!");

  // Request the screen to be redrawn on next pass
  rocky.requestDraw();
});
