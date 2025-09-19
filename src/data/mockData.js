export const stats = [
  { id: 'sales', label: 'Total Sales', value: '$28,410', delta: '+6.4%', trend: [10,20,32,28,40,55] },
  { id: 'orders', label: 'Orders', value: '1,219', delta: '+1.1%', trend: [5,8,12,10,18,22] },
  { id: 'customers', label: 'Customers', value: '3,781', delta: '+11.0%', trend: [2,5,9,12,15,22] },
  { id: 'revenue', label: 'Revenue', value: '$9,430', delta: '-2.1%', trend: [30,28,26,25,23,22] }
];

export const products = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', qty: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', qty: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', qty: 64, amount: '$2,559.36' }
];

export const orders = Array.from({length: 28}).map((_,i)=>({
  id: '#ORD' + (1200 + i),
  customer: ['Natali Craig','Kate Morrison','Drew Cano','Orlando Diggs','Andi Lane','Maya Patel','Rahul Singh','Asha Rao'][i%8],
  item: ['Landing Page','CRM Admin','Website Redesign','Admin Dashboard','Mobile App'][i%5],
  date: ['Today','1 day ago','2 days ago','3 days ago','4 days ago'][i%5],
  status: ['Pending','Completed','In Progress','Cancelled'][i%4]
}));

export const miniTrend = [5,8,12,10,18,22];
