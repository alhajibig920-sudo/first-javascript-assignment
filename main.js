//Part 1: Guest management.
//Create an array containing at least 10 guests.
const guests = [
  {
    id: 1,
    name: "John",
    age: 28,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Rice"
  },
  {
    id: 2,
    name: "Sarah",
    age: 24,
    gender: "Female",
    invitationStatus: "Pending",
    attendanceStatus: "Absent",
    mealPreference: "Chicken"
  },
  {
    id: 3,
    name: "David",
    age: 17,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Rice"
  },
  {
    id: 4,
    name: "Mary",
    age: 30,
    gender: "Female",
    invitationStatus: "Declined",
    attendanceStatus: "Absent",
    mealPreference: "Fish"
  },
  {
    id: 5,
    name: "Peter",
    age: 35,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Chicken"
  },
  {
    id: 6,
    name: "Grace",
    age: 16,
    gender: "Female",
    invitationStatus: "Pending",
    attendanceStatus: "Absent",
    mealPreference: "Rice"
  },
  {
    id: 7,
    name: "James",
    age: 27,
    gender: "Male",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Fish"
  },
  {
    id: 8,
    name: "Esther",
    age: 22,
    gender: "Female",
    invitationStatus: "Accepted",
    attendanceStatus: "Absent",
    mealPreference: "Rice"
  },
  {
    id: 9,
    name: "Michael",
    age: 19,
    gender: "Male",
    invitationStatus: "Pending",
    attendanceStatus: "Absent",
    mealPreference: "Chicken"
  },
  {
    id: 10,
    name: "Joy",
    age: 29,
    gender: "Female",
    invitationStatus: "Accepted",
    attendanceStatus: "Present",
    mealPreference: "Fish"
  }
];

//Display all registered guests.
guests.forEach(function(guest) {
  console.log(guest);
});

//Count the total number of guests.
console.log("Total guests:", guests.length);

//count guests who accepted their invitations.
const acceptedGuests = guests.filter(function(guest) {
  return guest.invitationStatus === "Accepted";
});
console.log("Accepted guests:", acceptedGuests.length);

//Count guests who actually attended.
const attendedGuests = guests.filter(function(guest) {
  return guest.attendanceStatus === "Present";
});
console.log("Guests who attended:", attendedGuests.length);

//Identify guests who have not responded to their invitations.
const pendingGuests = guests.filter(function(guest) {
  return guest.invitationStatus === "Pending";
});
console.log("Guests who have not responded:", pendingGuests);

//Separate guests into male and female categories.
const maleGuests = guests.filter(function(guest) {
  return guest.gender === "Male";
});
console.log("Male guests:", maleGuests);

const femaleGuests = guests.filter(function(guest) {
  return guest.gender === "Female";
});
console.log("Female guests:", femaleGuests);

//Identify guests below the age of 18.
const underAgeGuests = guests.filter(function(guest) {
  return guest.age < 18;
});
console.log("Guests below 18:", underAgeGuests);


//Part 2: Food management.
//Create menu array.
 const menu = [
  { name: "Jollof Rice", price: 3500, quantity: 100 },
  { name: "Fried Rice", price: 4000, quantity: 80 },
  { name: "Chicken", price: 2500, quantity: 120 },
  { name: "Beef", price: 1500, quantity: 100 },
  { name: "Soft Drink", price: 500, quantity: 200 }
];

//Display all available food items.
menu.forEach(function(food) {
  console.log(food);
});

//Calculate all total value of each food item based on its price and quality.
menu.forEach(function(food) {
  const totalValue = food.price * food.quantity;
  console.log(food.name + " total value: ₦" + totalValue);
});

//Calculate the total food budget.
const totalBudget = menu.reduce(function(total, food) {
  return total + (food.price * food.quantity);
}, 0);
console.log("Total food budget: ₦" + totalBudget);

//Identify food items costing more than ₦2,000.
 const expensiveFood = menu.filter(function(food) {
  return food.price > 2000;
});
console.log("Food items above ₦2,000:", expensiveFood);

//Identify food items with quantities below ₦100.
const lowQuantity = menu.filter(function(food) {
  return food.quantity < 100;
});
console.log("Food items below 100:", lowQuantity);

//Calculate the total quantity of food items available.
const totalQuantity = menu.reduce(function(total, food) {
  return total + food.quantity;
}, 0);
console.log("Total food quantity:", totalQuantity);


//Part 3: Event financial management.
//The expenses array.
const expenses = [
  { category: "Venue", amount: 500000 },
  { category: "Catering", amount: 750000 },
  { category: "Photography", amount: 250000 },
  { category: "Decoration", amount: 300000 },
  { category: "Music", amount: 150000 },
  { category: "Transportation", amount: 200000 }
];

//Create a variable for the couple total budget.
const budget = 2500000;

//Calculate the total expenses.
const totalExpenses = expenses.reduce(function(total, expense) {
  return total + expense.amount;
}, 0);
console.log("Total Expenses: ₦" + totalExpenses);

//Calculate the remaining budget.
const remainingBudget = budget - totalExpenses;
console.log("Remaining Budget: ₦" + remainingBudget);

//Identify the most expensive expense.
 const mostExpensive = expenses.reduce(function(highest, expense) {
  if (expense.amount > highest.amount) {
    return expense;
  } else {
    return highest;
  }
});
console.log("Most Expensive Expense:", mostExpensive);

//Identify expenses above ₦200,000.
 const expensiveExpenses = expenses.filter(function(expense) {
  return expense.amount > 200000;
});
console.log("Expenses Above ₦200,000:", expensiveExpenses);

//Calculate the percentage of the budget already spent.
const percentageSpent = (totalExpenses / budget) * 100;
console.log("Percentage Spent:", percentageSpent + "%");

//Use conditional statement to determine whether the couple is (within budget, almost exhausting the budget 90% or more spent, over budget)
//1.within budget.
if (totalExpenses > budget) {
  console.log("Status: Over Budget");
//2.almost exhausting the budget (90% or more spent.)
} else if (percentageSpent >= 90) {
  console.log("Status: Almost Exhausting the Budget");
//3.over budget
} else {
  console.log("Status: Within Budget");
}


//Part 4: Event admission control.
//Declare the venue capacity.
const venueCapacity = 150;

//Count the total number of invited guests.
const totalGuests = guests.length;
console.log("Total Invited Guests:", totalGuests);

//Count the guests who actually attended.
const totalAttendees = guests.filter(function(guest) {
  return guest.attendanceStatus === "Present";
});
console.log("Total Attendees:", totalAttendees.length);

//Determine whether the venue can accommodate all invited guests.
if (totalGuests > venueCapacity) {
  console.log("Warning! The venue cannot accommodate all invited guests.");

} else {
  console.log("The venue can accommodate all invited guests.");
}

//If attendance exceeds 150, display a warning.
if (totalAttendees.length > venueCapacity) {
  console.log("WARNING! Attendance has exceeded venue capacity.");
}

//If the number of attendees is below 150, display the number of remaining seats.
if (totalAttendees.length < venueCapacity) {
  const remainingSeats = venueCapacity - totalAttendees.length;
  console.log("Remaining Seats:", remainingSeats);
}

//Display an appropriate message depending on the number of attendees.
if (totalAttendees.length > venueCapacity) {
   console.log("Warning! The venue is over capacity.");

} else if (totalAttendees.length === venueCapacity) {
  console.log("The venue is full. No seats remaining.");

} else {
  const remainingSeats = venueCapacity - totalAttendees.length;
  console.log("The venue has available seats.");
  console.log("Remaining Seats:", remainingSeats);
}


//Part 5: Generate an event summary.
// ===================================
// PART 5: EVENT SUMMARY
// ===================================


// 1. EVENT VARIABLES

const eventBudget = 2500000;
const venue_Capacity = 150;

let accepted_Guests = 0;
let total_Attendees = 0;
let pending_Guests = 0;
let declined_Guests = 0;


// 2. PROCESS GUESTS USING FOR LOOP
// AND SWITCH STATEMENT

for (let i = 0; i < guests.length; i++) {

  switch (guests[i].invitationStatus) {

    case "Accepted":
      accepted_Guests++;
      break;

    case "Pending":
      pending_Guests++;
      break;

    case "Declined":
      declined_Guests++;
      break;

  }

  if (guests[i].attendanceStatus === "Present") {
    total_Attendees++;
  }

}


// 3. CALCULATE FOOD BUDGET
// USING FOR...OF LOOP

let totalFoodBudget = 0;
let totalFoodQuantity = 0;

for (const food of menu) {

  totalFoodBudget += food.price * food.quantity;

  totalFoodQuantity += food.quantity;

}


// 4. CALCULATE TOTAL EXPENSES
// USING WHILE LOOP

let total_Expenses = 0;
let index = 0;

while (index < expenses.length) {

  if (typeof expenses[index].amount === "number" &&
      expenses[index].amount >= 0) {

    total_Expenses += expenses[index].amount;

  }

  index++;

}


// 5. CALCULATE REMAINING BUDGET

const remaining_Budget = eventBudget - totalExpenses;


// 6. CALCULATE PERCENTAGE SPENT

const percentage_Spent = (totalExpenses / eventBudget) * 100;


// 7. DETERMINE BUDGET STATUS

let budgetStatus;

if (totalExpenses > eventBudget) {

  budgetStatus = "Over Budget";

} else if (percentage_Spent >= 90) {

  budgetStatus = "Almost Exhausting the Budget";

} else {

  budgetStatus = "Within Budget";

}


// 8. CALCULATE AVAILABLE SEATS

const availableSeats = venue_Capacity - total_Attendees;


// 9. GENERATE EVENT SUMMARY

console.log("========== WEDDING EVENT SUMMARY ==========");

console.log(`Total Registered Guests: ${guests.length}`);
console.log(`Accepted Invitations: ${accepted_Guests}`);
console.log(`Total Attendees: ${total_Attendees}`);

console.log("");

console.log(`Total Food Items: ${menu.length}`);
console.log(`Total Food Budget: ₦${totalFoodBudget.toLocaleString("en-NG")}`);

console.log("");

console.log(`Total Event Budget: ₦${eventBudget.toLocaleString("en-NG")}`);
console.log(`Total Expenses: ₦${totalExpenses.toLocaleString("en-NG")}`);
console.log(`Remaining Budget: ₦${remainingBudget.toLocaleString("en-NG")}`);

console.log("");

console.log(`Budget Status: ${budgetStatus}`);

console.log("");

console.log(`Venue Capacity: ${venue_Capacity}`);
console.log(`Available Seats: ${availableSeats}`);

console.log("===========================================");