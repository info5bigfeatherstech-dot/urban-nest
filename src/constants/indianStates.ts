export interface IndianStateItem {
  name: string;
  slug: string;
  type: "State" | "UT";
  hubCity: string;
  propertyCount: number;
}

export const INDIAN_STATES: IndianStateItem[] = [
  { name: "Andhra Pradesh", slug: "andhra-pradesh", type: "State", hubCity: "Visakhapatnam", propertyCount: 8400 },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh", type: "State", hubCity: "Itanagar", propertyCount: 1200 },
  { name: "Assam", slug: "assam", type: "State", hubCity: "Guwahati", propertyCount: 5600 },
  { name: "Bihar", slug: "bihar", type: "State", hubCity: "Patna", propertyCount: 6800 },
  { name: "Chhattisgarh", slug: "chhattisgarh", type: "State", hubCity: "Raipur", propertyCount: 4900 },
  { name: "Delhi NCR", slug: "delhi-ncr", type: "UT", hubCity: "New Delhi", propertyCount: 24500 },
  { name: "Goa", slug: "goa", type: "State", hubCity: "Panaji", propertyCount: 4300 },
  { name: "Gujarat", slug: "gujarat", type: "State", hubCity: "Ahmedabad", propertyCount: 16200 },
  { name: "Haryana", slug: "haryana", type: "State", hubCity: "Gurugram", propertyCount: 15800 },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", type: "State", hubCity: "Shimla", propertyCount: 2700 },
  { name: "Jharkhand", slug: "jharkhand", type: "State", hubCity: "Ranchi", propertyCount: 4100 },
  { name: "Karnataka", slug: "karnataka", type: "State", hubCity: "Bengaluru", propertyCount: 26400 },
  { name: "Kerala", slug: "kerala", type: "State", hubCity: "Kochi", propertyCount: 9500 },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", type: "State", hubCity: "Indore", propertyCount: 8900 },
  { name: "Maharashtra", slug: "maharashtra", type: "State", hubCity: "Mumbai", propertyCount: 34200 },
  { name: "Manipur", slug: "manipur", type: "State", hubCity: "Imphal", propertyCount: 950 },
  { name: "Meghalaya", slug: "meghalaya", type: "State", hubCity: "Shillong", propertyCount: 1450 },
  { name: "Mizoram", slug: "mizoram", type: "State", hubCity: "Aizawl", propertyCount: 820 },
  { name: "Nagaland", slug: "nagaland", type: "State", hubCity: "Dimapur", propertyCount: 910 },
  { name: "Odisha", slug: "odisha", type: "State", hubCity: "Bhubaneswar", propertyCount: 7300 },
  { name: "Punjab", slug: "punjab", type: "State", hubCity: "Mohali", propertyCount: 10400 },
  { name: "Rajasthan", slug: "rajasthan", type: "State", hubCity: "Jaipur", propertyCount: 12600 },
  { name: "Sikkim", slug: "sikkim", type: "State", hubCity: "Gangtok", propertyCount: 1100 },
  { name: "Tamil Nadu", slug: "tamil-nadu", type: "State", hubCity: "Chennai", propertyCount: 18400 },
  { name: "Telangana", slug: "telangana", type: "State", hubCity: "Hyderabad", propertyCount: 19800 },
  { name: "Tripura", slug: "tripura", type: "State", hubCity: "Agartala", propertyCount: 1050 },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", type: "State", hubCity: "Lucknow", propertyCount: 17500 },
  { name: "Uttarakhand", slug: "uttarakhand", type: "State", hubCity: "Dehradun", propertyCount: 5400 },
  { name: "West Bengal", slug: "west-bengal", type: "State", hubCity: "Kolkata", propertyCount: 13200 },
  { name: "Andaman and Nicobar Islands", slug: "andaman-and-nicobar-islands", type: "UT", hubCity: "Port Blair", propertyCount: 640 },
  { name: "Chandigarh", slug: "chandigarh", type: "UT", hubCity: "Chandigarh", propertyCount: 5200 },
  { name: "Dadra and Nagar Haveli and Daman and Diu", slug: "dadra-and-nagar-haveli-and-daman-and-diu", type: "UT", hubCity: "Daman", propertyCount: 780 },
  { name: "Jammu and Kashmir", slug: "jammu-and-kashmir", type: "UT", hubCity: "Srinagar", propertyCount: 2900 },
  { name: "Ladakh", slug: "ladakh", type: "UT", hubCity: "Leh", propertyCount: 420 },
  { name: "Lakshadweep", slug: "lakshadweep", type: "UT", hubCity: "Kavaratti", propertyCount: 210 },
  { name: "Puducherry", slug: "puducherry", type: "UT", hubCity: "Puducherry", propertyCount: 2350 },
];
